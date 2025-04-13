class PlayerCustomizer {
    constructor(videoElement, options = {}) {
        // Validate the video element
        if (!videoElement || videoElement.tagName !== 'VIDEO') {
            console.error('PlayerCustomizer: Please pass a valid <video> element.');
            return;
        }

        // Default options merged with user-provided options
        this.options = {
            progressBarColor: '#ff4c4c',
            tooltipEnabled: true,
            ...options,
        };

        // Elements
        this.video = videoElement;
        this.container = this.video.parentElement;
        this.progressContainer = this.container.querySelector('.custom-player-progress-container');
        this.progressBar = this.container.querySelector('.custom-player-progress-bar');
        this.bufferedBar = this.container.querySelector('.custom-player-buffered-bar');
        this.scrubberThumb = this.container.querySelector('.custom-player-scrubber-thumb');
        this.tooltip = this.container.querySelector('.custom-player-tooltip');
        this.tooltipTime = this.container.querySelector('.custom-player-tooltip-time');
        this.playPauseButton = this.container.querySelector('.custom-player-play-pause');

        // Validation check
        if (!this.progressContainer || !this.progressBar || !this.scrubberThumb) {
            console.error('PlayerCustomizer: Required elements missing in container.');
            return;
        }

        // Set initial progress bar color
        this.progressBar.style.backgroundColor = this.options.progressBarColor;

        // Drag state
        this.isDragging = false;

        // Bind context for handlers
        this.init();
    }

    init() {
        // === Event bindings ===
        this.video.addEventListener('timeupdate', this.handleTimeUpdate);
        this.video.addEventListener('progress', this.updateBuffered);
        this.video.addEventListener('keydown', this.handleKeyDown);
        this.video.addEventListener('error', this.handleError);
        this.video.addEventListener('waiting', () => this.container.classList.add('buffering'));
        this.video.addEventListener('playing', () => this.container.classList.remove('buffering'));
        this.video.addEventListener('play', this.updatePlayPauseButton);
        this.video.addEventListener('pause', this.updatePlayPauseButton);

        // Mouse & Touch events
        this.scrubberThumb.addEventListener('mousedown', this.handleMouseDown);
        this.scrubberThumb.addEventListener('touchstart', this.handleMouseDown, { passive: false });
        this.progressContainer.addEventListener('click', this.handleProgressClick);

        // Play/Pause button
        if (this.playPauseButton) {
            this.playPauseButton.addEventListener('click', this.handlePlayPause);
            this.updatePlayPauseButton();
        }

        // Disable text selection during dragging
        this.progressContainer.style.userSelect = 'none';
    }

    // === EVENT HANDLERS ===

    handleTimeUpdate = () => {
        if (this.isDragging) return;

        const percentage = (this.video.currentTime / this.video.duration) * 100 || 0;
        this.progressBar.style.width = `${percentage}%`;
        this.scrubberThumb.style.left = `${percentage}%`;

        if (this.options.tooltipEnabled) {
            this.tooltip.style.left = `${percentage}%`;
            this.tooltipTime.textContent = this.formatTime(this.video.currentTime);
        }
    }

    handleMouseDown = (e) => {
        e.preventDefault();
        this.isDragging = true;

        const doc = this.video.ownerDocument;

        doc.addEventListener('mousemove', this.handleMouseMove);
        doc.addEventListener('mouseup', this.handleMouseUp);
        doc.addEventListener('touchmove', this.handleMouseMove, { passive: false });
        doc.addEventListener('touchend', this.handleMouseUp);
    }

    handleMouseMove = (e) => {
        if (!this.isDragging) return;

        const rect = this.progressContainer.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        let offsetX = clientX - rect.left;
        offsetX = Math.max(0, Math.min(offsetX, rect.width));

        const percentage = offsetX / rect.width;
        this.lastSeekTime = percentage * this.video.duration;

        // Update visuals
        this.progressBar.style.width = `${percentage * 100}%`;
        this.scrubberThumb.style.left = `${percentage * 100}%`;

        if (this.options.tooltipEnabled) {
            const tooltipWidth = this.tooltip.offsetWidth || 0;
            const maxLeft = rect.width - tooltipWidth / 2;
            const minLeft = tooltipWidth / 2;
            const left = Math.max(minLeft, Math.min(offsetX, maxLeft));

            this.tooltip.style.left = `${left}px`;
            this.tooltipTime.textContent = this.formatTime(this.lastSeekTime);
            this.tooltip.classList.add('visible');
        }
    }

    handleMouseUp = () => {
        if (!this.isDragging) return;
        this.isDragging = false;

        const doc = this.video.ownerDocument;

        doc.removeEventListener('mousemove', this.handleMouseMove);
        doc.removeEventListener('mouseup', this.handleMouseUp);
        doc.removeEventListener('touchmove', this.handleMouseMove);
        doc.removeEventListener('touchend', this.handleMouseUp);

        if (typeof this.lastSeekTime === 'number') {
            this.video.currentTime = this.lastSeekTime;
            this.lastSeekTime = undefined;
        }

        if (this.options.tooltipEnabled) {
            this.tooltip.classList.remove('visible');
        }
    }

    handleProgressClick = (e) => {
        const rect = this.progressContainer.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        let offsetX = clientX - rect.left;
        offsetX = Math.max(0, Math.min(offsetX, rect.width));

        const percentage = offsetX / rect.width;
        const newTime = percentage * this.video.duration;

        this.video.currentTime = newTime;
        this.progressBar.style.width = `${percentage * 100}%`;
        this.scrubberThumb.style.left = `${percentage * 100}%`;
    }

    handlePlayPause = () => {
        if (this.video.paused) {
            this.video.play();
        } else {
            this.video.pause();
        }
    }

    updatePlayPauseButton = () => {
        if (!this.playPauseButton) return;

        const playIcon = this.playPauseButton.querySelector('.custom-player-play-icon');
        const pauseIcon = this.playPauseButton.querySelector('.custom-player-pause-icon');

        if (this.video.paused) {
            playIcon?.classList.add('active');
            pauseIcon?.classList.remove('active');
        } else {
            playIcon?.classList.remove('active');
            pauseIcon?.classList.add('active');
        }
    }

    handleKeyDown = (e) => {
        switch (e.key) {
            case 'ArrowLeft':
                this.video.currentTime = Math.max(0, this.video.currentTime - 5);
                break;
            case 'ArrowRight':
                this.video.currentTime = Math.min(this.video.duration, this.video.currentTime + 5);
                break;
            case ' ':
            case 'Spacebar': // For older browsers
                e.preventDefault(); // Prevent page scrolling
                this.handlePlayPause();
                break;
        }
    }

    handleError = () => {
        console.error('PlayerCustomizer: Video failed to load.');
    }

    updateBuffered = () => {
        if (this.video.buffered.length > 0) {
            const bufferedEnd = this.video.buffered.end(this.video.buffered.length - 1);
            const percentage = (bufferedEnd / this.video.duration) * 100 || 0;
            this.bufferedBar.style.width = `${percentage}%`;
        }
    }

    // === UTILITY ===

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    destroy() {
        // Remove all event listeners
        this.video.removeEventListener('timeupdate', this.handleTimeUpdate);
        this.video.removeEventListener('progress', this.updateBuffered);
        this.video.removeEventListener('keydown', this.handleKeyDown);
        this.video.removeEventListener('error', this.handleError);
        this.video.removeEventListener('waiting', () => this.container.classList.add('buffering'));
        this.video.removeEventListener('playing', () => this.container.classList.remove('buffering'));
        this.video.removeEventListener('play', this.updatePlayPauseButton);
        this.video.removeEventListener('pause', this.updatePlayPauseButton);

        this.scrubberThumb.removeEventListener('mousedown', this.handleMouseDown);
        this.scrubberThumb.removeEventListener('touchstart', this.handleMouseDown);
        this.progressContainer.removeEventListener('click', this.handleProgressClick);

        if (this.playPauseButton) {
            this.playPauseButton.removeEventListener('click', this.handlePlayPause);
        }
    }
}

export default PlayerCustomizer;
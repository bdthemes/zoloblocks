class CountdownTimer {
    constructor(targetDate, classSelector, options = {}) {
        this.targetDate = new Date(targetDate).getTime();
        this.classSelector = classSelector;
        this.options = {
            showLabels: true,
            showYears: true,
            showMonths: true,
            showWeeks: true,
            showDays: true,
            showHours: true,
            showMinutes: true,
            showSeconds: true,
            yearsLabel: 'Years',
            monthsLabel: 'Months',
            weeksLabel: 'Weeks',
            daysLabel: 'Days',
            hoursLabel: 'Hours',
            minutesLabel: 'Minutes',
            secondsLabel: 'Seconds',
            ...options,
        };

        this.intervalId = null;

        this.onEnd = options.onEnd || null;

        this.updateCountdown();
        this.intervalId = setInterval(() => this.updateCountdown(), 1000);
    }

    updateCountdown() {
        const currentDate = new Date().getTime();
        const timeDifference = this.targetDate - currentDate;

        if (timeDifference <= 0) {
            clearInterval(this.intervalId);
            this.renderCountdown('00', '00', '00', '00', '00', '00', '00');

            // onEnd method
            if (this.onEnd && typeof this.onEnd === 'function') {
                this.onEnd();
            }
        } else {
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const weeks = Math.floor(days / 7);
            const months = Math.floor(days / 30);
            const years = Math.floor(days / 365);

            const formattedSeconds = String(seconds).padStart(2, '0');
            const formattedMinutes = String(minutes).padStart(2, '0');
            const formattedHours = String(hours).padStart(2, '0');
            const formattedDays = String(days).padStart(2, '0');
            const formattedWeeks = String(weeks).padStart(2, '0');
            const formattedMonths = String(months).padStart(2, '0');
            const formattedYears = String(years).padStart(2, '0');

            this.renderCountdown(
                formattedYears,
                formattedMonths,
                formattedWeeks,
                formattedDays,
                formattedHours,
                formattedMinutes,
                formattedSeconds
            );
        }
    }

    renderCountdown(years, months, weeks, days, hours, minutes, seconds) {
        const counterElementClasses = this.classSelector?.classList;
        const countdownElements = document.querySelectorAll(`.${counterElementClasses[0]}`);

        countdownElements.forEach((element) => {
            element.innerHTML = '';

            if (this.options.showYears) {
                this.createCountdownItem(element, this.options.yearsLabel, years);
            }
            if (this.options.showMonths) {
                this.createCountdownItem(element, this.options.monthsLabel, months);
            }
            if (this.options.showWeeks) {
                this.createCountdownItem(element, this.options.weeksLabel, weeks);
            }
            if (this.options.showDays) {
                this.createCountdownItem(element, this.options.daysLabel, days);
            }
            if (this.options.showHours) {
                this.createCountdownItem(element, this.options.hoursLabel, hours);
            }
            if (this.options.showMinutes) {
                this.createCountdownItem(element, this.options.minutesLabel, minutes);
            }
            if (this.options.showSeconds) {
                this.createCountdownItem(element, this.options.secondsLabel, seconds);
            }
        });
    }

    createCountdownItem(parentElement, label, value) {
        const itemElement = document.createElement('div');
        itemElement.className = 'zolo-countdown-item';

        const faceElement = document.createElement('div');
        faceElement.className = 'zolo-countdown-face';
        faceElement.textContent = value;

        const labelElement = document.createElement('div');
        labelElement.className = 'zolo-countdown-label';
        labelElement.textContent = label;

        itemElement.appendChild(faceElement);

        if (this.options.showLabels) {
            itemElement.appendChild(labelElement);
        }

        parentElement.appendChild(itemElement);
    }
}

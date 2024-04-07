function zoloCountdownTimer(
    date,
    selector,
    options = {
        showYears: false,
        showMonths: false,
        showWeeks: false,
        showDays: false,
        showHours: true,
        showMinutes: true,
        showSeconds: true,
        onEnd: null,
    }
) {
    const countDownDate = new Date(date).getTime();

    // markup selcotrs
    const items = selector.querySelectorAll('.zolo-countdown-item');

    let yearItem, monthItem, weekItem, dayItem, hourItem, minuteItem, secondItem;

    items.forEach((item) => {
        if (item.querySelector('.zolo-year')) {
            yearItem = item.querySelector('.zolo-year');
        }

        if (item.querySelector('.zolo-month')) {
            monthItem = item.querySelector('.zolo-month');
        }

        if (item.querySelector('.zolo-week')) {
            weekItem = item.querySelector('.zolo-week');
        }

        if (item.querySelector('.zolo-day')) {
            dayItem = item.querySelector('.zolo-day');
        }

        if (item.querySelector('.zolo-hour')) {
            hourItem = item.querySelector('.zolo-hour');
        }

        if (item.querySelector('.zolo-minute')) {
            minuteItem = item.querySelector('.zolo-minute');
        }

        if (item.querySelector('.zolo-second')) {
            secondItem = item.querySelector('.zolo-second');
        }
    });

    // Update the count down every 1 second
    const x = setInterval(() => {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for year, month, weeks, days, hours, minutes and seconds (convert into padStart start 2 digits format )
        let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
        let months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        let weeks = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
        let days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Handle conversion of higher units to lower units when their corresponding items are hidden
        if (!options.showYears) {
            months += years * 12;
        }

        if (!options.showMonths) {
            weeks += months * 4;
        }

        if (!options.showWeeks) {
            days += weeks * 7;
        }

        if (!options.showDays) {
            hours += days * 24;
        }

        if (!options.showHours) {
            minutes += hours * 60;
        }

        if (!options.showMinutes) {
            seconds += minutes * 60;
        }

        // format padStart 2 digits
        let formattedYears = String(months > 12 ? 0 : months).padStart(2, '0');
        let formattedMonths = String(weeks > 4 ? 0 : weeks).padStart(2, '0');
        let formattedWeeks = String(days > 7 ? 0 : days).padStart(2, '0');
        let formattedDays = String(days).padStart(2, '0');
        let formattedHours = String(hours).padStart(2, '0');
        let formattedMinutes = String(minutes).padStart(2, '0');
        let formattedSeconds = String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(x);
            formattedYears = '00';
            formattedMonths = '00';
            formattedWeeks = '00';
            formattedDays = '00';
            formattedHours = '00';
            formattedMinutes = '00';
            formattedSeconds = '00';

            // onEnd method
            if (options.onEnd && typeof options.onEnd === 'function') {
                options.onEnd();
            }
        }

        // yearItem
        if (options?.showYears) {
            yearItem.innerHTML = formattedYears;
        }

        // monthItem
        if (options?.showMonths) {
            monthItem.innerHTML = formattedMonths;
        }

        // weekItem
        if (options?.showWeeks) {
            weekItem.innerHTML = formattedWeeks;
        }

        // dayItem
        if (options?.showDays) {
            dayItem.innerHTML = formattedDays;
        }

        // hourItem
        if (options?.showHours) {
            hourItem.innerHTML = formattedHours;
        }

        // minuteItem
        if (options?.showMinutes) {
            minuteItem.innerHTML = formattedMinutes;
        }

        // secondItem
        if (options?.showSeconds) {
            secondItem.innerHTML = formattedSeconds;
        }
    }, 1000);
}

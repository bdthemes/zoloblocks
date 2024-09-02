import { useEffect, useState } from '@wordpress/element';

const CountdownTimer = ({
    targetDate = new Date(),
    showLabels = true,
    labels = {
        years: 'Years',
        months: 'Months',
        weeks: 'Weeks',
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
    },
    itemsVisibility = {
        years: false,
        months: false,
        weeks: false,
        days: true,
        hours: true,
        minutes: true,
        seconds: true,
    },
    onEnd = null,
}) => {
    // Helper function to pad the string with zeros
    const padString = (value) => value.toString().padStart(2, '0');

    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {
            years: 0,
            months: 0,
            weeks: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                years: Math.floor(difference / (1000 * 60 * 60 * 24 * 365)),
                months: Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)),
                weeks: Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7)),
                days: Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };

            // Convert higher times to lower times if the corresponding show prop is false
            if (!itemsVisibility?.years && timeLeft.years) {
                timeLeft.months += timeLeft.years * 12;
                timeLeft.years = 0;
            }

            if (!itemsVisibility?.months && timeLeft.months) {
                timeLeft.weeks += timeLeft.months * 4; // 4 weeks in a month
                timeLeft.months = 0;
            }

            if (!itemsVisibility?.weeks && timeLeft.weeks) {
                timeLeft.days += timeLeft.weeks * 7;
                timeLeft.weeks = 0;
            }

            if (!itemsVisibility?.days && timeLeft.days) {
                timeLeft.hours += timeLeft.days * 24;
                timeLeft.days = 0;
            }

            if (!itemsVisibility?.hours && timeLeft.hours) {
                timeLeft.minutes += timeLeft.hours * 60;
                timeLeft.hours = 0;
            }

            if (!itemsVisibility?.minutes && timeLeft.minutes) {
                timeLeft.seconds += timeLeft.minutes * 60;
                timeLeft.minutes = 0;
            }
        } else {
        }

        // Format the time values using padString
        timeLeft.years = padString(timeLeft.years);
        timeLeft.months = padString(timeLeft.months);
        timeLeft.weeks = padString(timeLeft.weeks);
        timeLeft.days = padString(timeLeft.days);
        timeLeft.hours = padString(timeLeft.hours);
        timeLeft.minutes = padString(timeLeft.minutes);
        timeLeft.seconds = padString(timeLeft.seconds);

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const renderLabel = (label, value) => {
        return (
            <div className="zolo-countdown-item">
                <div className="zolo-countdown-face">{value}</div>
                {showLabels && <div className="zolo-countdown-label">{label}</div>}
            </div>
        );
    };

    return (
        <>
            {itemsVisibility?.years && renderLabel(labels?.years, timeLeft.years)}
            {itemsVisibility?.months && renderLabel(labels?.months, timeLeft.months)}
            {itemsVisibility?.weeks && renderLabel(labels?.weeks, timeLeft.weeks)}
            {itemsVisibility?.days && renderLabel(labels?.days, timeLeft.days)}
            {itemsVisibility?.hours && renderLabel(labels?.hours, timeLeft.hours)}
            {itemsVisibility?.minutes && renderLabel(labels?.minutes, timeLeft.minutes)}
            {itemsVisibility?.seconds && renderLabel(labels?.seconds, timeLeft.seconds)}
        </>
    );
};
export default CountdownTimer;

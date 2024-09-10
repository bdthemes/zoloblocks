import {useEffect, useRef} from "@wordpress/element";

const Counter = ({endValue, duration = 3000}) => {
  const counterRef = useRef(null);

  //format number
  const formatNumber = (value) => {
    // Remove any non-numeric characters (except for the decimal point) and convert the value to a floating-point number
    const numericValue = parseFloat(value.toString().replace(/[^0-9.]/g, ""));

    // If the value is less than or equal to 999, return the value rounded up to the nearest whole number
    if (numericValue <= 999) return Math.ceil(numericValue);

    // Define an array of units to represent large numbers with their corresponding suffixes
    const units = [
      { value: 1e3, suffix: "K" },    // Thousands
      { value: 1e6, suffix: "M" },    // Millions
      { value: 1e9, suffix: "B" },    // Billions
      { value: 1e12, suffix: "T" },   // Trillions
      { value: 1e15, suffix: "P" },   // Quadrillions
      { value: 1e18, suffix: "E" },   // Quintillions
    ];

    // Find the appropriate unit based on the value
    // The unit is selected if the value is greater than or equal to the unit's value,
    // and either it's the last unit or the value is less than the next unit's value
    const matchingUnit = units.find((unit, index) =>
      numericValue >= unit.value &&
      (index === units.length - 1 || numericValue < units[index + 1].value)
    );

    // Divide the value by the matched unit's value and format it to 2 decimal places
    // Remove any unnecessary trailing zeros after the decimal point
    const formattedNumber = (numericValue / matchingUnit?.value)
      .toFixed(2)
      .replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1");

    // Return the formatted number with the appropriate suffix
    return formattedNumber + matchingUnit?.suffix;
  }


  //animation counter value
  const animateCounter = (element, startValue, endValue, duration) => {
    let startTime = null;

    // Function to update the counter at each animation frame
    const step = (currentTime) => {
      // Set the start time on the first call
      if (!startTime) startTime = currentTime;

      // Calculate the progress as a value between 0 and 1
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Calculate the current value based on the progress
      const currentValue = Math.ceil(progress * (endValue - startValue) + startValue);

      // Update the element's text content with the formatted current value
      element.textContent = formatNumber(currentValue);

      // Continue the animation if progress is not yet complete
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    // Start the animation
    window.requestAnimationFrame(step);
  };


  useEffect(() => {
    if (counterRef.current) {
      animateCounter(counterRef.current, 0, endValue, duration);
    }
  }, [endValue, duration]);

  return (
    <div className="zolo-count">
      <span ref={counterRef} className="counter-value">
        {endValue}
      </span>
    </div>
  );
};

export default Counter;

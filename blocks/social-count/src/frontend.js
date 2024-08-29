document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".wp-block-zolo-social-count .counter-value");

  counters.forEach(counterElement => {
    const endValue = parseInt(counterElement.textContent.replace(/[^0-9.]/g, ""), 10);
    animateCounter(counterElement, 0, endValue, 3000);
  });

  //animate number
  function animateCounter(element, startValue, endValue, duration) {
    let startTime = null;

    function step(currentTime) {
      if (!startTime) startTime = currentTime;

      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentValue = Math.ceil(progress * (endValue - startValue) + startValue);

      element.textContent = formatNumber(currentValue);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

//format number
  function formatNumber(value) {
    value = parseFloat(value.toString().replace(/[^0-9.]/g, ""));
    if (value <= 999) return Math.ceil(value);

    const units = [
      {value: 1e3, suffix: "K"},
      {value: 1e6, suffix: "M"},
      {value: 1e9, suffix: "B"},
      {value: 1e12, suffix: "T"},
      {value: 1e15, suffix: "P"},
      {value: 1e18, suffix: "E"},
    ];

    const unit = units.find((unit, index) => value >= unit.value && (index === units.length - 1 || value < units[index + 1].value));

    return (value / unit.value)
      .toFixed(2)
      .replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + unit.suffix;
  }
});

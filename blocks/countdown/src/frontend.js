import CountdownTimer from "./counter";
const { render } = wp.element;

document.addEventListener("DOMContentLoaded", () => {
  const zoloCounters = document.querySelectorAll(".wp-block-zolo-countdown");
  if (zoloCounters.length > 0) {
    zoloCounters.forEach((counter) => {
      const zoloCounter = counter.querySelector(".zolo-countdown-wrap");
      let CountDate = zoloCounter.dataset.countdate;
      const itemsVisibility = JSON.parse(zoloCounter.dataset.itemsvisibility);
      const itemsLabels = JSON.parse(zoloCounter.dataset.itemslabels);
      const toggleLabels = zoloCounter.dataset.togglelabels;

      const targetDate = new Date(CountDate);

      render(
        <CountdownTimer
          targetDate={targetDate}
          itemsVisibility={itemsVisibility}
          showLabels={toggleLabels}
          labels={itemsLabels}
        />,
        zoloCounter,
      );
    });
  }
});

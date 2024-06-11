import {render,useRef,useEffect} from '@wordpress/element'
import CountUp from 'react-countup';
// render on page load
document.addEventListener('DOMContentLoaded', () => {
  const progress = document.querySelectorAll('.wp-block-zolo-progress-pie');

  if (progress.length>0) {

    progress.forEach((item) => {
      const progressValue =Number(item.dataset.progressvalue);
      const progressDuration  =Number(item.dataset.progressduration);
      const circleColor =item.dataset.circlecolor;
      const progressFillColor =item.dataset.progressfillcolor;
      const toggleLabel = item.dataset.togglelabel =='true' ? true :'false';
      const progressTitle =item.dataset.progresstitle;
  
    const CountupComponent=({      
      progressValue,
      progressDuration,
      circleColor,
      progressFillColor,
      toggleLabel,
      progressTitle,

      })=>{
        const progress = useRef(null)
        console.log(typeof progressValue)

        useEffect(()=>{
            const progressPie = progress.current;
            const progressVal   = progressValue;
    
            startAnim();
            function startAnim() {
                setTimeout(function() {
                    //progressPie.style.transition = "stroke-dasharray 0.8s ease-in-out, stroke-dashoffset 0.8s ease-in-out";
                    progressPie.style.strokeDasharray = progressVal + " " + (100 - progressVal);
                }, 20);
            }
            return ()=>clearTimeout();
        },[progressValue])
       
      return (  
        <CountUp start={0} end={progressValue} delay={0} duration={progressDuration ? progressDuration : 3} suffix="%">
            {({ countUpRef }) => (
              <>
                    <svg className="progress-pie"  height="100%" viewBox="0 0 42 42">
                  {/*  optional background if need  */}
                  <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill={circleColor ? circleColor : "#f5f5f5"}></circle> 
                  <circle className="progress-pie-fill" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke={progressFillColor ? progressFillColor :'#e5e5e5'}  stroke-dasharray="100 0" stroke-dashoffset="25"></circle>
                  <circle id="progress1" className="progress-pie-progress" ref={progress} cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="url(#gradient)"  stroke-dasharray="0 100" stroke-dashoffset="25"></circle>
                  
                  {/* optional for gradient color  */}
                  <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="#00bc9b" />
                      <stop offset="100%" stop-color="#5eaefd" />
                      </linearGradient>
                  </defs>
                  
                  {/* Progress number and text  */}
                      <g className="progress-pie-text">
                        <text x="50%" y="50%" className="progress-pie-number" ref={countUpRef}>{progressValue &&  progressValue}</text>
                        <text x="50%" y="50%" className="progress-pie-label">{toggleLabel && progressTitle}</text> 
                      </g>
                  </svg> 
              </>
            )}
          </CountUp>  
  
        )
    }

    render(<CountupComponent 
      progressValue={progressValue}
      circleColor={circleColor}
      progressFillColor={progressFillColor}
      toggleLabel={toggleLabel}
      progressTitle={progressTitle}
      progressDuration ={progressDuration }
      />,item)
    });
  }
});



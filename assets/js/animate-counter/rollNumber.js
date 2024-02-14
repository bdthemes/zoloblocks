(function () {
    function zoloNumberRolling(element, options) {
        let self = element;
        if (options.number === undefined) return;
        let number = options.number,
            speed = options.speed || 500,
            interval = options.interval || 100,
            fontStyle = options.fontStyle || {},
            rooms = options.rooms || String(number).split('').length,
            fillZero = !!options.rooms;
            transition = options.transition || 'ease';
            delay = options.delay || 0;
            self.style.cssText = `
                display: flex;
                justify-content: center;
                align-items: center;
                `;
            self.textContent = number;

       let height = self.clientHeight;
       let space = options.space || (height / 1.5);
       self.innerHTML = '';

       let numberHtml = '';
       for (let i = 0; i < 10; i++) {
           numberHtml += `<span style="display: block; width: ${space}px; height: ${height}px; line-height: ${height}px; text-align: center; ${Object.keys(
               fontStyle
           )
               .map((key) => `${key}: inherit;`)
               .join(' ')}">${i}</span>`;
       }
       numberHtml = `<div class="_number" style="width: ${space}px; height: ${height}px; line-height: ${height}px; display: flex; justify-content: center; align-items: center;"><div style="position: relative; width: ${space}px; height: ${height}px; overflow: hidden;"><div style="position: absolute; width: 100%;">${numberHtml}</div></div></div>`;

       let numArr = String(number).split('');
       if (fillZero) {
           if (String(number).indexOf('.') !== -1) rooms++;
           for (let i = numArr.length; i < rooms; i++) {
               numArr.unshift(0);
           }
           number = numArr.join('');
       }

       if (options.symbol) {
           let appendHtml = [];
           let symbolHtml = `<span style="display: block; width: ${space}px; height: ${height}px; line-height: ${height}px; text-align: center; ${Object.keys(
               fontStyle
           )
               .map((key) => `${key}: inherit;`)
               .join(' ')}">${options.symbol}</span>`;
           let dotHtml = `<span style="display: block; width: ${space}px; height: ${height}px; line-height: ${height}px; text-align: center; ${Object.keys(
               fontStyle
           )
               .map((key) => `${key}: inherit;`)
               .join(' ')}">.</span>`;
           symbolHtml = `<div class="_number" style="width: ${space}px; height: ${height}px; line-height: ${height}px; display: flex; justify-content: center; align-items: center;"><div style="position: relative; width: ${space}px; height: ${height}px; overflow: hidden;"><div style="position: absolute; width: 100%;">${symbolHtml}</div></div></div>`;
           dotHtml = `<div class="_number" style="width: ${space}px; height: ${height}px; line-height: ${height}px; display: flex; justify-content: center; align-items: center;"><div style="position: relative; width: ${space}px; height: ${height}px; overflow: hidden;"><div style="position: absolute; width: 100%;">${dotHtml}</div></div></div>`;

           let numarr = String(number).split('.');
           const re = /(-?\d+)(\d{3})/;
           while (re.test(numarr[0])) {
               numarr[0] = numarr[0].replace(re, '$1,$2');
           }
           numArr = (numarr.length > 1 ? numarr[0] + '.' + numarr[1] : numarr[0]).split('');
           for (let i = 0; i < numArr.length; i++) {
               if (isNaN(Number(numArr[i]))) {
                   if (numArr[i] === '.') {
                       appendHtml.push(dotHtml);
                   } else {
                       appendHtml.push(symbolHtml);
                   }
               } else {
                   appendHtml.push(numberHtml);
               }
           }
           self.innerHTML = appendHtml.join('');
           Object.keys(fontStyle).forEach((key) => {
               self.style[key] = fontStyle[key];
           });
       } else {
           self.innerHTML = numberHtml.repeat(rooms);
           if (String(number).indexOf('.') !== -1) {
               self.querySelectorAll('._number')[String(number).indexOf('.')].querySelector('span').innerHTML = '.';
           }
       }

       let domArr = self.querySelectorAll('._number');

        domArr.forEach(function (dom, i) {
            setTimeout(
                function () {
                    var n = numArr[i];
                    var child = dom.children[0].children[0];
                    var currentTranslateY = parseInt(child.style.transform.split(',')[1]) || 0;
                    var newTranslateY = -height * n + 'px';
                    animate(child, currentTranslateY, parseInt(newTranslateY), speed);
                },
                interval * (domArr.length - i)
            );
        });

        function animate(element, from, to, duration) {
            var start = performance.now();
            requestAnimationFrame(function animate(time) {
                var timeFraction = (time - start) / duration;
                if (timeFraction > 1) timeFraction = 1;

                var progress = timeFraction;
                element.style.cssText = `
          transform: translateY(${from + (to - from) * progress}px);
          transition-timing-function: ${transition};
          transition-duration: ${duration}ms;
          transition-property: transform;
          transition-delay: ${delay}ms;`;

                if (timeFraction < 1) {
                    requestAnimationFrame(animate);
                }
            });
        }
    }
    window.zoloNumberRolling = zoloNumberRolling;
})();

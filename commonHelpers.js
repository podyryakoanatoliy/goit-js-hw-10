import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s,f as u}from"./assets/vendor-77e16229.js";const o=document.querySelector("#datetime-picker"),e=document.querySelector("[data-start]"),m=document.querySelector("[data-days]"),f=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]");let r,n;e.disabled=!0;e.style.backgroundColor="grey";e.style.cursor="not-allowed";const a={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){r=t[0].getTime(),r<=a.defaultDate.getTime()?(s.error({title:"Error",message:"Please choose a date in the future",color:"#ef4040",messageColor:"#fff",titleColor:"#fff",iconColor:"#fff",position:"topRight"}),e.disabled=!0,e.style.backgroundColor="grey",e.style.cursor="not-allowed"):(e.disabled=!1,e.style.backgroundColor="blue",e.style.cursor="pointer")}};e.addEventListener("click",h);function h(){e.disabled=!0,e.style.backgroundColor="grey",e.style.cursor="not-allowed",o.disabled=!0,o.style.cursor="not-allowed",n=setInterval(()=>{const t=r-Date.now();if(t<=0){clearInterval(n),s.success({title:"OK",message:"✅ Countdown finished!",position:"topRight"}),o.disabled=!1,o.style.cursor="pointer";return}p(t)},1e3)}function p(t){const l=String(Math.floor(t/864e5)),i=String(Math.floor(t%864e5/36e5)),c=String(Math.floor(t%864e5%36e5/6e4)),d=String(Math.floor(t%864e5%36e5%6e4/1e3));m.innerHTML=l.padStart(2,"0"),f.innerHTML=i.padStart(2,"0"),y.innerHTML=c.padStart(2,"0"),g.innerHTML=d.padStart(2,"0")}u("#datetime-picker",a);
//# sourceMappingURL=commonHelpers.js.map

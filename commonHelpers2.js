import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i}from"./assets/vendor-77e16229.js";const r=document.querySelector(".form");r.addEventListener("submit",n);i.info({title:"HELLO",message:"Welcome!",position:"topCenter",color:"#09f",titleColor:"#fff",messageColor:"#fff"});function n(e){e.preventDefault();const t=document.querySelector('input[name="delay"]').value,o=document.querySelector('input[name="state"]:checked').value;m(t,o).then(()=>{i.success({title:"OK",message:`✅ Fulfilled promise in ${t}ms`,position:"topRight"})}).catch(()=>{i.error({title:"Error",message:`❌ Rejected promise in ${t}ms`,position:"topRight"})})}function m(e,t){return new Promise((o,s)=>{setTimeout(()=>{t==="fulfilled"?o(`✅ Fulfilled promise in ${e}ms`):s(`❌ Rejected promise in ${e}ms`)},e)})}
//# sourceMappingURL=commonHelpers2.js.map

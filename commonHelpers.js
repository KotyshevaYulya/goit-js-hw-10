import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as h}from"./assets/vendor-77e16229.js";let s;const i=document.querySelector("#datetime-picker"),n=document.querySelectorAll(".value"),p=Date.now(),o=document.querySelector("[data-start]");o.setAttribute("disabled","");const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=t[0],console.log(t[0]),s<p?h.error({color:"red",position:"topRight",message:"Please choose a date in the future"}):o.removeAttribute("disabled")}};m(i,f);o.addEventListener("click",()=>{o.setAttribute("disabled",""),i.setAttribute("disabled","");const t=setInterval(()=>{const a=Date.now(),r=s.getTime()-a,e=S(r);n[0].textContent=e.days.toString().padStart(2,"0"),n[1].textContent=e.hours.toString().padStart(2,"0"),n[2].textContent=e.minutes.toString().padStart(2,"0"),n[3].textContent=e.seconds.toString().padStart(2,"0"),r<1e3&&(o.removeAttribute("disabled","true"),clearInterval(t))},1e3)});function S(t){const c=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:d,minutes:u,seconds:l}}
//# sourceMappingURL=commonHelpers.js.map
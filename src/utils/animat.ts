import { throttle } from 'lodash';

//上滑
const slideUp = throttle(function (this:any, duration: number, options:any)  {
    const startTime = performance.now();
    const startHeight = options?.contentHeight || 0;
    const targetTop = options?.contentTop || 0;
    if(!this?.style) return
    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      this.style.height = (startHeight - startHeight * progress) + 'px';
  
      if(options?.contentTop){
          this.style.paddingTop = (targetTop - targetTop * progress) + 'px';
      }
  
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
  
    requestAnimationFrame(animate);
  }, 200);
  
  //下滑
  const slideDown = throttle(function (this:any, duration: number, options:any)  {
    const startTime = performance.now();
    const startHeight = options?.curHeight || 0;
    const targetHeight = options?.contentHeight || 0;
    const targetTop = options?.contentTop || 0;
  
    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      this.style.height = (startHeight + (targetHeight - startHeight) * progress) + 'px';
  
      if(options?.contentTop){
          this.style.paddingTop = (targetTop * progress) + 'px';
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
  
    requestAnimationFrame(animate);
  }, 200);
  
  //左移
  const slideLeft = throttle(function (this:any, duration: number, options:any)  {
   
   const startTime = performance.now();
   const startLeft = options?.contentLeft || 0;
   const targetTop = options?.contentTop || 0;
  
   const animate = (currentTime: number) => {
     const progress = Math.min((currentTime - startTime) / duration, 1);
     this.style.marginLeft = (startLeft  * progress) + 'px';
  
     if (progress < 1) {
       requestAnimationFrame(animate);
     }
   };
  
   requestAnimationFrame(animate);
  }, 200);

  export {
    slideUp,
    slideDown,
    slideLeft
  }
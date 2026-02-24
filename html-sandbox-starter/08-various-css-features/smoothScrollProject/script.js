document.addEventListener('DOMContentLoaded',function () {
    const header=document.querySelector('.header');
    function toggleHeaderTransparency() {
       if(windows.scrollY>0) {
        header.classList.add('transparent');

       }
       else {
        header.classList.remove('transparent');
       }
    }

    windows.addEventListener('scroll',toggleHeaderTransparency);
});

window.onscroll = () => {
    let header = document.querySelector('.navbar');
    
    header.classList.toggle('sticky',window.scrolly > 100);
    };
    

   let darkModeicon = document.querySelector('#darkMode-icon');
   
   darkModeicon.oneclick = () => {
    darkModeicon.classList.toggle('bx-sun');
   };
const renderHome =( () => {
    const home = document.createElement('div');
    home.id = 'home';


    const navbar = document.createElement('div');
    navbar.id='navbar';

    (function navbarBuilder(){
        const tabs = ['Home','About','Menus','Wine','Blog', 'Hours & Location'];
        for (let i = 0; i < tabs.length; i++){
            let newTab = document.createElement('p');
            newTab.textContent = tabs[i];
            newTab.setAttribute('data-attribute',tabs[i]);
            navbar.appendChild(newTab);
        }
    })();


    const logo = document.createElement('img');
    logo.setAttribute('src','logo.png');
    logo.classList.add('logo');
    content.appendChild(logo);
    content.appendChild(navbar);
    content.appendChild(document.createElement('hr'));
    content.appendChild(home);

    const slideShow = document.createElement('div');
    slideShow.id = 'slideShow';

    const slideDeck = ['slide1.jpeg','slide2.jpeg','slide3.jpeg','slide4.jpeg'];

    function createSlide(image){
        const slide = document.createElement('div');
        slide.classList.add('slide');
        const slideImage = document.createElement('img');
        slideImage.setAttribute('src', image);
        slideImage.classList.add('slideImage');
        slide.appendChild(slideImage);
        slideShow.appendChild(slide);
    };

    for (let i = 0; i<slideDeck.length;i++){
        createSlide(slideDeck[i]);
    };
    
    home.appendChild(slideShow);

    let slideIndex = 0;
    
    (function showSlides() {
      var slides = document.getElementsByClassName("slide");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1};
        slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 5000); // Change image every 5 seconds
    })();

})();

export{renderHome};
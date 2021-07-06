const renderAbout =( () => {
    const about = document.createElement('div');
    about.id = 'about';
    //left

    const left = document.createElement('div');
    left.classList.add('aboutLeft');
    about.appendChild(left);

    const aboutBlurb = document.createElement('p');
    aboutBlurb.innerHTML = 'ABOUT</br></br>Navarre is a restaurant in portland oregon that serves 50+ wines by the glass. We have small and large plates, serving food based in Italian, French and Spanish origin. We work with a csa (47th avenue farms) and the specials are based on what is delivered that week along with the whims and interests of the staff.</br></br>Our kitchen is run by the wonderful James Melendez.</br></br>Our front of house is run by the wonderful Francine Starke.'
    left.appendChild(aboutBlurb);

    function createLogo(){
        const logos = ['luce.jpeg','angelFace.png','una.jpeg'];
        logos.forEach(element => {
            const logo = document.createElement('img');
            logo.setAttribute('src', element);
            logo.classList.add('aboutLogo');
            left.appendChild(logo);
        });
    };
    createLogo();

    //right
    const right = document.createElement('div');
    right.classList.add('aboutRight');
    about.append(right);

    const aboutImg = document.createElement('img');
    aboutImg.setAttribute('src', 'ABOUTpic.jpeg');
    right.appendChild(aboutImg);

    content.appendChild(about);
})();

export {renderAbout};

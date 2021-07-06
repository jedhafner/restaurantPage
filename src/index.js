console.log('Is this thing on?');

const content = document.getElementById('content');

import {home} from './home';
import {about} from './about';
import {menus} from './menu';
import {wine} from './wine';
import {hoursAndLocation} from './hoursAndLocation';

const footer = document.createElement('div');
    content.appendChild(footer);
    footer.classList.add('footer');

    footer.appendChild(document.createElement('hr'));

    const leftRightBox = document.createElement('div');
    leftRightBox.classList.add('leftRightBox');
    footer.appendChild(leftRightBox);

    const left = document.createElement('div');
    leftRightBox.appendChild(left);

    const visit = document.createElement('h3');
    visit.textContent = "COME VISIT US."
    left.appendChild(visit);

    const address = document.createElement('p');
    address.id = 'address';
    address.innerHTML = "Navarre</br>10 NE 28th Avenue</br>Portland Oregon 97232</br>503. 232. 3555</br>First come, first served.</br>No reservations.</br>Outdoor seating only.</br>"
    left.appendChild(address);

    const right = document.createElement('div');
    leftRightBox.appendChild(right);

    const mailing = document.createElement('h3');
    mailing.textContent = "MAILING LIST"
    right.id = 'footerRight';
    right.appendChild(mailing);

    const mailField = document.createElement('input');
    mailField.setAttribute('type','text');
    mailField.setAttribute('placeholder','you@email.com');
    right.appendChild(mailField)

    const signUp = document.createElement('input');
    signUp.setAttribute('type','submit')
    signUp.setAttribute('value','Sign Up');
    signUp.id = 'button';
    right.appendChild(signUp);

const navbar = document.getElementById('navbar');

content.addEventListener('click', function(event){
    let clicked = event.target.textContent.toLowerCase();
    console.log("clicked: "+clicked);

    const divs = ['home','about','menus','wine','hoursAndLocation'];

   if (clicked === 'blog'){
    window.open("https://blog.navarreportland.com/");
   } else if (divs.includes(clicked)){
        for (let i=0; i<divs.length; i++){
            let toHide = document.getElementById(divs[i]);
            console.log("toHide: "+toHide);
            toHide.style.display = 'none';
            };
        let toDisplay = document.getElementById(clicked);
        toDisplay.style.display = "flex";
    } else if (clicked === 'hours & location'){
        for (let i=0; i<divs.length; i++){
            let toHide = document.getElementById(divs[i]);
            console.log("toHide: "+toHide);
            toHide.style.display = 'none';
            };
        let toDisplay = document.getElementById('hoursAndLocation');
        toDisplay.style.display = "flex";
    } else {
        return;
    };
});

const renderAbout =( () => {
    const menu = document.createElement('div');
    menu.id = 'menus';

    const menuTitle = document.createElement('p');
    menuTitle.textContent = 'DINNER MENU';
    const notice = document.createElement('p');
    notice.id='notice';
    notice.innerHTML = 'We are no longer serving food to go.</br></br>We are sorry for any inconvenience.</br></br>We are seating outdoors until further notice when we feel prepared to seat indoors.</br></br>At this time we do not take reservations.</br></br>Thank you and hope to see you soon.';

    menu.append(menuTitle);
    menu.append(notice);


    content.appendChild(menu);
})();

export {renderAbout};
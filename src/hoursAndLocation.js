const renderHoursAndLocation =( () => {
    const hoursAndLocation = document.createElement('div');
    hoursAndLocation.id = 'hoursAndLocation';

    const menu = document.createElement('p');
    menu.textContent = 'HOURS AND LOCATION';
    
    //left
    const left = document.createElement('div');
    left.classList.add('hoursLeft');
    hoursAndLocation.appendChild(left);

    const map = document.createElement('img');
    map.setAttribute('src', 'map.jpeg');
    map.classList.add('map');
    left.appendChild(map);

    //right
    const right = document.createElement('div');
    right.classList.add('hoursRight');
    right.innerHTML = '<b>First come, first served. No reservations.</b></br></br><b>Outdoor seating only.</b></br></br>Monday & Tuesday</br></br>4:00 pm - 10 pm  ( Angel Face menu only)</br></br>Wednesday, Thursday & Sunday</br></br>4:00 pm - 10 pm ( Navarre & Angel Face menus combined)</br></br>Saturday & Sunday</br></br>Brunch</br></br>9:30 am - 3 pm ( Navarre menu)</br></br>Friday & Saturday Dinner</br></br>4:00 pm - 11 pm ( Navarre & Angel Face menus combined)';
    hoursAndLocation.appendChild(right);

    content.appendChild(hoursAndLocation);
})();
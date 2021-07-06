const renderWine = ( () => {
    const wine = document.createElement('div');
    wine.id='wine';

    const wineLister = (() => {
        const lists = ['wineList.jpeg','wineList2.jpeg','wineList3.jpeg','wineList4.jpeg','wineList5.jpeg'];
    lists.forEach(element => {
        let wineList = document.createElement('img');
            wineList.setAttribute('src', element);
            wineList.classList.add('wineList');
            wine.appendChild(wineList);
        });
    })();
    content.appendChild(wine);

    const blog = document.createElement('div');
    content.appendChild(blog);

})();

export{renderWine};
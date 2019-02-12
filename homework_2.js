// -------------------------- Home work - 6.2--------------------------
// -------------------------- Попов Евгений --------------------------


let menu = document.getElementsByClassName('menu')[0];

menu.addEventListener('click', function (e) {
    let menuItem = e.target.parentElement.getElementsByClassName('dropdown-menu')[0];
    if (menuItem) {
        let allImets = document.getElementsByClassName('dropdown-menu');
        for (let i = 0; i < allImets.length; i++) {
            if (allImets[i].parentElement.getElementsByTagName('span')[0].textContent !== menuItem.parentElement.getElementsByTagName('span')[0].textContent) {
                allImets[i].classList.add('d-none');
            }
        }
        if (menuItem.classList.contains('d-none')) {
            menuItem.classList.remove('d-none');
        }
        else {
            menuItem.classList.add('d-none');
        }
    }
});
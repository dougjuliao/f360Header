const menuCadastroBtn = document.querySelector('.dropdownCadastro');
const menuUsuarioBtn = document.querySelector('.menu-user .dropdownUser');
const menuBtn = document.querySelector('#menuMobileF360');
const menuSideBar = document.querySelector('#sidenavMenu');

menuBtn.addEventListener('click', (el) => { // Menu sidebar mobile
    menuSideBar.classList.toggle('sidenav-mobile');
});
menuCadastroBtn.addEventListener('click', (el) => { // Menu de cadastro
    document.querySelector('.menu-cadastro .dropdown-box').classList.toggle('show');
});
menuUsuarioBtn.addEventListener('click', (el) => { // Opts Usuário
    console.log(el)
    document.querySelector('.menu-user .dropdown-box').classList.toggle('show');
});
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-box");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});
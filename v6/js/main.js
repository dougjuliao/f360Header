const menuCadastroBtn = document.querySelector('.dropdownCadastro');
const menuUsuarioBtn = document.querySelector('.menu-user .dropdownUser');
const menuBtn = document.querySelector('#menuMobileF360');
const menuSideBar = document.querySelector('#sidenavMenu');
const menuFooterMobile = document.querySelector('.bottom-navigation-mobile');

menuBtn.addEventListener('click', (el) => { // Menu sidebar mobile
    menuSideBar.classList.toggle('sidenav-mobile');
});
menuCadastroBtn.addEventListener('click', (el) => { // Menu de cadastro
    document.querySelector('.menu-cadastro .dropdown-box').classList.toggle('show');
});
menuUsuarioBtn.addEventListener('click', (el) => { // Opts Usuário
    document.querySelector('.menu-user .dropdown-box').classList.toggle('show');
});
menuFooterMobile.addEventListener('click', (el) => { // Opts Usuário
    document.querySelector('.footer-navigation').classList.toggle('active');
});
window.addEventListener('click', (event) => { // evento de clicar fora do dropdown
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
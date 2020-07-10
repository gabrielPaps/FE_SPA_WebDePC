import './index.scss';

// Menú Responsive

const menu = document.getElementById('btn-menu');
const menu_list = document.getElementById('menu-list');

menu.addEventListener('click', () => {
    if (menu_list.className == 'no-active'){
        menu_list.className='active'
    } else {
        menu_list.className= 'no-active'
    };
    
});
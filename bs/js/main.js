;
// attempting to require db-connect.js >> import './db-connect.js';
/* import { send } from './db-connect.js';
send(); */

// to build items
// move bumper stickers to array then to database calls
// loop for bumper generation
// size selector and auto-change of all or some bumpers on page
// fan manipulation of category selected on page
// automobile bumper "try it out"
// categories to database

let contactUsFormHide = () => {
    let contactHideClicks = document.querySelectorAll('.click-hide-contact-us');
    // let contactUsNav = document.getElementById('contact-form-nav');
    let contactUsForm = document.getElementById('contact-wrapper');
    // let body = document.getElementById('body');
    // let cancelContactForm = document.getElementById('cancel-form-button');
    for(item of contactHideClicks){
        item.addEventListener('click', () => contactUsForm.classList.toggle('hide-element'));
    };
/*     cancelContactForm.addEventListener('click', () => contactUsForm.classList.toggle('hide-element'));
    contactUsNav.addEventListener('click', () => { */
        // e.preventDefault();
        // do i need this? >> e.preventDefault() > seems i don't
        // needed to set if() as could only get this to work by setting style directly on body element
        // document.querySelector('form').setAttribute('class', 'show-element');
        // contactUsFormEl.classList.toggle('hide-element');
        // display grid overriding display: none when set on #contact-wrapper > had to move grid to form > then toggle on wrapper works
        // next: shorten this function > class to form hide button and link
        //contactUsForm.classList.toggle('hide-element');
        console.log(contactHideClicks);
    }
// }

contactUsFormHide();

let navHambHide = document.getElementById('hamburger');

// bumper hamburger menu
/* let windowResizewindowCheck =  */
window.onresize = hideMenu;
let navHideArea = document.querySelectorAll('li.to-hide');
function hideMenu() {
    let body = document.getElementById('body');
    //body.addEventListener('resize', () => {
        navHideArea.forEach(item => {
            console.log(item, 'beginning of code');
            if(window.innerWidth <= 800) {
                item.classList.add('hamburger-hide');
                console.log(item, 'added');
            } else {
                item.classList.remove('hamburger-hide');
                console.log(item, 'removed');
            }
            console.log(window.innerWidth);
            })
    //})
    /* {
        if(window.innerWidth <= 800) {
            navHideArea.forEach(item => {
                if(window.innerWidth <= 800) {
                    item.classList.toggle('hamburger-hide');
                } 
            })
            for(item of navHideArea) {
                //item.classList.toggle('hamburger-hide');
                console.log(item);
            }
            for(let i=0; i<navHideArea.length; i++) {
            }
        } else if(window.innerWidth <= 800) {
            for(let i=0; i<navHideArea.length; i++) {
            navHideArea[i].classList.toggle('hamburger-hide');
            }    
        }
    } */
    console.log(window.innerWidth);
};
hideMenu();

function menuReveal() { // listens hamburger click; responds based on hide status of menu items
    navHambHide.addEventListener('click', () => {
        if(navHideArea[0].classList.contains('hamburger-hide')) {
            document.querySelector('nav.nav-menu').setAttribute('class', 'hamburger-redisplay');
        }
    })
}
menuReveal();

// future class for bumpers connection to database
// color; alt colors; category; text; font; 
// display for various sizes
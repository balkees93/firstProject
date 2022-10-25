/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const list = document.getElementById('navbar__list'); 
const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function navBuilder(){
    sections.forEach((section) => {
        const sectionId = section.id;
        const sectionTilte = section.getAttribute('data-nav')
        const li = document.createElement('li');
        const a = document.createElement('a');
         a.href = `#${sectionId}`;
         a.textContent = sectionTilte;
         a.classList.add("menu__link");
         a.addEventListener('click', event =>{
            event.preventDefault();
            section.scrollIntoView({
                behavior : 'smooth'
            });
        });
        li.appendChild(a)
        fragment.appendChild(li);
    });
    list.appendChild(fragment);
}
window.addEventListener('load', navBuilder())

// Add class 'active' to section when near top of viewport

window.addEventListener('scroll',() =>{
 sections.forEach((section) => {
 const postion = section.getBoundingClientRect().top;
 const minValue = 0;
 const maxValue = 250;
 if(postion > minValue && postion < maxValue){
    section.classList.add('your-active-class');
 }
 else{
    section.classList.remove('your-active-class');

 }
 });
})
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



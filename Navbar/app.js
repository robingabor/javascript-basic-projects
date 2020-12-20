// classList - show/gets all classes
// contains - checks classlist for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click',function(){
    
    console.log(links.classList.contains("show-links"));

    links.classList.toggle("show-links");
    
});
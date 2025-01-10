// /*MENU SHOW Y HIDDEN*/ 

const navMenu = document.getElementById('nav-menu')
const toggleMenu = document.getElementById('nav-toggle')
const closeMenu = document.getElementById('nav-close')

/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
    navMenu.classList.remove('hidden')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('hidden')
    navMenu.classList.remove('show')
})

const sections = [...document.querySelectorAll("section")];

let options = {
  rootMargin: "0px",
  threshold: 0.25
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    const { target } = entry;
    console.log(entry, target);

    if (entry.intersectionRatio >= 0.25) {
      target.classList.add("is-visible");
    } else {
      target.classList.remove("is-visible");
    }
  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) => {
  observer.observe(section);
});

window.onload(removeClass());







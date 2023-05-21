let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grapCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".teachers-slider", {
    spaceBetween: 20,
    grapCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    grapCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

// shadow on scroll

function shadowNavBar(){
    window.addEventListener('scroll', () => {
        const pageHeight = window.scrollY;
    const navbar = document.querySelector('.header');

        if(pageHeight < 300){
            navbar.classList.remove('scroll')
        }else{
            navbar.classList.add('scroll')
        }
    })
}

shadowNavBar();
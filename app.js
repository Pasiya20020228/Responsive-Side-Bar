const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //toggle Nav

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');
    });
    

}

navSlide();

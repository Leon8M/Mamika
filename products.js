document.addEventListener('scroll', () => {
    let navbar2 = document.querySelector('.navbar-2')
    let navLink = document.querySelector('.nav-link')
    if (window.scrollY > 0) {
     navbar2.classList.add('nav-2')
     navLink.classList.add('a-2')
    } else {
     navbar2.classList.remove('nav-2')
     navLink.classList.remove('a-2')
    }
 })

 
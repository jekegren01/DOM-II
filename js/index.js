// Your code goes here
let navItm = document.querySelectorAll('.nav-link');
navItm[0].addEventListener('mouseenter', () => {
    navItm[0].style.transform = "scale(1.2)";
});

navItm[1].addEventListener('mouseenter', () => {
    navItm[1].style.transform = "scale(1.2)";
});

navItm[0].addEventListener('mouseleave', () => {
    navItm[0].style.transform = "scale(1)";
});

navItm[1].addEventListener('mouseleave', () => {
    navItm[1].style.transform = "scale(1)";
});

const imgView = document.querySelector('.intro');
imgView.addEventListener('resize', () => {
    imgView.style.backgroundColor = 'red';
});

const textColor = document.querySelectorAll('.text-content').forEach((title) => {
    title.addEventListener('click', (e) => {
        title.style.color = 'white';
        e.stopPropagation();
    });
});

const textColor2 = document.querySelectorAll('.text-content').forEach((title) => {
    title.addEventListener('dblclick', () =>{
        title.style.color = 'blue';
    });
});
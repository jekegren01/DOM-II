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

const imgView = document.querySelector('.img');
window.addEventListener('resize', () => {
    imgView.src = 'img/adventure.jpg';
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

const backGround = document.querySelector('body');
window.addEventListener('resize', () => {
    backGround.style.backgroundColor = 'red';
});

const fontSize = document.querySelector('p');
window.addEventListener('keydown', (e) => {
    if (e.key === 'd') {
        fontSize.style = 'font-family: cursive';
    } else if (e.key === 'l') {
        fontSize.style = 'font-size: 84px';
    } else if (e.key !== 'd') {
        fontSize.style = 'font-family: sans sarif';
    }
  });

const nest1 = document.querySelector('.content-pick');
nest1.addEventListener('click', (e) => {
    nest1.style.color = 'hotpink';
    e.stopPropagation();
});

const nest2 = document.querySelector('.destination');
nest2.addEventListener('click', (e) => {
    nest2.style.color = 'yellow';
    e.stopPropagation();
});

// const link = document.querySelector('.nav-link');
// link.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log('Stopped the link from going off!');
// });

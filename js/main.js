

const link = document.querySelectorAll('a');
const burger = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');
burger.addEventListener('click', function(){
    burger.classList.toggle('burger-active');
    overlay.classList.toggle('overlay-active');
});

closeBtn.addEventListener('click', function(){
    burger.classList.toggle('burger-active');
    overlay.classList.toggle('overlay-active');    
});


[].forEach.call(link, function(el){
    el.addEventListener('click', function(event){
        event.preventDefault();
        alert('test site');
    });
});
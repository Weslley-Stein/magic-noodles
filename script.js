const table = document.querySelector('#menu');
const th1 = document.querySelector('#th-1');
const th2 = document.querySelector('#th-2');
const th3 = document.querySelector('#th-3');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');

const spicyNoodles = () => {
    table.style.display = 'flex'
    th1.innerHTML = 'Soft Hot';
    option1.src = 'img/ramen1.jpg'
    th2.innerHTML = 'Hot';
    option2.src = 'img/ramen2.jpg'
    th3.innerHTML = 'Extremely Hot';
    option3.src = 'img/ramen8.jpg'
        
};

const tradicionalNoodles = () => {
    table.style.display = 'flex'
    th1.innerHTML = 'Shoyu Soup';
    option1.src = 'img/ramen3.jpg'
    th2.innerHTML = 'Miso Soup';
    option2.src = 'img/ramen4.jpg'
    th3.innerHTML = 'Pork Soup';
    option3.src = 'img/ramen6.jpg'
};

const specialNoodles = () => {
    table.style.display = 'flex'
    th1.innerHTML = 'Bacon Noodle';
    option1.src = 'img/ramen5.jpg'
    th2.innerHTML = 'Seafood';
    option2.src = 'img/ramen7.jpg'
    th3.innerHTML = 'Surprise ingredients';
    option3.src = 'img/ramen9.jpg'
    
};
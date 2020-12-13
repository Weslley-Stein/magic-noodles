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
    option1.src = 'https://imgur.com/ygXCzuY'
    th2.innerHTML = 'Hot';
    option2.src = 'https://imgur.com/x6JWyww'
    th3.innerHTML = 'Extremely Hot';
    option3.src = 'https://imgur.com/y46jrC7'
        
};

const tradicionalNoodles = () => {
    table.style.display = 'flex'
    th1.innerHTML = 'Shoyu Soup';
    option1.src = 'https://imgur.com/MiXBp2m'
    th2.innerHTML = 'Miso Soup';
    option2.src = 'https://imgur.com/OLC6Rgo'
    th3.innerHTML = 'Pork Soup';
    option3.src = 'https://imgur.com/qgG4u98'
};

const specialNoodles = () => {
    table.style.display = 'flex'
    th1.innerHTML = 'Bacon Noodle';
    option1.src = 'https://imgur.com/0g3xN2Z'
    th2.innerHTML = 'Seafood';
    option2.src = 'https://imgur.com/PRcRTgL'
    th3.innerHTML = 'Surprise ingredients';
    option3.src = 'https://imgur.com/xe6kwRZ'

};
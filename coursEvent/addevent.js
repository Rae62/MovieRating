const square = document.querySelector('div');

const btn = document.querySelector('button');

square.addEventListener('mouseover', () => {
    // square.style.backgroundColor = 'red';
    square.classList.add('rouge')
})

square.addEventListener('mouseleave', () => {
    square.style.backgroundColor="orange"
})

btn.addEventListener('click', () => {
    console.log("you clicked on me ");


    
})
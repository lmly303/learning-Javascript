const button = document.querySelectorAll('.button')
const body = document.querySelector("body")

button.forEach((button)=>{
    button.addEventListener('click', (event)=>{
        body.style.backgroundColor =  event.target.id;
    })
})


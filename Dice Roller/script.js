// მომხმარებელი
// task 000 - ცვლადების შექმნა 
let form = document.querySelector('form')

let userChoise = document.querySelector('input')
let user = document.querySelector('.user')
let userDices = user.querySelectorAll('.dice')

let compiuter = document.querySelector('.compiuter')
let compiuterDices = compiuter.querySelectorAll('.dice')

let message = document.querySelector('p')

// Task 001

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // user
    //      Task 001-1
    let userValue = e.target.userchoise.value

    for (let index = 0; index < userDices.length; index++) {
        if (userDices[index].id === 'curent') {
            userDices[index].removeAttribute('id')

        }
    }
    //      Task 001-2
    userDices[userValue - 1].id = 'curent'

    // compiuter
    //      Task 001-3
    let compiuterValue = Math.floor(Math.random() * 6)
    console.log(compiuterValue)

    for (let index = 0; index < compiuterDices.length; index++) {
        if (compiuterDices[index].id === 'curentComp') {
            compiuterDices[index].removeAttribute('id')
        }
    }
    compiuterDices[compiuterValue].id = 'curentComp'


    // Finish Task
    if (userValue > compiuterValue + 1) {
        message.style.color = 'rgb(0, 135, 193)'
        message.textContent = 'You Won!'
    } else if (userValue < compiuterValue + 1) {
        message.style.color = 'rgb(255, 0, 0)'
        message.textContent = 'You Lost!'
    } else {
        message.style.color = 'rgb(255, 128, 0)'
        message.textContent = 'Tie!'
    }
    message.style.textShadow = '0px 0px 4px'
})



// New Task
// .removeAttribute('atribute name') - მეთოდია, რომელსაც არგუმენტად რასაც გადავცემთ იმ ატრიბუტს ამოშლის ელემენტიდან.

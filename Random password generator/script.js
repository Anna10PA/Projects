let span = document.querySelector('span')
let button = document.querySelector('button')

button.addEventListener('click', () => {
    let rendomChars = '1234567890-_=+\][{}.,/!@#$%^&*()qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    let result = ''

    for (let char = 0; char < 12; char++) {
        let rendomIndex = Math.floor(Math.random() * rendomChars.length)

        result += rendomChars[rendomIndex]
    }
    span.innerHTML = result

})
// user name
const userName = prompt('Qual è il tuo nome?')

// user surname
const userSurname = prompt('Qual è il tuo cognome?')

// user favourite color
const userColor = prompt('Qual è il tuo colore preferito?')

// user message
const userMessage = userName + userSurname + userColor + '21'

// print
document.getElementById('result').innerHTML = userMessage
const page = document.getElementById('button-div')

const buttonColors = [
  'lightblue',
  'lightgreen',
  'pink'
]

const constructOptions = buttonColors => {
  buttonColors.forEach(buttonColor => {
    const button = document.createElement('button')
    button.style.backgroundColor = buttonColor
    button.addEventListener('click', () => {
      chrome.storage.sync.set({
        color: buttonColor
      }, () => {
        console.log(`The color is ${buttonColor}.`)
      })
    })
    page.appendChild(button)
  })
}

constructOptions(buttonColors)

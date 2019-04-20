// const changeColor = document.getElementById('change-color')

// chrome.storage.sync.get('color', data => {
//   changeColor.style.backgroundColor = data.color
//   changeColor.setAttribute('value', data.color)
// })

// changeColor.onclick = element => {
//   const color = element.target.value
//   chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
//     chrome.tabs.executeScript(
//       tabs[0].id,
//       {
//         code: `
//           document.body.style.transition = '1s ease all';
//           document.body.style.backgroundColor = '${color}';
//         `
//       }
//     )
//   })
// }

const buttons = Array.from(document.getElementsByClassName('button'))
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const color = button.dataset.color
    
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.executeScript(
        tabs[0].id,
        {
          code: `
            document.body.style.transition = '1s ease all';
            document.body.style.backgroundColor = '${color}';
          `
        }
      )
    })
  })
})

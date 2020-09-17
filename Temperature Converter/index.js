let inputFields = document.querySelectorAll('.main > div > div > input')
let celcius = document.getElementById('celcius-input')
let farenheit = document.getElementById('farenheit-input')
let cm = document.getElementById('cm-input')
let mm = document.getElementById('mm-input')
let m = document.getElementById('m-input')
let km = document.getElementById('km-input')
let secs = document.getElementById('secs-input')
let hr = document.getElementById('hr-input')

// Adding event listeners to all inputs
inputFields.forEach((element, i) => {
  element.addEventListener('input', (event) => handleInput(event))
})

function handleInput(e) {
  let { id, value } = e.target
  if (id == 'celcius-input') farenheit.value = value * (9 / 5) + 32
  else if (id == 'farenheit-input')
    celcius.value = parseFloat(((value - 32) * 5) / 9).toFixed(3)
  else if (id == 'cm-input') mm.value = value * 10
  else if (id == 'mm-input') cm.value = value / 10
  else if (id == 'm-input') km.value = value / 1000
  else if (id == 'km-input') m.value = value * 1000
  else if (id == 'secs-input') hr.value = parseFloat(value / 32600).toFixed(3)
  else if (id == 'hr-input') secs.value = value * 3600
}

let degree = document.getElementById('degree-input')
let farenheit = document.getElementById('farenheit-input')
let cm = document.getElementById('cm-input')
let mm = document.getElementById('mm-input')

degree.addEventListener('input', (e) => handleInput(e))
farenheit.addEventListener('input', (e) => handleInput(e))
cm.addEventListener('input', (e) => handleInput(e))
mm.addEventListener('input', (e) => handleInput(e))

function handleInput(e) {
  let { id, value } = e.target
  if (id == 'degree-input') farenheit.value = value * (9 / 5) + 32
  else if (id == 'farenheit-input') degree.value = ((value - 32) * 5) / 9
  else if (id == 'cm-input') mm.value = value * 100
  else if (id == 'mm-input') cm.value = value / 100
}

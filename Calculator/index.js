const value1 = document.querySelector('.value1')
const operator = document.querySelector('.operator')
const value2 = document.querySelector('.value2')
const answer = document.querySelector('.answer')
const buttons = document.querySelectorAll('.buttons > div')
let op1 = (op2 = 0)
let oper = ''

let operatorFlag = (equalsFLag = false)
//evts keyboard
document.addEventListener('keydown', updateDisplay)
document.addEventListener('click', (e) => {
  updateDisplay({ key: e.target.innerHTML })
})

// buttons.addEventListener('click', buttonStyle)

// function buttonStyle() {
//   buttons.classList.add('.clicked')
//   setTimeout(() => buttons.classList.remove('.clicked'), 100)
// }

function updateDisplay(e) {
  if (!equalsFLag) {
    if (
      (e.key == '+' ||
        e.key == '-' ||
        e.key == '*' ||
        e.key == '/' ||
        e.key == '%') &&
      op1 !== 0
    ) {
      operatorFlag = true
      operator.innerHTML = e.key
      oper = e.key
    } else if (e.key >= 0 && e.key <= 9) {
      if (operatorFlag) {
        value2.innerHTML += e.key
        op2 = value2.innerHTML
      } else {
        value1.innerHTML += e.key
        op1 = value1.innerHTML
      }
    } else if (e.key == '=') {
      console.log({ op1, op2, oper })
      answer.innerHTML = calculate(op1, op2, oper)
      op1 = op2 = 0
      oper = ''
      operatorFlag = false
      equalsFLag = true
    }
    // console.log(value1.innerHTML, value2.innerHTML, operator.innerHTML)
  }
  if (e.key == 'C' || e.key == 'c') {
    op1 = op2 = 0
    oper = ''
    operatorFlag = false
    value1.innerHTML = ''
    value2.innerHTML = ''
    operator.innerHTML = ''
    answer.innerHTML = ''
    equalsFLag = false
  }
}

function calculate(a = 0, b = 0, o = '') {
  a = parseFloat(a)
  b = parseFloat(b)
  if (o == '+') return a + b
  else if (o == '-') return a - b
  else if (o == '/') return parseFloat(a / b).toFixed(2)
  else if (o == '*') return a * b
  else if (o == '%')
    return parseFloat((100 * Math.min(a, b)) / Math.max(a, b)).toFixed(2)
}

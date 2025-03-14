//event handlings

var button = document.querySelector('button')
var box = document.querySelector('.box')
button.addEventListener('click', () => {
  if (!box.hidden) box.hidden = true
  else box.hidden = false
  box.style.height = '300px'
  box.style.width = 'auto'
})
button.addEventListener('contextmenu', () => {
  box.innerHTML = "Don't hack us by right click please"
})
document.addEventListener('keydown', (e) => {
  console.log(e.key)
})
setInterval(() => {
  box.style.background = `rgb(${Math.ceil(0 + Math.random() * 255)},${Math.ceil(
    0 + Math.random() * 255
  )},${Math.ceil(0 + Math.random() * 255)})`
}, 5000) //the box is changing the color.

setTimeout(() => {
  box.innerHTML = 'Yes I have changed'
}, 5000) //this allows to run only once after the time you give it in param.
var container1 = document.querySelector('.container1')
var container2 = document.querySelector('.container2')
//evert bubbling
button.addEventListener('click', (e) => {
  alert('Button clicked')
  e.stopPropagation()
})
container1.addEventListener('click', () => { 
  alert('container1 clicked')
})
container2.addEventListener('click', () => {
  alert('container2 clicked')
}) //bcz button is inside container2 and container2 is inside container1 so the event will propagate till container2

//in order to avoid event bubbling, we will use .stoppropagation()

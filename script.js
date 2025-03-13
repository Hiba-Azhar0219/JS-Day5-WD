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
}, 1000) //the box is changing the color.

setTimeout(() => {
  box.innerHTML = 'Yes I have changed'
}, 5000) //this allows to run only once after the time you give it in param.

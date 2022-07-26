const container = document.querySelector('.container')
const img = document.querySelector('img')


let zoom = 1
container.addEventListener('wheel', e => {
    img.style.transformOrigin = `${e.offsetX}px ${e.offsetY}px`

    zoom += e.deltaY * -0.01
    zoom = Math.min(Math.max(1, zoom), 5)


    if (zoom == 1) {
        img.style.left = '0px'
        img.style.top = '0px'
    } 

    img.style.transform =`scale(${zoom})`


})

let clicked = false
let xAxis;
let x;
let yAxis;
let y;

container.addEventListener('mouseup',() => container.style.cursor ='auto')

container.addEventListener('mousedown', e => {
clicked = true;
xAxis = e.offsetX - img.offsetLeft;
yAxis = e.offsetY - img.offsetTop;

container.style.cursor = 'grabbing'

})


window.addEventListener('mouseup',() => clicked = false)

container.addEventListener('mousemove',e => {

if (!clicked) return
e.preventDefault()

x = e.offsetX
y = e.offsetY


img.style.left = `${x - xAxis}px`
img.style.top = `${y - yAxis}px`

checkSize()
})


function checkSize () {
    let containerout = container.getBoundingClientRect()
    let imgIn = img.getBoundingClientRect()
    


}
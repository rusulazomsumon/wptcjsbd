const canvas = document.getElementById('canvas')
const ctx = canvas.getContex('2d')

const image = new Image()
image.src = 'cerGen.jpg'
image.onload = function () {
    drawImage()
}

function drawImage(){
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
}


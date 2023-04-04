function generateShape(shape, shapeColor) {
    if (shape === "Circle") {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${shapeColor}" />`
    } else if (shape === "Triangle") {
        return `<polygon points="0,200 300,200 150,0" fill="${shapeColor}" />`
    } else {
        return `<rect height="200" width="200" fill="${shapeColor}" />`
    }
}


function generateLogo(data) {

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    ${generateShape(data.shape, data.shapeColor)}
    
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
    
    </svg>`

}

module.exports = generateLogo;
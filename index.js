const squareElement = document.createElement('div');
squareElement.setAttribute('class', 'square');
console.log(squareElement);
document.body.appendChild(squareElement);

let colors = "#" + Math.floor(Math.random()* 416578);

squareElement.style.backgroundColor = colors;

let widthPosition = `${Math.floor(Math.random() * window.innerWidth - 155)}px`;
let heightPosition = `${Math.floor(Math.random() * window.innerHeight - 155)}px`;
console.log(window.innerHeight);

squareElement.style.position = 'fixed';

function heightOfElement() {
    if(heightPosition > 150 + 'px') {
        return heightPosition
    }
}

function widthOfElement() {
    if(widthPosition > 150 + 'px') {
        return widthPosition;
    }
}

squareElement.style.top = heightOfElement();
squareElement.style.left = widthOfElement();

let x;

for(let i = 1; i < 20; i++) {
    x = document.createElement('div');
    x.setAttribute('class', 'square');
    document.body.appendChild(x);
    let anotherColors = "#" + Math.floor(Math.random()* 416578);
    x.style.backgroundColor = anotherColors;
    let widthPositionAnother = `${Math.floor(Math.random() * window.innerWidth - 155)}px`;
    let heightPositionAnother = `${Math.floor(Math.random() * window.innerHeight - 155)}px`;
    x.style.position = 'fixed';

    function elementsOverlap(el1, el2) {
        const domRect1 = el1.getBoundingClientRect();
        const domRect2 = el2.getBoundingClientRect();
      
        return !(
          domRect1.top > domRect2.bottom ||
          domRect1.right < domRect2.left ||
          domRect1.bottom < domRect2.top ||
          domRect1.left > domRect2.right
        );
      }
    
    if(elementsOverlap(squareElement, x)) {
        
    if(heightPositionAnother > 150 + 'px') {
        x.style.top = heightPositionAnother
    }
    if(widthPositionAnother > 150 + 'px') {
        x.style.left = widthPositionAnother;
    }
    }
}

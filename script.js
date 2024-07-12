document.addEventListener('DOMContentLoaded', function() {
    createGrid(16); 
});



function createGrid(nsquares) {
    const container = document.querySelector('.container');
    container.innerHTML = ''; 


   
    const totalSquares = nsquares * nsquares;

    
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }


    container.style.setProperty('--nsquares', nsquares);

    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = randomColor(); 
        });

        square.addEventListener('mouseout', function() {
            square.style.transition = 'background-color 0.3s ease'; 
            square.style.backgroundColor = 'white'; 
        });
    });
}

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  
  document.querySelector('square').addEventListener('mouseover', event => {
    event.target.style.fill = randomColor();
});

function changeGrid() {
   
    let input = prompt('Insira a dimensao da grelha: ');
    
    
    let nsquares = parseInt(input);

    
    if (!isNaN(nsquares) && nsquares > 0) {
        createGrid(nsquares); 
    } else {
        alert('Insira um numero maior que 0');
    }
}

const holes = document.querySelectorAll('.hole');
const score1 = document.getElementById('score');
let score = 0;


function run(){
    const i = Math.floor(Math.random() * holes.length);
    const hole = holes[i];
    const img = document.createElement('img')
    img.classList.add('mole')
    img.src ="images/mole.png";
    hole.appendChild(img);
    let timer = null;
    
    img.addEventListener('click', () => {
        img.src = 'images/mole.png';
        score += 1;
        score1.innerText = score
        setInterval(() => {
            hole.removeChild(img);
            run();
        console.log('click')
        }, 400);
    });

    timer = setInterval (() => {
        hole.removeChild(img);
        run();
    }, 800);
}    

run();
document
        .querySelector('#but')
        .addEventListener('click', add);
    
let span;
let image;
function add(){
    const tam = document.createElement('div');
    tam.className = 'tam';
    block.append(tam);

    const disp = document.createElement('div');
    disp.className = 'disp';
    tam.append(disp);

    span = document.createElement('span')
    span.className = 'span';
    span.innerHTML = `HP: ${hel}`
    disp.append(span)

    image = document.createElement('img')
    image.className = 'dino'
    image.src = 'dino.jpg'
    disp.append(image)
    
    const feed = document.createElement('button');
    feed.className = 'feedButton';
    feed.innerHTML = 'Дать пива';
    tam.append(feed);

    document
        .querySelector('.feedButton')
        .addEventListener('click', bla);

    function bla(){
        hel = hel + Math.round(hel * 0.2);0
        if (hel > 100){
            hel = 101;
        }
    };
};
let hel = 100;
let margin = 0;
let direction = true;

function move(){
    margin = margin + 1;
    document.querySelector('.dino').style.marginLeft = `${margin}px`
    direction = true;
    if(margin === 130){
        document.querySelector('.dino').style.transform = 'scale(-1,1)'
        direction = false;
    }
}

function moveBack(){
    margin = margin - 1;
    document.querySelector('.dino').style.marginLeft = `${margin}px`
    direction = false;
    if(margin === 0){
        document.querySelector('.dino').style.transform = ''
        direction = true;
    }
}

function autoMove(){
    if(direction === true){
        move();
    }
    else{
        moveBack();
    }
}

const secondInterval = setInterval(autoMove, 30);

function health(){
    if (hel > 0){
    hel = hel - 1;    
    span.innerHTML = `HP: ${hel}`
    }
    else{
        span.innerHTML = 'DEAD'
        clearInterval(intervalId);
        clearInterval(secondInterval);
        document.querySelector('.dino').style.transform = ''
        image.className = 'dinoDead'
    }    
}
const intervalId = setInterval(health, 1000);


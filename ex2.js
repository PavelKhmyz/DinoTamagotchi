document
        .querySelector('#but')
        .addEventListener('click', add);
document
        .querySelector('#but')
        .addEventListener('click', count);
        
let counter = 0;

function count(){
    counter +=1;
}

function add(){
    const tam = document.createElement('div');
    tam.className = `tam${counter}`;
    block.append(tam);
    document.querySelector(`.tam${counter}`).style.cssText = 
                                                            `width: 200px;
                                                            height: 250px;
                                                            border: 1px solid black;
                                                            margin-top: 20px;
                                                            display:flex;
                                                            flex-wrap: wrap;
                                                            justify-content: center;
                                                            margin-left: 10px;
                                                            margin-right: 10px;`

    const disp = document.createElement('div');
    disp.className = `disp${counter}`;
    tam.append(disp);
    document.querySelector(`.disp${counter}`).style.cssText =
                                                            `width: 180px;
                                                            height: 180px;
                                                            border: 1px solid black;
                                                            margin-top: 10px;
                                                            background-color: #f6f6f6;
                                                            display: flex;
                                                            flex-direction: column;
                                                            justify-content: space-between;`

    const feed = document.createElement('button');
    feed.className = `feedButton${counter}`;
    feed.innerHTML = 'Дать пива';
    tam.append(feed);
    document.querySelector(`.feedButton${counter}`).style.cssText =
                                                                `width: 160px;
                                                                 height: 50px;`
    function health(){
        let hel = 30;
        let span;

        span = document.createElement('span')
        span.className = `span${counter}`;
        span.innerHTML = `HP: ${hel}`
        disp.append(span)
        document.querySelector(`.span${counter}`).style.cssText =
                                                                `color: red;`

        document
                .querySelector(`.feedButton${counter}`)
                .addEventListener('click', bla);
        function bla(){
            hel = hel + Math.round(hel * 0.2);0
            if (hel > 100){
                hel = 101;
            }
        };

        return function (){
            if (hel > 0){
                hel = hel - 1;
                span.innerHTML = `HP: ${hel}`;
                }
                else{
                    span.innerHTML = 'DEAD';
                    clearInterval(intervalId);
                    clearInterval(secondInterval);
                    image.style.transform = '';
                    image.className = 'dinoDead';
                }
        };             
    }
    const intervalId = setInterval(health(), 1000);

    let margin = 0;
    let direction = true;

    const image = document.createElement('img')
    image.className = `dino${counter}`
    image.src = 'dino.jpg'
    disp.append(image)   
    document.querySelector(`.dino${counter}`).style.cssText =
                                                                `width: 50px;
                                                                height: auto;`

    function autoMove(){   
        if(direction === true){
            margin = margin + 1;
            image.style.marginLeft = `${margin}px`;
            direction = true;
            if(margin === 130){
                image.style.transform = 'scale(-1,1)';
                direction = false;
            };
        }
        else{
            margin = margin - 1;
            image.style.marginLeft = `${margin}px`
            direction = false;
            if(margin === 0){
                image.style.transform = ''
                direction = true;
            };
        };
    }
    const secondInterval = setInterval(autoMove, 30); 
};




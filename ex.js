document
        .querySelector('#but')
        .addEventListener('click', add);

function add(){
    const tam = document.createElement('div');
    tam.className = 'tam';
    block.append(tam);

    const disp = document.createElement('div');
    disp.className = 'disp';
    tam.append(disp);

    const feed = document.createElement('button');
    feed.className = 'feedButton';
    feed.innerHTML = 'Дать пива';
    tam.append(feed);

    const span = document.createElement('span');
    span.className = 'span';
    span.innerHTML = 'HP: 100';
    disp.append(span);

    const image = document.createElement('img');
    image.className = 'dino';
    image.src = 'dino.jpg';
    disp.append(image);

    function health(){
        let hel = 100;
        feed.addEventListener('click', bla);

        function bla(){
            hel = hel + Math.round(hel * 0.2);
            if (hel > 100){
                hel = 100;
            };
            span.innerHTML = `HP: ${hel}`;
        };

        return  function (){
            if (hel > 0){
                hel = hel - 1;
                span.innerHTML = `HP: ${hel}`;
            }
            else{
                span.innerHTML = 'DEAD';
                clearInterval(firstInterval);
                clearInterval(secondInterval);
                image.style.transform = '';
                image.className = 'dinoDead';
            };
        };             
    };
    const firstInterval = setInterval(health(), 1000);

    let margin = 0;
    let direction = true;

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
            image.style.marginLeft = `${margin}px`;
            direction = false;
            if(margin === 0){
                image.style.transform = '';
                direction = true;
            };
        };
    };
    const secondInterval = setInterval(autoMove, 30); 
};
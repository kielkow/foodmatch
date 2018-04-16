
let banner = document.querySelector('.banner img');
let imagens = [
    'img/comida1.jpg', 
    'img/comida2.jpg',
    'img/comida3.jpg',
    'img/comida4.jpg',
    'img/comida5.png'
];
let bannerAtivo = 1;


function mudar(){
    banner.src = imagens[bannerAtivo];
    bannerAtivo++;

    if(bannerAtivo == imagens.length){
        bannerAtivo = 0;
    }
};
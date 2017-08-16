console.log('Loaded!');

//change the text of div element main-text
var element = document.getElementById('main-text');
element.innerHTML = "I'm learning HTML,CSS and Javascript";

//move the image
var img = document.getElementById('main-img');
img.onclick = function(){
    img.style.marginLeft = '100px';
};
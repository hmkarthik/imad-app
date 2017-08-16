console.log('Loaded!');

//change the text of div element main-text
var element = document.getElementById('main-text');
element.innerHTML = "I'm learning HTML,CSS and Javascript";

//move the image
var img = document.getElementById('main-img');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,50);
};
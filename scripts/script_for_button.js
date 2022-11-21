let maga = document.querySelector('.sticky-toc.toc');
var enabledBox = document.getElementById("menu__toggle");

console.log(maga, enabledBox);

function onclick(e){
    var enabled = e.target.checked;
    if (enabled===true){
        maga.style.left = "9vw";
        maga.style.top = "40px";
        maga.style.opacity = "1";
        maga.style.transition = "0.5s";
        maga.style.zIndex = "3";
    }
    else{
        maga.style.opacity = '0';
        maga.style.zIndex = "-1";
    }
}

enabledBox.addEventListener("click", onclick);
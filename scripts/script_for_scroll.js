let mag = document.querySelector('.magic')

function magic() {
  if(window.innerWidth > 1000)
  {
    if (window.pageYOffset > 570) {
    mag.style.opacity = '1'
    } else { mag.style.opacity = '0' }
  } 
  else{
    if (window.pageYOffset > 670) {
      mag.style.opacity = '1'
      } else { mag.style.opacity = '0' }
  }
}

window.onscroll = magic
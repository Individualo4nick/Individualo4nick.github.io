let mage = document.querySelector('.magic')

function magic() {
  if(window.innerWidth > 1000)
  {
    if (window.pageYOffset > 200) {
    mage.style.opacity = '1'
    } else { mage.style.opacity = '0' }
  } 
  else{
    if (window.pageYOffset > 670) {
      mage.style.opacity = '1'
      } else { mage.style.opacity = '0' }
  }
}

window.onscroll = magic
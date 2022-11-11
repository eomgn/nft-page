import './css/index.css'
/*------------------------*/

const btnMenuMobile = document.querySelector('#btnMenuMobile')

function toggleMenu() {
   const nav = document.querySelector('#nav')
   const rmvActive = document.querySelector('#rmvActive')

   nav.classList.toggle('active')
   rmvActive.classList.toggle('activeRmv')
}

btnMenuMobile.addEventListener('click', toggleMenu)

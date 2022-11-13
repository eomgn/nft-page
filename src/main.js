import './css/index.css'
/*------------------------*/

/* --- menu mobile - start --- */

const btnMenuMobile = document.querySelector('#btnMenuMobile')

function toggleMenu(event) {
   const nav = document.querySelector('#nav')
   const rmvActive = document.querySelector('#rmvActive')

   if (event.type === 'touchstart') event.preventDefault()

   nav.classList.toggle('active')
   rmvActive.classList.toggle('activeRmv')
}

btnMenuMobile.addEventListener('click', toggleMenu)
btnMenuMobile.addEventListener('touchstart', toggleMenu)

/* --- menu mobile - end --- */

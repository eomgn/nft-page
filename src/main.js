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

/*------------------------*/

/* --- carousel - trending-nfts - start --- */

const controls = document.querySelectorAll('.area-buttom .control')
let currentCard = 0
const card = document.querySelectorAll('.gallery ul .card')
const maxCards = card.length

controls.forEach(control => {
   control.addEventListener('click', () => {
      const isLeft = control.classList.contains('arrow-left')

      if (isLeft) {
         currentCard -= 1
      } else {
         currentCard += 1
      }

      if (currentCard >= maxCards) {
         currentCard = 0
      }

      if (currentCard < 0) {
         currentCard = maxCards - 1
      }

      card.forEach(card => card.classList.remove('current-card'))

      card[currentCard].scrollIntoView({
         inline: 'center',
         behavior: 'smooth'
      })

      card[currentCard].classList.add('current-card')
   })
})

/* --- carousel - trending-nfts - end --- */

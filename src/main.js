import './css/index.css'
/*------------------------*/

/*--- MENU MOBILE - START */
const btnMobile = document.querySelector('#btnMobile')

function toggleMenu() {
   const nav = document.querySelector('#nav')

   nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)

/*--- MENU MOBILE - END */
/*-----*/
/*-----*/
/*-----*/
/*--- PERCENTAGE NEGATIVE OR POSITIVE - START */

const percents = document.querySelectorAll('#percent')

percents.forEach(element => {
   const getPercents = element.innerHTML.replace(/.[1-100].[1-100]/)

   const getPercentsTransformNumber = parseFloat(getPercents)

   if (getPercentsTransformNumber > 0) {
      element.style.color = '#33FF33'
   } else {
      element.style.color = '#E94F4F'
   }
})

/*--- PERCENTAGE NEGATIVE OR POSITIVE - END */
/*-----*/
/*-----*/
/*-----*/
/*--- PREVIOUS OR NEXT IMAGE [CARROUSEL] - START */

const controls = document.querySelectorAll('.control')
let currentItem = 0
const items = document.querySelectorAll('.item')
const maxItems = items.length

controls.forEach(control => {
   control.addEventListener('click', () => {
      const isLeft = control.classList.contains('arrow-left')

      if (isLeft) {
         currentItem -= 1
      } else {
         currentItem += 1
      }

      if (currentItem >= maxItems) {
         currentItem = 0
      }

      if (currentItem < 0) {
         currentItem = maxItems - 1
      }

      items.forEach(item => {
         item.classList.remove('current-item')
      })

      items[currentItem].scrollIntoView({
         inline: 'center',
         block: 'center'
      })

      items[currentItem].classList.add('current-item')
   })
})

/*--- PREVIOUS OR NEXT IMAGE [CARROUSEL] - END */

/*--- SWIPER JS - CARROUSEL - START */

var swiper = new Swiper('.swiper', {
   slidesPerView: 3,
   spaceBetween: 30,
   slidesPerGroup: 1,
   loop: true,
   loopFillGroupWithBlank: true,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   }
})

/*--- SWIPER JS - CARROUSEL - END */

/*--- MENU FIXED SCROLLY - START */

const navScroll = document.querySelector('.header-content')
const navScrollTopFixed = navScroll.offsetTop

window.onscroll = () => {
   MenuFixedTop()
}

function MenuFixedTop() {
   if (window.pageYOffset >= navScrollTopFixed) {
      navScroll.classList.add('FixedTop')
   } else {
      navScroll.classList.remove('FixedTop')
   }
}

/*--- MENU FIXED SCROLLY - END */

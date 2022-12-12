console.log('%c', Array.from(document.querySelectorAll('body footer .logo_link img'))[0], '\nthis website has been made by www.8pier.re','color:#100E0D')

console.log(
    `%c${store.title} \nMade with ❤️ by ${store.author.name} \n↳ ${store.author.link}`,
    'color: #342f2f',
  )

const allImages = document.querySelectorAll('.loading .img')
const imgSection = document.querySelector('.loading')
const allImagesArray = Array.from(allImages)
const reversedAllImagesArray = allImagesArray.reverse()


window.addEventListener('load', () =>{

    const Tl = gsap.timeline({paused: true})

    Tl.
    to('.img-color', .5, {
        ease: "power4.inOut",
        opacity: 0
    })
    .staggerTo(reversedAllImagesArray, 1, {
        opacity: 0, ease:"power4.out"
    },.2)
    .to(imgSection, {
        top: '-100vh',
        ease: "power4.inOut",
        opacity: 0
    }, 1.6)
    .from('header img', .5,{
        ease: "power4.inOut",
        opacity: 0,
    }, "-=0.3")
    .from('h1', .5,{
        ease: "power4.inOut",
        opacity: 0,
        scale: 1.5
    }, "-=0.3")
    .to(".container", {
        overflow: "visible"
    })

    Tl.play()
})

gsap.to("header img",{
        scrollTrigger:{
            trigger:"header img",
            start: 'top center',
            end: 'bottom top',
            scrub: 1
        },
        ease: "power2.inOut",
        scale: 2
    })

gsap.to("body .stylax .imgs",{
    scrollTrigger:{
        trigger:'.stylax .imgs',
        start: 'center bottom',
        end: 'bottom bottom'
    },
    duration: .3,
    ease: "power2.inOut",
    opacity: 1,
    markers: true,
    translateY: 0
})

const allShape = document.querySelectorAll('.shape')
const allImagesShape = Array.from(allShape)

    allImagesShape.forEach(el => {
        gsap.to(el,{
        scrollTrigger:{
            trigger:el,
            start: 'center bottom',
            end: 'bottom bottom',
            scrub: 1,
            duration: 1
        },
        ease: "power2.inOut",
        left: "46%",
        top:"53%"
    })
    })

const allStylaxImages = document.querySelectorAll('.left img')
const allStylaxImagesArray = Array.from(allStylaxImages)

    allStylaxImagesArray.forEach(el => {
        gsap.from(el,{
        scrollTrigger:{
            trigger:el,
            start: '+=100 bottom',
            end: 'bottom bottom',
            scrub: 1,
            duration: 1
        },
        ease: "power2.inOut",
        left: "54%",
        top:"47%"
    })
})

// FOOTER

gsap.to('.colored',{
        scrollTrigger:{
            trigger:'.colored',
            start: 'top bottom',
            end: 'top center',
            toggleActions: "play reverse play reverse",
            scrub: 1
        },
        ease: "power4.inOut",
        y: "100%"
    })
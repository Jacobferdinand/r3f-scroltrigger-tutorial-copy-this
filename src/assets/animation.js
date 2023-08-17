import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function animations() {
  gsap.to('#section1', {
    scrollTrigger: {
      trigger: '#scroll1',
      start: '100% 80%',
      endtrigger: '#scroll1',
      end: '0% 50%',
      toggleActions: 'restart restart reverse reverse',
    },
    opacity: 0,
    zIndex: 0,
    duration: 0.8,
    ease: 'Power2.Out',
  })

  gsap.to('#section2', {
    scrollTrigger: {
      trigger: '#scroll2',
      start: '0% 20%',
      end: '100% 100%',
      toggleActions: 'restart reverse restart reverse',
    },
    opacity: 1,
    zIndex: 10,
    duration: 0.8,
    ease: 'Power2.Out',
  })

  gsap.to('#section3', {
    scrollTrigger: {
      trigger: '#scroll3',
      start: '0% 20%',
      end: '100% 100%',
      toggleActions: 'restart reverse restart reverse',
    },
    opacity: 1,
    zIndex: 10,
    duration: 0.8,
    ease: 'Power2.Out',
  })

  gsap.to('#section4', {
    scrollTrigger: {
      trigger: '#scroll4',
      start: '0% 20%',
      end: '100% 100%',
      toggleActions: 'restart reverse restart reverse',
    },
    opacity: 1,
    zIndex: 10,
    duration: 0.8,
    ease: 'Power2.Out',
  })

  gsap.to('#section5', {
    scrollTrigger: {
      trigger: '#scroll5',
      start: '0% 20%',
      end: '100% 100%',
      toggleActions: 'restart reverse restart reverse',
    },
    opacity: 1,
    zIndex: 10,
    duration: 0.8,
    ease: 'Power2.Out',
  })
}

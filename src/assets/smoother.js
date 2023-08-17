import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { ScrollSmoother } from 'gsap/ScrollSmoother'
gsap.registerPlugin(ScrollSmoother)

export default function Smoother() {
  let smoother = ScrollSmoother.create({
    wrapper: '.smooth-wrapper',
    content: '.scroller',
    smooth: 2,
  })
}

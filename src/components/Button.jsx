import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
const Button = ({styles}) => {
  useEffect(()=>{
    AOS.init({duration:500, anchorPlacement:"top-center"}),[]
  })
  return (
    <button type="button" className={`rounded-[10px] box-glow ${styles} 
    py-4 px-6 bg-blue-gradient font-poppins 
    font-medium text-[18px] text-primary 
    outline-none`}
    data-aos="fade-up"
    >
        Get Started
    </button>
  )
}

export default Button
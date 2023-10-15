import { card } from "../assets"
import styles, {layout} from "../style"
import Button from "./Button"
import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'
const CardDeal = () => {

  useEffect(()=>{
    AOS.init({duration:500, anchorPlacement:"top-center"}),[]
  })
  return(
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`} data-aos="fade-left">Find a better card deal in
           <br className="sm:block hidden" />
         few easy steps.</h2>

         <p className={`${styles.paragraph} max-w-[470px]`} data-aos="fade-right">
         Arcu tortor, purus in mattis at sed 
         integer faucibus. Aliquet quis aliquet 
         eget mauris tortor.ç Aliquet ultrices 
         ac, ametau.
         </p>

         <Button styles="mt-10"/>
      </div>
      

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%] " data-aos="zoom-in-up" />
      </div>
    </section>
)
}

export default CardDeal
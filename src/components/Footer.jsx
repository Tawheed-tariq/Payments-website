import styles from "../style"
import { footerLinks, socialMedia } from "../constants"
import { logo } from "../assets"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
const Footer = () => {

  useEffect(()=>{
    AOS.init({duration:500, anchorPlacement:"top-center"}),[]
  })
  return(
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full `}>

      <div className="flex-1 flex flex-col justify-start mr-10">
        <img src={logo} alt="Hoobank" data-aos="fade-right" className={`w-[266px] h-[72px] object-contain`}/>
        <p data-aos="fade-left" className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments 
          easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row 
      justify-between flex-wrap md:mt-0 mt-[10px]">
        {footerLinks.map((footerlink) =>(
          <div key={footerlink.id} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">{footerlink.title}</h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) =>(
                <li key={link.name} className={`font-poppins font-normal text-[16px]
                leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index != footerLinks.length-1 ? 'mb-4' : 'mb-0'}`}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>


    <div className={`w-full flex md:flex-row flex-col justify-between 
    items-center pt-6 border-t-[1px] border-t-[#3f3e45] hover:border-t-[cyan]`}>
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
      Copyright <span className="mx-[7px]">©</span> 2023 HooBank. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social,index) =>(
          <img key={social.id} src={social.icon} alt={social.id}
          className={`w-[21px] h-[21px] object-contain cursor-pointer
          ${index != socialMedia.length -1 ? 'mr-6' : 'mr-0'}`} />
        ))}
      </div>

    </div>
  </section>
)
}

export default Footer
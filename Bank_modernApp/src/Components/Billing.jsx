import { apple, bill, google } from "../assets";
import styles, { layout } from "../Style";

const Billing = () => {
  return (
    <section id="products" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 top-0 w-[50%] h-[50%] rounded-full green__gradient" />
      </div>


      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden" /> billing and invoicing</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <div className="flex flex-row flow-wrap sm:mt mt-6">
          <img src={apple} alt="apple image" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="apple image" className="w-[128px] h-[42px] object-contain cursor-pointer" />
        </div>
      </div>
    </section>
  )
}

export default Billing
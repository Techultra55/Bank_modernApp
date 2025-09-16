import styles from "./Style.js"

import {Navbar , Hero , Stats , Bussiness , CardDeals , Testimonials , Clients , CTA , Footer ,Billing} from "./Components/Imports.js"

const App = () => (
    <div className="bg-primary w-full overflow-hidden">

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
         <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
         <Stats/>
         <Bussiness/>
         <Billing/>
         <CardDeals/>
         <Testimonials/>
         <Clients/>
         <CTA/>
         <Footer/>
        </div>
      </div>
    
    </div>
  )


export default App

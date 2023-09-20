import { servicesCards } from "../../constants"
import ArrowButton from "./ArrowButton"

function OurServices() {
  return (
    <section className="section_margin">
      <div className="fix-container">
        <h2 className="sectionTitle">Our Services</h2>
        <div className="flex gap-6 max-md:flex-col md:flex-wrap justify-center mt-7 lg:mt-14">
            {servicesCards.map((service) => (
               <div key={service.name} className="rounded-2xl shadow-xl 
                   hover:shadow-2xl transition-shadow cursor-pointer"> 
                    <img src={service.img} alt="photo" className="object-cover w-full" />
                    <div className="flex justify-between max-lg:flex-wrap my-4 sm:my-10 px-2 sm:px-5 items-center">
                        <h3 className="item_title max-w-xs">{service.title}</h3>
                        <ArrowButton styles={"max-md:mt:7"}/>
                    </div>
               </div> 
            ))}    
        </div>    
      </div>
    </section>
  )
}

export default OurServices
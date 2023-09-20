import { stepsCards } from "../../constants"

function StepsToRent() {
  return (
      <section className="section_margin">
      <div className="fix-container">
        <h2 className="sectionTitle">3 steps <br /> to rent a car</h2> 
        <div className="mt-7 flex gap-3 md:gap-5 lg:gap-6 max-md:flex-col md:flex-wrap justify-center lg:mt-14">
            {stepsCards.map((step) => (
                <div key={step.name} className="flex rounded-2xl shadow-lg max-md:p-7 p-12 w-full lg:max-w-[420px] max-sm:flex-wrap">
                    <img src={step.icon} alt="icon" />
                    <div className="max-sm:ml-0 max-sm:mt-6 lg:ml-10 ml-5">
                      <h3 className="item_title">
                        {step.title}    
                      </h3>
                      <p className="item_text mt-3">
                        {step.text}    
                      </p>  
                    </div>
               </div> 
            ))}     
        </div>    
      </div>  
    </section>
  )
}

export default StepsToRent
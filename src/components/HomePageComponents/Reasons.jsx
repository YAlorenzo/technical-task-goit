import { reasonsCards } from "../../constants"

function Reasons() {
  return (
    <section className="section_margin">
        <div className="fix-container"> 
            <h3 className="sectionTitle">6 reasons <br /> to book a car rental at <span className="text-blue"> AUTO.UA</span></h3> 
            <div className="flex justify-around flex-wrap mt-7 lg:mt-14"> 
                  {reasonsCards.map((elem) => (
                     <ul key={elem.name} className="max-lg:mt-7">
                         {elem.group.map((reasone) => (
                             <li key={reasone.name} className="mb-7 lg:mb-14 last:mb-0">
                                 <div className="flex items-center">
                                     <div className="flex justify-center items-center bg-gray 
                                     rounded-3xl w-20 h-20 sm:w-28 sm:h-28">
                                         <img src={reasone.icon} alt="icon" className="w-10 sm:w-14" />
                                     </div>
                                     <div className="ml-7 lg:ml-10">
                                         <h3 className="item_title">{reasone.title}</h3>
                                         <p className="item_text mt-3 md:mt-4 max-w-[300px]">{reasone.text}</p>
                                     </div>
                                 </div> 
                             </li>
                         ))}
                     </ul> 
                  ))}  
            </div> 
        </div>   
    </section>
  )
}

export default Reasons
import { eventCards } from "../../constants";
import ArrowButton from "./ArrowButton";

function EventRental() {
  return (
      <section className="section_margin">
          <div className="fix-container flex flex-col items-center">
            <h2 className='sectionTitle'>
              Premium car rental for events
            </h2>
            <div className="flex mt-8 lg:mt-14 max-md:flex-col cursor-pointer">
                {eventCards.map((event) => (
                  <div key={event.name} className="rounded-[20px] max-md:mt-4 md:mr-6 last:mr-0 shadow-xl 
                   hover:shadow-2xl transition-shadow">
                        <img src={event.photo} alt="event_photo" className="object-cover" />
                        <div className="flex max-lg:flex-col lg:justify-between p-7 lg:p-12">
                          <div>
                            <h3 className="item_title">
                             {event.title}
                            </h3>
                            <p className="item_text mt-4 md:mt-5">
                             {event.text}
                            </p>
                           </div>
                           <ArrowButton styles={"mt-5 lg:mt-0"}/>
                        </div>
                   </div>
               ))}
            </div>
          </div>
    </section>
  )
}

export default EventRental
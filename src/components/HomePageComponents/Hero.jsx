import { useNavigate } from "react-router-dom";
import { arrowGoTo, homeHeroBg } from "../../assets";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Hero() {
  const navigate = useNavigate();
  return (
    <section> 
      <div className="fix-container flex max-md:flex-col">
        <div className="w-full md:w-[50%] md:pl-8 lg:pl-11">
          <h1 className="text-2xl mt-5 sm:text-3xl md:mt-10 lg:text-6xl font-bold text-black_gray lg:mt-32">
            Learn more<br />
            about our cars and choose the<span className=" text-blue"> perfect option </span>
            <br className="md:hidden" />
            <span className="text-blue">for your journey</span>
          </h1>
          <div className="flex md:justify-around"> 
            <button type="button" onClick={() => navigate("/catalog")} className="mt-5 max-md:mr-4 py-1 px-2 sm:py-2 lg:py-4 sm:px-3 lg:px-6 sm:mt-7 lg:mt-14 hover:bg-white border border-blue transition-colors
        hover:text-blue flex justify-center 
               items-center rounded-full bg-blue uppercase md:text-base lg:text-lg font-bold text-white">go to catalog
            <ArrowRightAltIcon className="md:ml-3 lg:ml-4"/>
          </button>
            <img src={arrowGoTo} alt="arrow" className="w-10 md:w-14 lg:w-20" />
          </div>
        </div>
        <div className="w-full md:w-[50%] mt-5 lg:mt-10">
          <img src={homeHeroBg} alt="image" className="object-cover max-sm:w-[360px]"/>
        </div>
      </div> 
    </section>
  )
}

export default Hero
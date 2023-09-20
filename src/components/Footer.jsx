import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="bg-gray section_margin py-20">
          <div className="fix-container">
              <div>
                <h2 className="sectionTitle">Any questions? <br /> Call us!</h2> 
                  <a href="tel:+380730000000" className="bg-gray px-3 py-4 mt-8 flex justify-center 
                  items-center mx-auto text-lg text-blue border border-blue hover:bg-blue
                   hover:text-white transition-colors rounded-full w-[207px]">
                     <PhoneIcon className='mr-2'/> +380730000000</a>
              </div>
              <div className='h-[1px] w-full bg-[#D3D3D3] mt-20'></div>
              <div className='sm:flex justify-between items-center mt-12 flex-wrap'>
                  <h3 className='uppercase font-roboto text-3xl sm:text-6xl text-gray_text'>auto.ua</h3>
                  <ul className='sm:flex gap-10 max-md:mt-4'>
                      {navLinks.map((elem) => (
                          <Link key={elem.name} to={elem.path}>
                            <li className='text-lg font-light max-sm:mb-1 last:mb-0 text-gray_text hover:text-blue transition-colors'>
                                  {elem.name}
                            </li>
                          </Link>
                      ))}
                  </ul>
              </div>
              <div className='flex md:justify-between md:items-center mt-12 max-md:flex-col flex-wrap'>
                  <p className='text-lg font-light text-gray_text'>AUTO.UA Ⓒ 2023, all rights reserved YKVM.</p>
                  <div className='flex items-center gap-8 max-md:mt-4'>
                      <TwitterIcon sx={{ color: "#989898", width: "24px", height: "24px"}}  className='cursor-pointer hover:text-blue transition-all'/>
                      <FacebookIcon sx={{ color: "#989898", width: "24px", height: "24px"}} className='cursor-pointer hover:text-blue transition-all'/>
                  </div>
              </div>
            
        </div>    
    </footer>
  )
}

export default Footer
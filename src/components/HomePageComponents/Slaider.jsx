import { register } from 'swiper/element/bundle';
import { partnersDesktop, partnersMobile } from '../../constants';

register();


function Slaider() {
    return (
        <>
        <div className='hidden md:block'>
                <swiper-container pagination="true" className="mt-14" >
                    {partnersDesktop.map((group) => (
                        <swiper-slide class="my-thumbs" key={group.name}>
                        <div className='flex justify-around items-center'>
                            {group.partners.map((partner) => (
                              <img key={partner.name} src={partner.logo} alt="partner" className='md:w-28 lg:w-48'/>
                            ))}
                        </div> 
                    </swiper-slide>
                    ))}
        </swiper-container>
        </div>
            
        <div className='block md:hidden'>
        <swiper-container pagination="true">
           {partnersMobile.map((partner) => (
               <swiper-slide class='slide_mobile' key={partner.name}>
                <div className='flex justify-center items-center w-full'>
                    <img src={partner.logo} alt="partner" className='w-[200px]' />     
                </div>        
            </swiper-slide>
            ))}       
           
        </swiper-container>             
        </div>
        </>
        
  )
}

export default Slaider
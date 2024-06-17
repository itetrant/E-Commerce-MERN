/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect,  useState } from 'react'
import image1 from '../assests/banner/home-banner-1.jpg'
import image2 from '../assests/banner/home-banner-2.jpg'

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";


const BannerProduct = () => {
    const [currentImage,setCurrentImage] = useState(0)
//TO DO Fetch
    const desktopImages = [
        image1,
        image2,
    ]

    const mobileImages = [
        image1,
        image2,        
    ]

    const totalImages = desktopImages.length -1;

    const nextImage = () => {
        if (currentImage >= totalImages) {
          setCurrentImage(0);
        } else setCurrentImage(prev => prev + 1);
      };

    const preveImage = () =>{

        if(currentImage <= 0){
            setCurrentImage(totalImages)
        } else  setCurrentImage(preve => preve - 1)
    }


    useEffect(()=>{
        const interval = setInterval(()=>{
                nextImage()
        },5000)

        return ()=> clearInterval(interval)

    },[currentImage, nextImage])

  return (
    <div className='container mx-auto px-4 rounded '>
        <div className='h-56 md:h-72 w-full bg-slate-200 relative'>

                <div className='absolute z-10 h-full w-full md:flex items-center hidden '>
                    <div className=' flex justify-between w-full text-2xl'>
                        <button onClick={preveImage} className='bg-white shadow-md rounded-full p-1'><FaAngleLeft/></button>
                        <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'><FaAngleRight/></button> 
                    </div>
                </div>

                {/**desktop and tablet version */}
                <div className='hidden md:flex h-full w-full overflow-hidden'>
                {
                        desktopImages.map((imageURl,index)=>{
                            return(
                            <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
                                <img src={imageURl} className='w-full h-full' alt =""/>
                            </div>
                            )
                        })
                }
                </div>


                {/**mobile version */}
                <div className='flex h-full w-full overflow-hidden md:hidden'>
                {
                        mobileImages.map((imageURl,index)=>{
                            return(
                            <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
                                <img src={imageURl} className='w-full h-full object-cover' alt =""/>
                            </div>
                            )
                        })
                }
                </div>


        </div>
    </div>
  )
}

export default BannerProduct
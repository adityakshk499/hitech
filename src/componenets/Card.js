import React from 'react'
import TextGradient from './TextGradient'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({heading , content , date , image , copyright }) => {
  return (
    <div className="flex flex-col  items-center container  mx-auto justify-center">
    


 
      <div className={"flex flex-col xl:flex-row  h-auto  gap-5  p-5 " }>
        <div className="flex space min-w-0 gap-5 flex-col xl:max-w-[50%]">
         <div className='w-fit'>   <TextGradient>{heading}</TextGradient> </div>
        <h1 className="text-xl font-bold"> DATE - {date}</h1>
        <p className="text-2xl font-[300]"> {content} </p>
        {copyright=== undefined ? (null) : <p className='text-xl font-medium'>&#169; {copyright}</p>}
        </div>
        <div className="relative flex-1 min-w-0 border rounded-xl xl:max-w-[50%] ">
        <LazyLoadImage     alt={heading} src={image}   className="xl:absolute w-full h-full object-cover rounded-xl  shadow-xl shadow-slate-900 top-0 left-0 "/>
        
          {/* <img
          loading='lazy'
            className="xl:absolute w-full h-full object-cover rounded-xl  shadow-xl shadow-slate-900 top-0 left-0 "
            src={image}
            alt="hello"
          /> */}
        </div>
      </div>
      </div>
  )
}

export default Card
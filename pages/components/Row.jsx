import React, { use, useEffect, useState } from 'react'
// import { FaHeart , FaRegHeart } from 'react-icons/fa'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import axios from 'axios'
const Row = ({title,fetchURL,rowID}) => {
    const [movies,setMovies] = useState([])
    const [like,setLike] = useState(false)
    useEffect(()=>{
        axios.get(fetchURL).then((res)=>{
            setMovies(res.data.results)
        })  
    },[fetchURL])
    
    const slideLeft = ()=>{
        let slider = document.querySelector('#slider' + rowID)
        slider.scrollLeft = slider.scrollLeft -500;
    }
    const slideRight = ()=>{
        let slider = document.querySelector('#slider' + rowID)
        slider.scrollLeft = slider.scrollLeft +500;
    }
  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center group'>
        <MdChevronLeft  onClick ={slideLeft}className='bg-white left-0 text-black font-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
        <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {movies.map((item,idx)=>(
                <Movie key={idx} item={item}/>
            ))}
        </div>
        <MdChevronRight onClick={slideRight} className='bg-white  text-black font-black right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'size={40}/>
    </div>
    </>
  )
}

export default Row
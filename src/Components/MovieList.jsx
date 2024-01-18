import React from 'react';
 import GlobalApi from '../Services/GlobalApi'
import { useEffect, useState, useRef } from 'react'; 
import MovieCard from "./MovieCard"
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import HrMovieCard from './HrMovieCard';




function MovieList({genreId, index_}) {
   const [movieList , setMovieList] = useState([])
   const elementRef=useRef(null);
    useEffect(()=>{
                getMovieByGenreId();
            },[])
            const screenWidth=window.innerWidth;

    const getMovieByGenreId=()=>{
                GlobalApi.getMovieByGenreId(genreId).then(resp=>{
                   console.log(resp.data.results)
                  setMovieList(resp.data.results)
                })
            }
            const sliderRight=(element)=>{
                element.scrollLeft+=500;
            }
            const sliderLeft=(element)=>{
                element.scrollLeft-=500;
            }
  return (
<div className="relative">
<HiChevronLeft  onClick={()=>sliderLeft(elementRef.current)} 
className="hidden md:block text-white text-[50px] absolute  p-2 z-10
        mx-8 mt-[150px] cursor-pointer " 
       />
        <HiChevronRight onClick={()=>sliderRight(elementRef.current)} 
        className="hidden md:block text-white text-[50px] absolute
       p-2 z-10 mt-[150px] cursor-pointer right-0 " 
    />

    <div className='flex overflow-x-auto gap-8  scrollbar-none scroll-smooth
    pt-5 px-3 pb-10 'ref={elementRef}>
     {movieList.map((item,index)=>(
        <>
       {index_%3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item} />}
        </>
     ))}
    </div>
    </div>
  );
}

export default MovieList;







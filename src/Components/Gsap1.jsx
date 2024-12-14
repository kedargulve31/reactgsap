import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Gsap1() {
  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{

      gsap.to('.page2 h2',{
            transform:'translateX(-130%)',
            scrollTrigger:{
                  trigger:'.page2',
                  scroller:'body',
                  start:'top 440',
                  end:'top 540%',
                  markers:true,
                  scrub:2,
                  pin:true,
                  duration:6

            }
      })




  },[])

 

  return (
    <>
    <div className="page1"></div>
    <div className="page2">
    <h2> MaharashtraToursim</h2>

    </div>
    <div className="page3"></div>
    </>
  );
}

export default Gsap1;

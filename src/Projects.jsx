import React,{useRef , useEffect, useState} from "react";
import NavBar from './NavBar'
import { Container , Row , Col } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar , FreeMode, Pagination } from "swiper";
const Projects = () => {

  
  const [projects, setProject] = useState([]);
  const form = useRef();
      useEffect(() => {
        AOS.init();
        axios.get("data.json")
        .then((res) => {
          setProject(res.data.projects)
        })
        },[]) 

  return (
    <div>
      <section id="latest">
          <div className="ddiiv">
          <h1 className="hh1">Our Projects</h1>
          <br />
          <br />
          <br />
          </div>
          <div>
          <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          modules={[FreeMode, Pagination]}
        >
        {projects.map((project) => (
            <SwiperSlide style={{height: '400px' , borderRadius: '10px'}} key={project.id}><a href={project.link} target="_blank"><img src={project.photo} alt="" /></a></SwiperSlide>
          ))}
      </Swiper>
          </div>
        </section>
    </div>
  )
}

export default Projects

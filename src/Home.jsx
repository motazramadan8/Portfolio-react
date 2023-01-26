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



const Home = () => {

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
    <>
        <NavBar /> 
        

        <section className="sec1">
            <Container>
              <Row>

                <Col style={{marginTop: '15%'}} md={8} sm={12} data-aos="fade-right">
                    <p><strong>WEB DESIGN</strong> // <strong>WEBFLOW DEVELOPMENT</strong> // <strong>SEO</strong> </p>
                    <h1 style={{width: '600px'}}>Turn your website into a customer-acquisition engine.</h1>
                    <p className="pppp">We build marketing websites that help you sell on autopilot.</p>
                    <HashLink to="/#contact"><button className="bbuton">Let's talk</button></HashLink>
                </Col>

                <Col className="ddivv" style={{marginTop: '6%'}} md={4} sm={12} data-aos="fade-right">
                  <img className="iimg"  src="images\623a183aa76fb537cbc5dc0e_Group 8-p-500.png" width="400" />
                  <img className="imgg" src="images/62324067d42bfc263ee547ff_image 4 (Traced).svg" width="40" />
                  <img className="imggg" src="images\6232406724bd9b36622aed48_image 3 (Traced).svg" width="40  " />
                  <img className="imgggg" src="images\623240674411e07510215b6f_image 2 (Traced).svg" width="40" />
                </Col>

              </Row>
            </Container>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <section>
          <Container>
            <Row>
            <Col style={{width: '500px' , height: '300px'}} className="ddivv" md={7} sm={11} data-aos="fade-left">
                <img className="mmmmg" src="images\6297dd8a74746c61110b1aaa_undraw_team_collaboration_re_ow29 1 (2).svg" width="400" />
            </Col>

            <Col style={{marginleft: '30%'}} md={5} sm={11} data-aos="fade-left">
                <br />
                <button className="bbutonn">the dream</button>
                <br />
                <br />
                <br />
                <h5>
                Imagine having your sales team on the job 24/7, interacting with an endless stream of ready-to-buy visitors.
                </h5>
            </Col>
            </Row>
          </Container>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <section id="latest">
          <div className="ddiiv">
            <h3>Latest builds</h3>
            <Link style={{marginLeft: '30px' , textDecoration: 'none' , color: "#8b4339"}} to="/Projects">View All Projects</Link>
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
        {projects.slice(1, 6).map((project) => (
            <SwiperSlide style={{height: '400px' , borderRadius: '10px'}} key={project.id}><a href={project.link} target="_blank"><img src={project.photo} alt="" /></a></SwiperSlide>
          ))}
      </Swiper>
          </div>
        </section>


        <section id="process">
          <br />
          <br />
          <br />
          <br />

          <Container>
            <Row>
                <Col className="ddiv" md={5} sm={12}>
                  <div style={{marginRight: '10px'}}>
                    <img className="mmgii" width="35px" src="images\6232406724bd9b36622aed48_image 3 (Traced).svg" alt="" />
                  </div> 
                  <div>
                    <h3>UI/UX Design</h3>
                    <p>Where concepts turn into a strategic user-experience.</p>
                  </div> 
                </Col>
                <br />
                <br />
                <Col md={5} sm={12}>
                    
                </Col>
                


                <Col md={5} sm={12}>

                </Col>
                <Col style={{marginLeft: "100px"}} className="ddiv" md={5} sm={12}>
                <div style={{marginRight: '10px'}}>
                    <img className="mmgii" width="35px" src="images\6232406724bd9b36622aed48_image 3 (Traced).svg" alt="" />
                  </div> 
                  <div>
                    <h3>Webflow Development</h3>
                    <p>Where design turns into code.</p>
                  </div> 
                </Col>
                <br />
                <br />



                <Col className="ddiv" md={5} sm={12}>
                <div style={{marginRight: '10px'}}>
                    <img className="mmgii" width="35px" src="images\6232406724bd9b36622aed48_image 3 (Traced).svg" alt="" />
                  </div> 
                  <div>
                    <h3>System Automation</h3>
                    <p>Where busywork gets delegated.</p>
                  </div> 
                </Col>
                <br />
                <br />
                <Col md={5} sm={12}>
                    
                </Col>



                <Col md={5} sm={12}>

                </Col>
                <Col style={{marginLeft: "100px"}} className="ddiv" md={5} sm={12}>
                <div style={{marginRight: '10px'}}>
                    <img className="mmgii" width="35px" src="images\6232406724bd9b36622aed48_image 3 (Traced).svg" alt="" />
                  </div> 
                  <div>
                    <h3>SEO</h3>
                    <p>Where customers come flooding in.</p>
                  </div> 
                </Col>
                <br />
                <br />


            </Row>
          </Container>
        </section>


        <section id="service">
          <br />
          <br />
          <br />
            <div style={{textAlign: "center"}}>
              <h2>Why Webflow</h2>
              <br />
              <br />
            </div>
            <div>
              <Container>
                <Row>
                  <Col style={{marginLeft: '90px'}} className="vid" md={3} sm={12}>
                      <h5 style={{textAlign: "center"}}><strong>REASON 1</strong></h5>
                      <h4 style={{textAlign: "center"}}>Next-Level Storytelling</h4>
                      <img width="200" style={{textAlign: "center"}} src="images\62966934fc028e3715017571_undraw_mobile_development_re_wwsn 1.svg" alt="" />
                      <br />
                      <h6 style={{fontsize: '5px' , fontWeight: 100 , textAlign: "center"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem vel obcaecati optio provident fugit sequi dicta repellendus</h6>
                  </Col>




                  <Col style={{marginLeft: '40px'}} className="vid" md={3} sm={12}>
                      <h5 style={{textAlign: "center"}}><strong>REASON 1</strong></h5>
                      <h4 style={{textAlign: "center"}}>Next-Level Storytelling</h4>
                      <img width="200" style={{textAlign: "center"}} src="images\62966934fc028e3715017571_undraw_mobile_development_re_wwsn 1.svg" alt="" />
                      <br />
                      <h6 style={{fontsize: '5px' , fontWeight: 100 , textAlign: "center"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem vel obcaecati optio provident fugit sequi dicta repellendus</h6>
                  </Col>




                  <Col style={{marginLeft: '40px'}} className="vid" md={3} sm={12}>
                      <h5 style={{textAlign: "center"}}><strong>REASON 1</strong></h5>
                      <h4 style={{textAlign: "center"}}>Next-Level Storytelling</h4>
                      <img width="200" style={{textAlign: "center"}} src="images\62966934fc028e3715017571_undraw_mobile_development_re_wwsn 1.svg" alt="" />
                      <br />
                      <h6 style={{fontsize: '5px' , fontWeight: 100 , textAlign: "center"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem vel obcaecati optio provident fugit sequi dicta repellendus</h6>
                  </Col>
                </Row>
              </Container>
            </div>
        </section>


        <section id="contact">
        <br />
          <br />
          <br />
            <div style={{textAlign: "center"}}>
              <h2>Contact Us</h2>
              <br />
              <br />
            </div>

            <div>
              <Container>
                <Row>
                <Col md={5} sm={12}>
                  <h5><strong>Email :</strong> info@gmail.com </h5>
                    <br />
                  <h5><strong>Phone :</strong> 01153802977 </h5>
                    <br />
                  <h5><strong>Address :</strong> 23 street newyork </h5>
                </Col>


                <Col md={5} sm={12}>
                  <form action="">
                    <div className="vdiv">
                      <input className="inpuuut" type="text" placeholder="Name" />
                      <input className="inpuuut" type="text" placeholder="Company" />
                    </div>
                    <br />
                    <div className="vdiv">
                      <input className="inpuuut" type="email" placeholder="Email" />
                      <input className="inpuuut" type="text" placeholder="Phone" />
                    </div>
                    <br />
                    <textarea className="inpuuut" cols="30" rows="2" placeholder="Message"></textarea>
                  </form>
                </Col>
                </Row>
              </Container>
            </div>
        </section>
    </>
  )
}

export default Home

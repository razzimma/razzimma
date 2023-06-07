import { React } from "react";
import { Navbar } from "./navbar";
import heroimage from "./images/hero-img.png";

import client1 from "./images/client-1.png";
import client2 from "./images/client-2.png";
import client3 from "./images/client-3.png";
import client4 from "./images/client-4.png";
import client5 from "./images/client-5.png";
import client6 from "./images/client-6.png";
import client7 from "./images/client-7.png";
import client8 from "./images/client-8.png";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Navbar></Navbar>

            <div className="mybg">
                <h2 className="purple text-center mt-4" data-aos-delay="300" data-aos="fade-left">We offer solutions for growing your business</h2>
                <p className="mt-3 text-center purple" data-aos-delay="300" data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius hic quas quo rerum doloremque voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nostrum asperiores quo, itaque molestiae pariatur?</p>

                <button className="btn btn-primary btn-lg my-3 mx-auto" data-aos="fade-right" style={{width:"150px"}}>Get Started</button>
                <img src={heroimage} alt="" className="mt-4 img-fluid" />
            </div>

            <div className="client p-4">
                <h2 className="purple mt-3 text-center fs-2">Our Clients</h2>
            </div>

            <div className="allclients my-5">
                <img src={client1} alt="" className="clientimage" data-aos="fade-left" />
                <img src={client2} alt="" className="clientimage" data-aos="fade-right" />
                <img src={client3} alt="" className="clientimage" data-aos="fade-top" />
                <img src={client4} alt="" className="clientimage" data-aos="fade-left" />
                <img src={client5} alt="" className="clientimage" data-aos="fade-right" />
                <img src={client6} alt="" className="clientimage" data-aos="fade-top" />
                <img src={client7} alt="" className="clientimage" data-aos="fade-left" />
                <img src={client8} alt="" className="clientimage" data-aos="fade-right" />
            </div>

            <div className="who">
                <h2 className="purple fs-2 my-4" data-aos-delay="300" data-aos="fade-left">Who are we?</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum repudiandae facilis possimus architecto voluptatum veniam fuga ipsum modi tenetur molestias vitae consectetur magnam ea tempora, quaerat nostrum. Sed nostrum ipsam cum amet, neque quasi repellat deserunt debitis laborum cumque excepturi temporibus fugit recusandae quidem reprehenderit mollitia quos ipsa error, veniam non quia inventore itaque consequuntur quibusdam. Quibusdam aspernatur dolore totam qui minima beatae repellendus quisquam, ullam corporis distinctio numquam molestias.</p>

                <div className="button btn btn-danger btn-lg" style={{width:"150px"}} onClick={() => {
                    navigate("/about")
                }}>
                        Learn More 
                </div>
            </div>
        </div>
    )
}
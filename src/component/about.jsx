import { React } from "react";
import { Navbar } from "./navbar";
import about1 from "./images/about1.jpg"
import about2 from "./images/about2.jpg"
import about3 from "./images/about3.jpg"
import about4 from "./images/about4.jpg"
import about5 from "./images/about5.jpg"
import about6 from "./images/about6.jpg"
import about7 from "./images/about7.jpg"
import about8 from "./images/about8.jpg"

export const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="purple fs-2 fw-bold text-center mt-4" data-aos-delay="300" data-aos="flip-left">About Us</h2>
            <p className="px-5 fs-6 mt-4" data-aos-delay="300" data-aos="fade-left">Lorem, ipsum dolor sit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, maiores. Mollitia tempore, quas praesentium veritatis atque fugiat quo iure distinctio. amet consectetur adipisicing elit. Delectus sit odio exercitationem eaque ut recusandae. Libero exercitationem sequi corporis, commodi adipisci pariatur sed quos, ex porro accusamus consectetur. Veniam assumenda facere illum impedit eligendi ipsam obcaecati quidem harum ullam doloribus ad quisquam fuga corrupti, unde cumque quia illo possimus perferendis?</p>
            <div className="allimages">
                <img src={about1} alt="" className="aboutimage" data-aos-delay="300" data-aos="fade-left"/>
                <img src={about2} alt="" className="aboutimage" data-aos-delay="300" data-aos="flip-left"/>
                <img src={about3} alt="" className="aboutimage" data-aos-delay="300" data-aos="fade-left"/>
                <img src={about4} alt="" className="aboutimage" data-aos-delay="300" data-aos="fade-right"/>
                <img src={about5} alt="" className="aboutimage" data-aos-delay="300" data-aos="flip-right"/>
                <img src={about6} alt="" className="aboutimage" data-aos-delay="300" data-aos="fade-left"/>
                <img src={about7} alt="" className="aboutimage" data-aos-delay="300" data-aos="fade-right"/>
                <img src={about8} alt="" className="aboutimage" data-aos-delay="300" data-aos="flip-left"/>
            </div>
            <div className="fs-6 mt-4 ps-4 purple">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum minus, esse, necessitatibus autem at voluptates magnam illo odit totam quam et, facilis inventore iste vero ducimus incidunt! Delectus rem, vel voluptates, alias saepe quas quos suscipit commodi similique inventore, est perferendis earum! Eum, cupiditate! Necessitatibus asperiores rem quasi ducimus. Libero voluptatum fuga quam debitis perspiciatis et mollitia earum. Vitae, quibusdam.

            </div>
        </div>
    )
}
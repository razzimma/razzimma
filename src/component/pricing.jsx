import { React } from "react";
import { Navbar } from "./navbar";
import { useNavigate } from "react-router-dom";
import pricing1 from "./images/pricing-business.png"
import pricing2 from "./images/pricing-free.png"
import pricing3 from "./images/pricing-starter.png"
import pricing4 from "./images/pricing-ultimate.png"

export const Pricing = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Navbar></Navbar>
            <div className="pricinglist text-center">
                <h1 className="purple">Our Pricing</h1>
                <p className=" fs-1">Here is our Pricing</p>
            </div>  


            <div className="container mt-3 pt-5 d-flex flex-wrap">
                <div className="box1" data-aos-delay="300" data-aos="flip-left">
                    <img src={pricing1} alt="" />
                    <h2 className="purple text-center pt-4">Business plan</h2>
                    <p className="purple text-center pt-2">5000naira/month</p>
                </div>
                <div className="box2" data-aos-delay="300" data-aos="flip-left">
                    <img src={pricing2} alt="" />
                    <h2 className="purple text-center pt-4">Free plan</h2>
                    <p className="purple text-center pt-2">1000naira/month</p>
                </div>
                <div className="box3" data-aos-delay="300" data-aos="flip-left">
                    <img src={pricing3} alt="" />
                    <h2 className="purple text-center pt-4">Starter plan</h2>
                    <p className="purple text-center pt-2">10000naira/month</p>
                </div>
                <div className="box4" data-aos-delay="300" data-aos="flip-left">
                    <img src={pricing4} alt="" />
                    <h2 className="purple text-center pt-4">Ultimate plan</h2>
                    <p className="purple text-center pt-2">20000naira/month</p>
                </div>
             </div>  


                {/* <h3 className="purple text-center mt=5 fw-bold">Our Pricing</h3>
                <h3 className="text-center fs-4 mt-4">Here is our pricing list</h3>

                <div className="d-flex my-5 justify-content-around align-items-center">
                <div class="card" style={{"width: 18rem"}}>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <img src={pricing1} alt="" />
                            </li>
                            <li class="list-group-item purple text-center fs-4">Free Plan</li>
                            <li class="list-group-item purple text-center fs-4">1000NGN/MNTH</li>
                        </ul>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <img src={pricing2} alt="" />
                            </li>
                            <li class="list-group-item purple text-center fs-4">A second item</li>
                            <li class="list-group-item purple text-center fs-4">A third item</li>
                        </ul>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <img src={pricing3} alt="" />
                            </li>
                            <li class="list-group-item purple text-center fs-4">A second item</li>
                            <li class="list-group-item purple text-center fs-4">A third item</li>
                        </ul>
</div>
                </div> */}



        </div>
        
    )
}
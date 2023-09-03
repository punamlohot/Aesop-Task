

const Footer = () => {
    return (
        <>
            <div className="container-fluid footer p-3">
                <div className="row">
                    <div className="col-md text-white">
                        <div className="border-bottom">Subscribe to Aesop communications</div><br></br>
                        <input className="inp mb-3" type="email" placeholder="Email address"/>
                        <label className="checkBox">
                            <input type="checkbox"/>
                            Subscribe to receive communications from Aesop. 
                            By subscribing, you confirm you have read and understood our privacy policy.
                        </label>

                        <br></br> <br></br> <br></br> <br></br>
                        <div className="border-bottom">Sustainability</div><br></br>
                        <div>All Aesop products are vegan, and we do not test our formulations or ingredients on animals.
                            We are Leaping Bunny approved and a Certified B Corporation. Learn more</div>
                    </div>
                    
                    <br></br><br></br>
                    <div className="col-md text-white">
                        <div className="border-bottom">Orders and support</div><br></br>
                        <div>Contact us</div>
                        <div>FAQs</div>
                        <div> Shipping</div>
                        <div>Returns</div>
                        <div>Order history</div>
                        <div>Terms and conditions</div>

                        <br></br><br></br>
                        <div className="border-bottom">About</div> <br></br>
                        <div>Our story</div>
                        <div>Foundation </div>
                        <div>Careers</div>
                        <div>Privacy policy</div>
                        <div>Accessibility</div>
                        <div>Cookie Policy</div>

                    </div>
                    <div class="col-md text-white">
                        <div className="border-bottom">Services</div><br></br>
                        <div>Live assistance</div>
                        <div>Corporate gifts</div>
                        <div>Facial Appointments</div>
                        <div>Click and Collect</div>
                        <div>Video consultation</div>

                        <br></br><br></br>
                        <div className="border-bottom">Social media</div> <br></br>
                        <div>Instagram </div>
                        <div>Twitter </div>
                        <div>LinkedIn </div>
                        <div>WeChat</div>
                        <div>Weibo</div>

                    </div>
                    <div class="col-md text-white">
                        <div className="border-bottom">Location preferences</div>
                        <br></br>
                        <div>Shipping:</div>
                        <a className="HongKong" href=" "> Hong Kong SAR, China</a>
                        <br></br> <br></br>
                        <div>Language:</div>
                        <div>English</div>
                        <div>繁體中文</div>
                    </div>
                </div>
                <br></br>
                <div className="d-flex d-block d-sm-none justify-content-center" id="social">
                    <p className="copyright m-2">&copy;Aesop</p>
                    <div class="social-links">
                        <a href=" " target="_blank" rel="noopener noreferrer">
                            <img className="social-link m-2" src="https://tse3.mm.bing.net/th?id=OIP.aW-aOZNPCqeqI9Cp_tRB6wHaHa&pid=Api&P=0&h=180" alt="Instagram" height="30px" width="30px" />
                        </a>&nbsp; &nbsp; &nbsp;
                        <a href=" " target="_blank" rel="noopener noreferrer">
                            <img className="social-link" src="https://tse4.mm.bing.net/th?id=OIP.NSqJBUp5ANzoR3x-myMgTQHaHa&pid=Api&P=0&h=180" alt="Twitter" height="25px" width="25px" />
                        </a>&nbsp; &nbsp; &nbsp;
                        <a href=" " target="_blank" rel="noopener noreferrer">
                            <img className="social-link" src="https://tse2.mm.bing.net/th?id=OIP.HHXmEDAKSsBDoXdz37J8CgHaHa&pid=Api&P=0&h=180" alt="LinkedIn" height="30px" width="30px" />
                        </a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer;
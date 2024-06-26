import React from 'react'

function Contact() {
    return (
      <>
      <section>
    <div className="rt-container">
          <div className="col-rt-12">
              <div className="Scriptcontent">
              
               <div>
            <div className="container">
                <div className="contact-parent">
                    <div className="contact-child child1">
                        <p>
                            <i className="fas fa-map-marker-alt"></i> Address <br />
                            <span> Fashion Network Sanganer - <br />
                  Malapura gate Jaipur <br />
                   Rajasthan 302024
                            </span>
                        </p>

                        <p>
                            <i className="fas fa-phone-alt"></i> Let's Talk <br />
                            <span>987653210</span>
                        </p>

                        <p>
                            <i className=" far fa-envelope"></i> General Support <br />
                            <span> FashionNetwork.HELP@gmail.com</span>
                        </p>
                    </div>

                    <div className="contact-child child2">
                        <div className="inside-contact">
                            <h2>Contact Us</h2>
                            <h3>
                               <span id="confirm"/>
                            </h3>

                            <p>Name *</p>
                            <input id="txt_name" type="text" Required="required"/>

                            <p>Email *</p>
                            <input id="txt_email" type="text" Required="required"/>

                            <p>Phone *</p>
                            <input id="txt_phone" type="text" Required="required"/>

                            <p>Subject *</p>
                            <input id="txt_subject" type="text" Required="required"/>

                            <p>Message *</p>
                            <textarea id="txt_message" rows="4" cols="20" Required="required" ></textarea>
                            
                            <input type="submit" id="btn_send" value="SEND"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    		
           
    		</div>
		</div>
    </div>
    
</section>
    
      </>
    )
}

export default Contact;
import React from 'react'
import "./Footer.css";

export  function Footer() {
  return (
    <div className="footer">
      <div className="topfooter">
        <span className="footerinfo">
            <ul className="ul1">
            <li className="title"><a href="https://www.nike.com/il/retail">FIND A STORE</a></li>
            <li className="title"><a href="https://www.nike.com/il/stories">NIKE JOURNAL</a></li>
            <li className="title"><a href="https://www.nike.com/il/member/profile/login?continueUrl=https://www.nike.com/il/">BECOME A MEMBER</a></li>
            <li className="title"><a href="https://www.nike.com/il/#site-feedback">FEEDBACK</a></li>
            <li className="title"><a href="https://www.nike.com/il/promo-code">PROMO CODES</a></li>
            </ul>
            <ul className="ul2">
            <li className="title"><a href="https://www.nike.com/il/help">GET HELP</a></li>
            <li className="subTitel"><a href="https://www.nike.com/il/orders">Order Status</a></li>
            <li className="subTitel"> <a href="https://www.nike.com/il/help/a/shipping-delivery-gs">Shipping and Delivery</a> </li>
            <li className="subTitel"><a href="https://www.nike.com/il/help/a/returns-policy-gs">Returns</a></li>
            <li className="subTitel"><a href="https://www.nike.com/il/help/a/payment-options-gs">Payment Options</a></li>
            <li className="subTitel"><a href="https://www.nike.com/il/help/#contact">Contact Us</a></li>
            </ul>
            <ul >
            <li className="title"><a href="https://about.nike.com/en">ABOUT NIKE</a></li>
            <li className="subTitel"><a href="https://about.nike.com/en/newsroom">News</a></li>
            <li className="subTitel"> <a href="https://jobs.nike.com/">Careers</a> </li>
            <li className="subTitel"><a href="https://investors.nike.com/Home/default.aspx">Investors</a></li>
            <li className="subTitel"><a href="https://www.nike.com/il/sustainability">Sustainability</a></li>
            </ul> 
            <ul>
            <li className="title"><a href="https://www.nike.com/il/membership">NIKE APPS</a></li>
            <li className="subTitel"><a href="https://www.nike.com/il/nike-app">Nike App</a></li>
            <li className="subTitel"> <a href="https://www.nike.com/il/nrc-app">Nike Run Club</a> </li>
            <li className="subTitel"><a href="https://www.nike.com/il/ntc-app">Nike Traininig Club</a></li>
            <li className="subTitel"><a href="https://www.nike.com/il/launch">SNKRS</a></li>
            </ul>
            </span>
      <span className="footerIcons">
        <a href="https://twitter.com/Nike"><img src="https://i.pinimg.com/564x/bb/62/af/bb62afe819b11af8384f2fb814acf28a.jpg" alt='twit pic' /> </a>
        <a href="https://www.facebook.com/nike"><img src="https://i.pinimg.com/736x/4a/94/77/4a9477bede69bbce3300e20588b28ebf.jpg" alt='twit pic' /> </a>
        <a href="https://www.youtube.com/user/nike"><img src="https://i.pinimg.com/236x/a6/20/7a/a6207a983695f5c4d78ffa78d7f57582.jpg" alt='twit pic' /> </a>
        <a href="https://instagram.com/nike"><img src="https://i.pinimg.com/236x/5b/91/36/5b9136be3f270a91aad20b204e6e2109.jpg" alt='twit pic' /> </a>
        </span>
        
      </div>
      <div className = "butttomfooter">
        <div className="butttomfooterleft">
        <a href="https://www.nike.com/?geoselection=true">

          <span className='cname'>Israel</span>
        </a>
        <span className='cinfo'>© 2022 Nike, Inc. All Rights Reserved</span>
        </div>
        <div className="butttomfooterright">
              <ul className="butttomfooterrightul">
              <li>Guids</li>
                <li><a href='https://agreementservice.svs.nike.com/il/en_gb/rest/agreement?agreementType=termsOfUse&uxId=com.nike.unite&country=IL&language=en&requestType=redirect'>
                Terms of Use</a>
                </li>
                <li><a href='https://www.eshopworld.com/shoppers/help/terms-and-conditions-of-sale-en/'>
                Terms of Sale</a>
                </li>
                <li><a href='https://www.nike.com/il/help/a/company-details'>
                Company Details</a>
                </li>
                <li><a href='https://agreementservice.svs.nike.com/il/en_gb/rest/agreement?agreementType=privacyPolicy&uxId=com.nike.unite&country=IL&language=en&requestType=redirect'>
                Privacy & Cookie Policy</a>
                </li>
                <li><a href='https://www.nike.com/il/#cookie_settings'>
                Cookie Settings</a>
                </li>
              </ul>
        </div>
      </div>
    </div>
  )
 }
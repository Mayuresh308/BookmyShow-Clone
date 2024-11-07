// Footer.js
import React from "react";
import "./Footer.css";

import img24x7 from "./24x7.png";
import confirmationImg from "./confirmation.png";
import newsletterImg from "./newsletter.png";
import Linkedin from "./linkedin.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-top">
          <div className="footer-icon">
            <img
              src={img24x7}
              alt="24/7 Customer Care"
              className="footer-logo"
            />
            <span>24/7 CUSTOMER CARE</span>
          </div>
          <div className="footer-icon">
            <img
              src={confirmationImg}
              alt="Resend Booking Confirmation"
              className="footer-logo"
            />
            <span>RESEND BOOKING CONFIRMATION</span>
          </div>
          <div className="footer-icon">
            <img
              src={newsletterImg}
              alt="Subscribe to the Newsletter"
              className="footer-logo"
            />
            <span>SUBSCRIBE TO THE NEWSLETTER</span>
          </div>
        </div>

        <div className="footer-middle">
          <div>
            <h4>MOVIES NOW SHOWING IN MUMBAI</h4>
            <p>Singham Again | Bhool Bhulaiyaa 3 | Venom: The Last Dance | Amaran | The Wild Robot | Phullwanti | Here | 1 am Kathalan | Lucky Baskhar | Ajab Prem Ki Ghazab Kahani</p>
          </div>
          <div>
            <h4>UPCOMING MOVIES IN MUMBAI</h4>
            <p>Bloody Beggar (Telugu) | Sri Sri Sri Raajavaru | Rajaram | Asuraru | Vanchana | Rahasyam Idham Jagath | U235 | The Legend Of Sudarshan Chakra-2 | Dhoom Dhaam | Santhosha Sangeetha</p>
          </div>
          <div>
            <h4>MOVIES BY GENRE</h4>
            <p>Drama Movies | Action Movies | Comedy Movies | Romantic Movies | Thriller Movies | Adventure Movies | Crime Movies | Period Movies | Bollywood Movies | Classic Movies</p>
          </div>
          <div>
            <h4>MOVIES BY LANGUAGE</h4>
            <p>Movies in Hindi | Movies in English | Movies in Marathi | Movies in Malayalam | Movies in Tamil | Movies in Telugu | Movies in Bhojpuri | Movies in Bengali | Movies in French | Movies in Nepali</p>
          </div>
          <div>
            <h4>SPORTS EVENTS IN MUMBAI</h4>
            <p>Kabaddi | Running | Football | Chess | Cycling | Walking | Online Sports | Sailing | Basketball | Baseball</p>
          </div>
          <div>
            <h4>EVENTS IN TOP CITIES</h4>
            <p>Events in Mumbai | Events in Delhi-NCR | Events in Chennai | Events in Bengaluru | Events in Hyderabad | Events in Pune | Events in Ahmedabad | Events in Kolkata | Events in Kochi</p>
          </div>
          <div>
            <h4>CINEMAS IN TOP CITIES</h4>
            <p>Cinemas in Mumbai | Cinemas in Delhi-NCR | Cinemas in Chennai | Cinemas 
            ad | Cinemas in Pune | Cinemas in Ahmedabad | Cinemas in Kolkata | Cinemas in Koch</p>
          </div>
          <div>
            <h4>PLAYS IN TOP CITIES</h4>
            <p>Plays in Mumbai | Plays in Delhi-NCR | Plays in Chennai | Plays in Bengaluru | Plays in Hyderabad | Plays in Pune | Plays in Ahmedabad | Plays in Kolkata | Plays in Kochi</p>
          </div>
          <div>
            <h4>ACTIVITIES IN TOP CITIES</h4>
            <p>Activities in Mumbai | Activities in Delhi-NCR | Activities in Chennai | Activities in Bengaluru | Activities in Hyderabad | Activities in Pune | Activities in Ahmedabad | Activities in Kolkata | Activities in Kochi</p>
          </div>
          <div>
            <h4>MOVIES NOW SHOWING</h4>
            <p>Bhool Bhulaiyaa 3 | Singham Again | Amaran | Lucky Baskhar | Bagheera | KA (2024) | The House of Dead Horror | Wild Roller Coaster | Prehistoric Adventure | Venom: The Last Dance</p>
          </div>
          <div>
            <h4>COUNTRIES</h4>
            <p>Indonesia | Singapore | UAE | Sri Lanka | West Indies</p>
          </div>
          <div>
            <h4>HELP</h4>
            <p>About Us | Contact Us | Current Opening | Press Release | Press Coverage | Sitemap | FAQs | Terms and Conditions | Privacy Policy</p>
          </div>
          <div>
            <h4>BOOKMYSHOW EXCLUSIVES</h4>
            <p>Lollapalooza India | Superstar | BookAChange | Corporate Vouchers | Gift Cards | List My Show | Offers | Stream | Trailers</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div>bookmyshow</div>
          <div className="footer-social">
          </div>
          <div className="footer-info">
            <p>Copyright 2024 © Bigtree Entertainment Pvt. Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

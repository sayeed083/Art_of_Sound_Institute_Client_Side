import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-teal-500 text-primary-content">
                <div>
                    <img className="w-1/4" src="https://i.postimg.cc/tJPnZq47/spanish-guitar.png" alt="" />
                    <p className="font-bold">
                    Art of Sound Institute <br />Providing Art of Sound For Your Children Since 2002
                    </p>
                    
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <FaFacebook className="text-3xl"></FaFacebook>
                        <FaInstagram className="text-3xl"></FaInstagram>
                        <FaLinkedin className="text-3xl"></FaLinkedin>
                        <FaTwitter className="text-3xl"></FaTwitter>
                        
                    </div>
                </div>
                <div>
                    <h2>Contact Us</h2>
                    <p className="flex items-center gap-3"><FaEnvelope></FaEnvelope> ArtofSound@info.com</p>
                    <p className="flex items-center gap-3"><FaPhoneAlt></FaPhoneAlt> +8801824832228</p>

                </div>
                    <p>Copyright © Art of Sound Institute  2023 - All right reserved</p>
            </footer>
        </div>
    );
};

export default Footer;
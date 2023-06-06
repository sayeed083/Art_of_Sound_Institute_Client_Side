import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin  } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-teal-500 text-primary-content">
                <div>
                    
                    <p className="font-bold">
                        Summer Camp <br />Providing Education For Your Children Since 2002
                    </p>
                    <p>Copyright ©SummerCamp  2023 - All right reserved</p>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <FaFacebook className="text-3xl"></FaFacebook>
                        <FaInstagram className="text-3xl"></FaInstagram>
                        <FaLinkedin className="text-3xl"></FaLinkedin>
                        <FaTwitter className="text-3xl"></FaTwitter>
                        
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
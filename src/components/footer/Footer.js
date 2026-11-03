import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";

import "./style.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://vk.com" target="_blank" rel="noreferrer"><img src={vk} alt="vk" /></a></li>
                        <li className="social__item"><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram" /></a></li>
                        <li className="social__item"><a href="https://x.com" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter" /></a></li>
                        <li className="social__item"><a href="https://github.com/V1Mah" target="_blank" rel="noreferrer"><img src={gitHub} alt="gitHub" /></a></li>
                        <li className="social__item"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><img src={linkedIn} alt="linkedIn" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2022 frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

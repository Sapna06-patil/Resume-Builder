import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="subscribe">
          <p>Updates right to your Inbox</p>
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="footer-links">
          <div>
            <h4>Resumo</h4>
            <ul>
              <li>
                <a href="#">Our story</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Build Resume</a>
              </li>
              <li>
                <a href="#">Cover Letter</a>
              </li>
              <li>
                <a href="#">Template</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>About us</h4>
            <ul>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Meet our team</a>
              </li>
              <li>
                <a href="#">Join Tabulio</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        {/* <p>&copy; Resumo 2022</p> */}
        <p>
          <a href="#">Privacy policy</a> | <a href="#">Terms of use</a>
        </p>
        <div className="social-media">
          <a href="#">
            <img src="path/to/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="path/to/linkedin-icon.png" alt="LinkedIn" />
          </a>
          <a href="#">
            <img src="path/to/instagram-icon.png" alt="Instagram" />
          </a>
          <a href="#">
            <img src="path/to/twitter-icon.png" alt="Twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

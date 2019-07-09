import React from "react"
import { Link } from "gatsby"

import facebook from "../img/social/facebook.svg"
import instagram from "../img/social/instagram.svg"
import twitter from "../img/social/twitter.svg"
import vimeo from "../img/social/vimeo.svg"

const Footer = class extends React.Component {
  render() {
    return (
      <div>
        <section className="footer-bar">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <figure>
                  <img src="images/contact-icon01.png" alt="" />
                </figure>
                <h4>E-MAILS</h4>
                <address>info@coddle.com.br</address>
              </div>
              {/* <!-- end col-3 --> */}
              <div className="col-lg-3 col-md-6">
                <figure>
                  <img src="images/contact-icon02.png" alt="" />
                </figure>
                <h4>PHONES</h4>
                <address>+380 (98) 294 80 86</address>
              </div>
              {/* <!-- end col-3 --> */}
              <div className="col-lg-3 col-md-6">
                <figure>
                  <img src="images/contact-icon03.png" alt="" />
                </figure>
                <h4>SUPPORT</h4>
                <address>Mon to Fri 09:00h to 18:00h</address>
              </div>
              {/* <!-- end col-3 --> */}
              <div className="col-lg-3 col-md-6">
                <figure>
                  <img src="images/contact-icon04.png" alt="" />
                </figure>
                <h4 style={{ display: "none" }}>LOCATION</h4>
                <address>
                  2 ZGC Software Park Ste. 2240-049 <br /> Haidian, Beijing,
                  China
                </address>
              </div>
              {/* <!-- end col-3 -->  */}
            </div>
            {/* <!-- end row -->  */}
          </div>
          {/* <!-- end container -->  */}
        </section>
        {/* <!-- end footer-bar --> */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* <img src="images/logo-light.png" alt="Image" className="logo" /> */}
                <h1>poifuture</h1>
                <p>
                  Poifuture products are continually improving everyone's
                  fantastic life.
                </p>
                <ul>
                  <li>
                    <a href="/">Bilibili</a>
                  </li>
                  <li>
                    <a href="/">YouTube</a>
                  </li>
                  <li>
                    <a href="/">Instagram</a>
                  </li>
                  <li>
                    <a href="/">Facebook</a>
                  </li>
                  <li>
                    <a href="/">Twitter</a>
                  </li>
                  <li>
                    <a href="/">WeChat</a>
                  </li>
                  <li>
                    <a href="/">Weibo</a>
                  </li>
                </ul>
                <small>
                  Copyright © 2018 - 2019 Poifuture Inc. | All Rights Reserved.
                  | <span>京 ICP 备 XXX</span>
                </small>
              </div>
              {/* <!-- end col-12 -->  */}
            </div>
            {/* <!-- end row -->  */}
          </div>
          {/* <!-- end container -->  */}
        </footer>
        {/* <!-- end footer -->  */}

        <div
          className="footer has-background-black has-text-white-ter"
          style={{ display: "none" }}
        >
          <div className="content has-text-centered">
            <h1 style={{ color: "white" }}>poifuture</h1>
          </div>
          <div className="content has-text-centered has-background-black has-text-white-ter">
            <div className="container has-background-black has-text-white-ter">
              <div className="columns">
                <div className="column is-4">
                  <section className="menu">
                    <ul className="menu-list">
                      <li>
                        <Link to="/" className="navbar-item">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/about">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/products">
                          Products
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/contact/examples">
                          Form Examples
                        </Link>
                      </li>
                      <li>
                        <a
                          className="navbar-item"
                          href="/admin/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Admin
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="column is-4">
                  <section>
                    <ul className="menu-list">
                      <li>
                        <Link className="navbar-item" to="/blog">
                          Latest Stories
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="column is-4 social">
                  <a title="facebook" href="https://facebook.com">
                    <img
                      className="fas fa-lg"
                      src={facebook}
                      alt="Facebook"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a title="twitter" href="https://twitter.com">
                    <img
                      className="fas fa-lg"
                      src={twitter}
                      alt="Twitter"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a title="instagram" href="https://instagram.com">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a title="vimeo" href="https://vimeo.com">
                    <img
                      src={vimeo}
                      alt="Vimeo"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer

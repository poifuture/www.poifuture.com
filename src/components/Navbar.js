import React from "react"
import { Link } from "gatsby"
import github from "../img/github-icon.svg"
import logo from "../img/logo.svg"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            })
      }
    )
  }

  render() {
    return (
      <div>
        {/* begin mobile menu */}
        <aside className="hamburger-menu-box">
          <div className="menu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/" className="nav-link transition">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">RETAIL</a>
                <ul>
                  <li>
                    <a>
                      <span style={{ textDecoration: "line-through" }}>
                        AINCRAD
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span style={{ textDecoration: "line-through" }}>
                        LAMBENT
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">EDUCATION</a>
                <ul>
                  <li>
                    <a
                      href="https://github.com/poifuture/poigoi"
                      className="transition"
                    >
                      POI GOI
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">Productivity</a>
                <ul>
                  <li>
                    <a
                      href="https://github.com/poifuture/markdown-styler-for-word"
                      className="transition"
                    >
                      Markdown Styler
                    </a>
                  </li>
                  <li style={{ display: "none" }}>
                    <a href="works-nonspaced-grid.html" className="transition">
                      NONSPACED GRID
                    </a>
                  </li>
                  <li style={{ display: "none" }}>
                    <a href="works-masonry-grid.html" className="transition">
                      MASONRY GRID
                    </a>
                  </li>
                  <li style={{ display: "none" }}>
                    <a href="works-retro-grid.html" className="transition">
                      RETRO GRID
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link transition">
                  NEWS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link transition">
                  CONTACT
                </Link>
              </li>
            </ul>
            {/* <!-- end navbar-nav -->  */}
          </div>
          {/* <!--end menu --> */}
          <div className="inner">
            <div className="swiper-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="images/office01.jpg" alt="" />
                </div>
                {/* <!-- end swiper-slide --> */}
                <div className="swiper-slide">
                  <img src="images/office02.jpg" alt="" />
                </div>
                {/* <!-- end swiper-slide --> */}
                <div className="swiper-slide">
                  <img src="images/office03.jpg" alt="" />
                </div>
                {/* <!-- end swiper-slide -->  */}
              </div>
              {/* <!-- end swiper-wrapper --> */}
              <div className="swiper-pagination"></div>
              {/* <!--end swiper-pagination -->  */}
            </div>
            {/* <!--end swiper-slider --> */}
            <p className="lead">Are you a Chūnibyō patient?</p>
            <a href="/" className="ghost-btn">
              <svg>
                <defs>
                  <linearGradient>
                    <stop offset="0%" stopColor="#FF8282" />
                    <stop offset="100%" stopColor="#E178ED" />
                  </linearGradient>
                </defs>
                <rect
                  width="206"
                  height="50"
                  x="5"
                  y="5"
                  rx="25"
                  fill="none"
                  stroke="#ffffff"
                ></rect>
              </svg>
              <span>Login</span>
            </a>
          </div>
          {/* <!-- end inner -->  */}
        </aside>
        {/* <!-- end hamburger-menu-box --> */}
        {/* end mobile menu */}
        <div className="search-box">
          <div className="inner">
            <h4>SEARCH</h4>
            <form>
              <input type="text" placeholder="Type here to make search" />
              <button type="submit">
                <img src="images/search-icon.svg" alt="" />
              </button>
            </form>
          </div>
          {/* <!-- end inner -->  */}
        </div>
        {/* <!--end search-box --> */}

        <header className="header">
          <div id="particles-bg"></div>
          {/* <!-- end particles-bg --> */}
          <nav className="navbar">
            <div className="logo">
              <Link to="/" className="transition">
                <img
                  src="images/logo-round-100.png"
                  alt=""
                  className="logo-light"
                />
                <img
                  src="images/logo-round-100.png"
                  alt=""
                  className="logo-colored"
                />
              </Link>
            </div>
            {/* <!-- end logo --> */}
            <div className="hamburger-menu">
              <span />
              <span />
              <span />
            </div>
            {/* <!-- hamburger-menu --> */}
            <div className="search-btn" style={{ display: "none" }}></div>
            {/* <!-- end search-btn -->  */}
            <a href="/" className="custom-btn" style={{ display: "none" }}>
              DRIBBBLE
            </a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/" className="nav-link transition">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">RETAIL</a>
                <ul>
                  <li>
                    <a>
                      <span style={{ textDecoration: "line-through" }}>
                        AINCRAD
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span style={{ textDecoration: "line-through" }}>
                        LAMBENT
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">EDUCATION</a>
                <ul>
                  <li>
                    <a
                      href="https://github.com/poifuture/poigoi"
                      className="transition"
                    >
                      POI GOI
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">PRODUCTIVITY</a>
                <ul>
                  <li>
                    <a
                      href="https://github.com/poifuture/markdown-styler-for-word"
                      className="transition"
                    >
                      MARKDOWN STYLER
                    </a>
                  </li>
                  <li style={{ display: "none" }}>
                    <a href="works-nonspaced-grid.html" className="transition">
                      NONSPACED GRID
                    </a>
                  </li>
                  <li style={{ display: "none" }}>
                    <a href="works-masonry-grid.html" className="transition">
                      MASONRY GRID
                    </a>
                  </li>
                  <li style={{ display: "none" }}>
                    <a href="works-retro-grid.html" className="transition">
                      RETRO GRID
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link transition">
                  NEWS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link transition">
                  CONTACT
                </Link>
              </li>
            </ul>
            {/* <!-- end navbar-nav -->  */}
          </nav>
          {/* <!-- end navbar --> */}
          {this.props.hero && this.props.hero.type === "screen" && (
            <div className="inner">
              <h2>{this.props.hero.title}</h2>
              <p>{this.props.hero.subtitle}</p>
              {this.props.hero.onClick && (
                <a onClick={this.props.hero.onClick} className="ghost-btn">
                  <svg>
                    <defs>
                      <linearGradient>
                        <stop offset="0%" stopColor="#FF8282" />
                        <stop offset="100%" stopColor="#E178ED" />
                      </linearGradient>
                    </defs>
                    <rect
                      width="206"
                      height="50"
                      x="5"
                      y="5"
                      rx="25"
                      fill="none"
                      stroke="#ffffff"
                    ></rect>
                  </svg>
                  <span>Discover Now</span>
                </a>
              )}
            </div>
          )}
          {/* <!-- end inner --> */}
        </header>
        {/* <!-- end header --> */}
        <div className="container" style={{ display: "none" }}>
          {/* <div className="container"> */}
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            ></div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar

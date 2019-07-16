import React from "react"
import { Link } from "gatsby"
import SnowParticles from "./SnowParticles"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
      links: [
        { display: "HOME", to: "/" },
        {
          display: "RETAIL",
          to: [
            {
              display: "AINCRAD",
              discription: "AR platform",
              to: "#",
              isEnabled: false,
            },
            {
              display: "LAMBENT",
              discription: "AR fitting room",
              to: "#",
              isEnabled: false,
            },
          ],
        },
        {
          display: "EDUCATION",
          to: [
            {
              display: "GOI",
              discription: "Recite words",
              to: "https://github.com/poifuture/poigoi",
            },
          ],
        },
        {
          display: "PRODUCTIVITY",
          to: [
            {
              display: "MARKDOWN STYLER",
              discription: "Style your markdown document",
              to: "https://github.com/poifuture/markdown-styler-for-word",
            },
            {
              display: "GOLINK",
              discription: "Team wide url shortner",
              to: "https://github.com/poifuture/golink-gh-pages",
            },
          ],
        },
        { display: "NEWS", to: "/blog" },
        { display: "CONTACT", to: "/contact" },
      ],
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
              {this.state.links.map(toplevel => (
                <li key={toplevel.display} className="nav-item">
                  {typeof toplevel.to === "string" ? (
                    toplevel.to.startsWith("http") ? (
                      <a
                        href={toplevel.to}
                        className="nav-link"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {toplevel.display}
                      </a>
                    ) : (
                      <Link to={toplevel.to} className="nav-link transition">
                        {toplevel.display}
                      </Link>
                    )
                  ) : (
                    [
                      /* eslint-disable-next-line */
                      <a key="memu" className="nav-link">
                        {toplevel.display}
                      </a>,
                      <ul key="items">
                        {toplevel.to.map(sublevel => (
                          <li key={sublevel.display}>
                            {sublevel.to.startsWith("http") ? (
                              <a
                                href={sublevel.to}
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <span
                                  {...(sublevel.isEnabled === false && {
                                    style: { textDecoration: "line-through" },
                                  })}
                                >
                                  {sublevel.display}
                                </span>
                              </a>
                            ) : (
                              <Link to={sublevel.to} className="transition">
                                <span
                                  {...(sublevel.isEnabled === false && {
                                    style: { textDecoration: "line-through" },
                                  })}
                                >
                                  {sublevel.display}
                                </span>
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>,
                    ]
                  )}
                </li>
              ))}
            </ul>
            {/* <!-- end navbar-nav -->  */}
          </div>
          {/* <!--end menu --> */}
          <div className="inner">
            <div className="swiper-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="/images/office01.jpg" alt="" />
                </div>
                {/* <!-- end swiper-slide --> */}
                <div className="swiper-slide">
                  <img src="/images/office02.jpg" alt="" />
                </div>
                {/* <!-- end swiper-slide --> */}
                <div className="swiper-slide">
                  <img src="/images/office03.jpg" alt="" />
                </div>
                {/* <!-- end swiper-slide -->  */}
              </div>
              {/* <!-- end swiper-wrapper --> */}
              <div className="swiper-pagination"></div>
              {/* <!--end swiper-pagination -->  */}
            </div>
            {/* <!--end swiper-slider --> */}
            <p className="lead">Are you a Chūnibyō?</p>
            {/* eslint-disable-next-line */}
            <a className="ghost-btn">
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
                <img src="/images/search-icon.svg" alt="" />
              </button>
            </form>
          </div>
          {/* <!-- end inner -->  */}
        </div>
        {/* <!--end search-box --> */}

        <header className="header">
          <SnowParticles />
          {/* <!-- end particles-bg --> */}
          <nav className="navbar">
            <div className="logo">
              <Link to="/" className="transition">
                <img
                  src="/images/logo-round-100.png"
                  alt=""
                  className="logo-light"
                />
                <img
                  src="/images/logo-round-100.png"
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
              {this.state.links.map(toplevel => (
                <li className="nav-item">
                  {typeof toplevel.to === "string" ? (
                    toplevel.to.startsWith("http") ? (
                      <a
                        href={toplevel.to}
                        className="nav-link"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {toplevel.display}
                      </a>
                    ) : (
                      <Link to={toplevel.to} className="nav-link transition">
                        {toplevel.display}
                      </Link>
                    )
                  ) : (
                    [
                      /* eslint-disable-next-line */
                      <a className="nav-link">{toplevel.display}</a>,
                      <ul>
                        {toplevel.to.map(sublevel => (
                          <li>
                            {sublevel.to.startsWith("http") ? (
                              <a
                                href={sublevel.to}
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <span
                                  {...(sublevel.isEnabled === false && {
                                    style: { textDecoration: "line-through" },
                                  })}
                                >
                                  {sublevel.display}
                                </span>
                              </a>
                            ) : (
                              <Link to={sublevel.to} className="transition">
                                <span
                                  {...(sublevel.isEnabled === false && {
                                    style: { textDecoration: "line-through" },
                                  })}
                                >
                                  {sublevel.display}
                                </span>
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>,
                    ]
                  )}
                </li>
              ))}
            </ul>
            {/* <!-- end navbar-nav -->  */}
          </nav>
          {/* <!-- end navbar --> */}
          {this.props.hero && this.props.hero.type === "screen" && (
            <div className="inner">
              <h2>{this.props.hero.title}</h2>
              <p>{this.props.hero.subtitle}</p>
              {this.props.hero.onClick && (
                /* eslint-disable-next-line */
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
      </div>
    )
  }
}

export default Navbar

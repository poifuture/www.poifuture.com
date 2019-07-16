import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

import Layout from "../components/Layout"
import Features from "../components/Features"
import BlogRoll from "../components/BlogRoll"
import { FlipGrid, FlipItem } from "../components/FlipGrid"

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <section id="mainpitch" className="side-image-content">
      <div className="side-image">
        <div className="left">
          <div className="reveal-effect se2-white wow" data-aos="slide-effect">
            <img src="images/image1.jpg" alt="" />
          </div>
          {/* <!-- end slide-effect --> */}
          <div
            className="reveal-effect se2-white wow small-image"
            data-aos="slide-effect"
          >
            <img src="images/image2.jpg" alt="" />
          </div>
          {/* <!-- end slide-effect -->  */}
        </div>
        {/* <!-- end left --> */}
        <div className="right">
          <div className="reveal-effect se2-white wow" data-aos="slide-effect">
            <img src="images/image3.jpg" alt="" />
          </div>
          {/* <!-- end slide-effect -->  */}
        </div>
        {/* <!-- end right -->  */}
      </div>
      {/* <!-- end side-image --> */}
      <div className="side-content">
        <div className="titles">
          <span className="title-bg"></span>
          <h3>{mainpitch.title}</h3>
        </div>
        {/* <!-- end titles --> */}
        <p>{mainpitch.description}</p>
        {/* eslint-disable-next-line */}
        <a className="ghost-btn">
          <svg>
            <defs>
              <linearGradient id="grad1">
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
              stroke="url(#grad1)"
            ></rect>
          </svg>
          <span>Learn More +</span>
        </a>
      </div>
      {/* <!-- end side-content -->  */}
    </section>
    {/* <!-- end side-image-content --> */}

    <section className="feeding-coddle">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-2 col-md-2 col-6">
            <figure>
              <img src="images/icon-food01.jpg" alt="" />
            </figure>
            <h6>Products</h6>
            <span className="odometer" id="1">
              1
            </span>
          </div>
          {/* <!-- end col-2 --> */}
          <div className="col-lg-2 col-md-2 col-6">
            <figure>
              <img src="images/icon-food02.jpg" alt="" />
            </figure>
            <h6>Customers</h6>
            <span className="odometer" id="2">
              0
            </span>
          </div>
          {/* <!-- end col-2 --> */}
          <div className="col-lg-2 col-md-2 col-6" style={{ display: "none" }}>
            <figure>
              <img src="images/icon-food03.jpg" alt="" />
            </figure>
            <h6>Stars</h6>
            <span className="odometer" id="3">
              1
            </span>
          </div>
          {/* <!-- end col-2 --> */}
          <div className="col-lg-2 col-md-2 col-6">
            <figure>
              <img src="images/icon-food04.jpg" alt="" />
            </figure>
            <h6>Partners</h6>
            <span className="odometer" id="4">
              0
            </span>
          </div>
          {/* <!-- end col-2 -->  */}
        </div>
        {/* <!-- end row -->  */}
      </div>
      {/* <!-- end container -->  */}
    </section>
    {/* <!-- end feeding-coddle --> */}

    <section className="main-features" style={{ display: "none" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="titles">
              <span className="title-bg"></span>
              <h3>MAIN FEATURES</h3>
            </div>
            {/* <!-- end titles --> */}
          </div>
          {/* <!-- end col-12 --> */}
          <div className="col-lg-3 col-md-6">
            <div className="feature-box">
              <figure>
                <img src="images/icon01.png" alt="" />
              </figure>
              <span></span>
              <h5>UI-UX DESIGN</h5>
              <p>
                Interactive digital experiences are continually becoming more
                amazing and more complex to
              </p>
              <ul>
                <li>
                  <a href="/">
                    <img src="images/icon-check.svg" alt="" />
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="images/icon-check.svg" alt="" />
                    Development
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="images/icon-check.svg" alt="" />
                    User Experience
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="images/icon-check.svg" alt="" />
                    Digital Ads
                  </a>
                </li>
              </ul>
              <a href="/" className="more-link">
                +
              </a>
            </div>
            {/* <!-- end feature-box -->  */}
          </div>
          {/* <!-- end col-3 --> */}
          <div className="col-lg-3 col-md-6">
            <div className="feature-box">
              <figure>
                <img src="images/icon02.png" alt="" />
              </figure>
              <span></span>
              <h5>MARKETTING</h5>
              <p>
                Interactive digital experiences are continually becoming more
                amazing and more complex to
              </p>
              <ul>
                <li>
                  {/* eslint-disable-next-line */}
                  <a>
                    <img src="images/icon-check.svg" alt="" />
                    Web Design
                  </a>
                </li>
                <li>
                  {/* eslint-disable-next-line */}
                  <a>
                    <img src="images/icon-check.svg" alt="" />
                    Development
                  </a>
                </li>
                <li>
                  {/* eslint-disable-next-line */}
                  <a>
                    <img src="images/icon-check.svg" alt="" />
                    User Experience
                  </a>
                </li>
                <li>
                  {/* eslint-disable-next-line */}
                  <a>
                    <img src="images/icon-check.svg" alt="" />
                    Digital Ads
                  </a>
                </li>
              </ul>
              <a href="/" className="more-link">
                +
              </a>
            </div>
            {/* <!-- end feature-box -->  */}
          </div>
          {/* <!-- end col-3 --> */}
          <div className="col-lg-3 col-md-6">
            <div className="feature-box">
              <figure>
                <img src="images/icon03.png" alt="" />
              </figure>
              <span></span>
              <h5>WEB STRATEGY</h5>
              <p>
                Interactive digital experiences are continually becoming more
                amazing and more complex to
              </p>
              <ul>
                <li>
                  <a href="/">
                    <img src="images/icon-check.svg" alt="" />
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="images/icon-check.svg" alt="" />
                    Development
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="images/icon-check.svg" alt="" />
                    User Experience
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="images/icon-check.svg" alt="" />
                    Digital Ads
                  </a>
                </li>
              </ul>
              <a href="/" className="more-link">
                +
              </a>
            </div>
            {/* <!-- end feature-box -->  */}
          </div>
          {/* <!-- end col-3 --> */}
          <div className="col-lg-3 col-md-6">
            <div className="feature-box">
              <figure>
                <img src="images/icon04.png" alt="" />
              </figure>
              <span></span>
              <h5>DEVELOPMENT</h5>
              <p>
                Interactive digital experiences are continually becoming more
                amazing and more complex to
              </p>
              <ul>
                <li>
                  <a href="/">
                    <img src="images/icon-check.svg" alt="" />
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="images/icon-check.svg" alt="" />
                    Development
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="images/icon-check.svg" alt="" />
                    User Experience
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="images/icon-check.svg" alt="" />
                    Digital Ads
                  </a>
                </li>
              </ul>
              <a href="/" className="more-link">
                +
              </a>
            </div>
            {/* <!-- end feature-box -->  */}
          </div>
          {/* <!-- end col-3 -->  */}
        </div>
        {/* <!-- end row -->  */}
      </div>
      {/* <!-- end container -->  */}
    </section>
    {/* <!-- end main-features --> */}
    <section className="recent-works">
      <div className="titles">
        <span className="title-bg"></span>
        <h3>Products</h3>
      </div>
      {/* <!-- end titles --> */}
      <FlipGrid
        filters={["Retail", "Education", "Productivity"]}
        items={[
          <FlipItem filterKey="Retail">
            <div className="coddle__box">
              <figure className="coddle__box__figure">
                <div
                  className="reveal-effect se2-white wow"
                  data-aos="slide-effect"
                >
                  <img
                    className="coddle__box__image"
                    src="images/isolayer1.jpg"
                    alt=""
                  />
                </div>
                <div className="coddle__box__deco coddle__box__deco--shine">
                  <div></div>
                </div>
                <figcaption className="coddle__box__caption">
                  <h4 className="coddle__box__title">
                    <a href="images/isolayer1.jpg" data-fancybox>
                      [WIP] Aincrad
                    </a>
                  </h4>
                  <p className="coddle__box__description">
                    The immersive shopping mall
                  </p>
                </figcaption>
              </figure>
            </div>
            {/* <!--end coddle__box --> */}
          </FlipItem>,
          <FlipItem filterKey="Retail">
            <div className="coddle__box">
              <figure className="coddle__box__figure">
                <div
                  className="reveal-effect se2-white wow"
                  data-aos="slide-effect"
                >
                  <img
                    className="coddle__box__image"
                    src="images/isolayer2.jpg"
                    alt=""
                  />
                </div>
                <div className="coddle__box__deco coddle__box__deco--shine">
                  <div></div>
                </div>
                <figcaption className="coddle__box__caption">
                  <h4 className="coddle__box__title">
                    <a href="images/isolayer2.jpg" data-fancybox>
                      [WIP] Lambent
                    </a>
                  </h4>
                  <p className="coddle__box__description">
                    The immersive fitting room
                  </p>
                </figcaption>
              </figure>
            </div>
            {/* <!--end coddle__box -->  */}
          </FlipItem>,
          <FlipItem filterKey="Education">
            <div className="coddle__box">
              <figure className="coddle__box__figure">
                <div
                  className="reveal-effect se2-white wow"
                  data-aos="slide-effect"
                >
                  <img
                    className="coddle__box__image"
                    src="images/isolayer3.jpg"
                    alt=""
                  />
                </div>
                <div className="coddle__box__deco coddle__box__deco--shine">
                  <div></div>
                </div>
                <figcaption className="coddle__box__caption">
                  <h4 className="coddle__box__title">
                    <a href="images/isolayer3.jpg" data-fancybox>
                      [WIP] Goi
                    </a>
                  </h4>
                  <p className="coddle__box__description">
                    Recite words easily
                  </p>
                </figcaption>
              </figure>
            </div>
            {/* <!--end coddle__box -->  */}
          </FlipItem>,
          <FlipItem filterKey="Productivity">
            <div className="coddle__box">
              <figure className="coddle__box__figure">
                <div
                  className="reveal-effect se2-white wow"
                  data-aos="slide-effect"
                >
                  <img
                    className="coddle__box__image"
                    src="images/isolayer4.jpg"
                    alt=""
                  />
                </div>
                <div className="coddle__box__deco coddle__box__deco--shine">
                  <div></div>
                </div>
                <figcaption className="coddle__box__caption">
                  <h4 className="coddle__box__title">
                    <a href="images/isolayer4.jpg" data-fancybox>
                      Markdown Styler
                    </a>
                  </h4>
                  <p className="coddle__box__description">
                    Style your markdown doc
                  </p>
                </figcaption>
              </figure>
            </div>
            {/* <!--end coddle__box -->  */}
          </FlipItem>,
          <FlipItem filterKey="Productivity">
            <div className="coddle__box">
              <figure className="coddle__box__figure">
                <div
                  className="reveal-effect se2-white wow"
                  data-aos="slide-effect"
                >
                  <img
                    className="coddle__box__image"
                    src="images/isolayer5.jpg"
                    alt=""
                  />
                </div>
                <div className="coddle__box__deco coddle__box__deco--shine">
                  <div></div>
                </div>
                <figcaption className="coddle__box__caption">
                  <h4 className="coddle__box__title">
                    <a href="images/isolayer5.jpg" data-fancybox>
                      GoLink
                    </a>
                  </h4>
                  <p className="coddle__box__description">Recall docs easily</p>
                </figcaption>
              </figure>
            </div>
            {/* <!--end coddle__box -->  */}
          </FlipItem>,
        ]}
      />
    </section>

    <section className="clients">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="titles">
              <span className="title-bg"></span>
              <h3>Partners</h3>
            </div>
            {/* <!-- end titles --> */}
            <ul>
              <li>
                <img src="images/logo01.jpg" alt="" />
              </li>
              <li>
                <img src="images/logo02.jpg" alt="" />
              </li>
              <li>
                <img src="images/logo03.jpg" alt="" />
              </li>
              <li>
                <img src="images/logo04.jpg" alt="" />
              </li>
              <li>
                <img src="images/logo05.jpg" alt="" />
              </li>
              <li>
                <img src="images/logo06.jpg" alt="" />
              </li>
            </ul>
          </div>
          {/* <!-- end col-12 -->  */}
        </div>
        {/* <!-- end row -->  */}
      </div>
      {/* <!-- container -->  */}
    </section>
    {/* <!-- end clients --> */}

    <section className="recent-news">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="titles">
              <span className="title-bg"></span>
              <h3>News & Blogs</h3>
            </div>
            {/* <!-- end titles -->  */}
          </div>

          <div className="col-lg-4">
            <div className="news-box">
              <figure>
                <img src="images/news02.jpg" alt="" />
              </figure>
              <div className="news-content">
                <small>10 July 2019 | by poifuture</small>
                <h3>Markdown Styler for MS Word is released</h3>
                <p>Improve the productivity for teamwork</p>
                <a href="https://github.com/poifuture/markdown-styler-for-word">
                  READ MORE
                </a>
              </div>
              {/* <!-- end news-content -->  */}
            </div>
            {/* <!-- end news-box -->  */}
          </div>
          {/* <!-- end col-4 --> */}

          <div className="col-lg-4">
            <div className="news-box">
              <figure>
                <img src="images/news03.jpg" alt="" />
              </figure>
              <div className="news-content">
                <small>25 December 2018 | by poifuture</small>
                <h3>We moved to Zhong Guan Cun Incubator</h3>
                <p>
                  2 ZGC Software Park Ste. 2240-049, Haidian, Beijing 100085,
                  China.
                </p>
                <a href="/">READ MORE</a>
              </div>
              {/* <!-- end news-content -->  */}
            </div>
            {/* <!-- end news-box -->  */}
          </div>
          {/* <!-- end col-4 -->  */}

          <div className="col-lg-4">
            <div className="news-box">
              <figure>
                <img src="images/news01.jpg" alt="" />
              </figure>
              <div className="news-content">
                <small>26 June 2018 | by poifuture</small>
                <h3>poifuture is founded by Chūnibyō</h3>
                <p>
                  Today in history 10 years ago, doriko, the famous music
                  producer, wrote "A letter to my future self of 10 years" (also
                  known as "letter song") for Hatsune Miku. And today, the
                  answer to the letter from the team poi, is to found the
                  poifuture inc.
                </p>
                <a href="https://www.nicovideo.jp/watch/sm3771514">READ MORE</a>
              </div>
            </div>
          </div>
          {/* <!-- end col-4 -->  */}
        </div>
        {/* <!-- end row -->  */}
      </div>
      {/* <!-- container -->  */}
    </section>
    {/* <!-- end recent-news --> */}

    <section className="quote-bar">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>Join us?</h4>
            <p>
              If you are also a Chūnibyō patient and hope to change the world
              with us, please reach out at xxx@xxx.com
            </p>
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
              <span>GET IN TOUCH</span>
            </a>
          </div>
          {/* <!-- end col-12 -->  */}
        </div>
        {/* <!-- end row -->  */}
      </div>
      {/* <!-- end container -->  */}
    </section>
    {/* <!-- end quote-bar --> */}

    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
        display: "none",
      }}
    ></div>
    <section className="section section--gradient" style={{ display: "none" }}>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const hero = {
    type: "screen",
    title: frontmatter.title,
    subtitle: frontmatter.subheading,
    onClick: () =>
      document
        .getElementById("mainpitch")
        .scrollIntoView({ behavior: "smooth" }),
  }

  return (
    <Layout hero={hero}>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`

import React from "react"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "./all.sass"
import useSiteMetadata from "./SiteMetadata"

const TemplateWrapper = ({ children, hero }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        {/* start Coddle Template */}
        <html lang="en" />

        {/* META TAGS */}
        <meta name="format-detection" content="telephone=no" />
        <title>{title}</title>
        <meta name="author" content="poifuture" />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="creative, works, showcase, portfolio, highlight, projects, parallax, agency, digital, studio, css, animation, transition, svg, html, css"
        />

        {/* SOCIAL MEDIA META */}
        {/* TODO */}
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/img/og-image.jpg" />
        <meta property="og:site_name" content="poifuture" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="business" />
        <meta property="og:url" content="/" />

        {/* TWITTER META */}
        {/* TODO */}

        {/* FAVICON FILES */}
        {/* TODO */}

        {/* CSS FILES */}
        {/* TODO: Move to native react */}
        <link rel="stylesheet" href="css/odometer.min.css" />
        <link rel="stylesheet" href="css/fancybox.min.css" />
        <link rel="stylesheet" href="css/swiper.min.css" />
        <link rel="stylesheet" href="css/isolayer.css" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/style.css" />

        {/* end Coddle Template */}
        <meta name="theme-color" content="#99ccff" />
      </Helmet>
      {/* start preloader */}
      {/* disable preloader because the loading order is different in react */}
      <div className="preloader" style={{ display: "none" }}>
        <svg className="spinner" viewBox="0 0 50 50">
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
          ></circle>
        </svg>
      </div>
      {/* end preloader */}
      <div className="transition-overlay"></div>
      <Navbar hero={hero} />
      <div>{children}</div>
      <Footer />
      {/* <!-- JS FILES -->  */}
      {/* are located in the gastby browser */}
    </div>
  )
}

export default TemplateWrapper

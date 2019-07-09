const loadScript = async src => {
  return new Promise(resolve => {
    const script = document.createElement("script")
    script.src = src
    script.type = "text/javascript"
    script.async = true
    script.onload = () => {
      resolve()
    }
    document.getElementsByTagName("head")[0].appendChild(script)
  })
}
const loadAllScripts = async () => {
  await loadScript("js/modernizr.custom.js")
  await loadScript("js/jquery.min.js")
  await Promise.all([
    loadScript("js/popper.min.js"),
    loadScript("js/bootstrap.min.js"),
    loadScript("js/isotope.js"),
    loadScript("js/imagesloaded.pkgd.min.js"),
    loadScript("js/dynamics.min.js"),
    loadScript("js/classie.js"),
    loadScript("js/isolayer.js"),
    loadScript("js/fancybox.min.js"),
    loadScript("js/swiper.min.js"),
    loadScript("js/perspective.js"),
    loadScript("js/anime.min.js"),
    loadScript("js/wow.min.js"),
    loadScript("js/odometer.min.js"),
    loadScript("js/readmore.min.js"),
    loadScript("js/particles.min.js"),
  ])
  await loadScript("js/scripts.js")
}

exports.onInitialClientRender = () => {
  console.log("ReactDOM.render has executed")
  loadAllScripts()
    .then(() => {
      document.getElementsByTagName("body")[0].className += " page-loaded"
      console.log("load all done")
    })
    .catch(error => console.error(error))
}

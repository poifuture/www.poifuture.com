(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{177:function(e,a,t){"use strict";t.r(a),t.d(a,"IndexPageTemplate",function(){return d}),t.d(a,"pageQuery",function(){return p});var i=t(0),n=t.n(i),s=t(11),l=t.n(s),r=t(189),c=t(192),m=t(207),o=t(213),d=function(e){var a=e.image,t=e.title,i=e.heading,s=e.subheading,l=e.mainpitch,c=e.description,d=e.intro;return n.a.createElement("div",null,n.a.createElement("div",{className:"full-width-image margin-top-0",style:{backgroundImage:"url("+(a.childImageSharp?a.childImageSharp.fluid.src:a)+")",backgroundPosition:"top left",backgroundAttachment:"fixed"}},n.a.createElement("div",{style:{display:"flex",height:"150px",lineHeight:"1",justifyContent:"space-around",alignItems:"left",flexDirection:"column"}},n.a.createElement("h1",{className:"has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen",style:{boxShadow:"rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",backgroundColor:"rgb(255, 68, 0)",color:"white",lineHeight:"1",padding:"0.25em"}},t),n.a.createElement("h3",{className:"has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen",style:{boxShadow:"rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",backgroundColor:"rgb(255, 68, 0)",color:"white",lineHeight:"1",padding:"0.25em"}},s))),n.a.createElement("section",{className:"section section--gradient"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"section"},n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column is-10 is-offset-1"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"tile"},n.a.createElement("h1",{className:"title"},l.title)),n.a.createElement("div",{className:"tile"},n.a.createElement("h3",{className:"subtitle"},l.description))),n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column is-12"},n.a.createElement("h3",{className:"has-text-weight-semibold is-size-2"},i),n.a.createElement("p",null,c))),n.a.createElement(m.a,{gridItems:d.blurbs}),n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column is-12 has-text-centered"},n.a.createElement(r.a,{className:"btn",to:"/products"},"See all products"))),n.a.createElement("div",{className:"column is-12"},n.a.createElement("h3",{className:"has-text-weight-semibold is-size-2"},"Latest stories"),n.a.createElement(o.a,null),n.a.createElement("div",{className:"column is-12 has-text-centered"},n.a.createElement(r.a,{className:"btn",to:"/blog"},"Read more"))))))))))};d.propTypes={image:l.a.oneOfType([l.a.object,l.a.string]),title:l.a.string,heading:l.a.string,subheading:l.a.string,mainpitch:l.a.object,description:l.a.string,intro:l.a.shape({blurbs:l.a.array})};var g=function(e){var a=e.data.markdownRemark.frontmatter;return n.a.createElement(c.a,null,n.a.createElement(d,{image:a.image,title:a.title,heading:a.heading,subheading:a.subheading,mainpitch:a.mainpitch,description:a.description,intro:a.intro}))};g.propTypes={data:l.a.shape({markdownRemark:l.a.shape({frontmatter:l.a.object})})},a.default=g;var p="4066978147"},207:function(e,a,t){"use strict";var i=t(0),n=t.n(i),s=t(11),l=t.n(s),r=t(203),c=function(e){var a=e.gridItems;return n.a.createElement("div",{className:"columns is-multiline"},a.map(function(e){return n.a.createElement("div",{key:e.text,className:"column is-6"},n.a.createElement("section",{className:"section"},n.a.createElement("div",{className:"has-text-centered"},n.a.createElement("div",{style:{width:"240px",display:"inline-block"}},n.a.createElement(r.a,{imageInfo:e}))),n.a.createElement("p",null,e.text)))}))};c.propTypes={gridItems:l.a.arrayOf(l.a.shape({image:l.a.oneOfType([l.a.object,l.a.string]),text:l.a.string}))},a.a=c}}]);
//# sourceMappingURL=component---src-templates-index-page-js-6c2e8f02aad5fae2b789.js.map
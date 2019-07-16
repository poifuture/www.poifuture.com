import React from "react"

import Layout from "../../components/Layout"
import BlogRoll from "../../components/BlogRoll"

export default class BlogIndexPage extends React.Component {
  render() {
    const hero = {
      type: "helmet",
      title: "News & Blogs",
      subtitle: "Discover what's new from poifuture",
    }
    return (
      <Layout hero={hero}>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

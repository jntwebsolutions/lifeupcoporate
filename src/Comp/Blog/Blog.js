import React from 'react'
import "./Blog.css";
import TopBanner from '../Common/TopBanner/TopBanner';
const Blog = () => {
    const data = {
        name: "blog"
      }
    return (
        <section className='for-top-spacing' id='blog-page'>
            {/* blog banner start */}
            <TopBanner {...data} />
            {/* blog banner end */}
        </section>

    )
}

export default Blog

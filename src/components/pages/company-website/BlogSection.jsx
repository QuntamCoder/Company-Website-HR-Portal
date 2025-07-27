import React from 'react';
import './css/BlogSection.css'; // Ensure you have the correct path to your CSS file
const BlogSection = ({ blogRef }) => {
  return (
    <section ref={blogRef} className="section blog-section">
      <h2>Our Blog</h2>
      <p>
        Stay informed with the latest industry trends, expert insights, and
        practical tips from our team. Our blog is where we share thought
        leadership, tech tutorials, product updates, and more.
      </p>

      <div className="blog-articles">
        <article className="blog-article">
          <h3>5 Emerging Tech Trends Every Business Should Watch in 2025</h3>
          <p>
            From AI-powered automation to decentralized platforms, we explore
            the key technologies set to reshape the business landscape in the
            coming year.
          </p>
          <em>Posted on July 12, 2025</em>
        </article>

        <article className="blog-article">
          <h3>Why Your Business Needs a Scalable Cloud Infrastructure</h3>
          <p>
            Discover how migrating to the cloud can improve flexibility, reduce
            costs, and enable faster innovation—plus tips to make your
            transition smooth.
          </p>
          <em>Posted on June 28, 2025</em>
        </article>

        <article className="blog-article">
          <h3>Understanding the Basics of DevOps: A Beginner's Guide</h3>
          <p>
            DevOps isn't just a buzzword—it's a cultural shift. Learn how
            development and operations teams can work together to build better,
            faster, and more reliably.
          </p>
          <em>Posted on June 10, 2025</em>
        </article>
      </div>

      <p>
        <strong>
          Explore more articles on digital transformation, software engineering
          best practices, and IT management strategies in our full blog archive.
        </strong>
        <br />
        <a href="/blog" className="view-all-btn">
          View All Articles
        </a>
      </p>
    </section>
  );
};

export default BlogSection;
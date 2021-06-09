import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import profilePic from "../images/profile-pic.jpg";
import SEO from "../components/seo";

const IndexPage = (props) => (
  <Layout location={props.location}>
    <SEO title="Home" />
    <h1>Hey everyone!</h1>
    <img
      src={profilePic}
      alt="profilePic"
      style={{
        width: "200px",
        height: "400px",
        borderRadius: "40px",
      }}
    />
    <p>My name is Jason Chiarulli.</p>
    <p>I enjoy learning about JavaSricpt & Python.</p>
    <p>One day this blog will look much better.</p>
    <p>But for now this will do.</p>
    <p>Check out the navbar toggle when the page is 1025px or less in width.</p>
    <p>It's pretty nifty.</p>

    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage;

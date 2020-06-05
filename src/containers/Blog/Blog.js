import React, { Component } from "react";

import BlogComponent from "../../components/Blog/Blog";
import Footer from "../../components/Footer/Footer";

class Blog extends Component {
  componentDidMount() {
    window.mediumWidget();
  }
  render() {
    return (
      <React.Fragment>
        <BlogComponent />
      </React.Fragment>
    );
  }
}

export default Blog;

import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer>
          <p>This is footer menu:</p>
          <nav>
            <a href="">Home</a> |
            <a href="">About</a> |
            <a href="">Contact</a>
          </nav>
        </footer>
        {this.props.children}
      </>
    );
  }
}

export default Footer;
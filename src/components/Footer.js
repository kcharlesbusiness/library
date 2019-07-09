import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="bm-footer">
        <div className="copyright">
          &copy; {new Date().getFullYear()} Black Magic Digital. All Right Reserved.
        </div>
        <div className="supporters">
          <a href="https://karlcharles.co.uk" target="_blank" title="Karl Charles Software Engineer">Author</a>
        </div>
      </footer>
    );
  };
}

export default Footer;
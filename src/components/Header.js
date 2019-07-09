import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="bm--header">
        <Link to="/">Black Magic Component Library</Link>
      </header>
    );
  }
}

export default Header;
import React, { Component } from 'react';
import { graphql } from "react-apollo";

import fetchElement from './queries/fetchElement';
import Sidebar from './sidebar/SidebarElementList';

class ElementDetail extends Component {
  render() {
    const { element, loading } = this.props.data;

    if( loading ) return <div className="container">Loading...</div>;

    return (
      <div className="element--detail">
        <Sidebar currentElement={element.id}/>
        <div>
          <h2>{element.title}</h2>
        </div>
      </div>
    );
  };
}

export default graphql(fetchElement, {
  options: (props) => {
    return {
      variables: {
        id: props.match.params.id
      }
    }
  }
})(ElementDetail);
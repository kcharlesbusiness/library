import React, { Component } from 'react';
import { graphql } from "react-apollo";

import fetchElement from './queries/fetchElement';
import Sidebar from './sidebar/SidebarElementList';

import './styles/elementDetail.scss';

class ElementDetail extends Component {
  render() {
    const { element, loading } = this.props.data;

    if( loading ) return <div className="container">Loading...</div>;

    return (
      <div className="element--detail">
        <div className="element--detail__sidebar">
          <Sidebar className="" currentElement={element.id}/>
        </div>
        <div className="element--detail__content">
          <div className="element--detail__content--title">
            <h1>{element.title}</h1>
          </div>
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
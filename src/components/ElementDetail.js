import React, { Component } from 'react';
import { graphql } from "react-apollo";

import fetchElement from './queries/fetchElement';
import Sidebar from './sidebar/SidebarElementList';

import './styles/elementDetail.scss';

class ElementDetail extends Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props);

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
          <div className="element--detail__content--nav">

          </div>

          <div className="element--detail__content--live">
            <div className="element--detail__content--live__example"></div>
            <div className="element--detail__content--live__code"></div>
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
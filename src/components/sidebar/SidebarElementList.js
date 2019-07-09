import React, { Component } from 'react';
import { graphql } from "react-apollo";

import fetchElements from '../queries/fetchElements';
import { renderElements } from "../renderMethods";

class SidebarElementList extends Component {
  render() {
    if( this.props.data.loading === true ) return <div>Loading Sidebar...</div>;

    return (
      <div className="sidebar--list">
        <ul>
          {renderElements(this.props, true)}
        </ul>
      </div>
    );
  }
}

export default graphql(fetchElements)(SidebarElementList);
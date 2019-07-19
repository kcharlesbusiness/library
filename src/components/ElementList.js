import React, { Component } from 'react';
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";

import fetchElements from './queries/fetchElements';
import deleteElement from './mutations/deleteElement';
import { renderElements } from './renderMethods';

import './styles/elementList.scss';

class ElementList extends Component {
  render(){
    if( this.props.data.loading === true ) return <div>Loading...</div>;

    console.log(this.props);

    return(
      <div className="bm--list">
        <h1>Element List</h1>
        <ul className="collection">
          {renderElements(this.props)}
        </ul>
        <Link to="/elements/new" className="btn-floating btn-large red right"><i className="material-icons">+</i></Link>
      </div>
    )
  }
}

export default
  graphql(deleteElement)(
   graphql(fetchElements)(ElementList)
);
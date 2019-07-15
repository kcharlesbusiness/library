import React, { Component } from 'react';
import { graphql } from "react-apollo";
import { Link, withRouter } from "react-router-dom";

import fetchElements from './queries/fetchElements';
import addElement from './mutations/addElement';

class ElementCreate extends Component {
  constructor(props){
    super(props);

    this.state = { title: '' };
  };

  onSubmit(event){
    event.preventDefault();

    let slug = this.state.title.toLowerCase()
      .replace(' ', '-');

    return this.props.mutate({
      variables: {
        title: this.state.title,
        slug: slug
      },
      refetchQueries: [{ query: fetchElements }]
    }).then(() => this.props.history.push('/'));
  }

  render(){
    return (
      <div>
        <Link to='/'>Back</Link>
        <h3>Create A New Element</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Enter title:</label>
          <input type="text" value={this.state.title} onChange={event => this.setState({ title: event.target.value })} />
        </form>
      </div>
    );
  }
}

export default graphql(addElement)(withRouter(ElementCreate));
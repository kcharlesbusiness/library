import {NavLink} from "react-router-dom";
import React from "react";

/**
 * @param props
 * @param id
 * @returns {Promise<ApolloQueryResult<TData> | ApolloQueryResult<T> | never>}
 */
function onSongDelete(props, id){
  return props.mutate({ variables: {id} })
    .then(() => props.data.refetch());
}

/**
 * Render All Elements
 * @param props
 * @param isSidebar
 * @returns {*}
 */
export function renderElements(props, isSidebar = false){
  return props.data.elements.map(({id, title}) => {
    if( isSidebar ){
      return (
        <li className="collection-item" key={id}>
          <NavLink to={`/elements/${id}`} activeClassName="active">{title}</NavLink>
        </li>
      );
    }

    return (
      <li className="collection-item" key={id}>
        <NavLink to={`/elements/${id}`} activeClassName="active">{title}</NavLink>
        <i className="material-icons right" onClick={() => onSongDelete(props, id)}>delete</i>
      </li>
    )
  });
}
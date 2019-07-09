import {Link} from "react-router-dom";
import React from "react";

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
          <Link to={`/elements/${id}`}>{title}</Link>
        </li>
      );
    }

    return (
      <li className="collection-item" key={id}>
        <Link to={`/elements/${id}`}>{title}</Link>
        <i className="material-icons right" onClick={() => this.onSongDelete(id)}>delete</i>
      </li>
    )
  });
}
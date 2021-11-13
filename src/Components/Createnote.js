import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
export default function Navbar(props) {
    const indexSend=(id)=>{
        props.dd(id)
    }
    return (
        <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <hr />
          <p className="card-text">
             {props.content}</p>
          <button type="submit" onClick={()=>indexSend(props.id)} className="btn">
            <FontAwesomeIcon icon={faTrashAlt}/>
          </button>
        </div>
      </div>
    );
}

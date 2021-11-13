import React from 'react'
import Createnote from './Createnote'
import './Note.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
export default function Navbar() {
    const [note, setnote] = useState({
        title:"",
        content:""
    })
    const [data, setdata] = useState([])

    const input1=(e)=>{
        const {name, value}=e.target;
        setnote(
            (prevData)=>{
                return {
                    ...prevData,
                    [name]: value
                }

            }
        )
    }
    const newNode=(e)=>{

        e.preventDefault();
        if(note)
        {
        setdata((prev)=>{
           return [...prev,note]
        })}
        else{
        setnote({
            title:"",
            content:""
        })}
    }
    const deleteNote=(id)=>{
            setdata(
                data.filter((val,index)=>index!==id)
            )
    }
    return (
        <>
        <form>
        <div className="note">
         
          <input onChange={input1} value={note.title} name="title" type="text" placeholder="Title" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <textarea onChange={input1} value={note.content} name="content" placeholder="Write text ..." className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>  
          <button type="submit" onClick={newNode} className="btn">
          <FontAwesomeIcon
             icon= {faPlusSquare}
             />
          
          </button>
        </div>
        
        
        
      </form>
      <div className="con">

      
      {data.map((val,index)=>
      <Createnote key={index} id={index} dd={deleteNote} title={val.title} content={val.content}/>)}
      </div>
      </>
    );
}
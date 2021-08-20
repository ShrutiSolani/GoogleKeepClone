import './Notes.css';
import {AiOutlineDelete } from "react-icons/ai";

function Notes(props){
    return <div className="note-div">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <AiOutlineDelete 
        onClick = {() => {
            props.onDelete(props.id); 
        }}
        className="delete-icon"/>
    </div>
}

export default Notes;
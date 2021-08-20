import React, {useState} from "react"
import './Notes.css'
// import { AiFillPlusCircle } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";

function AddNote(props){
    const [NewNote, setNewNote] = useState("");
    
    
    function handleChange(event){
        const newContent = event.target.value;
        setNewNote(newContent);
    }

    return <form className="input-icons">
        <input
        name = "title"
        onChange = {handleChange}
        placeholder="Title...." 
        className="add-note-title" 
        value = {NewNote}/>
        <input
        name = "content"
        placeholder="Take a note...." 
        className = "add-note-content"
        />
        <IoAddOutline
        onClick = {() => {
            props.onAdd(NewNote);
            setNewNote("");
        }}
        className="icon"/>    
    </form>
}


export default AddNote;
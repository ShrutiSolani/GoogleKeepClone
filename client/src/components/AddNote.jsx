import React, {useState} from "react"
import './Notes.css'
import { IoAddOutline } from "react-icons/io5";

function AddNote(props){
    const [NewNote, setNewNote] = useState({
      title: "",
      content: ""
    });


    function handleChange(event){
      const { name, value } = event.target;
      setNewNote(prevState => ({
          ...prevState,
          [name]: value
      }));
    }

    return <form className="input-icons">
        <input
        name = "title"
        onChange = {handleChange}
        placeholder="Title...."
        className="add-note-title"
        value = {NewNote.title}/>
        <input
        name = "content"
        onChange = {handleChange}
        placeholder="Take a note...."
        className = "add-note-content"
        value = {NewNote.content}
        />
        <IoAddOutline
        onClick = {() => {
            props.onAdd(NewNote);
            setNewNote({title: "", content: ""});
        }}
        className="icon"/>
    </form>
}


export default AddNote;

import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Notes from './Notes';
import AddNote from './AddNote';
import Sidebar from './Sidebar';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  const [notes, setNotes] = useState([]);

  function addNoteItem(NewNote){
    setNotes(prevValue => {
        return [...prevValue, NewNote];
    });
  }

  function deleteNoteItem(id) {
    setNotes(prevValue => {
      return notes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
      <Header />
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
        <AddNote onAdd = {addNoteItem}/>
          { notes.map((noteItem, index) => (
            <Notes
              onDelete = {deleteNoteItem}
              key = {index}
              id = {index}
              title = {noteItem.title}
              content = {noteItem.content}
            />
          ))}
    </div>
  );
}

export default App;

import React from "react";
import SongList from "./components/form/SongList";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <p>TodoList is not mine</p>
      <TodoList/>
      <p>List</p>
      <SongList />
    </div>
  );
}

export default App;

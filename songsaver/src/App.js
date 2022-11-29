import React from "react";
import FormStandalone from "./components/form/FormStandalone";
import FullForm from "./components/form/FullForm";
import SongList from "./components/form/SongList";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <p>Form all in one file</p>
      <FormStandalone />
      <p>Form with components in different files</p>
      <FullForm />
      <p>TodoList is not mine</p>
      <TodoList/>
      <p>List</p>
      <SongList />
    </div>
  );
}

export default App;

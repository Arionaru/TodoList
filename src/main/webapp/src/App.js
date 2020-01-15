import React from 'react';
import './App.css';
import NewTodo from "./components/NewTodo";
import TodoList from "./containers/TodoList";

function App() {
  return (
      <div className="App">
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <NewTodo />
                  </div>
                  <div className="col-md-6">
                      <TodoList />
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;

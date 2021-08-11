
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import InputTodo from "./InputTodo";
import ListTodos from "./ListTodos";

function Todo() {
  return (
      <MuiThemeProvider>
      <div className="container"> <InputTodo/></div>
      <div className="list"><ListTodos/></div>
    </MuiThemeProvider>
  );
}
export default Todo;

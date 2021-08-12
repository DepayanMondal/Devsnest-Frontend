
import ToDoList, { TodoListProps } from "./ToDoList";
import { useState,useContext } from "react";
import ThemeContext, { ThemeContextType } from "./ThemeContext";



const Todos = () => {
    const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
    const [input, setInput] = useState<string>("")
  const [todos,setTodos]=useState<TodoListProps[]>([]);
    return (
       
             <div className={theme?"todos dark":"todos"}>
                 <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
                 <button onClick={()=>{
                     setTodos([...todos,{todo:input,done:false},]);
                     setInput("")
                    
                 }}>Add Item</button>
        {
          todos.map((toDo,index)=>(
            <ToDoList key={index} todo={toDo.todo} done={toDo.done}/>
          ))
        }
        </div>
    )
}

export default Todos

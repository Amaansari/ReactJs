import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const App = ()=>{
  const [todo,setTodo] = useState("");
  const [todos,setTodos] = useState([])
  const [showFinished,setShowFinished] = useState(true)

  useEffect(()=>{
    let todoString = localStorage.getItem("todos");
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  },[])

  const saveTOLS = ()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
    console.log(localStorage.getItem("todos"))
  }

  const toggleFinished = (e)=>{
    setShowFinished(!showFinished)
  }

  const handleEdit = (e,id)=>{
    const input = todos.filter((item)=>{
      return item.id === id;
    })
    setTodo(input[0].todo)
    const newTodos = todos.filter((item)=>{
      return item.id != id;
    })
    setTodos(newTodos)
    saveTOLS()
  }
  const handleDelete = (e,id)=>{
    const newTodos = todos.filter((item)=>{
      return item.id != id;
    })
    setTodos(newTodos)
    saveTOLS()
  }
  const handleAdd = ()=>{
    setTodos([
      ...todos,
      {id:uuidv4(),todo,isCompleted:false}
    ])
    setTodo("")
    saveTOLS()
  }
  const handleChange = (e)=>{
    const input = e.target;
    const value = input.value;
    setTodo(value)

  }

  const handleCheckbox = (e)=>{
    const id = e.target.name;
    let index = todos.findIndex((item)=>{
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveTOLS()
  }
  return (
    <div>
      <Navbar />
      <div className="md:container mx-3 md:mx-auto bg-violet-100 p-5 my-5 min-h-[80vh] md:w-[35%] rounded-xl">
          <h1 className="font-bold text-2xl text-center">iTask - Manage your todos at one place</h1>
          <div className="addTodo my-5 flex flex-col gap-4">
            <h2 className="text-xl font-bold">Add a Todo</h2>
            <div className="flex">
              <input type="text" onChange={handleChange} className="w-full rounded-full px-5 py-1" value={todo}/>
              <button 
                onClick={handleAdd} 
                disabled={todo.length<=3}
                className="bg-violet-800 hover:bg-violet-950 mx-2 p-4 py-2 text-sm font-bold text-white rounded-full disabled:bg-violet-500"
              >Save
              </button>
            </div>
          </div>
          <input className="my-4" id="show" onChange={toggleFinished} type="checkbox"  checked={showFinished} /> 
          <label htmlFor="show" className="mx-2">Show Finished</label>

          <div className="h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2"></div>

          <h2 className="text-xl font-bold">Your Todos</h2>
          <div className="todos">
            {
              todos.length === 0 &&
              <div>No Todos to display</div>
            }
            {
              todos.map((item,index)=>(
                (showFinished || !item.isCompleted) &&
                <div key={index} className="todo flex  justify-between my-3">
                  <div className="flex gap-5">
                    <input 
                      onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item. id} 
                    />
                    <div className={item.isCompleted?"line-through":""}>
                      {item.todo}
                    </div>
                  </div>
                  <div className="buttons flex h-full">
                    <button onClick={(e)=>{handleEdit(e,item.id)}} className="bg-violet-800 hover:bg-violet-950 mx-1 px-2 py-1 text-sm font-bold text-white rounded-md"
                    >
                      <FaEdit />
                    </button>
                    <button onClick={(e)=>{handleDelete(e,item.id)}} className="bg-violet-800 hover:bg-violet-950 mx-1 px-2 py-1 text-sm font-bold text-white rounded-md"
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </div>
              ))
            }
            
          </div>
      </div>
    </div>
  )
}
export default App
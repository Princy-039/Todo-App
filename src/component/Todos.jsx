import React from 'react'
import { useState } from 'react'
import Button from './Button'

function Todos() {
    const [pendingTodos,setPendingTodos]=useState([]);
    const [completedTodos,setCompletedTodos]=useState([]);
    const[todoText,setTodoText]=useState([]);

    const handleInputChange=(event)=>{
        console.log(event.target.value)
        setTodoText(event.target.value);
    }
    const addTodo=()=>{
        setPendingTodos([...pendingTodos,todoText]);
        setTodoText('');       
    }
    const handleCancel=()=>{
        setTodoText('');
    }
    const clearTodos=(section)=>{ 
        if(section==='pending'){
            setPendingTodos([]);
        }
        else{
            setCompletedTodos([]);
        }
    }
    const completeTodo=(index)=>{
        const element=pendingTodos[index];
        setCompletedTodos([...completedTodos,element]);
        const currentPendingItems= [...pendingTodos];
        currentPendingItems.splice(index,1);
        setPendingTodos(currentPendingItems);
    }
    const deleteTodo=(index,from)=>{
        if(from==='pending'){
            const currentPendingItems=[...pendingTodos];
            currentPendingItems.splice(index,1);
            setPendingTodos(currentPendingItems);
        }
        else{
            const currentCompletedItems=[...completedTodos];
            currentCompletedItems.splice(index,1);
            setCompletedTodos(currentCompletedItems);
        }
    }


  return (
    <>
    <div className="todo-form">
        <h1>Add Todo</h1>  
        <input value={todoText} type="text" placeholder="Type here" onChange={handleInputChange}/>
        <div className="todo-form-buttons">
            <button className="add-btn" onClick={addTodo}> Add </button>
            <button className="cancel-btn" onClick={handleCancel}> Cancel </button>
        </div>
    </div>  
    <div className="todo-secion">
        <div className="todo-left">
           <h1>  Pending Todos ({pendingTodos.length}) <button className="add-btn" onClick={()=>clearTodos('pending')}> Clear </button> </h1>
           {
            pendingTodos.map((todo,index)=><div className="todo-item" key={index}>
                <div className="todo-item-text">({index+1}) {todo}</div>
                <div className="todo-form-buttons">
                <button className="complete-btn" onClick={()=>completeTodo(index)}> Complete</button>
                <button className="delete-btn" onClick={()=>deleteTodo(index,'pending')}> Delete</button>
                </div>
            </div>)
           }
        </div>
        <div className="todo-right">
        <h1>  Completed Todos ({completedTodos.length}) <button class="add-btn" onClick={()=>clearTodos('completed')}> Clear </button> </h1> 
        {completedTodos.map((todo,index)=><div className="todo-item">
                <div className="todo-item-text">({index+1}) {todo}</div>
                <div className="todo-form-buttons">
                <button className="delete-btn" onClick={()=>deleteTodo(index,'completed')}> Delete</button>
                </div>
            </div>)}
        </div>
    </div>
    </>

    )
}

export default Todos

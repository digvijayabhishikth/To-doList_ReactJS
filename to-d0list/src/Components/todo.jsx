import React, {useState ,useEffect} from 'react'
import {v4 as uuid} from 'uuid'
import '../styles/todo.css'
import List from './List'

export const Todo = () => {

    const [inputValue,setInputValue] = useState('');
    const [todoArray,settodoArray] = useState(
        () => {
            try {
              return JSON.parse(localStorage.getItem("todos")) || [];
            } catch (error) {
                console.log(error)
              return [];
            }
        }
    );
    const onInputChange =(event)=>{
        setInputValue(event.target.value);
    }

    const onAddClick = ()=>{
        if (inputValue.trim() !== '') { 
            settodoArray([
              ...todoArray,
              { id: uuid(), todo: inputValue, isCompleted: false },
            ]);
            setInputValue(''); 
        }
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoArray));
    }, [todoArray]); 
    
    const onDeleteClicked = (id)=>{
        settodoArray(todoArray.filter(item => item.id !== id));
    }

    const onChecked = (id)=>{
        settodoArray(todoArray.map(item => item.id === id ? {...item, isCompleted:true}:item))
    }
    console.log(todoArray);
    
  return (
    <>
        <div className='pageContainer'>
            <div className='mainContainer'>
                <div className='headContainer'>
                    <div >
                        <h2>To-do List</h2>
                        <div className='inputContainer'>
                            <input
                                type='text'
                                placeholder='Enter'
                                onChange={onInputChange}
                                value={inputValue}
                            />
                            <button onClick={()=>onAddClick()}>Add</button>
                        </div>
                    </div>
                </div>
                <div className='listContainer'>
                    <List todoArray ={todoArray} onDeleteClicked={onDeleteClicked} onChecked={onChecked}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo;
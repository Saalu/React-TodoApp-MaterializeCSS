import React from 'react'
import TodoItem from './TodoItem'

function TodoList({items, clearList, handleDelete, handleEdit }) {
    
  return (
    <div className='container'>
      <h4>TodoList</h4>
      {
          items.map(item => (
              
              <TodoItem 
              key={item.id} 
              title={item.title}
              handleDelete={()=>handleDelete(item.id)}
              handleEdit={()=>handleEdit(item.id)}
              />
          ))
      }
      <button className='btn red' onClick={clearList}>Clear List</button>
    </div>
  )
}

export default TodoList

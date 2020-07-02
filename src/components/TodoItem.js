import React from 'react'

function TodoItem({title, handleDelete, handleEdit}) {
    return (
        <div className='container'>
           
               <div className='row grey'>
                    <span className='col s6 l6 left'  >{title}</span>
                   <a className='col s6 l6 icons'>
                   <span onClick={handleEdit}><i className='material-icons green-text right'>edit</i></span>
                   <span onClick={handleDelete}><i className='material-icons red-text text-darken-2 right'>delete</i></span>
                   </a>
            </div>
               
        
        </div>
    )
}

export default TodoItem

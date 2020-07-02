import React from 'react'

function TodoInput(props) {
    const {item, handleChange, onSubmit, editItem} = props
    return (
    
            <div className="container">
                <form onSubmit={onSubmit}>
                <div className="row">
                   <div className="input-field cyan-text">
                   <i className="material-icons prefix">book</i>
                      <input  type="text" id='add'
                      value={item}
                      onChange={handleChange}
                      />
                     <label htmlFor="add"></label>
                   </div>
                   <button className={editItem? 'btn green-1' : 'btn cyan'}     >Add Item</button>
                </div>
               </form>
              
            </div>
        
    )
}

export default TodoInput

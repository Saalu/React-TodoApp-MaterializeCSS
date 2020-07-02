import React, { Component } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import './index.css'

import {v4 as uuid} from "uuid"; 


export class App extends Component {
  state = {
    items:[],
    id: uuid(),
    item:'',
    editItem:false
  }

  handleChange = (e) => {
    this.setState({item: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)

    const newItem ={
      id:this.state.id,
      title:this.state.item
    }
    const updatedItems = [...this.state.items, newItem]

    this.setState({
      items: updatedItems,
      item:'',
      id:uuid(),
      editItem:false
    })

  }

  clearList = () => {
    this.setState({items:[]})
  }

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => 
      item.id !== id)
      this.setState({
        items:filteredItems,
        
      })
  }
  handleEdit = (id) => {
    console.log(id)

    const filteredItems = this.state.items.filter(item => item.id !== id)

    const selectedItem = this.state.items.find(item => item.id === id)

    console.log('selected', selectedItem.title)
    this.setState({
      items:filteredItems,
      id:id,
      item: selectedItem.title,
      editItem:true
    })

   
  }

  render() {
    const {item,items,editItem} =this.state
    return (
      <div className='App'>
        <h1>Todo App</h1>
        <TodoInput 
        item={item}
        handleChange={this.handleChange}
        onSubmit = {this.onSubmit}
        editItem={editItem}
        />
        <TodoList
        items={items}
        clearList={this.clearList}
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        />
      </div>
    )
  }
}

export default App

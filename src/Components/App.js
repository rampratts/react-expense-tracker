import React from 'react';
import './App.css';
import ItemList from './ItemList';
import Input from './Input';

import { uuid } from 'uuidv4';

class App extends React.Component {
  state = { balance: 0, newValue: 0, newDescription: '', items: [] }

  getNewItem = (type) => {
    const newItem = {
      id: uuid(),
      type,
      value: type === 'expense' ? -Math.abs(this.state.newValue) : this.state.newValue,
      description: this.state.newDescription
    }

    return newItem;
  }

  calculateBalance = () => {
    const newBalance = this.state.items.reduce((acc, i) => acc + i.value, 0);
    this.setState({
      balance: newBalance
    })
  }

  addExpense = e => {
    const newItem = this.getNewItem('expense');
    this.setState({
      newValue: 0,
      newDescription: '',
      items: [...this.state.items, newItem]
    }, this.calculateBalance);
  }

  addIncome = e => {
    const newItem = this.getNewItem('income')
    this.setState({
      newValue: 0,
      newDescription: '',
      items: [...this.state.items, newItem]
    }, this.calculateBalance);
  }

  deleteItem = id => {
    const newItems = this.state.items.filter(i => i.id !== id );
    this.setState({items: newItems}, this.calculateBalance);
  }

  render() {
    return (
      <div> 
        <h1>Expense tracker</h1>
        <p>Your balance is: {this.state.balance}</p>
        <div id='form-container'>
          <div className='row'>
            <div className='input-container'>
              <Input
                placeholder='Description' 
                onChange={text => this.setState({newDescription: text})} 
                id='description-input'
                value={this.state.newDescription}/>
            </div>

            <div class='input-container'>
              <Input
                type='number' 
                value={this.state.newValue}
                id='value-input' 
                onChange={text => this.setState({newValue: parseInt(text)})}/>
            </div>
          </div>
          <div class='row'>
            <button onClick={this.addExpense}>Add expense</button> 
            <button onClick={this.addIncome}>Add income</button>
          </div>
        </div>
        <ItemList items={this.state.items} deleteMyItem={this.deleteItem}/> 
      </div>
    );
  }
}

export default App;

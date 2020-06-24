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
      <div class="content"> 
        <h1>Expense tracker</h1>
        <p>Balance: {this.state.balance}</p>
        <div id='input-container'>
          <Input
            placeholder='Description' 
            onChange={text => this.setState({newDescription: text})} 
            id='description-input'
            value={this.state.newDescription}
          />
          <Input
            type='number' 
            value={this.state.newValue}
            id='value-input' 
            onChange={text => this.setState({newValue: parseInt(text)})}/>
        </div>

        <div id='button-container'>
          <i onClick={this.addIncome} className='add-btn income fas fa-plus'></i>
          <i onClick={this.addExpense} className='add-btn expense fas fa-minus'></i>
        </div>
        <ItemList items={this.state.items} deleteMyItem={this.deleteItem}/> 
      </div>
    );
  }
}

export default App;

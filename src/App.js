import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import List from './components/List';

class App extends Component {

  state = {
    list: {}
  }

  addToList = (e) => {
    e.preventDefault();
    const item = e.target.elements.addItem.value;
    const copy = {...this.state.list};
    copy[`item${Date.now()}`] = {item: item, quantity: 1};
    this.setState({
      list: copy
    });
    e.target.elements.addItem.value = '';
  }

  removeItem = key => {
    const copy = {...this.state.list};
    delete copy[key];
    this.setState({
      list: copy
    });
  }

  addQuantity = key => {
    const copy = {...this.state.list};
    copy[key].quantity += 1;
    this.setState({
      list: copy
    });
  }

  componentDidMount() {
    const getlocalStorage = localStorage.getItem("list");
    if (getlocalStorage) {
      this.setState({list: JSON.parse(getlocalStorage)});
    }
  }

  componentDidUpdate() {
    localStorage.setItem("list",JSON.stringify(this.state.list));
  }

  render() {
    return (
      
        <div className="container bg-dark">
          <div className="row" style={{"margin-top": "100px"}}>
            <div className="col-sm">
              
            </div>
            <div className="col-sm d-flex align-items-start">
              <h1 className="align-self-start">SHOPPING LIST</h1>
            </div>
            <div className="col-sm">
              
            </div>
          </div>
          <div className="row">
            <div className="col">
              
            </div>
            <div className="col-7">

                <Form addToList={this.addToList} />


                <List list={this.state.list} removeItem={this.removeItem} addQuantity={this.addQuantity} />

            </div>
            <div className="col">
              
            </div>
          </div>
        </div>
      
    );
  }
}

export default App;

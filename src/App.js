import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import List from './components/List';

class App extends Component {

  state = {
    list: ["sdsdsd"]
  }

  addToList = (e) => {
    e.preventDefault();
    const item = e.target.elements.addItem.value;
    const copy = this.state.list;
    const update = copy.push(item);
    this.setState({
      state: update
    })
    console.log(this.state);
  }

  render() {
    return (
      
        <div className="container">
          <div className="row">
            <div className="col">
              1 of 3
            </div>
            <div className="col-7">

                <Form addToList={this.addToList} />


                <List list={this.state.list} />

            </div>
            <div className="col">
              3 of 3
            </div>
          </div>
        </div>
      
    );
  }
}

export default App;

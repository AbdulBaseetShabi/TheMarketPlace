import './App.css';
import React from 'react';

import Navigation from './widget/Navigation/navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_route: null,
    }
    this.Navigate = this.Navigate.bind(this);
  }

  Navigate(route){
    console.log(route);
  }

  render() {
    return (
      <div id="main-app">
        <Navigation Navigate={this.Navigate}/>
        <div id="content">

        </div>
      </div>
    ); 
  }
}

export default App;

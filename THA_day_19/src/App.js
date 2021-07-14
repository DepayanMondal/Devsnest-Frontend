import React,{Component} from 'react';
import './App.css';
import Button from './component';
class App extends Component {
  

  render(){
    return (
      <>
        <div className="main">
          <h1>My counter app</h1>
          <div className="btn">
           <Button/>
           <Button/>
           <Button/>

          </div>
          

        </div>
      </>
    );
  }
}

export default App;
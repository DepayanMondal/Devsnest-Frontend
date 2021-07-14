import React,{Component} from 'react';

class button extends Component {
  constructor(props){
    super(props);
    this.state = {
      num: 0,
    };
  }
   resetnum = () => {
    this.setState({num: this.state.num + 1});
  };
  


  render(){
    return (
    
       
            <button onClick={this.resetnum}>{this.state.num}</button>
          
      
    );
  }
}

export default button;
import React,{Component} from 'react';

import { Title } from './components/Title';

import './App.css';
import 'bulma/css/bulma.css';

const ts ='1'
const apikey='3c24cf269b98436a00567edd68929655';
const hash='327b5aa5000b6d6cb5260fd8a9a19c87';



class App extends Component{
  state={
    comics:[]
  }

  componentDidMount(){
    fetch(`http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`)
    .then(res=>res.json())
    .then((data)=>{
      this.setState({comics:data})
      const {results=[],urls=[]}=data
      console.log({results,urls})
    })
    .catch(console.log)
  }


  render(){    
    return(
      <div className="card">
            <Title>REINICIAR SITIO</Title>
            <div className="card-body">
              <h5 className="card-title">Daniel Gonzalez</h5>
              <h6 className="card-subtitle mb-2 text-muted">dagon8523@gmail.com</h6>
              <p className="card-text">I trying practice the programing code, and more tools of the software</p>
            </div>
          </div>
    ); 
  }
}


export default App;

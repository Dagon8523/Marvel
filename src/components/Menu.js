import React, {Component} from 'react'
import PropTypes from 'prop-types'

const ts ='1'
const apikey='3c24cf269b98436a00567edd68929655';
const hash='327b5aa5000b6d6cb5260fd8a9a19c87'
const ruta='http://gateway.marvel.com/v1/public/comics?ts=1&apikey=3c24cf269b98436a00567edd68929655&hash=327b5aa5000b6d6cb5260fd8a9a19c87'

export class Menu extends Component{
    state={
        inputComic:''
    }
    static propTypes={inputComic:PropTypes.array
    }
        
    
   _traercomics(){
       const {inputComic} = this.state
       fetch(`http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`)
       .then(res=>res.json())
       .then(data=>{
          const {results=[],urls=[]}=data
          console.log({results,urls})
          this.props.onResults(results)
       })
   }
   _listarResultado(){
        
       
       return(
           <div className='listaResultado'>

           </div>
       )
       
   }

   _renderResults(){
       return this.state.data.results.length===0
       ?<p>No se obtuvieron resultados</p>
       :this._listarResultado
   }

   render(){
       return(
        <div className="container">
        <div className="notification">
         <p classname="title is-4"></p>
        </div>

      </div>
       )
   }




}
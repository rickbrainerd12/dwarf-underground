import React, { Component } from 'react';
import './Main.css'
import Article from './Article'
import Ad from './Ad'
import otherArticles from './otherArticles'

class Main extends Component{
    render(){
        return(
        <main className="expanded row">
          <Article />
          <Ad />
          <otherArticles />
        </main>
        )
    }
}

export default Main
import React from "react";
import QuoteCard from "./QuoteCard";
import axios from 'axios';



class QuoteList extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       quote : this.getQuote()
    }
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote =() => {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => res.data)
    .then(data => {
      this.setState({quote : data [0]})
    })}
  
 
  

  render() {

    return (
      <div id="QuoteList">
        <QuoteCard {...this.state.quote}/>
        <button type="button" onClick={this.getQuote}>Get a quote here!</button>
      </div>
    )
  }
}

export default QuoteList;
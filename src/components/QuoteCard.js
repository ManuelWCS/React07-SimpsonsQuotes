import React from 'react';
import './QuoteCard.css';
import PropTypes from 'prop-types';


class QuoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      favorite: false,
    };
  }
  
  render() {
    
    return(
      <figure className="QuoteCard">
    <img
      src={this.props.image} alt={this.props.character} />
      <figcaption>
      <blockquote>
        {this.props.quote}
      </blockquote>
      <p>
      <cite>{this.props.character}</cite>
      <span className={this.state.favorite ? 'is-favorite' : ''}
      onClick={event => {
        const newFavorite = !this.state.favorite;
        this.setState({favorite : newFavorite});
      }}
      >&#9733;</span>

      </p>
    </figcaption>
  </figure> );
    
    
  }
    }

QuoteCard.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};


  export default QuoteCard;

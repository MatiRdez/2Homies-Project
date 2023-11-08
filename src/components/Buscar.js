import React, { Component } from 'react';
import "./styles/Home.css"

class SearchBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchVisible: false, // Estado para controlar la visibilidad del buscador
    };
  }

  toggleSearch = () => {
    this.setState((prevState) => ({
      isSearchVisible: !prevState.isSearchVisible,
    }));
  };

  render() {
    const { isSearchVisible } = this.state;

    return (
      <div>
        <button className='busc' onClick={this.toggleSearch}>Buscar Libros</button>
        {isSearchVisible && (
          <div className="search-container">
            <input type="text" placeholder="Buscar libros..." />
            <button className='busc'>Buscar</button>
          </div>
        )}
      </div>
    );
  }
}

export default SearchBooks;


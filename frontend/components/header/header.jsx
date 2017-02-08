import React from 'react';

import ImageActions from '../../actions/image_actions';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e) {
    let color = e.target.className.split(" ")[1];
    document.getElementsByClassName("image-container")[0].className = "image-container " + `${color}`;
    let searchParam = e.target.innerHTML === "All" ? "" : e.target.innerHTML;
    ImageActions.fetchImages({query: searchParam});
  }

  render() {
    return (
      <div className="header-container">
        <div className="header-content">
          <div className="header-title">
            NasaPics
          </div>
          <div className="filters-container">
            <div onClick={this._handleClick} className="filter dark-blue">All</div>
            <div onClick={this._handleClick} className="filter light-blue">Space</div>
            <div onClick={this._handleClick} className="filter teal">Hubble</div>
            <div onClick={this._handleClick} className="filter red">NASA</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;

import React from 'react';

import ImageActions from '../../actions/image_actions';
import ImageContainer from '../images/image-container';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {show: false, currentTab: ""}
    this._handleClick = this._handleClick.bind(this);
    this._handleToggle = this._handleToggle.bind(this);
  }

  _handleClick(e) {
    if (this.state.currentTab === e.target.innerHTML) {
      return
    } else {
      this.setState({show: false})
      let color = e.target.className.split(" ")[1];
      document.getElementsByClassName("image-container")[0].className = "image-container " + `${color}`;
      let searchParam = e.target.innerHTML === "All" ? "" : e.target.innerHTML;
      this.setState({currentTab: e.target.innerHTML});
      this.props.handleTab(e.target.innerHTML);
      ImageActions.fetchImages({query: searchParam});
    }
  }

  _handleToggle(e) {
    this.setState({show: !this.state.show})
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
        <div className="dropdown-container">
          <img className="ham-icon" onClick={this._handleToggle}
                  src="https://res.cloudinary.com/deeucxgdi/image/upload/c_scale,w_50/v1486543354/white-menu-icon_h4ixez.png" />
          {this.state.show ?
            <div className="dropdown-content">
              <div onClick={this._handleClick} className="filter dark-blue">All</div>
              <div onClick={this._handleClick} className="filter light-blue">Space</div>
              <div onClick={this._handleClick} className="filter teal">Hubble</div>
              <div onClick={this._handleClick} className="filter red">NASA</div>
            </div> : ""}
          </div>
        </div>
      </div>
    )
  }
}

export default Header;

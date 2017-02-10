import React from 'react';

import ImageActions from '../../actions/image_actions';
import ImageContainer from '../images/image-container';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {show: false, currentTab: "All"}
    this._handleClick = this._handleClick.bind(this);
    this._handleToggle = this._handleToggle.bind(this);
    this._handleEnter = this._handleEnter.bind(this);
    this._handleLeave = this._handleLeave.bind(this);
  }

  _handleClick(e) {
    if (this.state.currentTab === e.target.innerHTML) {
      return
    } else {
      $('.filter').removeClass("teal");
      $(e.target).addClass("teal");
      this.setState({show: false})
      let color = e.target.className.split(" ")[1];
      let searchParam = e.target.innerHTML === "All" ? "" : e.target.innerHTML;
      this.setState({currentTab: e.target.innerHTML});
      this.props.handleTab(e.target.innerHTML);
      ImageActions.fetchImages({query: searchParam});
    }
  }

  _handleEnter(e) {
    $(e.target).addClass("teal");
  }

  _handleLeave(e) {
    if (this.state.currentTab !== e.target.innerHTML) {
      $(e.target).removeClass("teal");
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
            <div
              onClick={this._handleClick}
              onMouseLeave={this._handleLeave}
              onMouseEnter={this._handleEnter}
              className="filter teal">All
            </div>
            <div
              onClick={this._handleClick}
              onMouseLeave={this._handleLeave}
              onMouseEnter={this._handleEnter}
              className="filter">Space
            </div>
            <div
              onClick={this._handleClick}
              onMouseLeave={this._handleLeave}
              onMouseEnter={this._handleEnter}
              className="filter">Hubble
            </div>
            <div
              onClick={this._handleClick}
              onMouseLeave={this._handleLeave}
              onMouseEnter={this._handleEnter}
              className="filter">NASA
            </div>
          </div>
        <div className="dropdown-container">
          <img className="ham-icon" onClick={this._handleToggle}
                  src="https://res.cloudinary.com/deeucxgdi/image/upload/c_scale,w_50/v1486543354/white-menu-icon_h4ixez.png" />
          {this.state.show ?
            <div className="dropdown-content">
              <div
                onClick={this._handleClick}
                onMouseLeave={this._handleLeave}
                onMouseEnter={this._handleEnter}
                className="filter teal">All
              </div>
              <div
                onClick={this._handleClick}
                onMouseLeave={this._handleLeave}
                onMouseEnter={this._handleEnter}
                className="filter">Space
              </div>
              <div
                onClick={this._handleClick}
                onMouseLeave={this._handleLeave}
                onMouseEnter={this._handleEnter}
                className="filter">Hubble
              </div>
              <div
                onClick={this._handleClick}
                onMouseLeave={this._handleLeave}
                onMouseEnter={this._handleEnter}
                className="filter">NASA
              </div>
            </div> : ""}
          </div>
        </div>
      </div>
    )
  }
}

export default Header;

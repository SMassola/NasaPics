const React = require('react');

class Image extends React.Component {

  render() {
    return(
      <div className="image-item">
        <img className="lazy" src={this.props.urlDefault}>
        </img>
        <div className="image-title">{this.props.title}</div>
      </div>
    );
  }
}

export default Image;

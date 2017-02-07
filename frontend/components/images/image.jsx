const React = require('react');

class Image extends React.Component {

  render() {
    return(
      <div className="image-item">
        <img src={this.props.urlDefault} />
      </div>
    );
  }
}

export default Image;

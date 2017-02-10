const React = require('react');

class Image extends React.Component {

  componentDidMount() {
    $(document).ready(function () {
        $("img.lazy").lazyload({
          threshold: 100
        });
    });
  }

  render() {
    let width;
    let height;
    let styleContainer;

    if (this.props.origWidth/this.props.origHeight > 1) {
      width = 500;
      height = (this.props.origHeight/this.props.origWidth) * width
    } else {
      height = 500;
      width = (this.props.origWidth/this.props.origHeight) * height
    }

    // styleContainer = {paddingBottom: `${height}`/`${width}` * 100 + "%"}

    return(
      <div className="image-item" style={styleContainer}>
        <img data-original={this.props.urlDefault}
             className="lazy"
            />
          <div className="image-title">{this.props.title}</div>
      </div>
    );
  }
}

export default Image;

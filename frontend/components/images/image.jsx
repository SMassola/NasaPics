const React = require('react');

class Image extends React.Component {

  componentDidMount() {
    $(document).ready(function () {
        $("img.lazy").lazyload({
          threshold: 100,
          effect: "fadeIn"
        });
    });
  }

  render() {
    return(
      <div className="image-item">
        <img data-original={this.props.urlDefault}
             src="https://res.cloudinary.com/deeucxgdi/image/upload/c_scale,w_500/v1486541636/placeholder_pdvmma.jpg"
             className="lazy" />
        <div className="image-title">{this.props.title}</div>
      </div>
    );
  }
}

export default Image;

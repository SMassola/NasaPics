import React from 'react';

import Image from './image';

import ImageActions from '../../actions/image_actions';
import ImageStore from '../../stores/image_store';

class ImageContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {images: []}
    this._handleImages = this._handleImages.bind(this);
  }

  componentDidMount() {
    this.imageListener = ImageStore.addListener(this._handleImages);
    ImageActions.fetchImages({query: ""});
  }

  componentWillUnmount() {
    this.friendListener.remove();
  }

  _handleImages() {
    this.setState({images: ImageStore.allImages()});
  }

  render() {
    let images = this.state.images || []

    return (
      <div className="image-container dark-blue">
        {images.map((image) => {
          return (
            <Image
              key={image.id}
              urlDefault={image.urlDefault}
              title={image.title}/>
          )
        })
      }

      </div>
    )
  }
}

export default ImageContainer;

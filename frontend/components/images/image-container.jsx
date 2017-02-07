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
    ImageActions.fetchImages();
  }

  componentWillUnmount() {
    this.friendListener.remove();
  }

  _handleImages() {
    this.setState({images: ImageStore.allImages()})
    console.log(this.state.images);
  }

  render() {
    console.log(this.state.images);
    let images = this.state.images || []
    return (
      <div className="image-container">
        Images

        {images.map((image) => {
          return (
            <Image
              key={image.id}
              urlDefault={image.urlDefault}
              />
          )
        })
      }

      </div>
    )
  }
}

export default ImageContainer;
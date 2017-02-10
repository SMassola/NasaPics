import React from 'react';

import Image from './image';

import ImageActions from '../../actions/image_actions';
import ImageStore from '../../stores/image_store';

class ImageContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {images: [], counter: 1, flag: false, currentTab: this.props.tab}
    this._handleImages = this._handleImages.bind(this);
    this._handleScroll = this._handleScroll.bind(this);
    this._newPage = this._newPage.bind(this);
    this._newPageCheck = _.throttle(this._newPage.bind(this), 1000, {trailing: true});
  }

  componentDidMount() {
    this.imageListener = ImageStore.addListener(this._handleImages);
    ImageActions.fetchImages({query: this.state.currentTab, counter: this.state.counter});
    window.addEventListener('scroll', this._handleScroll);
  }

  componentWillUnmount() {
    this.imageListener.remove();
    window.removeEventListener('scroll', this._handleScroll);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({currentTab: nextProps.tab})
  }

  _handleScroll() {
    this._newPageCheck();
  }

  _newPage() {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
      this.setState({counter: this.state.counter + 1})
      let searchParam = this.state.currentTab === "All" ? "" : this.state.currentTab;
      ImageActions.fetchImages({query: searchParam, counter: this.state.counter});
    }
  }

  _handleImages() {
    this.setState({images: ImageStore.allImages()});
  }

  currentTab(tab) {
    this.setState({currentTab: tab});
  }

  render() {
    let images = this.state.images || []
    console.log(images);
    return (
      <div className="image-container dark-blue">
        {images.map((image) => {
          return (
              <Image
                key={image.id}
                urlDefault={image.urlDefault}
                title={image.title}
                origWidth={image.o_width}
                origHeight={image.o_height} />
          )
        })
      }

      </div>
    )
  }
}

export default ImageContainer;

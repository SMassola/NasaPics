import AppDispatcher from '../dispatcher/dispatcher';
import { Store } from 'flux/utils';
import ImageConstants from '../constants/image_constants';
import ImageActions from '../actions/image_actions';

let _images = {};
let _query = "";

const ImageStore = new Store(AppDispatcher);

ImageStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case ImageConstants.IMAGES_FETCHED:
      if (_query !== payload.query) {
        _query = payload.query
        ImageStore.resetImages();
      }
      addImages(payload.images);
      ImageStore.__emitChange();
      break;
  }
};

function addImages(images) {
  // _images = {};

  images["images"].forEach((image) => {
    image.urlDefault = 'https://farm' + image.farm + '.staticflickr.com/' + image.server + '/' + image.id + '_' + image.secret + '.jpg';
    image.urlLarge = 'https://farm' + image.farm + '.staticflickr.com/' + image.server + '/' + image.id + '_' + image.secret + '_b.jpg';
    _images[image["id"]] = image;
  })
}

ImageStore.allImages = function() {
  return Object.keys(_images).map(id => {
    return _images[id];
  })
}

ImageStore.resetImages = function() {
  _images = {};
}

module.exports = ImageStore;

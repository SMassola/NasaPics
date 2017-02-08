import AppDispatcher from '../dispatcher/dispatcher';
import { Store } from 'flux/utils';
import ImageConstants from '../constants/image_constants';
import ImageActions from '../actions/image_actions';

let _images = {};

const ImageStore = new Store(AppDispatcher);

ImageStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case ImageConstants.IMAGES_FETCHED:
      resetImages(payload.images);
      ImageStore.__emitChange();
      break;
  }
};

function resetImages(images) {
  _images = {};

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

module.exports = ImageStore;

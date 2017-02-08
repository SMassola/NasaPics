import ImageApiUtil from '../util/image_api_util';
import ImageConstants from '../constants/image_constants';
import AppDispatcher from '../dispatcher/dispatcher';

module.exports = {
  fetchImages(data={}) {
    ImageApiUtil.fetchImages(data, this.receiveImages)
  },

  receiveImages(images) {
    AppDispatcher.dispatch({
      actionType: ImageConstants.IMAGES_FETCHED,
      images: images
    })
  }
}

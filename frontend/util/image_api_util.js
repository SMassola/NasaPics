module.exports = {
  fetchImages(callback) {
    $.ajax({
      url: 'api/images',
      method: 'get',
      success: function(resp) {
        callback(resp);
      }
    });
  }
};

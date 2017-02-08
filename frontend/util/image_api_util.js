module.exports = {
  fetchImages(data, callback) {
    $.ajax({
      url: 'api/images',
      method: 'get',
      data: data,
      success: function(resp) {
        callback(resp);
      }
    });
  }
};

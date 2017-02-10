class Api::ImagesController < ApplicationController

  def index
    @query = params[:query]
    @images = []
    if params[:query] && !params[:query].empty?
      url = URI.parse("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=#{ENV['FLICKR_WEB_API_KEY']}&user_id=24662369@N07&format=json&nojsoncallback=1&per_page=3&page=#{params[:counter]}&extras=o_dims&tags=#{params[:query]}")
      res = Net::HTTP::get(url)
      images = JSON.load(res) || []
    else
     url = URI.parse("https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=#{ENV['FLICKR_WEB_API_KEY']}&user_id=24662369@N07&format=json&nojsoncallback=1&per_page=3&page=#{params[:counter]}&extras=o_dims")
     res = Net::HTTP::get(url)
     images = JSON.load(res) || []
   end

   @images = images["photos"]["photo"]

    render :index
  end
end

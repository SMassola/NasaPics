class Api::ImagesController < ApplicationController

  def index
    @images = []
    url = URI.parse("https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=#{ENV['FLICKR_WEB_API_KEY']}&user_id=24662369@N07&format=json&nojsoncallback=1")
    res = Net::HTTP::get(url)
    images = JSON.load(res) || []
    @images = images["photos"]["photo"]

    if params[:query] && !params[:query].empty?
      @images = @images.select do |image|
        image["title"].include?(params[:query])
      end
    end

    render :index
  end
end

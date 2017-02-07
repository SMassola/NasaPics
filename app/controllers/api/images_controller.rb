class Api::ImagesController < ApplicationController

  def index
    @images = []
    url = URI.parse("https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=24662369@N07&format=json&nojsoncallback=1")
    res = Net::HTTP::get(url)
    images = JSON.load(res) || []
    @images = images["photos"]["photo"]

    render :index
  end
end

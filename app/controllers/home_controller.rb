# This is the controller for the home page
class HomeController < ApplicationController
  def index
    if request.url.include?('name')
      url    = request.original_url
      uri    = URI.parse(url)
      params = CGI.parse(uri.query)
      @name     = params['name'].first || ''
    end
  end
end

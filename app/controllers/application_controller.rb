# Base application controller for visual
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper Webpacker::Helper
end

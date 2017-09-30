# Contact Requests, redirects to comfirmation on success
# Flash message if error
# Since there is front-end validation errors would have to be server error, so no response
class ContactRequestController < ApplicationController
  def show
    @message = params[:contact_request]
  end

  def new
    @contact_request = ContactRequest.new
  end

  def create
    contact_request = ContactRequest.new(contact_request_params)

    if contact_request.save
      @messenger = request.parameters
      ContactRequestMailer.contact_request_response_email(@messenger).deliver_later
      ContactRequestMailer.forward_contact_request_email(@messenger).deliver_later
      redirect_to contact_request_success_path(request.parameters)
    else
      flash[:failure] = "There was an error, please resubmit form"
    end
  end

  private
    def contact_request_params
      params.require(:contact_request).permit(:first_name, :last_name, :email, :message)
    end
end

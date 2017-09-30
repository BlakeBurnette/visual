class ContactRequestMailer < ApplicationMailer
  default from: 'jbburnette2@gmail.com'

  def contact_request_response_email(messenger)
    @messenger = messenger[:contact_request]
    mail(to: @messenger[:email], subject: 'Thanks for Reaching Out!')
  end

  def forward_contact_request_email(messenger)
    @messenger = messenger[:contact_request]
    mail(to: 'jbburnette2@gmail.com', subject: 'You have a new message')
  end
end

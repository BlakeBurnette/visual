# Action Mailer Application Controller
class ApplicationMailer < ActionMailer::Base
  default from: 'jbburnette2@gmail.com'
  layout 'mailer'
end

# Application helper, keep this small
module HomeHelper
  def welcome_name(name)
    if name != nil
      content_tag(:div,
                  "welcome #{name.humanize}",
                  id:'greeting',
                   class: 'personal' )
    else
      content_tag(:div,
                  'welcome',
                  id: 'greeting',
                  class: 'empty')
    end
  end
end

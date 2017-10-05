# Application helper, keep this small
module HomeHelper
  def welcome_name(name)
    if name != nil
      "#{name.humanize}"
    end
  end
end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'

  get '/about', to: 'about#index', as: 'about'
  get '/work', to: 'work#index', as: 'work'
  get '/code_examples', to: 'code_examples#index', as: 'code_examples'
  get '/fun_projects', to: 'fun_projects#index', as: 'fun_projects'
  get '/contact', to: 'contact#index', as: 'contact'
end

Rails.application.routes.draw do

  resources :segments

  resources :locations

  resources :trails
  # resources :form

  root to: 'pages#index'

end

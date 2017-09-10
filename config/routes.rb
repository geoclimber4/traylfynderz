Rails.application.routes.draw do

  resources :segments

  resources :form

  root to: 'pages#index'

end

Rails.application.routes.draw do

  resources :segments, only: [:index]

  root 'pages#index'

end

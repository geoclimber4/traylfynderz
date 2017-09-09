Rails.application.routes.draw do

  resources :segments, only: [:index]

  root to: 'pages#index'

end

Rails.application.routes.draw do

  resources :segments

  root to: 'pages#index'

end

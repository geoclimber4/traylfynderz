Rails.application.routes.draw do

  resources :segments

  root 'pages#index'

end

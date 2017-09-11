Rails.application.routes.draw do

  # resources :segments

  resources :locations do
    resources :segments
  end

  # resources :form

  root to: 'pages#index'

end

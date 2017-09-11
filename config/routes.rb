Rails.application.routes.draw do
# lock down extra routes !!!!!

  resources :locations do
    resources :segments
  end


  # resources :form

  root to: 'pages#index'

end

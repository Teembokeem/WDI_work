Rails.application.routes.draw do
  root 'static_pages#index'

  get 'static_pages/contact'

  get 'static_pages/about'
end

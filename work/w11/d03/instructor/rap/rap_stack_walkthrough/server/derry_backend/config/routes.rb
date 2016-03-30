Rails.application.routes.draw do
  namespace :api do
    resources :fish
    resources :users, only: :create

    get 'me', to: 'users#me'
    post 'login', to: 'users#token'
    post 'token', to: 'users#token'
  end
end

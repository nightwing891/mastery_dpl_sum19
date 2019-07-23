Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  root 'api/courses#index'
  namespace :api do
    resources :users
    resources :courses do
      resources :lessons
    end
  end
  get '*other', to: 'static#index'
end

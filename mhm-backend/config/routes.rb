Rails.application.routes.draw do
  resources :goal_tasks
  resources :tasks
  resources :goals
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

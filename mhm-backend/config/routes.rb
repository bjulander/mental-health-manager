Rails.application.routes.draw do
  resources :timed_tasks
  resources :writing_tasks
  resources :goals
  resources :tasks
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

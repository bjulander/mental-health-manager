class TaskSerializer < ActiveModel::Serializer
  attributes :category, :name, :content, :value, :complete
  has_many :goal_tasks
end

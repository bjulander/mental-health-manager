class TaskSerializer < ActiveModel::Serializer
  attributes :id, :category, :name, :content, :points
  has_many :goal_tasks
end

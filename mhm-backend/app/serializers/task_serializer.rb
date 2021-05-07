class TaskSerializer < ActiveModel::Serializer
  attributes :id, :category, :name, :points
  has_many :goal_tasks
end

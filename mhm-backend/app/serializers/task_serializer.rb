class TaskSerializer < ActiveModel::Serializer
  attributes :category, :name, :content, :points, :complete
  has_many :goal_tasks
end

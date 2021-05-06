class GoalTaskSerializer < ActiveModel::Serializer
  attributes :id, :category, :name, :content, :points, :complete
  belongs_to :goal
  belongs_to :task
end

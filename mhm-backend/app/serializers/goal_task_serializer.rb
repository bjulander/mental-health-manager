class GoalTaskSerializer < ActiveModel::Serializer
  attributes :id, :category, :name, :content, :points, :goal_id, :task_id
  belongs_to :goal
  belongs_to :task
end

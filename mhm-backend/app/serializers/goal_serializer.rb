class GoalSerializer < ActiveModel::Serializer
  attributes :id, :date, :day, :set_goal, :current_points
  has_many :goal_tasks
end

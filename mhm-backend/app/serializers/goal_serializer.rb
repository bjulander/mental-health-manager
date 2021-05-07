class GoalSerializer < ActiveModel::Serializer
  attributes :id, :date, :day, :set_goal
  has_many :goal_tasks
end

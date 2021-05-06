class GoalSerializer < ActiveModel::Serializer
  attributes :date, :day, :set_goal, :current_total, :ending_total
  has_many :goal_tasks
end

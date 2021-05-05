class GoalSerializer < ActiveModel::Serializer
  attributes :date, :day, :current_total, :ending_total
  has_many :goal_tasks
end

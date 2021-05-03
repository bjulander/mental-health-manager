class GoalSerializer < ActiveModel::Serializer
  attributes :id
  has_many :check_tasks, :writing_tasks, :timed_tasks
end

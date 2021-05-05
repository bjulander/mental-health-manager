class GoalTaskSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :goal
  belongs_to :task
end

class GoalTaskSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :goal
  bolongs_to :task
end

class GoalSerializer < ActiveModel::Serializer
  attributes :name, :current_total, :ending_total
  has_many :tasks
end

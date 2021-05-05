class GoalSerializer < ActiveModel::Serializer
  attributes :date, :name, :current_total, :ending_total
  has_many :tasks
end

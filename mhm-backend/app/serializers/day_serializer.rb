class DaySerializer < ActiveModel::Serializer
  attributes :name, :current_total
  has_many :tasks
end

class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :day
  has_one :category
end

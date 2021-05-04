class TaskSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :day
end

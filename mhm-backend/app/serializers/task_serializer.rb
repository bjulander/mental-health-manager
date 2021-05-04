class TaskSerializer < ActiveModel::Serializer
  attributes :category_type, :name, :content, :value, :complete
  has_one :goal
  has_one :category
end

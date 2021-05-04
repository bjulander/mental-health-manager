class TaskSerializer < ActiveModel::Serializer
  attributes :category_type, :name, :content, :value, :complete
  has_one :day
  has_one :category
end

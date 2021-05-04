class CategorySerializer < ActiveModel::Serializer
  attributes :name
  has_many :tasks
end

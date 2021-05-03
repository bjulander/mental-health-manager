class WritingTaskSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :goal
end

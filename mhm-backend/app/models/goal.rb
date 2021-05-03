class Goal < ApplicationRecord
    has_many :check_tasks, :writing_tasks, :timed_tasks
end

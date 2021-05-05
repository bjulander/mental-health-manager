class CreateGoalTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :goal_tasks do |t|
      t.belongs_to :goal, null: false, foreign_key: true
      t.belongs_to :task, null: false, foreign_key: true

      t.timestamps
    end
  end
end

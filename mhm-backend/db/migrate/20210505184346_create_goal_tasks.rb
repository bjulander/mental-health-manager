class CreateGoalTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :goal_tasks do |t|
      t.string :category
      t.text :name
      t.integer :points
      t.integer :goal_id
      t.integer :task_id

      t.timestamps
    end
  end
end

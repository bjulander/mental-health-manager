class CreateCheckTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :check_tasks do |t|
      t.string :name

      t.integer :goal_id

      t.timestamps
    end
  end
end

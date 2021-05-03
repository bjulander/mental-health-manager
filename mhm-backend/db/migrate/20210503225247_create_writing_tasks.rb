class CreateWritingTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :writing_tasks do |t|
      t.string :name
      t.text :entry
      t.integer :goal_id

      t.timestamps
    end
  end
end

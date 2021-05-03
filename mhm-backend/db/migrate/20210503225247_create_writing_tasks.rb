class CreateWritingTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :writing_tasks do |t|

      t.timestamps
    end
  end
end

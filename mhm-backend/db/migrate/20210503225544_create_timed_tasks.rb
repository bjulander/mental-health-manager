class CreateTimedTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :timed_tasks do |t|

      t.timestamps
    end
  end
end

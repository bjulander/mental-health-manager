class CreateGoals < ActiveRecord::Migration[6.1]
  def change
    create_table :goals do |t|
      t.string :day
      t.string :date
      t.integer :set_goal, default: 0

      t.timestamps
    end
  end
end

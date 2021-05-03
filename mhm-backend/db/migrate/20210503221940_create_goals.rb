class CreateGoals < ActiveRecord::Migration[6.1]
  def change
    create_table :goals do |t|
      t.string :day
      t.date :date
      t.integer :current_total

      t.timestamps
    end
  end
end

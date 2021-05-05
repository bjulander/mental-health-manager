class CreateGoals < ActiveRecord::Migration[6.1]
  def change
    create_table :goals do |t|
      t.date :date, default: -> {'CURRENT_DATE'}
      t.string :name
      t.integer :current_total, default: 0
      t.integer :ending_total, default: 0

      t.timestamps
    end
  end
end

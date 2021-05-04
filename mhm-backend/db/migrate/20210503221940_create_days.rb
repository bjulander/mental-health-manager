class CreateDays < ActiveRecord::Migration[6.1]
  def change
    create_table :days do |t|
      t.string :name
      t.date :date
      t.integer :current_total

      t.timestamps
    end
  end
end

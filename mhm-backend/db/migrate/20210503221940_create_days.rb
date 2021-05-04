class CreateDays < ActiveRecord::Migration[6.1]
  def change
    create_table :days do |t|
      t.string :name
      t.integer :current_total, default: 0

      t.timestamps
    end
  end
end

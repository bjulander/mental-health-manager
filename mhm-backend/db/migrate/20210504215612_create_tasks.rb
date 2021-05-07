class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :category
      t.text :name
      t.integer :points, default: 0
      
      t.timestamps
    end
  end
end

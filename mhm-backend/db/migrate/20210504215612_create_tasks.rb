class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :category, default: "Action"
      t.text :name
      t.integer :points, default: 5
      
      t.timestamps
    end
  end
end

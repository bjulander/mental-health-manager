class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :category
      t.text :name
      t.text :content, default: " "
      t.integer :points
      t.boolean :complete, default: false

      t.timestamps
    end
  end
end

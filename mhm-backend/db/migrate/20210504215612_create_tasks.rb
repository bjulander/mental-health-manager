class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :category_type
      t.text :name
      t.text :content, default: " "
      t.integer :value
      t.boolean :complete, default: false
      t.belongs_to :day, null: false, foreign_key: true
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end

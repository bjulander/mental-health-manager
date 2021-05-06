# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_05_05_184346) do

  create_table "goal_tasks", force: :cascade do |t|
    t.integer "goal_id", null: false
    t.integer "task_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["goal_id"], name: "index_goal_tasks_on_goal_id"
    t.index ["task_id"], name: "index_goal_tasks_on_task_id"
  end

  create_table "goals", force: :cascade do |t|
    t.string "day"
    t.string "date"
    t.integer "set_goal", default: 0
    t.integer "current_total", default: 0
    t.integer "ending_total", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tasks", force: :cascade do |t|
    t.string "category"
    t.text "name"
    t.text "content", default: " "
    t.integer "points"
    t.boolean "complete", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "goal_tasks", "goals"
  add_foreign_key "goal_tasks", "tasks"
end

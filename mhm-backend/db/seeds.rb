# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Category.create(name: "Verbal")
Category.create(name: "Writing")
Category.create(name: "Timed")

Goal.create(name: "Monday")
Goal.create(name: "Tuesday")
Goal.create(name: "Wednesday")

Task.create(category_type: "Verbal", name: "Say aloud 5 things you like about yourself", value: 5, category_id: 1, goal_id: 1)
Task.create(category_type: "Writing", name: "Write down 3 affirmations", value: 10, category_id: 2, goal_id: 2)
Task.create(category_type: "Timed", name: "10-minute Meditation", value: 15, category_id: 3, goal_id: 3)
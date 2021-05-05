# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Goal.create(name: "Monday")
Goal.create(name: "Tuesday")
Goal.create(name: "Wednesday")

Task.create(category: "Verbal", name: "Say aloud 5 things you like about yourself", value: 5)
Task.create(category: "Writing", name: "Write down 3 affirmations", value: 10)
Task.create(category: "Timed", name: "10-minute Meditation", value: 15)

GoalTask.create(goal_id: 1, task_id: 1)
GoalTask.create(goal_id: 2, task_id: 2)
GoalTask.create(goal_id: 3, task_id: 3)
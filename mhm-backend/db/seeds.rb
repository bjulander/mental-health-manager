# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Goal.create(day: "Monday", date: "May 3rd")
Goal.create(day: "Tuesday", date: "May the Fourth")
Goal.create(day: "Wednesday", date: "Revenge of the Fifth")

Task.create(category: "Verbal", name: "Say aloud 5 good attributes about yourself", points: 5)
Task.create(category: "Writing", name: "Write down 3 affirmations", points: 10)
Task.create(category: "Timed", name: "10-minute Meditation", points: 15)

GoalTask.create(goal_id: 1, task_id: 1)
GoalTask.create(goal_id: 2, task_id: 2)
GoalTask.create(goal_id: 3, task_id: 3)
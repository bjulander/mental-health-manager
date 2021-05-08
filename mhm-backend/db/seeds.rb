# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Goal.create(day: "Monday", date: "May 3rd", goal: 50)
Goal.create(day: "Tuesday", date: "May the Fourth", goal: 40)
Goal.create(day: "Wednesday", date: "Revenge of the Fifth", goal: 55)

GoalTask.create(category: "Verbal", name: "Say aloud 5 good attributes about yourself", points: 5, goal_id: 1, task_id: 1)
GoalTask.create(category: "Writing", name: "Write down 3 affirmations", points: 10, goal_id: 2, task_id: 2)
GoalTask.create(category: "Timed", name: "10-minute Meditation", points: 15, goal_id: 3, task_id: 3)

Task.create(category: "Verbal", name: "Say aloud 5 good attributes about yourself", points: 5)
Task.create(category: "Writing", name: "Write down 3 affirmations", points: 10)
Task.create(category: "Timed", name: "10-minute Meditation", points: 15)
Task.create(category: "Active", name: "Exercise ", points: 20)
Task.create(category: " ", name: " ", points: )
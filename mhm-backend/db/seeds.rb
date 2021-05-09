# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Goal.create(day: "Monday", date: "May 3rd", set_goal: 50)
Goal.create(day: "Tuesday", date: "May the Fourth", set_goal: 40)
Goal.create(day: "Wednesday", date: "Revenge of the Fifth", set_goal: 55)


GoalTask.create(category: "Verbal", name: "5 good qualities about yourself.", points: 5, goal_id: 1, task_id: 1)
GoalTask.create(category: "Writing", name: "3 affirmations.", points: 10, goal_id: 2, task_id: 2)
GoalTask.create(category: "Timed", name: "10-minute Meditation", points: 15, goal_id: 3, task_id: 3)

Task.create(category: "Verbal", name: "5 good qualities about yourself.", points: 5)
Task.create(category: "Writing", name: "3 affirmations.", points: 10)
Task.create(category: "Timed", name: "10-minute Meditation.", points: 15)
Task.create(category: "Active", name: "Exercise.", points: 20)
Task.create(category: "Verbal", name: "Tell a loved one you appreciate them.", points: 10)
Task.create(category: "Writing", name: "A letter to a friend.", points: 10)
Task.create(category: "Timed", name: "60-minutes of no screen time.", points: 20)
Task.create(category: "Active", name: "Go on a walk around the block.", points: 5)
Task.create(category: "Active", name: "Scream at the top of your lungs!", points: 10)
Task.create(category: "Timed", name: "30-minute walk.", points: 20)
Task.create(category: "Verbal", name: "5 things you are are thankful for.", points: 5)
Task.create(category: "Writing", name: "3 things you want to improve.", points: 10)
Task.create(category: "Time", name: "10-minutes of stretching.", points: 5)
Task.create(category: "Verbal", name: "Call a friend/family member.", points: 15)
Task.create(category: "Active", name: "Drink 1 gallon of water.", points: 20)
Task.create(category: "Timed", name: "8-hours of sleep.", points: 20)
Task.create(category: "Active", name: "10 deep breaths.", points: 5)
Task.create(category: "Active", name: "Eat a vegetable at every meal.", points: 10)
Task.create(category: "Writing", name: "A plan to volunteer somewhere.", points: 5)
Task.create(category: "Verbal", name: "Open up to a close friend.", points: 5)
Task.create(category: "Timed", name: "20-minute bath.", points: 10)
Task.create(category: "Verbal", name: "Share a positive experience with a friend or family member.", points: 5)
class GoalTasksController < ApplicationController


    def create
        goal_task = GoalTask.create(goal_task_params)
        render json: goal_task
    end


    private

    def goal_task_params
        params.require(:goalTask).permit(:category, :name, :points, :task_id, :goal_id)
    end
end

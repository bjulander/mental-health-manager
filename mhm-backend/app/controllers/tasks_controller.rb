class TasksController < ApplicationController

    def index
        render json: Task.all
    end

    def show
        task = Task.find_by(id: params[:id])
        render json: task
    end

    def create
        task = Task.new(task_params)
    end


    private

    def task_params
        params.require(:task).permit(:category_type, :name, :content, :value, :complete, :goal_id, :category_id)
    end
end

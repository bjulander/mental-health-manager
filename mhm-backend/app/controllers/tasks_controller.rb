class TasksController < ApplicationController

    def index
        render json: Task.all
    end

    def show
        task = Task.find_by(id: params[:id])
        render json: task
    end

    def create
        task = Task.create(task_params)
        render json: task
    end


    private

    def task_params
        params.require(:task).permit(:category, :name, :content, :points)
    end
end

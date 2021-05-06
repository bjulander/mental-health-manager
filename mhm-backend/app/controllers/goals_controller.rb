class GoalsController < ApplicationController

    def index
        goals = Goal.all 
        render json: goals
    end

    def create
        goal = Goal.create(goal_params)
        render json: goal
    end

    def show
        goal = Goal.find_by(id: params[:id])
        render json: goal
    end

    private 
    
    def goal_params
        params.require(:goal).permit(:day, :date, :set_goal, :current_total, :ending_total)
    end
end

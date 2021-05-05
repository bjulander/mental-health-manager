class GoalsController < ApplicationController

    def index
        goals = Goal.all 
        render json: goals
    end

    def create
        goal = Goal.new(goal_params)
        if goal.save
            render json: goal
        end
    end

    def show
        goal = Goal.find_by(id: params[:id])
        render json: goal
    end

    private 
    
    def goal_params
        params.require(:goal).permit(:day, :date, :current_total, :ending_total)
    end
end

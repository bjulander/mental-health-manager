class GoalsController < ApplicationController

    def index
        render json: Goal.all
    end

    def create
        goal = Goal.create(goal_params)
        render json: goal
    end

    def destroy
        goal = Goal.find_by(id: params[:id])
        goal.destroy
        render json: {message: "success"}
      end

    private 
    
    def goal_params
        params.require(:goal).permit(:id, :day, :date, :set_goal, :current_points)
    end
end

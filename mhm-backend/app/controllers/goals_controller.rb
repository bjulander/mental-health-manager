class GoalsController < ApplicationController

    def index
        goals = Goal.all 
        render json: goals
    end

    def show
        goal = Goal.find_by(id: params[:id])
        render json: goal
    end
end

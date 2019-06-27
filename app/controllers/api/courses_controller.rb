class Api::CoursesController < ApplicationController
  before_action :authenticate_user, except: [:index]
  
  def index
    render json: Course.all
  end

  def create
    @course = Course.new(course_params)
    if @course.save
      render json: @course
    else
      render json: { errors: @course.errors }, status: :unprocessable_entity
    end
  end

  def update
    @course = Course.find(params[:id])
    @course.update(complete: !course.complete)
    render json: @course
  end

  def destroy
    Course.find(params[:id]).destroy
    render json: { message: 'course deleted' }
  end

  private

  def course_params
    params.require(:course).permit(:title, :subtitle, :description, :workbook, :id)
  end

end

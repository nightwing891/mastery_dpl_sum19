class Api::CoursesController < ApplicationController

  before_action :authenticate_user!, except: [:index, :show]

  
  def index
    render json: Course.all
  end

  def create
    course = Course.new(course_params)
    if course.save
      render json: course
    else
      render json: { errors: course.errors }, status: :unprocessable_entity
    end
  end

  def update
    course = Course.find(params[:id])
    if course.update(course_params)
      render json: course
    else
      render json: { errors: course.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Course.find(params[:id]).destroy
    render json: { message: 'course deleted' }
  end

  def show
    # shows a indvidual course lesson
    @course = Course.find(params[:id])
    render json: @course.lessons
  end

  private

  def course_params
    params.require(:course).permit(:title, :subtitle, :description, :workbook, :id)
  end

end

class Api::LessonsController < ApplicationController
  before_action: set_course

  def index
    render json: @course.lessons
  end

  def create
    @lesson = @course.lessons.new(lesson_params)
    if @lesson.save
      render json: @lesson
    else
      render json: { errors: lesson.errors }, status: :unprocessable_entity
    end
  end

  def update
    @lesson = @course.lessons.find(params[:id])
    if @lesson.update(lesson_params)
      render json: @lesson
    else
      render json: { errors: @lesson.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @lesson = @course.lessons.find(params[:id])
    @lesson.destroy
    render json: { message: 'Lesson deleted' }
  end

  private

  def lesson_params
    params.require(:lesson).permit(:instructor, :title, :subtitle, :description, :length, :body, :complete, :id, :course_id)
  end

  def set_course
    @course = Course.find(params[:course_id])
  end

end

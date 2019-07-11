class UsersController < ApplicationController
  def index
    user = User.all
  end

def create
  # Use devise
  end

  def update
  # Use devise
  end

  def destroy
    User.find(params[:id]).destroy
  end

  def show
  end

  private

  def user_params
  end

end

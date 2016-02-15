class HypesController < ApplicationController

  def index
    @hypes = Hype.all
    @hype = Hype.new

  end

  def show
    @hype = Hype.find(params[:id])
  end

  def new
    @hype = Hype.new
  end

  def create
    @hype = Hype.new(hype_params)

    if @hype.save
      redirect_to hypes_path
    else
      render :new
    end
  end

  def edit
    @hype = Hype.find(params[:id])
  end

  def update
    @hype = Hype.find(params[:id])

    if @hype.update_attributes(hype_params)
      redirect_to hypes_path
    else
      render :edit
    end
  end

  def destroy
    @hype = Hype.find(params[:id])
    @hype.destroy
    redirect_to hypes_path
  end


  def hype_params
    params.require(:hype).permit(:msg, :user)
  end


end

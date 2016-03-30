require 'auth_token'

class Api::UsersController < ApplicationController

  # POST /user.json
  def create
    user = User.new(user_params)

    if user.save
      render json: user
    else
      render status: :unprocessable_entity
    end
  end

  def token
    user = User.find_by(phone_number: user_params[:phone_number])
    if user && user.authenticate(user_params[:password])
      payload = {
        user: {
          name:         user.name,
          phone_number: user.phone_number,
          id:           user.id
        }
      }

      render json: {token: AuthToken.encode(payload)}
    else
      render status: :unauthorized
    end

  end

  def me
    auth_header = request.headers["Authorization"]

    if auth_header
      auth_token = auth_header.split(' ').last
      credentials = AuthToken.decode(auth_token)

      user = User.find_by(phone_number: credentials[:phone_number])

      if user
        render json: user
      else
        render status: :not_found
      end
    else
      render status: :bad_request
    end

  end



  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.permit(:name, :phone_number, :password)
    end
end

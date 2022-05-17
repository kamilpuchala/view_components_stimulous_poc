class User::Following::Follow::Component < ViewComponent::Base
  include ::SessionsHelper

  def initialize(user:)
    @user = user
  end

  private

  attr_reader :user
end
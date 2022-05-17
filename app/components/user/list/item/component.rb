class User::List::Item::Component < ViewComponent::Base
  include ::SessionsHelper
  include ::UsersHelper

  with_collection_parameter :user

  def initialize(user:)
    @user = user
  end

  private

  attr_reader :user
end
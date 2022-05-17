class User::List::Component < ViewComponent::Base
  def initialize(users:)
    @users = users
  end

  private

  attr_reader :users

  def render?
    users.any?
  end
end
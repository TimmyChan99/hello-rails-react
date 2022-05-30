class V1::GreetingsController < ApplicationController
def index
	render json: { messages: 'Hello!!' }.to_json
end
end

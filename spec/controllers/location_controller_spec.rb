require 'rails_helper'

describe LocationsController do
  let!(:location) { Location.create!(address: "Urbana, IL") }

  # describe "GET #index" do
  #   it "responds with status code 200" do
  #     get :index
  #     expect(response).to have_http_status 200
  #   end

  #   it "assigns the recent games as @games" do
  #     get :index
  #     expect(assigns(:games)).to eq([game])
  #   end

  #   it "renders the :index template" do
  #     get :index
  #     expect(response).to render_template(:index)
  #   end
  # end

  # describe "GET #show" do
  #   it "responds with status code 200" do
  #     get :show, { id: game.id }
  #     expect(response).to have_http_status 200
  #   end

  #   it "assigns the correct game as @game" do
  #     get :show, { id: game.id }
  #     expect(assigns(:game)).to eq(game)
  #   end

  #   it "renders the :show template" do
  #     get :show, { id: game.id }
  #     expect(response).to render_template(:show)
  #   end
  # end

  # describe "GET #new" do
  #   it "responds with status code 200" do
  #     get :new
  #     expect(response).to have_http_status 200
  #   end

  #   it "assigns a new game to @game" do
  #     get :new
  #     expect(assigns(:game)).to be_a_new Game
  #   end

  #   it "renders the :new template" do
  #     get :new
  #     expect(response).to render_template(:new)
  #   end
  # end

  describe "POST #create" do
    # context "when valid params are passed" do
      # it "responds with status code 302" do
      #   post :create, { game: { user_throw: "rock", computer_throw: "scissors", winner: "user" } }
      #   expect(response).to have_http_status 302
      # end

      it "creates a new location in the database" do
        post :create, params: { location: { address: "Sugar Grove, IL" } }
        expect(:location).should_not be_nil
      end

      it "assigns the newly created location as @location" do
        post :create, { location: { address: "Willow Springs, IL" } }
        expect(assigns(:location)).to be_an_instance_of Location
      end

      # it "sets a notice that the game was successfully created" do
      #   post :create, { game: { user_throw: "rock", computer_throw: "scissors" } }
      #   expect(flash[:notice]).to eq "Game was successfully created."
      # end

      # it "redirects to the created game" do

      # end
    # end

    # context "when invalid params are passed" do
    #   it "responds with status code 422: Unprocessable Entity" do
    #     post :create, { game: { user_throw: "pineapple" } }
    #     expect(response).to have_http_status 422
    #   end

    #   it "does not create a new game in the database"do
    #     post :create, { game: { user_throw: "pineapple"} }
    #     expect(assigns(:game)).to_not be_valid
    #   end

    #   it "assigns the unsaved game as @game" do
    #     post :create, { game: { user_throw: "pineapple"} }
    #     expect(assigns(:game)).to be_an_instance_of Game
    #   end

    #   it "renders the :new template" do
    #     post :create, {game: {user_throw: "pineapple"}}
    #     expect(response).to render_template(:new)
    #   end
    # end
  end

  # describe "DELETE #destroy" do
  #   it "responds with status code 302" do
  #     delete :destroy, { id: game.id }
  #     expect(response).to have_http_status 302
  #   end

  #   it "destroys the requested game" do
  #     expect { delete(:destroy, { id: game.id }) }.to change(Game, :count).by(-1)
  #   end

  #   it "sets a notice that the game was destroyed" do
  #     delete :destroy, { id: game.id }
  #     expect(flash[:notice]).to match /Game was successfully destroyed/
  #   end

  #   it "redirects to the games list" do
  #     delete :destroy, { id: game.id }
  #     expect(response).to redirect_to games_url
  #   end
  # end
end

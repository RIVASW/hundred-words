class TranslationsListsController < ApplicationController
  def index
    render(json: TranslationsList.all)
  end
end
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources(:translations_lists, only: %i(index show)) do
      collection do
        post(:import_csv)
      end
    end
  end
end

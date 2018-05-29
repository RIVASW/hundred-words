class TranslationsListsController < ApplicationController
  def index
    render(json: TranslationsList.all)
  end

  def show
    translations_list = TranslationsList.includes(translations: [:foreign_word, :translation_word]).find(params[:id])
    translations = translations_list.translations.map do |translation| 
      { foreign_word: translation.foreign_word.word_text, translation_word: translation.translation_word.word_text }
    end
    data = { translations_list: translations_list, translations: translations }
    render(json: data)
  end

  def import_csv
    csv_string = csv_file_content(params[:csv])
    result = TranslationsListCsvImporter.call(csv_string)
    if result.code == :ok
      render(json: { code: :ok })
    else
      render(json: { code: :error, message: result.message })
    end
  end

  private

  def csv_file_content(encoded_csv_file)
    content = encoded_csv_file.split(/[:;,]/)[3]
    Base64.decode64(content).force_encoding('UTF-8').encode
  end
end
class TranslationsListCsvImporter
  class << self
    def call(csv_string)
      parsed_csv = CSV.parse(csv_string)
      list_name = parsed_csv.first[0]

      ActiveRecord::Base.transaction do 
        translations_list =  TranslationsList.create!(name: list_name)
        english_language = Language.find_or_create_by!(name: 'English')
        russian_language =  Language.find_or_create_by!(name: 'Русский')

        parsed_csv.each do |row|
          foreign_word = Word.create!(word_text: row[0], language: english_language)
          translation_word = Word.create!(word_text: row[1], language: russian_language)
          translation = Translation.create!(
            foreign_word: foreign_word,
            translation_word: translation_word,
            translations_list: translations_list,
          )
        end
      end

      OpenStruct.new(
        code: :ok,
        translations_list: translations_list,
      )

    rescue Exception => e
      OpenStruct.new(
        code: :error,
        message: e.message,
      )
    end
  end
end
require 'csv'

english_language, russian_language = Language.create!([{ name: 'English' }, { name: 'Русский' }])

dir = File.dirname(File.expand_path(__FILE__))

translations_list =  TranslationsList.create!(name: 'First List')
CSV.foreach(File.join(dir, 'translations_list.csv')) do |row|
  foreign_word = Word.create!(word_text: row[0], language: english_language)
  translation_word = Word.create!(word_text: row[1], language: russian_language)
  translation = Translation.create(
    foreign_word: foreign_word,
    translation_word: translation_word,
    translations_list: translations_list,
  )
end


class TranslationsList < ActiveRecord::Base
  has_many :translations, dependent: :destroy
  has_many :foreign_words, through: :translations, dependent: :destroy
  has_many :translation_words, through: :translations, dependent: :destroy
end

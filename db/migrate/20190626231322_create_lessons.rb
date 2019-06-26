class CreateLessons < ActiveRecord::Migration[5.2]
  def change
    create_table :lessons do |t|
      t.string :instructor
      t.string :title
      t.string :subtitle
      t.string :description
      t.string :length
      t.string :body
      t.boolean :complete
      t.belongs_to :course, foreign_key: true

      t.timestamps
    end
  end
end

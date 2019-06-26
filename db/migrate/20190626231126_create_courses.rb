class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.string :title
      t.string :subtitle
      t.string :description
      t.string :workbook

      t.timestamps
    end
  end
end

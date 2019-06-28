require 'faker'
require 'database_cleaner'

DatabaseCleaner.clean_with(:truncation)

user = User.new({
  name: 'admin',
  email: 'admin@email.com',
  password: 'password',
  admin: true
})
user.save!

courses = [1,2,3,4,5,6,7,8,9,10]

10.times do
  course = Course.create(
    title: Faker::Book.title,
    subtitle: Faker::Book.genre,
    description: Faker::Quote.famous_last_words
  )
 
100.times do 
  lesson = Lesson.create(
      instructor: Faker::GreekPhilosophers.name,
      title: Faker::Hipster.word,
      subtitle: Faker::Hipster.sentence,
      description:Faker::Hipster.paragraph,
      length: Faker::Number.between(4, 20),
      complete: false,
      course_id: courses.sample
  )
  

  end
end

puts "Data Seeded."
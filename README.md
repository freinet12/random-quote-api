# Random Quote API
This is a simple API built with nodejs, expressjs, and mysql.
I built this for freeCodeCamp's <a href="https://bit.ly/332WdHJ" >Random Quote Machine project</a>.
<br>
<br>
# Getting Started
  - Installation:<br><br>
      - Clone this repo<br><br>
      - run <code>npm install</code> to install all dependencies<br><br>
      - Install MYSQL and start the server:<br>
         - You need MySQL running in order to use this project. <br>
         - If you're on Linux, install MySQL for your flavor and start the server.<br>
         - If you're on Mac, you can use <a href="https://www.mamp.info/en/">MAMP</a>. <br>
         - If you're on Windows, you can use <a href="https://www.apachefriends.org/index.html">XAMPP</a> 
             or <a href="https://sourceforge.net/projects/wampserver/">WAMP</a><br><br>
      - Open the .env-example file and update the necessary database configs (database username, database password, database host, etc)<br><br>
      - CD into the random-quote-api project and run <code>npx sequelize db:migrate </code> to migrate the database tables. (make sure your MySQL server is running)
         <br><br>
      - Run <code>npx sequelize db:migrate</code> to run the migrations and create all the database tables
      - Run <code>npx sequelize db:seed:all</code> to seed the database with fake data generated with <a href="https://www.npmjs.com/package/faker">Faker</a>
         <br><br>
      - run <code>npm start </code> to run the app
         <br><br><br>
         
         
 - Get Requests
      - Get All Quotes
        - <code>localhost:3000/api/quotes</code> will return all quotes, paginated at 10 records per page. 
          - to navigate between paginated page results, do <code>localhost:3000/api/quotes?page=2</code> and so on
      - Get A single Quote
        - <code>localhost:3000/api/quotes/1</code> will return the quote with an id of 1
      - Get Quotes by Author ID
        - <code>localhost:3000/api/quotes?authorId=3</code> will return all quotes for the author with an id of 3
        <br><br>
     - Get All Authors
       - <code>localhost:3000/api/authors</code> will return all authors paginated at 10 records per page.
         - to navigate between paginated page results, do <code>localhost:3000/api/authors?page=2</code> and so on
     - Get a Single Author by ID
       - <code>localhost:3000/api/authors/1</code> will return the author with an id of 1
     - Get Author By Name
       - <code>localhost:3000/api/authors?authorName=<author's name here></code>
       
 - Post Requests
 
       

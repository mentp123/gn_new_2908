const express = require('express');
const router = express.Router()
const database = require('../database'); // Unified database module
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const multer = require('multer');
const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage: storage });



router.use(bodyParser.urlencoded({ extended: true }));
router.use(session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true
}));



router.get("/", function(req, res,){

  const errorMessage = req.query.error || '';
  
  const loginPage = `<!DOCTYPE html>
  <html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
  body {font-family: Arial, Helvetica, sans-serif;}
  form {border: 3px solid #f1f1f1;}
  
  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  
  button {
    background-color: #04AA6D;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }
  
  button:hover {
    opacity: 0.8;
  }
  
  .cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
  }
  
  .imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
    height:200px;
    width:200px;
  }
  
  img.avatar {
    width: 90%;
    border-radius: 100%;
  }
  
  .container {
      height:200px;
    width:200px;
      padding: 16px;
  }
  
  span.psw {
    float: right;
    padding-top: 16px;
  }
  
  .error-message {
    color: red;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
  }
  
  /* Change styles for span and cancel button on extra small screens */
  @media screen and (max-width: 300px) {
    span.psw {
       display: block;
       float: none;
    }
    .cancelbtn {
       width: 100%;
    }
  }
  </style>
  </head>
  <body>
  
  <h2>Login Form</h2>
  <center>
  <form action="/backend/login" method="post">
    <div class="imgcontainer">
      <img src="/images/img_avatar2.png" alt="Avatar" class="avatar">
    </div>
  
    <div class="container">
      ${errorMessage ? `<div class="error-message">${errorMessage}</div>` : ''}
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="username" required>
  
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="password" required>
          
      <button type="submit">Login</button>
     
    </div>
  
   
  </form>
  </center>
  </body>
  </html>`;

if (req.session.loggedin) {
  res.render('index',{ message: '' });
} else {
    res.send(loginPage);
}
});

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
      // Using MongoDB to find the user
      database.userCollection().then(collection => {
        collection.findOne({ username: username, password: password })
          .then(result => {
            if (result) {
              req.session.loggedin = true;
              req.session.username = username;
              res.redirect('/backend');
            } else {
              // Redirect back to login page with error message
              res.redirect('/backend?error=Incorrect username or password. Please try again.');
            }
          })
          .catch(err => {
            console.error('Error executing MongoDB query:', err);
            res.redirect('/backend?error=Internal Server Error. Please try again later.');
          });
      })
      .catch(err => {
        console.error('Error connecting to MongoDB collection:', err);
        res.redirect('/backend?error=Internal Server Error. Please try again later.');
      });
  } else {
      // Redirect back to login page with error message
      res.redirect('/backend?error=Please enter both username and password.');
  }
});





router.post('/', (req, res) => {
  const { create, delete:newdel, getdata, genurl } = req.body;

if (create) {
      // Handle the "Create Table" button click
      // In MongoDB, collections are created automatically when documents are inserted
      // We'll just create an index on the collection
      
      database.mainCollection().then(collection => {
        // Create indexes for the collection
        collection.createIndex({ username: 1 })
          .then(() => {
            collection.createIndex({ date: 1 })
              .then(() => {
                console.log('Collection indexes created successfully');
                res.render('index', { message: 'Collection Ready' });
              })
              .catch(err => {
                console.error('Error creating date index:', err);
                res.render('index', { message: 'Error Creating Collection' });
              });
          })
          .catch(err => {
            console.error('Error creating username index:', err);
            res.render('index', { message: 'Error Creating Collection' });
          });
      })
      .catch(err => {
        console.error('Error accessing collection:', err);
        res.render('index', { message: 'Error Accessing Database' });
      }); 
  
  } else if (newdel) {
        
    // In MongoDB, we'll drop the collection instead of deleting a table
    database.mainCollection().then(collection => {
      // Delete all documents in the collection
      collection.deleteMany({})
        .then(result => {
          console.log(`Deleted ${result.deletedCount} documents from collection`);
          res.render('index', { message: 'Collection Cleared' });
        })
        .catch(err => {
          console.error('Error clearing collection:', err);
          return res.status(500).send('Internal Server Error');
        });
    })
    .catch(err => {
      console.error('Error accessing collection:', err);
      return res.status(500).send('Internal Server Error');
    });
  } else if (getdata) {
      // Handle the "Get Data" button click using MongoDB
      database.mainCollection().then(collection => {
        // Find all documents and sort by date
        collection.find({}).sort({ date: 1 }).toArray()
          .then(results => {
            // Check if any documents were returned
            if (results.length === 0) {
              // Handle the case when no documents were returned
              return res.render('index', { message: 'No Entry In The Table' });
            }
            
            // Render the table with the results
            res.render('table', { rows: results });
          })
          .catch(err => {
            console.error('Error executing MongoDB query:', err);
            return res.status(500).send('Error fetching data from the database.');
          });
      })
      .catch(err => {
        console.error('Error connecting to MongoDB collection:', err);
        return res.status(500).send('Error connecting to the database.');
      });

  } else if (genurl) {

    res.render('newurl');

  } else {
      // Handle any other case
      res.send('Unknown action');
  }
});





router.post('/upload', upload.single('textFile'), (req, res) => {
  // Access the uploaded file from req.file
  const url = req.body.url;
  const key = req.body.key;
  const uploadedFile = req.file;

  // Check if a file was uploaded
  if (!uploadedFile) {
      return res.status(400).send('No file uploaded.');
  }

  // Ensure the uploaded file is a text/plain file
  if (uploadedFile.mimetype !== 'text/plain') {
      return res.status(400).send('Only text files are allowed.');
  }

  // Read the content of the uploaded text file
  const fileContent = uploadedFile.buffer.toString('utf-8');
  const line = fileContent.split('\n');
  const b64user = line.map((str) => Buffer.from(str).toString('base64'));
  const links = b64user.map((str) => `${url}${key}${str}`);  
  res.render('url', { title:'USER LIST WITH URL', line, links });

  
  // Display the content in the response or perform other actions
  
  
});



module.exports = router;

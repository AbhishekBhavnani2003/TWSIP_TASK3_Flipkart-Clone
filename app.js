const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;



// database ins . 
const mongoose = require('mongoose');
const { error } = require("console");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/flipkart');
}



// login database

const info = new mongoose.Schema({
  email: String,
});

const contact = mongoose.model('contact', info);

// register database 

const data = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  dob: String,
  pwd: String
})

const registration = mongoose.model('data', data);


const shipping = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  address: String,
  pincode: String,
  productName: String

})

const shippingdetails = mongoose.model('order', shipping);





// Serve static files from both "public" and "static" directories

app.use("/static", express.static('./static/'));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/static", express.static(path.join(__dirname, "static"), { "Content-Type": "application/javascript" }));
app.use(express.static(path.join(__dirname, "js")));
app.use(express.urlencoded({ extended: true }));



// get request

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'register.html'));
});
app.get('/app.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'app.js'));
});




const userSchema = new mongoose.Schema({
  email: String,
});

const User = mongoose.model('User', userSchema);
app.use(bodyParser.json());


// post request


app.post('/login', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await registration.findOne({ email });

    if (user) {
      console.log('Login successful');
      res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    } else {
      console.log('Email not registered');
      res.sendFile(path.resolve(__dirname, 'public', 'register.html'));

    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});



app.post('/register', (req, res) => {
  var mydata = new registration(req.body);
  mydata.save().then(savedData => {
    const responseData = {
      email: savedData.email,
    };
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  }).catch(() => {
    res.status(400).send("Information could not be saved in the database.");
  });
});



const requireLogin = (req, res, next) => {
  if (req.query.logged_in) {
    next();
  } else {

    const mydata = new shippingdetails(req.body);
    mydata.save().then(savedData => {
      const responseData = {
        email: savedData.email,
      };
      console.log('Shipping details saved successfully.');
      // Redirect to the login page
      res.redirect('/login?redirect=/shipping-details');
    })
      .catch(error => {
        console.error('Error saving shipping details:', error);
        res.status(500).send('Internal Server Error');
      });
  }
};




app.post('/shipping-details', requireLogin, async (req, res) => {
  var mydata = new shippingdetails(req.body);
  mydata.save().then(savedData => {
    const responseData = {
      email: savedData.email,
    };
    res.sendFile(path.resolve(__dirname, 'public', 'end.html'));

  }).catch((error) => {
    res.status(400).send("Information could not be saved in the database.", error);
  });
});


// starting app 

app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const handlebars = require('handlebars');

app.use(bodyParser());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

app.post('/email', (req, res) => {
  const source = 
  "<h1>Hello!</h1>" + 
  "<h2>This is your project summary from The Graphic Jar</h2>" + 
  "<p>Est. Final Price: ${{estFinalPrice}}</p>" + 
  "<p>Project: {{project}} ${{projPrice}}</p>" + 
  "<p>Complexity: {{complexity}} ${{compPrice}}</p>" + 
  "<p>Project Budget: {{projBudget}}</p>" + 
  "<p>Project Timeline: {{projTimeline}}</p>" +
  "<p>Project Description: {{projDesc}}</p>" +
  "<p>Business Name: {{busName}}</p>" +
  "<p>Business Web: {{busWeb}}</p>" +
  "<p>Business Description: {{busDesc}}</p>" +
  "<p>Business Slogan: {{busSlogan}}</p>" +
  "<p>Color(s): {{colors}}</p>" +
  "<p>Contact Name: {{contactName}}</p>" +
  "<p>Contact Email: {{contactEmail}}</p>" +
  "<p>Contact Number: {{contactNumber}}</p>" +
  "<p>Contact Message: {{contactMessage}}</p>" +
  "<h2>Thank you for sending in your order for a possible project with us! You will recieve an email in about 2 business days to set up a free consultation over the phone. We will be going over your submission as well as answering any questions you may have.</h2>" + 
  "<h2>We hope you've enjoyed our process with submitting a project design. If you have any feedback about your experience, please reply to this email with your thoughts.</h2>";

  const template = handlebars.compile(source);

  const data = {
    estFinalPrice: req.body.survey.finalPrice,
    project: req.body.survey.projectsChosen.project,
    projPrice: req.body.survey.projectsChosen.price,
    complexity: req.body.survey.complexityChosen.complexity,
    compPrice: req.body.survey.complexityChosen.price,
    projBudget: req.body.survey.projectsInfo.projBudget,
    projTimeline: req.body.survey.projectsInfo.projTimeline,
    projDesc: req.body.survey.projectsInfo.projDesc,
    colors: req.body.survey.colorsInfo[0] + req.body.survey.colorsInfo[1],
    busName: req.body.survey.businessInfo.businessName,
    busWeb: req.body.survey.businessInfo.businessWeb,
    busDesc: req.body.survey.businessInfo.businessDesc,
    busSlogan: req.body.survey.businessInfo.businessSlogan,
    contactName: req.body.survey.contactInfo.contactName,
    contactEmail: req.body.survey.contactInfo.contactEmail,
    contactNumber: req.body.survey.contactInfo.contactNumber,
    contactMessage: req.body.survey.contactInfo.contactMessage
  };

  const result = template(data);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'thegraphicjar@gmail.com',
      pass: '8Pineapplesate4Popcorns!'
    }
  });

  const mailOptions = {
    from: 'thegraphicjar@gmail.com',
    to: [data.contactEmail, 'thegraphicjar@gmail.com'], 
    subject: 'The Graphic Jar Project Summary',
    html: result
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

app.listen(3001, () => {
    console.log("listening on 3001");
});
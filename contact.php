<!DOCTYPE html>
<html>

<head> 
    <title>The Graphic Jar</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <!-- External CSS -->
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <!-- Riteous Font -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Source+Sans+Pro" rel="stylesheet">
    <style type="text/css">
        form {
            text-align: center
        }
    </style>
</head>

<body>
    <!-- navigation bar -->
<!--     <header>
        <div class="row">
            <div class="col-lg-4">
                <a href="index.html"><img id="logo" src="assets/svg/tgjlogoheader(white)2.svg"></a>
            </div>
            <div class="col-lg-4">
                <div id="headerBut">
                </div>
            </div>
            <div class="col-lg-4">
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="form.html">Form</a></li>
                        <li><a class="tgjactive" href="contact.html">Contact</a></li>
                        <div></div>
                    </ul>
                </nav>
            </div>
        </div>
    </header> -->
    <!-- tgj design form -->
    <section id="seccontact">
    <!--         <div class="headertitle">
                <h4>Hello</h4>
                <h4>World</h4>
            </div> -->
        <form id="contactform" method="POST" encytype="multipart/form-data" action="form.php">
            <input class="contact-control" type="text" name="name" placeholder="Your Name" required>
            <br>
            <input class="contact-control" type="text" name="email" placeholder="Your Email" required>
            <br>
            <textarea class="contact-control" type="text" name="message" placeholder="Message" row="4" required>
            </textarea>
            <br>
            <input class="contact-control submit" type="submit">
        </form>
    </section>
    <!-- footer -->
    <footer class="footer">
    </footer>
    <!-- Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="assets/js/javascript.js"></script>
</body>

</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - LEANOR</title>
    <link rel="stylesheet" href="styles/style.css">
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <script
            src="https://code.jquery.com/jquery-3.3.1.js"
            integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
            crossorigin="anonymous">
    </script>
    <script> 
        $(function(){
            $("header").load("header.html"); 
            $("footer").load("footer.html"); 
        });
    </script>
</head>
<body id="login">
    <header></header>

    <main>
        <h1>Login</h1>

        <section class="contact-form">
            <p id="login-error-message"></p>
            <form action="" method="post" id="login-form">
                <div class="input-group">
                    <label for="name">Name*</label>
                    <input type="text" id="login-name" name="name" required>
                </div>
                <div class="input-group">
                    <label for="password">Password*</label>
                    <input type="password" id="login-password" name="password" required>
                </div>
                <button type="submit">Login</button>
            </form>
        </section>
    </main>

    <footer></footer>

    <script src="login.js"></script>
</body>
</html>
// function to render README only when element has content

const generateReadme = readmeText => {
    console.log(readmeText);
    if (!readmeText) {
        return '';
    }

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <title>Portfolio Demo</title>
    </head>

    <body>
        <header>
            <div class="container">
                <h1 class="page-title">${header.name}</h1>
                <nav class="flex-row">
                    <a href="https://github.com/" class="ml-2 my-1 px-2 py-1 bg-secondary text-dark"></a>
                </nav>
            </div>
        </header>
        <main class="container my-5">
            <section class="my-3" id="title">
                <h2 class="text-dark bg-primary p-2 display-inline-block">Title</h2>
            </section>

            <section class="my-3" id="description">
                <h2 class="text-dark bg-primary p-2 display-inline-block">Description</h2>
                <p class="">Code</p>
                <div class="flex-row justify-space-between"></div>
                <div class="col-12 mb-2 bg-dark text-light p-3"></div>
                <h4 class="portfolio-languages">
                    Built With:
                    ${}
                </h4>
            </section>

            <section class="my-3" id="installation">
                <h2 class="text-dark bg-primary p-2 display-inline-block">Installation</h2>
                <p class="">installation</p>
            </section>

            <section class="my-3" id="usage">
                <h2 class="text-dark bg-primary p-2 display-inline-block">Usage</h2>
                <p class="">usage</p>
            </section>

            <section class="my-3" id="contributions">
                <h2 class="text-dark bg-primary p-2 display-inline-block">Contributions</h2>
                <p class="">cont</p>
            </section>

            <section class="my-3" id="test">
                <h2 class="text-dark bg-primary p-2 display-inline-block">Test</h2>
                <p class="">test</p>
            </section>

            <section class="my-3" id="license">
                <h2 class="text-dark bg-primary p-2 display-inline-block">License</h2>
                <p class="">license</p>
            </section>

            <section class="my-3" id="contact">
                <h2 class="text-dark bg-primary p-2 display-inline-block">Contact</h2>
                <p class="">contact</p>
            </section>

        </main>

        <footer class="container text-center py-3">
            <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
        </footer>
    </body>
    </html>
    `;
};
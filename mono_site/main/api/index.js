import { createNitro } from 'nitropack';
import path from 'path';
import express from 'express';
import { createNitro } from 'nitropack';

//https://github.com/nuxt/nuxt/discussions/17897

const startServer = async () => {
    const app = express();

    // Create Nitro instance
    const nitro = await createNitro({
        rootDir: process.cwd(), // Adjust the root directory if needed
    });

    // Prepare Nitro for handling requests
    await nitro.prepare();

    // Define an Express route that renders a Nitro route
    app.get('/blog', async (req, res) => {
        try {
            const url = '/your-nitro-route'; // The Nitro route you want to render
            const result = await nitro.renderRoute(url);

            if (result.error) {
                // Handle any errors during rendering
                return res.status(500).send(`Nitro error: ${result.error.message}`);
            }

            // Send the rendered HTML
            res.send(result.html);
        } catch (err) {
            // Handle unexpected errors
            res.status(500).send(`Unexpected error: ${err.message}`);
        }
    });

    app.use(express.static(path.join(__dirname, '..', 'publish_out')));

    // Start the Express server
    app.listen(3000, () => {
        console.log('Express server running at http://localhost:3000');
    });
};

startServer();
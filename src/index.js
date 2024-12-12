import app from './app.js';
import 'dotenv/config';
import logger from './logs/logger.js';

async function main() {
    const port = process.env.PORT;
    app.listen(port); // Inicia el servidor en el puerto especificado.
    console.log('listening on port', port);
    logger.info(`Server stared on port ${port}`);
    logger.error(`Server stared on port ${port}`);
    logger.warn(`Server stared on port ${port}`);
    logger.fatal(`Server stared on port ${port}`);
}

main();
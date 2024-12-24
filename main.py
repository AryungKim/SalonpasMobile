from app import app
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# App configuration
app.config['SERVER_NAME'] = None  # Allow any host
app.config['PREFERRED_URL_SCHEME'] = 'https'

# Gunicorn entry point
application = app

if __name__ == "__main__":
    logger.info("Starting development server")
    app.run(host="0.0.0.0", port=5000, debug=True)
from flask import Flask
from routes.pages import register_routes

app = Flask(__name__)

# register all routes
register_routes(app)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
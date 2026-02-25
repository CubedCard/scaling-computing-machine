from flask import Flask, redirect
from routes.pages import register_routes

app = Flask(__name__)

# register all routes
register_routes(app)

@app.route('/<name>')
def match_all(name=None):
    return redirect("/", code=302)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)

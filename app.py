from flask import Flask, request, redirect
from routes.pages import register_routes, term_pages, html_pages, wants_html

app = Flask(__name__)

# register all routes
register_routes(app)

@app.route('/<path:name>')
def match_all(name=None):
    if wants_html(request):
        return redirect("/", code=302)
    return term_pages["index"]()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)

from flask import Response, request, render_template_string


# ---------------- detection ----------------
def wants_html(req):
    ua = req.headers.get("User-Agent", "").lower()
    accept = req.headers.get("Accept", "")
    if "text/html" in accept and "curl" not in ua:
        return True
    if "curl" in ua or "wget" in ua or ua == "":
        return False
    return True


# ---------------- terminal styling ----------------
RESET = "\033[0m"
BOLD = "\033[1m"
DIM = "\033[2m"
CYAN = "\033[36m"
GREEN = "\033[32m"
MAGENTA = "\033[35m"


def hr():
    return f"{DIM}{'─' * 64}{RESET}"


def header(title):
    return f"{BOLD}{CYAN}{title}{RESET}\n{hr()}"


def section(title, body):
    return f"{header(title)}\n{body.strip()}\n"


# ---------------- terminal pages ----------------
def t_index():
    body = f"""
Welcome.

This site adapts to how you arrive.

{GREEN}Browser{RESET} → HTML
{GREEN}curl{RESET}    → terminal-native output

{DIM}Try:{RESET}
  curl /projects
  curl /whoami
  curl /contact

{MAGENTA}How did the programmer die in the shower?{RESET}
He read the shampoo bottle:
Lather. Rinse. Repeat.
"""
    return Response(section("Jip Derksen", body), mimetype="text/plain")


def t_projects():
    body = f"""
{GREEN}GitHub{RESET}
  https://github.com/CubedCard

{GREEN}Things I tinker with{RESET}
  - dotfiles
  - distributed systems experiments
  - Advent of Code
"""
    return Response(section("Projects", body), mimetype="text/plain")


def t_whoami():
    body = """
Software engineer.

Backend-leaning.
Unix-friendly.
Suspicious of unnecessary abstraction.

I like systems that explain themselves.
"""
    return Response(section("Whoami", body), mimetype="text/plain")


def t_contact():
    body = f"""
{GREEN}Email{RESET}
  jip@example.com

{GREEN}GitHub{RESET}
  https://github.com/CubedCard

{GREEN}Twitter{RESET}
  @jippurt
"""
    return Response(section("Contact", body), mimetype="text/plain")


term_pages = {
    "index": t_index,
    "projects": t_projects,
    "whoami": t_whoami,
    "contact": t_contact,
}


# ---------------- HTML pages ----------------
def h_index():
    body = """
<h1>Jip Derksen</h1>

<div class="card">
  <p><strong>How did the programmer die in the shower?</strong></p>
  <p>He read the shampoo bottle instructions:<br>
     Lather. Rinse. Repeat.</p>
</div>

<div class="card">
  <p>This site adapts to how you access it.</p>
  <pre><code>curl https://jipderksen.com</code></pre>
</div>
"""
    return render_page("Jip Derksen", body)


def h_projects():
    body = """
<h1>Projects</h1>

<div class="card">
  <p><a href="https://github.com/CubedCard">GitHub</a></p>
  <ul>
    <li>dotfiles</li>
    <li>distributed systems experiments</li>
    <li>Advent of Code</li>
  </ul>
</div>
"""
    return render_page("Projects", body)


def h_whoami():
    body = """
<h1>Whoami</h1>

<div class="card">
  <p>Software engineer with a backend focus.</p>
  <p>I enjoy systems that are explainable, inspectable,
     and don’t fight the user.</p>
</div>
"""
    return render_page("Whoami", body)


def h_contact():
    body = """
<h1>Contact</h1>

<div class="card">
  <p>Email: jip@example.com</p>
  <p><a href="https://github.com/CubedCard">GitHub</a></p>
  <p>Twitter: @jippurt</p>
</div>
"""
    return render_page("Contact", body)


html_pages = {
    "index": h_index,
    "projects": h_projects,
    "whoami": h_whoami,
    "contact": h_contact,
}


# ---------------- shared HTML renderer ----------------
def render_page(title, body):
    with open("templates/base.html", "r") as f:
        template = f.read()
    return Response(
        render_template_string(template, title=title, body=body), mimetype="text/html"
    )


# ---------------- register routes ----------------
def register_routes(app):
    for route in ["index", "projects", "whoami", "contact"]:
        url = "/" if route == "index" else f"/{route}"

        def view(route=route):
            return (
                term_pages[route]() if not wants_html(request) else html_pages[route]()
            )

        app.add_url_rule(url, route, view)

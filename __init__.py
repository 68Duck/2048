from flask import g,Flask,render_template,request
from getpass import getpass
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html",across=[0,1,2,3],down=[0,1,2,3])

if __name__ == '__main__':
   app.run(debug = False)

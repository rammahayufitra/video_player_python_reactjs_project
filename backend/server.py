from flask import Flask 

app = Flask(__name__)

@app.route("/link")
def link():
    link1 = 'https://www.youtube.com/watch?v=aqz-KE-bpKQ'
    link2 = 'https://www.youtube.com/watch?v=KP7p9-hwjEA'
    return {"link": [link1, link2]}

if __name__ == "__main__":
    app.run(debug=True)
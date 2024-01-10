from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


@app.route("/")
def index():
    return render_template('./index.html')

@app.route("/pull_pyData", methods=['POST'])
def pullTickers():

    jdata = {'0'}
    

    return jsonify(jdata)

if __name__ == "__main__":
    app.run(debug=False)

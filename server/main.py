from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import scripts.utils as utils

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/", methods=["GET", "POST"])
@cross_origin()
def index():
    if(request.method == 'POST'):
        board = request.get_json().get('board')

        return jsonify(utils.get_board_status(board))
    else:
        return jsonify("Invalid method " + request.method)

if __name__ == "__main__":
    app.run(debug=True)
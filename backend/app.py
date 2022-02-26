from crypt import methods
from flask_cors import CORS
from flask import Flask

app = Flask(__name__)
CORS(app)


# def index():
#     return {
#         "tutorial": "hey"
#     }

@app.route('/api', methods=['GET'])
def index():
    return {
        "tutorial": "hey"
    }

if __name__ == '__main__':
    app.run(debug=True)
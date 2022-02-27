from crypt import methods
from flask_cors import CORS
from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)
CORS(app)

class status(Resource):    
     def get(self):
         try:
            # return {'data': 'Api running'}
            return send_file('backend/model.json')
         except(error): 
            return {'data': error}

api.add_resource(status,'/')

if __name__ == '__main__':
    app.run(debug=True)

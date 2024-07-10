from flask import Flask, make_response
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import db, Action, Adventure, Racing, Shooter

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///games.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)
db.init_app(app)

api = Api(app)

class Home(Resource):
    def get(self):
        response_dict = {
            "message": "Welcome to the Games RESTful API",
        }

        response = make_response(response_dict, 200)

        return response

class ActionResource(Resource):
    def get(self):
        actions = Action.query.all()
        return [action.to_dict() for action in actions], 200

class AdventureResource(Resource):
    def get(self):
        adventures = Adventure.query.all()
        return [adventure.to_dict() for adventure in adventures], 200

class RacingResource(Resource):
    def get(self):
        racings = Racing.query.all()
        return [racing.to_dict() for racing in racings], 200

class ShooterResource(Resource):
    def get(self):
        shooters = Shooter.query.all()
        return [shooter.to_dict() for shooter in shooters], 200

api.add_resource(Home, '/')
api.add_resource(ActionResource, '/actions')
api.add_resource(AdventureResource, '/adventures')
api.add_resource(RacingResource, '/racings')
api.add_resource(ShooterResource, '/shooters')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

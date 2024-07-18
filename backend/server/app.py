from flask import Flask, make_response, request, jsonify
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import db, Action, Adventure, Racing, Shooter, Genre
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins='*')
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
        return make_response(response_dict, 200)

class ActionResource(Resource):
    def get(self):
        actions = Action.query.all()
        return [action.to_dict() for action in actions], 200

    def post(self):
        data = request.get_json()
        new_action = Action(
            name=data['name'],
            price=data['price'],
            image=data['image'],
            rating=data['rating'],
            genre_id=data['genre_id']
        )
        db.session.add(new_action)
        db.session.commit()
        return {'message': 'Action game added successfully'}, 201

class AdventureResource(Resource):
    def get(self):
        adventures = Adventure.query.all()
        return [adventure.to_dict() for adventure in adventures], 200

    def post(self):
        data = request.get_json()
        new_adventure = Adventure(
            name=data['name'],
            price=data['price'],
            image=data['image'],
            rating=data['rating'],
            genre_id=data['genre_id']
        )
        db.session.add(new_adventure)
        db.session.commit()
        return {'message': 'Adventure game added successfully'}, 201

class RacingResource(Resource):
    def get(self):
        racings = Racing.query.all()
        return [racing.to_dict() for racing in racings], 200

    def post(self):
        data = request.get_json()
        new_racing = Racing(
            name=data['name'],
            price=data['price'],
            image=data['image'],
            rating=data['rating'],
            genre_id=data['genre_id']
        )
        db.session.add(new_racing)
        db.session.commit()
        return {'message': 'Racing game added successfully'}, 201

class ShooterResource(Resource):
    def get(self):
        shooters = Shooter.query.all()
        return [shooter.to_dict() for shooter in shooters], 200

    def post(self):
        data = request.get_json()
        new_shooter = Shooter(
            name=data['name'],
            price=data['price'],
            image=data['image'],
            rating=data['rating'],
            genre_id=data['genre_id']
        )
        db.session.add(new_shooter)
        db.session.commit()
        return {'message': 'Shooter game added successfully'}, 201

api.add_resource(Home, '/')
api.add_resource(ActionResource, '/actions')
api.add_resource(AdventureResource, '/adventures')
api.add_resource(RacingResource, '/racings')
api.add_resource(ShooterResource, '/shooters')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData()

db = SQLAlchemy(metadata=metadata)


class Action(db.Model, SerializerMixin):
    __tablename__ = 'action'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    price = db.Column(db.Integer)
    image = db.Column(db.String)

    def __repr__(self):
        return f'<Action {self.id}, {self.name}, {self.price}, {self.image}>'


class Adventure(db.Model, SerializerMixin):
    __tablename__ = 'adventure'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    price = db.Column(db.Integer)
    image = db.Column(db.String)

    def __repr__(self):
        return f'<Adventure {self.id}, {self.name}, {self.price}, {self.image}>'


class Racing(db.Model, SerializerMixin):
    __tablename__ = 'racing'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    price = db.Column(db.Integer)
    image = db.Column(db.String)

    def __repr__(self):
        return f'<Racing {self.id}, {self.name}, {self.price}, {self.image}>'


class Shooter(db.Model, SerializerMixin):
    __tablename__ = 'shooter'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    price = db.Column(db.Integer)
    image = db.Column(db.String)

    def __repr__(self):
        return f'<Shooter {self.id}, {self.name}, {self.price}, {self.image}>'

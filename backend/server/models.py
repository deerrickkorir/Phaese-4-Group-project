from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()

class Genre(db.Model, SerializerMixin):
    __tablename__ = 'genre'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)

    serialize_only = ('id', 'name')
    exclude = ('actions', 'adventures', 'racings', 'shooters')

    def __repr__(self):
        return f'<Genre {self.id}, {self.name}>'


class Action(db.Model, SerializerMixin):
    __tablename__ = 'action'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    image = db.Column(db.String, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    genre_id = db.Column(db.Integer, db.ForeignKey('genre.id'), nullable=False)

    genre = db.relationship('Genre', backref='actions')

    serialize_only = ('id', 'name', 'price', 'image', 'rating', 'genre_id')
    exclude = ('genre.actions',)

    def __repr__(self):
        return f'<Action {self.id}, {self.name}, {self.price}, {self.image}, {self.rating}, {self.genre_id}>'


class Adventure(db.Model, SerializerMixin):
    __tablename__ = 'adventure'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    image = db.Column(db.String, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    genre_id = db.Column(db.Integer, db.ForeignKey('genre.id'), nullable=False)

    genre = db.relationship('Genre', backref='adventures')

    serialize_only = ('id', 'name', 'price', 'image', 'rating', 'genre_id')
    exclude = ('genre.adventures',)

    def __repr__(self):
        return f'<Adventure {self.id}, {self.name}, {self.price}, {self.image}, {self.rating}, {self.genre_id}>'


class Racing(db.Model, SerializerMixin):
    __tablename__ = 'racing'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    image = db.Column(db.String, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    genre_id = db.Column(db.Integer, db.ForeignKey('genre.id'), nullable=False)

    genre = db.relationship('Genre', backref='racings')

    serialize_only = ('id', 'name', 'price', 'image', 'rating', 'genre_id')
    exclude = ('genre.racings',)

    def __repr__(self):
        return f'<Racing {self.id}, {self.name}, {self.price}, {self.image}, {self.rating}, {self.genre_id}>'


class Shooter(db.Model, SerializerMixin):
    __tablename__ = 'shooter'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    image = db.Column(db.String, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    genre_id = db.Column(db.Integer, db.ForeignKey('genre.id'), nullable=False)

    genre = db.relationship('Genre', backref='shooters')

    serialize_only = ('id', 'name', 'price', 'image', 'rating', 'genre_id')
    exclude = ('genre.shooters',)

    def __repr__(self):
        return f'<Shooter {self.id}, {self.name}, {self.price}, {self.image}, {self.rating}, {self.genre_id}>'

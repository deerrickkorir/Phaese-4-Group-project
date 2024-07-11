from app import app
from models import db, Action, Adventure, Racing, Shooter

with app.app_context():

    print("Deleting data...")
    Action.query.delete()
    Adventure.query.delete()
    Racing.query.delete()
    Shooter.query.delete()

    print("Creating actions...")
    actions = [
        Action(name='Action Game 1', price=59.99, image='action1.jpg'),
        Action(name='Action Game 2', price=49.99, image='action2.jpg'),
        Action(name='Action Game 3', price=39.99, image='action3.jpg'),
        Action(name='Action Game 4', price=29.99, image='action4.jpg'),
        Action(name='Action Game 5', price=19.99, image='action5.jpg')
    ]

    print("Creating adventures...")
    adventures = [
        Adventure(name='Adventure Game 1', price=59.99, image='adventure1.jpg'),
        Adventure(name='Adventure Game 2', price=49.99, image='adventure2.jpg'),
        Adventure(name='Adventure Game 3', price=39.99, image='adventure3.jpg'),
        Adventure(name='Adventure Game 4', price=29.99, image='adventure4.jpg'),
        Adventure(name='Adventure Game 5', price=19.99, image='adventure5.jpg')
    ]

    print("Creating racings...")
    racings = [
        Racing(name='Racing Game 1', price=59.99, image='racing1.jpg'),
        Racing(name='Racing Game 2', price=49.99, image='racing2.jpg'),
        Racing(name='Racing Game 3', price=39.99, image='racing3.jpg'),
        Racing(name='Racing Game 4', price=29.99, image='racing4.jpg'),
        Racing(name='Racing Game 5', price=19.99, image='racing5.jpg')
    ]

    print("Creating shooters...")
    shooters = [
        Shooter(name='Shooter Game 1', price=59.99, image='shooter1.jpg'),
        Shooter(name='Shooter Game 2', price=49.99, image='shooter2.jpg'),
        Shooter(name='Shooter Game 3', price=39.99, image='shooter3.jpg'),
        Shooter(name='Shooter Game 4', price=29.99, image='shooter4.jpg'),
        Shooter(name='Shooter Game 5', price=19.99, image='shooter5.jpg')
    ]

    db.session.add_all(actions + adventures + racings + shooters)
    db.session.commit()

    print("Data seeded successfully!")

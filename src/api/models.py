from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "password":self.password,
            # do not serialize the password, its a security breach
        }

class Calendar(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    end_date = db.Column(db.DateTime)
    start_date = db.Column(db.DateTime)
    text = db.Column(db.String(120), nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    # user_id = Column(Integer, ForeignKey('user.id'))
    # user = relationship(User)

    def __repr__(self):
        return '<Calendar %r>' % self.appointments

    def serialize(self):
        return {
            "id": self.id,
            "end_date":self.end_date,
            "start_date":self.start_date,
            "text":self.text

            # do not serialize the password, its a security breach
        }

# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(120), unique=True, nullable=False)
#     password = db.Column(db.String(80), unique=False, nullable=False)
#     # event = db.relationship(“Event”,
#     #                 secondary=Event_Coordinator)
    
#     is_active = db.Column(db.Boolean(), unique=False, nullable=False)
#     def __repr__(self):
#         return f’User : {self.email}'
#     def serialize(self):
#         return {
#             “id”: self.id,
#             “email”: self.email,
           
#         }
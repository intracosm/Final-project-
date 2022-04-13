"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.models import db, Calendar
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# @api.route("/user", methods=["POST"])
# def create_user():
#     user = request.get_json()
#     if request.json is None:
#         return jsonify({"msg":"Missing the payload"}), 400
#     email = request.json.get("email", None)
#     password = request.json.get("password", None)
#     user = User(name=name, password=password)
#     db.session.add(user)
#     db.session.commit()
#     return jsonify(user.serialize())

@api.route("/user", methods=["GET"])
def get_user():
    user = User.query.all()
    all_users = list(map(lambda x:x.serialize(),user))
    return jsonify(all_users), 200


# @api.route("/createuser", methods=["POST"])
# def create_user():
#     # guests = request.get_json()
#     # if request.json is None:
#     #     return jsonify({"msg":"Missing the payload"}), 400
#     # password = request.json.get("password", None)
#     # email = request.json.get("email", None)
#     # User(email=email,password=password)
#     # db.session.add(user)
#     # db.session.commit()
#     return jsonify({"message":"pizza"})


@api.route('/user', methods=['POST'])
def create_user():

    # First we get the payload json
    user = request.get_json()

    if user is None:
        raise APIException("You need to specify the request body as a json object", status_code=400)
    if 'password' not in body:
        raise APIException('You need to specify the password', status_code=400)
    if 'email' not in body:
        raise APIException('You need to specify the email', status_code=400)

    # at this point, all data has been validated, we can proceed to inster into the bd
    user = User(password=password, email=email)
    db.session.add(user)
    db.session.commit()
    return "ok", 200

@api.route('/addevents', methods=['POST'])
def add_events():
    events= request.get_json()

    for event in events:
        new_event= Calendar(text=event["text"],start_date=event["start_date"],end_date=event["end_date"])
        db.session.add(user)
        db.session.commit()

    get_events=Calendar.query.all()
    serialize_events=[event.serialize() for event in get_events]
    return jsonify(serialize_events), 200


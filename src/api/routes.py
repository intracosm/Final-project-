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
#     user = User(email=email, password=password)
#     db.session.add(user)
#     db.session.commit()
#     return jsonify(user.serialize())

@api.route("/user", methods=["GET"])
def get_user():
    user = User.query.all()
    all_users = list(map(lambda x:x.serialize(),user))
    return jsonify(all_users), 200


@api.route(‘/guest’, methods=[‘POST’])
def create_guest():
    guests = request.get_json()
    if request.json is None:
        return jsonify({“msg”:“Missing the payload”}), 400
    email = request.json.get(‘email’, None)
    name = request.json.get(‘name’, None)
    Guest(name=name,email=email)
    db.session.add(guest)
    db.session.commit()
     return jsonify(guest.serialize())
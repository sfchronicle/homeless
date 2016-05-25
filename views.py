from flask import render_template, redirect, url_for

from app import app, db, freezer
from models import *


@app.route('/')
def index():
    return render_template('index.html',
    	slug='',
    	social_img='',
    	social_title='',
    	description='',
    	twitter_text='',
    	email_text='')

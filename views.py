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
    	email_text='mailto:?subject=Subject&body=Body')

@app.route('/setup/')
def setup():
    return render_template('setup.html',
    	slug='',
    	social_img='',
    	social_title='',
    	description='',
    	twitter_text='',
    	email_text='mailto:?subject=Subject&body=Body')

@app.route('/insight/')
def insight():
    return render_template('insight.html',
    	slug='',
    	social_img='',
    	social_title='',
    	description='',
    	twitter_text='',
    	email_text='mailto:?subject=Subject&body=Body')

@app.route('/photos/')
def photos():
    return render_template('photos.html',
    	slug='',
    	social_img='',
    	social_title='',
    	description='',
    	twitter_text='',
    	email_text='mailto:?subject=Subject&body=Body')

@app.route('/data/')
def data():
    return render_template('data.html',
    	slug='',
    	social_img='',
    	social_title='',
    	description='',
    	twitter_text='',
    	email_text='mailto:?subject=Subject&body=Body')

@app.route('/shelters/')
def shelters():
    return render_template('shelters.html',
    	slug='',
    	social_img='',
    	social_title='',
    	description='',
    	twitter_text='',
    	email_text='mailto:?subject=Subject&body=Body')

@app.route('/mental/')
def mental():
    return render_template('mental.html',
    	slug='',
    	social_img='',
    	social_title='',
    	description='',
    	twitter_text='',
    	email_text='mailto:?subject=Subject&body=Body')

@app.route('/camping/')
def camping():
    return render_template('camping.html',
    	slug='',
    	social_img='',
    	social_title='',
    	description='',
    	twitter_text='',
    	email_text='mailto:?subject=Subject&body=Body')

@app.route('/supportive/')
def supportive():
    return render_template('supportive.html',
    	slug='',
    	social_img='',
    	social_title='',
    	description='',
    	twitter_text='',
    	email_text='mailto:?subject=Subject&body=Body')

@app.route('/opinion/')
def opinion():
    return render_template('opinion.html',
    	slug='',
    	social_img='',
    	social_title='',
    	description='',
    	twitter_text='',
    	email_text='mailto:?subject=Subject&body=Body')


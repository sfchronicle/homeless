from flask import render_template, redirect, url_for

from app import app, db, freezer
from models import *

""" 
slug completes: 
- twitter:url
- og:image/Facebook image preview
- Twitter/Facebook share url
- url for email body

title: 
- Page title
- og:title/Facebook headline
- email subject
- twitter:title

description: 
- meta description
- og:description/Facebook description

twitter_text:
- text that appears on tweet

"""

@app.route('/')
def index():
    return render_template('index.html',
    	slug='',
    	title='',
    	description='',
    	twitter_text='')

@app.route('/setup/')
def setup():
    return render_template('setup.html',
    	slug='',
    	title='',
    	description='',
    	twitter_text='')

@app.route('/insight/')
def insight():
    return render_template('insight.html',
    	slug='',
    	title='',
    	description='',
    	twitter_text='')

@app.route('/photos/')
def photos():
    return render_template('photos.html',
    	slug='',
    	title='',
    	description='',
    	twitter_text='')

@app.route('/data/')
def data():
    return render_template('data.html',
    	slug='',
    	title='',
    	description='',
    	twitter_text='')

@app.route('/shelters/')
def shelters():
    return render_template('shelters.html',
    	slug='',
    	title='',
    	description='',
    	twitter_text='')

@app.route('/mental/')
def mental():
    return render_template('mental.html',
    	slug='',
    	title='',
    	description='',
    	twitter_text='')

@app.route('/camping/')
def camping():
    return render_template('camping.html',
    	slug='',
    	title='',
    	description='',
    	twitter_text='')

@app.route('/supportive/')
def supportive():
    return render_template('supportive.html',
    	slug='supportive',
    	title='Homeless Supportive',
    	description='',
    	twitter_text='this is twitter text')

@app.route('/opinion/')
def opinion():
    return render_template('opinion.html',
    	slug='',
    	title='',
    	description='',
    	twitter_text='')


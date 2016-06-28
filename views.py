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
    	title="Beyond Homelessness: Tackling SF's epidemic",
    	description="SF Homeless Project: The Chronicle joins 70 news organizations to focus attention on the seemingly intractable problem of homelessness in San Francisco.",
    	twitter_text="Beyond Homelessness: An in-depth look at SF's homeless epidemic")

@app.route('/overview/')
def setup():
    return render_template('setup.html',
    	slug='overview',
    	title='Homelessness looks the same as it did 20 years ago',
    	description="SF Homeless Project: Despite the efforts of six mayors, homelessness is stamped so deeply into San Francisco it's become a defining characteristic.",
    	twitter_text='SF homeless problem looks the same as it did 20 years ago.')

@app.route('/letters-from-the-mayors/')
def insight():
    return render_template('insight.html',
    	slug='letters-from-the-mayors',
    	title='How 5 SF mayors tackled homelessness',
    	description="SF Homeless Project: San Francisco's last five mayors, including its current one, discuss their attempts to solve the homelessness problem while in office.",
    	twitter_text='How 5 SF mayors tackled homelessness')

@app.route('/faces-of-the-streets/')
def photos():
    return render_template('photos.html',
    	slug='faces-of-the-streets',
    	title='Faces of homelessness in San Francisco',
    	description="SF Homeless Project: These portraits provide glimpses into the lives of 12 people whose experiences help tell the story of the streets.",
    	twitter_text="Faces of homelessness: Portraits of life on SF's streets.")

@app.route('/numbers/')
def data():
    return render_template('data.html',
    	slug='numbers',
    	title='How many people live on our streets?',
    	description='SF Homeless Project: That question is the basis for the most frequent Google search in San Francisco regarding homelessness. The answer, though, is elusive.',
    	twitter_text='How many people live on San Francisco streets?')

@app.route('/shelters/')
def shelters():
    return render_template('shelters.html',
    	slug='',
    	title='',
    	description='',
    	twitter_text='')

@app.route('/mental-health/')
def mental():
    return render_template('mental.html',
    	slug='mental-health',
    	title='',
    	description='',
    	twitter_text='')

@app.route('/encampments/')
def camping():
    return render_template('camping.html',
    	slug='encampments',
    	title='',
    	description='',
    	twitter_text='')

@app.route('/supportive-housing/')
def supportive():
    return render_template('supportive.html',
    	slug='supportive-housing',
    	title='',
    	description='',
    	twitter_text='')

@app.route('/civic-disgrace/')
def opinion():
    return render_template('opinion.html',
    	slug='civic-disgrace',
    	title='',
    	description='',
    	twitter_text='')

@app.route('/letter-to-the-city/')
def letter_of_intent():
    return render_template('letter_of_intent.html',
    	slug='letter-to-the-city',
    	title='Letter to SF: A unified front in the search for answers',
    	description='SF Homeless Project: We, along with 70 other news outlets, aim to provide you with the information and potential options to put San Francisco on a better path.',
    	twitter_text='A unified front in the search for answers')

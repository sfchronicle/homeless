from flask import render_template, redirect, url_for

from app import app, db, freezer
from models import *

import json

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
    	description="SF Homeless Project: The Chronicle joins 80 news organizations to focus attention on the seemingly intractable problem of homelessness in San Francisco.",
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
    	slug='shelters',
    	title='Can the shelter system be successful?',
    	description="SF Homeless Project: Would converting San Francisco's shelter system to a more accessible, service-oriented model get more people off the streets?",
    	twitter_text='Can the shelter system be successful?')

@app.route('/mental-health/')
def mental():
    return render_template('mental.html',
    	slug='mental-health',
    	title="The streets' sickest, costliest: the mentally ill",
    	description='SF Homeless Project: What would it take to create enough mental health services to permanently meet the needs of the thousands of people living on its streets?',
    	twitter_text="The streets' sickest, costliest: the mentally ill.")

@app.route('/encampments/')
def camping():
    return render_template('camping.html',
    	slug='encampments',
    	title='Can law enforcement curb the crisis?',
    	description='SF Homeless Project: Would stronger enforcement of laws against street camping and petty crime reduce homelessness?',
    	twitter_text='Can law enforcement curb the crisis?')

@app.route('/supportive-housing/')
def supportive():
    return render_template('supportive.html',
    	slug='supportive-housing',
    	title='Solution starts with supportive housing',
    	description='SF Homeless Project: Could San Francisco increase its stock of supportive housing by enough units to get the neediest homeless people off its streets in two years?',
    	twitter_text="Solution to SF's homeless problem starts with supportive housing.")

@app.route('/civic-disgrace/')
def opinion():
    return render_template('opinion.html',
    	slug='civic-disgrace',
    	title="SF's homeless problem: A civic disgrace",
    	description="SF Homeless Project Editorial: The reduction of homelessness to the extent humanly possible must be San Francisco's No. 1 priority.",
    	twitter_text="Editorial: Homelessness problem is a civic disgrace.")

@app.route('/letter-to-the-city/')
def letter_of_intent():
    return render_template('letter_of_intent.html',
    	slug='letter-to-the-city',
    	title='Letter to SF: A unified front in the search for answers',
    	description='SF Homeless Project: We, along with 80 other news outlets, aim to provide you with the information and potential options to put San Francisco on a better path.',
    	twitter_text='A unified front in the search for answers')

@app.route('/hotels/')
def sro():
    return render_template('sro.html',
        slug='hotels',
        title='Aging hotels, chronic problems',
        description='SF Homeless Project: Most San Francisco housing for the homeless is a century old; even refurbished, severe health and safety issues can abound.',
        twitter_text='Aging hotels, chronic problems: SROs raise health, safety issues for housing homeless.')

@app.route('/benefits/')
def federal():
    return render_template('federal.html',
        slug='benefits',
        title='The plight of disabled homeless in S.F.',
        description='S.F. Homeless Project: The city is boosting efforts to help thousands eligible for federal payments qualify for aid and get off the streets.',
        twitter_text='For disabled homeless in San Francisco, federal benefits remain elusive.')

@app.route('/letter-from-the-editor/')
def letterFromTheEditor():
    File = open('data/insight0625_cooper.json', 'r')
    data = json.load(File) 
    return render_template('letter-from-the-editor.html',
        data=data,
        slug='letter-from-the-editor',
        title='Title.',
        description='Description.',
        twitter_text='Twitter Text.')

@app.route('/mayors-voices/')
def mayorsVoices():
    File = open('data/insight0625_homeless_mayors.json', 'r')
    data = json.load(File)
    return render_template('mayors-voices.html',
        data=data,
        slug='mayors-voices')

@app.route('/overview-update/')
def overviewUpdate():
    File = open('data/homeless0626.json', 'r')
    data = json.load(File) 
    return render_template('overview-update.html',
        data=data,
        slug='overview-update',
        title='Title.',
        description='Description.',
        twitter_text='Twitter Text.')

@app.route('/four-areas/') 
def fourAreas():
    File = open('data/homeless0627.json', 'r')
    data = json.load(File)
    return render_template('four-areas.html',
        data=data,
        slug='four-areas',
        title='Title.',
        description='Description.',
        twitter_text='Twitter Text.')

@app.route('/regional/') 
def regional():
    File = open('data/region0627.json', 'r')
    data = json.load(File)
    return render_template('regional.html',
        data=data,
        slug='regional',
        title='Title.',
        description='Description.',
        twitter_text='Twitter Text.')

@app.route('/division-street-update/')
def divisionStreetUpdate():
    File = open('data/division0629.json', 'r')
    data = json.load(File) 
    return render_template('division-street-update.html',
        data=data,
        slug='division-street-update',
        title='Title.',
        description='Description.',
        twitter_text='Twitter Text.')

@app.route('/nonprofit/')
def nonprofit():
    File = open('data/moveon0630.json', 'r')
    data = json.load(File)
    return render_template('nonprofit.html',
        data=data,
        slug='nonprofit',
        title='Title.',
        description='Description.',
        twitter_text='Twitter Text.')

@app.route('/otis-taylor/')
def otisTaylor():
    File = open('data/taylor0630.json', 'r')
    data = json.load(File)
    return render_template('otis-taylor.html',
        data=data,
        slug='otis-taylor',
        title='Title.',
        description='Description.',
        twitter_text='Twitter Text.')

@app.route('/potrero-hill/')
def potreroHill():
    File = open('data/homeless0701.json', 'r')
    data = json.load(File) 
    return render_template('potrero-hill.html',
        data=data,
        slug='potrero-hill',
        title='Title.',
        description='Description.',
        twitter_text='Twitter Text.')

@app.route('/editorial/')
def editorial():
    File = open('data/editorial0702.json', 'r')
    data = json.load(File) 
    return render_template('editorial.html',
        data=data,
        slug='editorial',
        title='Title.',
        description='Description.',
        twitter_text='Twitter Text.')

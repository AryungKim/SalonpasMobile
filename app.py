from flask import Flask, render_template, request, g
from translations import TRANSLATIONS

app = Flask(__name__)

def get_locale():
    # Default to English if no language is set
    return request.args.get('lang', 'en')

@app.before_request
def before_request():
    g.locale = get_locale()
    g.translations = TRANSLATIONS.get(g.locale, TRANSLATIONS['en'])

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/products')
def products():
    return render_template('products.html')

@app.route('/how-to-use')
def how_to_use():
    return render_template('how-to-use.html')

@app.route('/promotions')
def promotions():
    return render_template('promotions.html')
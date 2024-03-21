from flask import Flask,render_template,redirect,url_for,request
app = Flask(__name__)

@app.route('/home')
def index():
    return render_template('home.html', title='Home Page')

@app.route('/home/about')
def about():
    return render_template('about.html', title='About')

if __name__ == '__main__':
    app.run(debug=True,port=7000)

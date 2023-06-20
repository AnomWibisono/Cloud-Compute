import docker
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template, request, flash, redirect, url_for

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///databasecontainer.sqlite"
app.config["SECRET_KEY"] = "okaydcfhvgjbcfvghbj"
db = SQLAlchemy(app)
client = docker.from_env()

class Container(db.Model):
    id = db.Column(db.String(255), primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    image = db.Column(db.String(255), nullable=False)

    def __init__(self, id, name, image):
        self.id = id
        self.name = name
        self.image = image

    @property
    def status(self):
        try:
            container = client.containers.get(self.id)
        except:
            return 'not found'
        return container.status

class Billing(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    start = db.Column(db.DateTime, nullable=False)
    stop = db.Column(db.DateTime, nullable=False)

    def __init__(self, start, stop):
        self.start = start
        self.stop = stop

@app.route('/')
def index():
    containers = Container.query.all()
    return render_template("index.html", containers=containers)


@app.route('/containercreate', methods=["GET", "POST"])
def containercreate():
    if request.method == 'POST':
        name = request.form['name']
        image = request.form['image']
        docker_container = client.containers.run(image, detach=True)
        container = Container(docker_container.id, name, image)
        db.session.add(container)
        db.session.commit()
        flash(f'Container Created (id = {docker_container.id})')
    return render_template("containercreate.html")


@app.route('/start container/<container_id>')
def start_container(container_id):
    container = Container.query.filter_by(id=container_id).first_or_404()
    docker_container = client.containers.get(container_id)
    docker_container.start()
    flash('Berhasil menjalankan kontainer')
    return redirect(url_for('index'))


@app.route('/stop container/<container_id>')
def stop_container(container_id):
    container = Container.query.filter_by(id=container_id).first_or_404()
    docker_container = client.containers.get(container_id)
    docker_container.stop()
    flash('Berhasil menghentikan kontainer')
    return redirect(url_for('index'))


@app.route('/delete container/<container_id>')
def delete_container(container_id):
    container = Container.query.filter_by(id=container_id).first_or_404()
    try:
        docker_container = client.containers.get(container_id)
        docker_container.remove(force=True)
    except:
        pass
    db.session.delete(container)
    db.session.commit()
    flash('Berhasil menghapus kontainer')
    return redirect(url_for('index'))

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
app.run(host='0.0.0.0', port=1025, debug=True)

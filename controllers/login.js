const LocalStrategy = require('passport-local');

const passport = require("passport");
const { Schedule, Child, Parent } = require("../models");




const strategy = new LocalStrategy(function verify(username, password, cb) {
    db.get('SELECT * FROM Parents WHERE email = ?', [email], (err, user) => {
        if (err) {
            return cb(err);
        }

        if (!user) {
            return cb(null, false, { message: 'Incorrect username or password.' });
        }

        crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', (err, hashedPassword) => {
            if (err) {
                return cb(err);
            }

            if (!crypto.timingSafeEqual(user.hashed_password, hashedPassword)) {
                return cb(null, false, { message: 'Incorrect username or password.' });
            }

            return cb(null, user);
        });
    });
});

const createSaltAndHash = password => new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(128).toString('base64');

    crypto.pbkdf2(password, salt, ITERATIONS, 256, 'sha256', (err, key) => {
        if (err) {
            reject(err);
        } else {
            resolve({
                salt,
                hash: key.toString('hex'),
            });
        }
    });
});


passport.use(strategy);
app.use(apiCheck);

//Routes 

app.post('/login/password',
    passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),
    (req, res) => {
        res.redirect('/~' + req.user.username);
    }
);

app.post('/login/createUser', (req, res) => {
    const { username, password, name } = req.body;

    let saltAndHash;

    createSaltAndHash(password).then((res) => {
        saltAndHash = res;

        // Change this for db
        db.insert('INSERT INTO user (name, username, hashed_password, salt VALUES ?, ?, ?, ?', [name, username, saltAndHash.hash, saltAndHash.salt]);

        res.redirect('/~' + req.user.username);
    });
});

//app.post('/login/updatePassword', (req, res) => {
//    const { username, password } = req.body;

//    db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
//        if (err) {
//            res.status(400).json({ err });
//        }

//        let saltAndHash;

//        createSaltAndHash(password).then((res) => {
//            saltAndHash = res;

//            // Change this for db
//            db.insert('UPDATE user SET hashed_password = ?, salt = ?', [saltAndHash.hash, saltAndHash.salt]);

//            res.redirect('/~' + req.user.username);
//        });
//    });
//});
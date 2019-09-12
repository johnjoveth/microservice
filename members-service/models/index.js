const mongoose = require('mongoose');
const Members = require('./Members');

mongoose.Promise = Promise;
mongoose.set('debug', true);

let counter = 0;

const DBconnect = function(){
    if (counter > 5){console.log('RECONNECTING NOW')};
    mongoose.connect('mongodb://localhost/membersDB', {
        useNewUrlParser: true,
        keepAlive: true
    })
    .then(connected => console.log('CONNECTED TO DATABASE'))
    .catch(err => {
        if (counter < 5){
            console.log('RECONNECTING AFTER 10s');
            counter++;
            setTimeout(DBconnect, 1000);
            return;
        }
        console.log('Maximum tries was reached');
        return;
    })
};

DBconnect();

module.exports.Members = Members;
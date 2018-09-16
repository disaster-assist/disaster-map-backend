const {
    CLOUDANT_BLOB,
} = require('./disaster-credentials/credentials');

var _ = require('underscore');
const Cloudant = require('@cloudant/cloudant');
const cloudant = Cloudant(_.extend(CLOUDANT_BLOB, {'plugins': 'promises'}));

const conversations = cloudant.db.use('conversations');

function main(params) {

    return conversations.list({include_docs:true}).then(results => {
        return results.rows.filter(doc => {
            return doc.doc.parsed_location !== undefined
        }).map(doc => {
            let geometry = doc.doc.parsed_location.json.results[0].geometry.location;
            return {
                lat: geometry.lat,
                lng: geometry.lng,
                count: 1
            }
        });
    }).then(list => {
        return {
            headers: {
                'Content-Type': 'text/xml',
            },
            statusCode: 200,
            body: list
        }
    });
}

module.exports = {
    main
};

global.main = main;
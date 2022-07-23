const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// THIS CODE SHOWS THE DATA WHERE WE DON´T USE POSTMAN FOR THE LENGUAGES TABLE
async function getPosts(page = 1){
    const offset = helper.getOffset(page,config.listPerPage);
    const rows = await db.query(
        `SELECT IdUser,Id,Title,Name
        FROM posts LIMIT ${offset},${config.listPerPage}
        `
        );
        const data = helper.emptyOrRows(rows);
        const meta = (page);
        return {
            data,meta
    }
}

module.exports = {
    getPosts
};

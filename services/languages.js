const db = require('./db');
const helper = require('../helper');
const config = require('../config');



async function getMultiple(page = 1){
    const offset = helper.getOffset(page,config.listPerPage);
    const rows = await db.query(
        `SELECT Id,name,description,year
        FROM languages LIMIT ${offset},${config.listPerPage};
        `
    );
    const data = helper.emptyOrRows(rows);
    const meta={page};

    return {
        data,meta
    }
}

async function getUser(page = 1){
    const offset = helper.getOffset(page,config.listPerPage);
    const rows = await db.query(
        `SELECT Id,username,password,email, role
        FROM users LIMIT ${offset},${config.listPerPage}
        `
        );
        const data = helper.emptyOrRows(rows);
        const meta = (page);
        return {
            data,meta
    }
}
async function create(language) {
        console.log(`INSERT INTO languages (name,description,year) VALUES 
        ('${language.name}','${language.description}',${language.year})`);

        const result = wait.db.query(
            `INSERT INTO languages (name,description,year) VALUES ('${language.name}','${language.description}',${language.year})`);

    let message="Error in creating programming language";
    if(result.affectedRows) {
        message="A new language has been added!";
    }
    return {message}
}

async function update(Id,language) {

    const result = await db.query(
        `UPDATE languages
        SET name='${language.name}',
        description='${language.description}',
        year=${language.year}
        WHERE Id=${Id}`
    );

    let message="Error in updating programming language";
    if(result.affectedRows) {
        message="A new language has been update!";
    }
    return {message}
};

async function remove(Id) {

    const result = await db.query(
        `DELETE FROM languages WHERE Id = $(Id)`
    );

    let message="Error in deleting a language";
    if(result.affectedRows) {
        message="A language has been delete!";
    }
    return {message}
}

module.export={
    getMultiple,
    getUser,
    create,
    update,
    remove
};
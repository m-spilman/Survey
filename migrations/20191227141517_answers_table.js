
exports.up = function(knex) {
    return knex.schema.raw(
        `CREATE TABLE answers (question text, answer text, uid text NOT NULL )`
    )
  
};

exports.down = function(knex) {
    return knex.schema.raw(
        `DROP TABLE respondent`
    )
  
};

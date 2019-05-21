
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', function(tbl){
        tbl.increments('id');
        tbl.string('username')
            .unique()
            .notNullable();
        tbl.string('password')
            .notNullable();
        tbl.string('gender')
            .notNullable();
        tbl.integer('age')
            .notNullable();
        tbl.string('height')
            .notNullable();
        tbl.integer('weight')
            .notNullable();
        tbl.string('goal')
            .notNullable();
        tbl.string('exercise')
            .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};

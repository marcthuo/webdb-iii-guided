// What changes are to be applied to the database
exports.up = function(knex, Promise) {
    return knex.schema.createTable('roles', function(tbl) {
      //Primary key called id, integer, auto-increment
        tbl.increments()

        tbl
          .string('name', 128)
          .notNullable()
          .unique()
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('roles')
};

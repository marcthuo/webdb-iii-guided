// what changes are to be applied to the database
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(tbl) {
      // primary key called id, integer, auto-increment
      tbl.increments();
  
      tbl.string('name', 128).notNullable();

    // Foreign Key example - we'll explain how Foreign Keys work in the Data Modeling lecture
      tbl
        .integer('role_id')// the field to be added to the users table
        .unsigned()// include this because some DBMS need it
        .references('id')// the primary key in the parent table
        .inTable('roles')// the name of the parent table
        .onDelete('CASCADE')// ask students to add it and we'll explain what they do on the Data Modeling lecture
        .onUpdate('CASCADE');// ask students to add it and we'll explain what they do on the Data Modeling lecture
  
      tbl.timestamps(true, true);
    });
  };
  
  // how can I undo the changes
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };
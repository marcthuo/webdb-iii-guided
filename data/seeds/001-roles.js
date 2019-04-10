
exports.seed = function(knex, Promise) {
//the 00-cleanup.js seed already deleted all records
//we just worry about seeding records in other seeds
      // Inserts seed entries
      return knex('roles').insert([
        {name: 'Student'},
        {name: 'PM'},
        {name: 'TA'}
      ]);
};

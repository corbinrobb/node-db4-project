
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'gram of Broccoli'},
        { ingredient_name: 'pound of Steak'},
        { ingredient_name: 'cup of Rice'},
        { ingredient_name: 'ounce of Teriyaki' },
        { ingredient_name: 'Pizza' }
      ]);
    });
};

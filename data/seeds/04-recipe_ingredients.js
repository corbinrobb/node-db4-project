
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        { quantity: 4, recipe_id: 1, ingredient_id: 1 },
        { quantity: 1, recipe_id: 1, ingredient_id: 2 },
        { quantity: 1.5, recipe_id: 1, ingredient_id: 3 },
        { quantity: 2.5, recipe_id: 1, ingredient_id: 4 },
        { quantity: 1, recipe_id: 2, ingredient_id: 5 },
      ]);
    });
};

exports.up = function(knex) {
    return knex.schema.createTable('ongs', table => {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();

        /**
         * +=========================================================================+
         * |      id     | name |        email       |   whatsapp   |    city  |  uf |
         * |-------------|------|--------------------|--------------|----------|-----|
         * |   1a2b3c4d5e|   ONG|   email@example.com|   15900000000|   Example|   UF|
         * |-------------|------|--------------------|--------------|----------|-----|
         * |   2a2b3c4d5e|   GNO|   email@example.com|   15900000000|   Example|   UF|
         * |-------------|------|--------------------|--------------|----------|-----|
         * |   3a2b3c4d5e|   ONG|   email@example.com|   15900000000|   Example|   UF|
         * |-------------|------|--------------------|--------------|----------|-----|
         * |   4a2b3c4d5e|   ...|                 ...|           ...|       ...|   ..|
         * +=========================================================================+
        **/
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};

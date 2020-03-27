exports.up = function(knex) {
    return knex.schema.createTable('incidents', table => {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');

        /**
         * +==================================================+
         * | id |  title  | Description | Value |    ong_id   |
         * |----|---------|-------------|-------|-------------|
         * |   1|   Case 1|      Example|    120|   1a2b3c4d5e|
         * |----|---------|-------------|-------|-------------|
         * |   2|   Case 2|      Example|    130|   2a2b3c4d5e|
         * |----|---------|-------------|-------|-------------|
         * |   3|   Case 3|      Example|    140|   3a2b3c4d5e|
         * |----|---------|-------------|-------|-------------|
         * |   4|      ...|          ...|     ..|          ...|
         * +==================================================+
        **/
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};

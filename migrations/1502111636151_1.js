exports.up = (pgm) => {
  return pgm.createTable('users', {
    id: 'id',
    name: 'text',
    lastname: 'text'
  });
};

exports.down = (pgm) => {
  return pgm.dropTable('users');
};
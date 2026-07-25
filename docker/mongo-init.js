db = db.getSiblingDB('inventory_db');

db.createUser({
  user: 'ase_user',
  pwd: 'ase_password',
  roles: [
    {
      role: 'readWrite',
      db: 'inventory_db',
    },
  ],
});

db.createCollection('users');
db.createCollection('products');
db.createCollection('orders');
db.createCollection('suppliers');

print('MongoDB initialization script completed successfully for inventory_db.');

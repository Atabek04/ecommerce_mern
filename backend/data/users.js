import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Otabek Shadimatov',
    email: 'otabek.shadimatov@gmail.com',
    password: bcrypt.hashSync('91926499', 10),
    isAdmin: true,
  },
  {
    name: 'Alijon Valiqulov',
    email: 'alijon-valuqulov@mail.ru',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
];

export default users;

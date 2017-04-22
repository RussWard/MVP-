const data = [
  {
    user: 'The Ether',
    lesson: 'you are luckier than you know'
  }
]

const db = require('./server/db/index.js');

db('wisdom').insert(data).then(() => {
  console.log('data is seeded')
})

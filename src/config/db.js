import Dexie from 'dexie';

const db = new Dexie('MyToDoDB');
db.version(1).stores({
  todo: '++id,title,observation,done,timestamp,*tags',
  done: '++id,title,observation,timestamp,*tags',
});

export default db;

import Dexie from 'dexie';

const db = new Dexie('myTodoDB');
db.version(1).stores({ todos: '++id' });

export default db;

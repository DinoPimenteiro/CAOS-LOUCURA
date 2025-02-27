import { sql } from './db.js'

sql`
    CREATE TABLE videos (
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INT NOT NULL,
);
`
then(()=>{
    console.log('Tabela criada')
})

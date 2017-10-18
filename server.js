import express from 'express';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import { data, root, schema } from './graphql.config';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/all', (request, response) => {
    response.send(data);
});

app.use('/api/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(3000, () => {
    console.log('Listening on port 3000.');
});
const express = require ('express');
const mongoose = require ('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://faking:luizlester123@cluster0-p76o4.mongodb.net/cluster0?retryWrites=true&w=majority', {
useNewUrlParser: true,
useUnifiedTopology: true,
});
app.listen(3333);


/*tipos de parametros:

Query params: request.query (Filtros, ordenação, paginação)
Route params : request.params (Identifica um recurso para alterar ou deletar)
*/

app.post('/users/:id', (request, response) => {
 return response.json({ message: 'Hello world' });

});


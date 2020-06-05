// rota: endereço completo a requisição
// recurso: qual entidade no sistema estamos acessando 

// GET: buscar uma ou mais informações no back-end
// POST: criar uma nova informação no back-end
// PUT: atualizar uma informação existente no back-end
// DELETE: remover uma informação do back-end

// POST /users = criar um novo usuário
// GET /users = listar usuários
// GET /users/23 = buscar dados do usuário com id 23

// request param: parâmetros que vem na própria rota que identificam um recurso
// query param: parâmetros que vem na própria rota geralmente opcionais para filtros, paginações, etc.
// requesto body: corpo da requisição -> parâmetros para criação/atualização de informações

// SELECT * FROM users WHERE name = 'Diego'
// knex('users').where('name', 'Diego').select(*)
///////////////////////////////////////////////////////////////////////////////////////////////////////
import express from 'express'
import routes from './routes'
import path from 'path'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333)
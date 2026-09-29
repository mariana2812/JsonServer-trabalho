# JSON Server do projeto

Requer Node.js e npm. No terminal desta pasta:

```sh
npm install
npm start
```

A API fica em http://localhost:3001. Para usar outra porta no PowerShell:

```powershell
$env:PORT = 3002
npm start
```

## Cadastro e login

Envie JSON com o cabeçalho `Content-Type: application/json`:

- `POST /register`: `{ "email": "usuario@exemplo.com", "password": "senha123", "nome": "Usuario" }`
- `POST /login`: `{ "email": "usuario@exemplo.com", "password": "senha123" }`

A resposta contém `accessToken` e `user`. No frontend, guarde `user.id` como `idUser` e envie `Authorization: Bearer <accessToken>` nas alterações de perfil.

`GET /users` e `GET /users/:id` permitem consultar perfis. `PATCH /users/:id` permite ao usuário autenticado editar seu próprio perfil. As regras estão em `routes.json`.

## Recursos

Coleções disponíveis: users, blog, comments, likes, friends, systems, userSystems, campaigns, campaignMembers, campaignPosts, messages, communities, communityMembers, characters, notifications e avatar.

Use GET para listar, POST para criar, PATCH /recurso/:id para editar e DELETE /recurso/:id para excluir. Filtros podem ser enviados na URL, por exemplo `/blog?userId=3`.

Os registros são salvos em `db.json`. Preserve esse arquivo para manter as contas e publicações. As coleções diferentes de users seguem o acesso padrão aberto do JSON Server, adequado ao protótipo local.

Execute o frontend pelo Live Server e configure a URL da API para http://localhost:3001.

# Fresh Monorepo project - powered by Turborepo

The monorepo includes an example setup **backend/frontend** projects with
demonstrated linked dependencies. <br/>

<code>npx degit tedimv/monorepo my-new-project</code> <br/>
<code>cd my-new-project</code> <br/>
<code>pnpm install</code> <br/>

To be added: <br/>

- initial **_mobile app with ReactNative_** project to be added to the boilerplate later.
- CLI for setting up backend with different **_databases/ORMs_**

<u>_Testing is not setup because it's a sensitive topic that everyone implements slightly differently.<br/>
This boilerplate includes only initial scaffolding that does not guide project tragectory beyond providing a separation for the different apps working together._</u>

### Backend (api)

Main technologies in default version:

- NestJS
- Prisma
- Postgresql
- prisma-merge
- class-validator
- @nestjs/swagger

Initial setup includes:

- NestJS integration with Prisma using postgresql
- initial **_Users_** controller/service for basic CRUD operations
- request payload validation with class-validator
- initial swagger endpoints

Project includes a vscode configuration for running <b>api</b> project in debug mode.

##### Required configuration and setup

- create **_.env_** file in **api** root directory containing <br/>
  DATABASE_URL=postgresql://username:password@localhost:5432/dbName?schema=public
- from the api project <code>pnpm db:merge-schema</code>
- from the api project <code>pnpm prisma migrate dev</code>
- from the api project <code>pnpm prisma generate</code>

### Webapp

Main technologies in default version:

- SolidJS
- TailwindCSS

<hr/>

Run both apps with <code>pnpm dev</code> from each app folder. <br/>
Or run <code>pnpm dev:webapp</code> or <code>pnpm dev:api</code> from root directory.

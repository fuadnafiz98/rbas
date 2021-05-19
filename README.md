# Role Based Authentication System

## Stack

- Node.js
- Fastify
- Typescript
- Postgres
- Knex.js
- Docker
  And Much more...

## Working process

- PORT nodejs-auth-mine to this repo
- Make a complete flow from login, register.
- Use JWT token to send user role.
- Make admin to update user role.
- add last login in user database

### What is this all about?

Let's imagine about a news platfrom. There are certains roles, like:

- admins: head of the news platfrom. Has all permissions and control
- publications: there are many publications like sports special, shobiz, politices, sunday special etc.
  - publications has some admins & some writers, editors, readers
  - new publications can be created by admins like "saturday satire"
    - admin will assign a new employee as the admin of this page.
    - then he will assign new employee as editor, writer and so on.

- users:

  - real users can subscribe to one or more publications.
  - they will only can read those papers and can unsubscribe and resubscribe to the publications.

- general reports
  - only admin, writers can write
  - report **owner** can do all
  - only editors and read and edit but not delete
- reports in newsletters

# Tables

newsletters:

- id
- name
- type: daily, twice-a-week, weekly
- admin_id
- readers_count
- writers_count
- stories_count
- published_at

publications:

- id
- name
- description
- img_url
- admin_id
- readers_count
- writers_count
- publised_at

subscribtion:

- s_id
- name
- type
- hobby, daily, supporter
- short_description
- price
- details

user_subscribtion:

- user_id
- publication_id
- subscribtion_id

user
- username
- userId
- email
- password
- 

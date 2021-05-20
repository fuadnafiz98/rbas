# Role Based Authentication System

## Stack

- Node.js
- Express.js
- Typescript
- Postgres
- Knex.js
- Docker
- Next.js


## Up & Grabs

```
$ npx knex migrate:latest --knexfile=src/knexfile.js
```


## Working process

- PORT JWT-Passport to this repo
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

user:
- username
- userId
- email
- password
- created_at
- updated_at

permissions:
- permission_id
- permission_name
- permission_slag
- created_at
- updated_at

user_permissions:
- id
- permission_id
- user_id
- created_at
- updated_at
 
subscribtion:

- subscribtion_id
- subscribtion_name
- subscribtion_type
  - hobby, daily, supporter
- subscribtion_price
- subscribtion_details

user_subscribtion:

- user_id
- publication_id
- subscribtion_id
- created_at
- expried_at

publications:
- publication_id
- publication_name
- publication_type
  - daily, twice-a-week, weekly
- publication_description
- publication_img_url
- publication_admin_id
- publication_readers_count
- publication_writers_count
- publication_publised_at

news:
- news_id
- news_title
- news_description
- news_user_id
- news_created_at
- news_assign_id

assigns:
- assign_id
- assign_user_id
- assign_news_id

news_draft:
- news_id
- user_id
- darft_created_at
- draft_updated_at



**Permissions**

- 01_publication_admin
- 01_publication_writer
- 01_publication_reader
- 01_publication_editor

- 02_publication_admin
- 02_publication_writer
- 02_publication_reader
- 02_publication_editor

**Roles**


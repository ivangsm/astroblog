---
publishDate: 'Jan 4 2023'
title: 'Manage DBs and Users on Postgres'
image: '~/assets/images/pg.webp'
category: 'Tutorials'
tags: ['postgres', 'db', 'server', 'docker', 'management', 'pgtune']
description: Learn how to manage databases and users in PostgreSQL with ease. This tutorial provides step-by-step instructions for creating users and databases, granting permissions, and setting up privileges in both production and development environments. Explore various methods, including psql commands and plain SQL, to create users and databases. Discover how to grant specific privileges to users for tables and databases, and gain insights into recommended privileges for production and development databases. Additionally, learn about PGTune, a utility that optimizes the configuration of a PostgreSQL server based on hardware and workload. If you have any questions or suggestions, feel free to reach out via email. Enhance your PostgreSQL management skills and efficiently handle databases and users.
---

Welcome to our tutorial on managing databases and users in PostgreSQL! This post will guide you through the process of creating databases and users, as well as granting permissions for users to access databases. We will provide examples using both psql commands and plain SQL, and offer some recommendations for privileges in production and development environments.

Before we dive in, it's important to note that PostgreSQL is a powerful, open-source object-relational database system that is widely used for managing large data sets. If you're new to PostgreSQL, you may want to familiarize yourself with some basic concepts before proceeding with this tutorial.

Now, let's get started!

### 👨‍👧‍👦 Creating Users in PostgreSQL

To create a user in PostgreSQL, you can use the **CREATE USER** command. For example:

```sql
CREATE USER myuser WITH ENCRYPTED PASSWORD 'mypassword';
```

This will create a user with the username myuser and the password mypassword.

You can also use psql to create a user. Here's how:

```bash
createuser myuser -P
```

### 💾 Creating a Database in PostgreSQL

To create a database in PostgreSQL, you can use the **CREATE DATABASE** command. For example:

```sql
CREATE DATABASE mydatabase;
```

This will create a database with the name mydatabase.

You can also use psql to create a database. Here's how:

```bash
psql> createdb mydatabase
```

To create a database with a predefined owner, you can use the **--owner** option:

```bash
psql> createdb mydatabase --owner=myuser
```
This will create a database with the name mydatabase and set the owner to the user myuser.

### ⚙️ Adding Permissions for a User in PostgreSQL

To add permissions for a user in PostgreSQL, you can use the **GRANT** command. For example:

```sql
GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myuser;
```

This will grant all privileges on the database mydatabase to the user myuser.

If you want to grant a user only specific privileges on a table, you can use the **GRANT** command with the appropriate privileges. For example, if you want to grant a user the **SELECT**, **INSERT**, and **UPDATE** privileges on a table, you can use the following command:

```sql
GRANT SELECT, INSERT, UPDATE ON TABLE mytable TO myuser;
```

To grant a user the ability to create tables in a database, you can use the **CREATE** privilege:

```sql
GRANT CREATE ON DATABASE mydatabase TO myuser;
```

You can also grant a user the ability to connect to a database using the **CONNECT** privilege:

```sql
GRANT CONNECT ON DATABASE mydatabase TO myuser;
```

There are many other privileges that you can grant to a user, such as the ability to delete data, create indexes, and execute functions. You can find a full list of privileges in the PostgreSQL documentation.

Here are some examples of granting additional privileges:

```sql
GRANT DELETE, TRUNCATE ON TABLE mytable TO myuser;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO myuser;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO myuser;
```

### 🏭 Recommended Privileges for Production Databases

In a production environment, it is important to carefully manage permissions to ensure the security and stability of the database. Here are some recommended privileges for users in a production database:

- **CONNECT**: Allows the user to connect to the database.
- **CREATE**: Allows the user to create objects in the database, such as tables and functions.
- **USAGE**: Allows the user to use objects in the database, such as sequences.
- **SELECT**, INSERT, UPDATE, DELETE: Allows the user to read from and write to tables in the database.
Here's an example of granting these privileges to a user in a production database:

```sql
GRANT CONNECT, CREATE, USAGE, SELECT, INSERT, UPDATE, DELETE ON DATABASE mydatabase TO myuser;
```

### 🛠 Recommended Privileges for Development Databases

In a development environment, it may be useful to grant more privileges to users to allow for more flexibility and experimentation. Here are some recommended privileges for users in a development database:

- **EXECUTE**: Allows the user to execute functions in the database.
Here's an example of granting these privileges to a user in a development database:

```sql
GRANT CONNECT, CREATE, DROP, TRUNCATE, USAGE, SELECT, INSERT, UPDATE, DELETE, EXECUTE ON DATABASE mydatabase TO myuser;
```

or simply:

```sql
GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myuser;
```

### ✨ PGTune

[PGTune](https://pgtune.leopard.in.ua) is a utility that helps you optimize the configuration of a PostgreSQL server based on the hardware and workload of the server. This can be especially useful if you are running a high-concurrency workload and want to ensure that your server is configured optimally for maximum performance. 

Pgtune is easy to use and can save you time and effort in configuring your PostgreSQL server. Simply provide pgtune with some basic information about your hardware and workload, and it will generate a configuration file that is optimized for your needs. Pgtune is a valuable tool for anyone looking to get the most out of their PostgreSQL server.

### 🙋 Get in touch

If you have any questions or suggestions I will be happy to read them, you can email me to [me@ivansalazar.dev](mailto:me@ivansalazar.dev)
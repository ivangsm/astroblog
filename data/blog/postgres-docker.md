---
publishDate: 'Dec 15 2022'
title: 'SetUp PostgreSQL with Docker'
description: 'SetUp PostgreSQL with Docker'
image: '~/assets/images/postgres-docker.jpg'
category: 'Tutorials'
tags: ['postgres', 'sql', 'docker', 'podman', 'docker-compose']
---

**PostgreSQL** is a popular open-source relational database management system (RDBMS) that is known for its stability, performance, and feature-richness. **Docker** is a platform that enables users to build, ship, and run distributed applications. In this blog post, we will look at how to use and configure **PostgreSQL** with **Docker**.

To use **PostgreSQL** with **Docker**, you first need to install **Docker** on your machine. You can follow the instructions on the **Docker** website to install **Docker** on your system. Once you have **Docker** installed, you can run the following command to pull the latest version of the **PostgreSQL** **Docker** image:

```bash
docker pull postgres:15-alpine
```

This will download the latest **PostgreSQL** 15 alpine **Docker** image to your machine. Once the image is downloaded, you can run the following command to start a **PostgreSQL** container:

```bash
docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres:15-alpine
```

This command will start a **PostgreSQL** container with the name "my-postgres" and set the password for the default "postgres" user to "mysecretpassword". You can replace these values with your own desired values.

Once the container is running, you can connect to the **PostgreSQL** server inside the container by running the following command:

```bash
docker exec -it my-postgres psql -U postgres
```

This will connect to the **PostgreSQL** server inside the "my-postgres" container and log you in as the "postgres" user. From here, you can execute SQL commands to create databases, tables, and manage your data.

In addition to the basic usage described above, you can also configure various aspects of the **PostgreSQL** server running inside the **Docker** container. For example, you can set the default encoding, locale, and time zone for the server by using the following command:

```bash
docker run --name my-postgres \
-e POSTGRES_PASSWORD=mysecretpassword \
-e POSTGRES_DB=mydb \
-v ${HOME}/.postgres-data/:/var/lib/postgresql/data:Z \
-e POSTGRES_ENCODING=UTF8 \
-e POSTGRES_LC_COLLATE=en_US.UTF-8 \
-e POSTGRES_LC_CTYPE=en_US.UTF-8 \
-e POSTGRES_TZ=America/New_York \
-p 5432:5432 \
-d postgres:15-alpine
```

In this command, we have set the default encoding to UTF-8, the default locale to "en_US.UTF-8", the default time zone to "America/New_York", and the default database to "mydb" also creates a volume to make your data persistent if you delete or recreate your container. You can replace these values with your own desired values.

After doing that you can start or stop your DB instance with

```bash
docker my-postgres start
docker my-postgres stop
```

In conclusion, using **PostgreSQL** with **Docker** is a great way to quickly and easily get a **PostgreSQL** server up and running on your machine. **Docker** makes it easy to manage the **PostgreSQL** server, and allows you to configure various aspects of the server to suit your needs. If you are new to **PostgreSQL** and **Docker**, I hope this blog post has given you a good starting point for using these tools together.

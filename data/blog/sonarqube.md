---
publishDate: 'Jul 17 2021'
title: 'Improve as a developer with SonarQube'
description: 'Code analysis with SonarQube to improve your code quality'
image: '~/assets/images/sq.webp'
category: 'Tutorials'
tags: ['SonarQube', 'Code analysis', 'Code quality']
---

#### 🤔 What is web SonarQube?

SonarQube is an open-source platform for continuous inspection of code quality to perform automatic reviews with static analysis of code to detect bugs, code smells, and security vulnerabilities on 15 programming languages in the open-source version. 

It also offers reports on duplicated code, coding standards, unit tests, code coverage, code complexity, comments, bugs, and security vulnerabilities.


### How to run and use SonarQube

#### 🐋 Do it with Docker

SonarQube is a whole platform that needs to be installed and configured with a DBMS such as Postgres, to make this we'll use Docker and docker-compose utilities.

It depends on your operating system the installation process may ask to change, so this is the URL of the official page with instructions to install it: [Docker Installation Instructions](https://docs.docker.com/get-docker/)

Now, with our tools installed, we will proceed to write a file called docker-compose.yml inside a directory that will contain the SonarQube and the database data.


```yaml
version: "3"

services:
  sonarqube:
    image: sonarqube
    expose:
      - 9000
    ports:
      - "127.0.0.1:9000:9000"
    networks:
      - sonarnet
    environment:
      - sonar.jdbc.url=jdbc:postgresql://db:5432/sonar
      - sonar.jdbc.username=sonar
      - sonar.jdbc.password=sonar
    volumes:
      - sonarqube_conf:/opt/sonarqube/conf
      - sonarqube_data:/opt/sonarqube/data
      - sonarqube_extensions:/opt/sonarqube/extensions
      - sonarqube_bundled-plugins:/opt/sonarqube/lib/bundled-plugins

  db:
    image: postgres
    networks:
      - sonarnet
    environment:
      - POSTGRES_USER=sonar
      - POSTGRES_PASSWORD=sonar
    volumes:
      - postgresql:/var/lib/postgresql
      - postgresql_data:/var/lib/postgresql/data

networks:
  sonarnet:

volumes:
  sonarqube_conf:
  sonarqube_data:
  sonarqube_extensions:
  sonarqube_bundled-plugins:
  postgresql:
  postgresql_data:
```

And inside the directory, we need to run 

```bash
docker-compose up
``` 

This downloads the SonarQube and Postgres images, generate and configure both containers.

This leaves the logs of those containers running in the terminal, if you don't want this just add **-d** flag to the command.

```bash
docker-compose up -d
``` 

##### ❌ In case of errors

If you get this error when running the command

> ERROR: [1] bootstrap checks failed. You must address the points described in the following [1] lines before starting Elasticsearch.
> bootstrap check failure [1] of [1]: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]`

You need to run

```bash
sudo sysctl -w vm.max_map_count=262144
```

#### 🌐 SonarQube

Open the web browser and go to localhost:9000

- username: admin
- password: admin

May ask to change the default password, and then you get a dashboard like this

![SonarQube UI](https://i.stack.imgur.com/0SGfW.png)

#### ⚙️ Setting up a project


In the top-right corner, you can see an **Add Project** blue button, click on and select the unique option in the open-source version “Manually”

![Add project](https://res.cloudinary.com/ivansalazar/image/upload/v1623994407/sonarqube/sq1.png)

Now, we need to add

- Project key (unique ID string)
- Display name (¯\_(ツ)_/¯)

Now click on **Set up** button, and we need to provide a token, It is the identifier that we will have before the platform. We should keep it private, if it is compromised, you can revoke it from the account settings.

We must select the lang or stack of our project, the **Maven (Java), Gradle (Java), and .NET/Net core(C#, F#, VB)** have their way of executing the analysis. All the other supported langs need the sonnar-scanner CLI app to work, you can see direct links to all necessary documentation in the same wizard depending on your OS.

![Select the stack](https://res.cloudinary.com/ivansalazar/image/upload/v1623994407/sonarqube/sq2.png)

Following the instructions of the wizard only remains to wait for the results and check your code quality, and see where you are making mistakes and how to solve all of this with examples and estimated time effort to solve the issues.

![Project dashboard](https://res.cloudinary.com/ivansalazar/image/upload/v1623994407/sonarqube/sq3.png)
![Issues tab](https://res.cloudinary.com/ivansalazar/image/upload/v1623994407/sonarqube/sq4.png)

When you fix any of these errors make a commit and run again the command to scan the project (the same as the first time) you can get charts and statistics of your progress solving the issues

```bash
sonar-scanner \
  -Dsonar.projectKey=<project name> \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=<token>
```

#### 🐰🥕 That's all folks

With this, you be able to check your code quality and track your progress resolving the issues, in another post I will show you how to deploy this on a real server with your domain, to use remotely in your personal or business projects.

#### 🙋 Get in touch

If you require supplemental information or suggestions I will be happy to read them, you can email me to [me@ivansalazar.dev](mailto:me@ivansalazar.dev)



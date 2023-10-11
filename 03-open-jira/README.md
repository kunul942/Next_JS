# Next.js OpenJira App

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

El -d, significa **detached**

# MongoDB URl Local:

```
mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

## Llenar la base de datos con informacion de pruebas

Llamara:

```
    http://localhost:3000/api/seed
```

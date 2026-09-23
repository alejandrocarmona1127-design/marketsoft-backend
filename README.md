# MarketSoft Backend - Sistema de Gestión de Supermercado

API REST para la gestión de productos, proveedores, usuarios y ventas de un supermercado, desarrollada bajo la arquitectura MVC con Node.js, Express, Sequelize y PostgreSQL.

---

Integrantes y Responsabilidades

- **Jhon Alejandro Carmona Gaviria**
  - Configuración del servidor Express y conexión a PostgreSQL.
  - Definición de modelos Sequelize y relaciones entre entidades.
  - Desarrollo de controladores MVC y lógica de negocio (validaciones y cálculo automático de ventas).
  - Documentación interactiva de endpoints utilizando Swagger.

---

## Tecnologías Utilizadas

- **Lenguaje:** JavaScript (Node.js)
- **Framework Web:** Express.js
- **Base de Datos:** PostgreSQL
- **ORM:** Sequelize
- **Documentación:** Swagger UI Express / Swagger JSDoc

---

## Instrucciones de Ejecución

Sigue estos pasos para ejecutar el proyecto localmente:

### 1. Clonar el repositorio e instalar dependencias
```bash
git clone <https://github.com/alejandrocarmona1127-design/marketsoft-backend.git>
cd marketsoft-backend
npm install
```

### 2. Configurar variables de entorno

Crea un archivo .env en la raíz del proyecto con la siguiente configuración para tu base de datos PostgreSQL local:
```bash
PORT=3000
DB_NAME=marketsoft_db
DB_USER=postgres
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
```

### 3. Iniciar el servidor
Para ejecutar el proyecto

```bash
npm start
```
Para modo desarrollo con recarga automática:
```bash
npm run dev
```

### 4. Acceso a la Documentación Interactiva (Swagger)
Una vez iniciado el servidor, puedes probar todos los endpoints desde la interfaz web navegando a:
```bash
http://localhost:3000/api/docs
```

## Ejemplos de Endpoints

### 1. Crear Producto (POST /api/products)
```JSON
{
  "name": "Arroz",
  "description": "Arroz diana premium",
  "price": 4500,
  "stock": 10,
  "providerId": 2
}
``` 
### Respuesta que da el servidor 
```JSON
{
  "id": 6,
  "name": "Arroz",
  "description": "Arroz diana premium",
  "price": 4500,
  "stock": 10,
  "providerId": 2,
  "updatedAt": "2026-09-23T05:10:30.312Z",
  "createdAt": "2026-09-23T05:10:30.312Z",
  "deletedAt": null
}
```

### 2. Crear cliente con correo repetido
```JSON
{
  "name": "lola",
  "email": "alejandrocarmona1127@gmail.com",
  "password": 123456789,
  "role": "admin"
}
```
### Respuesta que da el servidor 
```JSON
{
  "message": "Error creating user",
  "error": {
    "name": "SequelizeUniqueConstraintError",
    "errors": [],
    "parent": {
      "length": 224,
      "name": "error",
      "severity": "ERROR",
      "code": "23505",
      "detail": "Ya existe la llave (email)=(alejandrocarmona1127@gmail.com).",
      "schema": "public",
      "table": "Users",
      "constraint": "Users_email_key",
      "file": "nbtinsert.c",
      "line": "673",
      "routine": "_bt_check_unique",
      "sql": "INSERT INTO \"Users\" (\"id\",\"name\",\"email\",\"role\",\"createdAt\",\"updatedAt\") VALUES (DEFAULT,$1,$2,$3,$4,$5) RETURNING \"id\",\"name\",\"email\",\"role\",\"createdAt\",\"updatedAt\",\"deletedAt\";",
      "parameters": [
        "lola",
        "alejandrocarmona1127@gmail.com",
        "admin",
        "2026-09-23 05:14:29.728 +00:00",
        "2026-09-23 05:14:29.728 +00:00"
      ]
    }
```

### 3. Total calculado automaticamente POST /api/sales
```JSON
{
  "userId": 1,
  "products": [
    {
      "productId": 3,
      "quantity": 3
    },
    {
      "productId": 4,
      "quantity": 1
    }
  ]
}
```
### Respuesta que da el servidor 
```JSON
{
  "id": 5,
  "userId": 1,
  "date": "2026-09-23T05:18:54.011Z",
  "total": 16000,
  "createdAt": "2026-09-23T05:18:54.011Z",
  "updatedAt": "2026-09-23T05:18:54.130Z",
  "deletedAt": null,
  "saleProducts": [
    {
      "id": 7,
      "saleId": 5,
      "productId": 3,
      "quantity": 3,
      "price": 3000,
      "createdAt": "2026-09-23T05:18:54.106Z",
      "updatedAt": "2026-09-23T05:18:54.106Z",
      "deletedAt": null
    },
    {
      "id": 8,
      "saleId": 5,
      "productId": 4,
      "quantity": 1,
      "price": 7000,
      "createdAt": "2026-09-23T05:18:54.125Z",
      "updatedAt": "2026-09-23T05:18:54.125Z",
      "deletedAt": null
    }
  ]
}
```








---
*Backend de MarketSoft desarrollado por Jhon Alejandro Carmona Gaviria. 2026.* 
# Mercado Liebre
Clon de Mercado Libre desarrollado utilizando Express para el back-end y EJS como motor de vistas para el front-end.

## Features
- Visualizar, crear, editar y eliminar productos (CRUD).
- Registro e inicio de sesión utilizando session y cookies.
- Permisos especiales según el tipo de usuario para realizar determinadas tareas.

## Dependencias utilizadas
- Express
- EJS
- Express Session
- Cookie Parser
- Method Override
- Multer
- Bcrypt

# Usuarios y permisos
- Administrador (admin / admin): Puede crear, editar y borrar productos.
- Usuario (user / user): Puede crear productos.
- Invitado (no logueado): Puede únicamente visualizar productos.

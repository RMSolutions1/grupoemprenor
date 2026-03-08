# Subir la web a Ferozo (DonWeb) – Paso a paso

Su panel es **[Ferozo](https://ferozo.host/)** (DonWeb). La base de datos MySQL ya está ahí; la web es **Next.js** (Node.js), así que hay que poder ejecutar Node en el mismo servidor o en otro lugar.

---

## 1. Qué tiene Ferozo

- **MySQL** y phpMyAdmin (ya lo está usando).
- **Apache** o **OpenLiteSpeed**, **PHP**, WordPress/Joomla.
- **Git** en el panel ([Usar GIT en Ferozo](https://soporte.donweb.com/hc/es/articles/19561536800532-Utilizar-GIT-en-el-panel-Ferozo)).
- **FTP** y administrador de archivos.

Ferozo no incluye **Node.js** por defecto. Por eso hay dos caminos:

---

## 2. OPCIÓN A – Tiene Cloud Server o Servidor Dedicado (acceso SSH)

Si su servicio es **Cloud Server** o **Servidor Dedicado** con Ferozo, suele tener **acceso SSH**. Ahí puede instalar Node.js y ejecutar la app en el **mismo servidor** que MySQL (así `localhost` funciona).

### Paso 1 – Conectarse por SSH

1. En el panel de DonWeb/Ferozo o en el email de bienvenida busque: **usuario SSH**, **contraseña** o **llave SSH**, **IP del servidor**.
2. Use un cliente SSH:
   - **Windows:** [PuTTY](https://www.putty.org/) o la terminal de Windows.
   - Ejemplo: `ssh usuario@ip-del-servidor`

### Paso 2 – Instalar Node.js en el servidor

En la consola SSH (como usuario con permisos, o root si es necesario):

```bash
# Ejemplo en CentOS/Alma (Ferozo suele usar estos)
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# Verificar
node -v
npm -v
```

(Si su servidor usa otra distro, DonWeb tiene guías o puede pedir a soporte la forma recomendada.)

### Paso 3 – Subir el proyecto

**Opción 1 – Por Git (recomendado):**

1. Suba el proyecto a **GitHub** o **GitLab**.
2. En Ferozo use la función **Git** para clonar el repositorio en la carpeta que corresponda (por ejemplo dentro de la cuenta de hosting donde quiera la app).
3. Por SSH entre a esa carpeta y ejecute:
   ```bash
   cd /ruta/donde/clono/el/repo
   npm install
   npm run build
   ```

**Opción 2 – Por FTP:**

1. En su PC: `npm run build` en la carpeta del proyecto.
2. Suba por **FTP** (FileZilla, etc.) toda la carpeta del proyecto a una ruta del servidor (ej. `public_html/emprenor` o la que le indique el panel).
3. Por SSH:
   ```bash
   cd /ruta/donde/subio/la/app
   npm install --production
   npm run start
   ```

### Paso 4 – Variables de entorno en el servidor

En la misma carpeta de la app, cree un archivo **`.env`** o **`.env.production`** con:

```env
DB_HOST=localhost
DB_USER=c2751446_grupoar
DB_PASSWORD=34diziliRU
DB_NAME=c2751446_grupoar
JWT_SECRET=una_clave_larga_y_secreta_cambiela_por_algo_aleatorio
```

(En SSH puede usar `nano .env` y pegar lo anterior.)

### Paso 5 – Dejar la app siempre encendida (PM2)

Para que la app no se caiga al cerrar SSH:

```bash
sudo npm install -g pm2
cd /ruta/de/la/app
pm2 start npm --name "emprenor" -- start
pm2 save
pm2 startup
```

### Paso 6 – Hacer que el dominio apunte a la app

En el servidor, **Apache/OpenLiteSpeed** debe enviar las peticiones de su dominio al proceso Node (puerto 3000). Eso se hace con un **proxy inverso**.

- En Ferozo puede haber opciones en el panel para “Proxy” o “Aplicación Node”.
- O bien editar la configuración del virtual host para que el dominio use proxy a `http://127.0.0.1:3000`.

Si no ve cómo hacerlo, puede preguntar a **soporte DonWeb** (24/7):  
[Soporte DonWeb – Ferozo](https://soporte.donweb.com/hc/es/sections/19551496212756-Ferozo)

### Paso 7 – Crear el administrador

Cuando el dominio ya abra la web:

1. Entrar a: **https://su-dominio.com/login/setup**
2. Completar nombre, email y contraseña → **Crear administrador**.
3. Luego **https://su-dominio.com/login** e ingresar al panel en **/dashboard/admin**.

---

## 3. OPCIÓN B – Solo tiene cuenta de hosting (sin SSH)

Si tiene una **cuenta de hosting** creada dentro de Ferozo (sin acceso SSH al servidor), normalmente **no** puede instalar Node.js ahí. En ese caso:

### Opción B1 – Preguntar a DonWeb

1. Contacte a **soporte DonWeb** (24/7): [Soporte Ferozo](https://soporte.donweb.com/hc/es/sections/19551496212756-Ferozo).
2. Pregunte si en su plan puede:
   - Ejecutar **Node.js** en su cuenta, o
   - Tener **acceso SSH** para instalar Node.
3. Si le confirman que sí, siga la **Opción A** con los pasos que le indiquen ellos.

### Opción B2 – Usar Vercel y conectar a su MySQL

1. Despliegue la web en **Vercel** (gratis): [vercel.com](https://vercel.com) → importar el proyecto Next.js.
2. En Vercel configure las **variables de entorno** (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, JWT_SECRET).
3. **Importante:** En Vercel **no** puede usar `DB_HOST=localhost`. Necesita el **host remoto** de MySQL.
   - Pregunte a DonWeb: “¿Cuál es el host de MySQL para **conexiones remotas**?” (a veces es algo como `mysql.sudominio.com` o una IP).
   - Si le dicen que **no permiten conexiones remotas** a MySQL, esta opción no servirá y tendrá que usar un servidor con Node (Opción A o plan superior).

---

## 4. Resumen para Ferozo

| Situación | Qué hacer |
|-----------|-----------|
| **Cloud Server / Dedicado con SSH** | Instalar Node.js en el servidor, subir la app (Git o FTP), configurar `.env` con `DB_HOST=localhost`, ejecutar con `npm run start` o PM2, configurar proxy al puerto 3000. |
| **Solo cuenta de hosting (sin SSH)** | Preguntar a DonWeb si puede usar Node.js o SSH; si no, desplegar en Vercel y conectar a MySQL solo si DonWeb permite acceso remoto a la base. |

Documentación y soporte:

- [Ferozo – DonWeb](https://ferozo.com/)
- [Soporte Ferozo – DonWeb](https://soporte.donweb.com/hc/es/sections/19551496212756-Ferozo)
- [Utilizar GIT en Ferozo](https://soporte.donweb.com/hc/es/articles/19561536800532-Utilizar-GIT-en-el-panel-Ferozo)

Cuando tenga claro si tiene SSH o solo hosting, puede seguir solo los pasos de la opción que le corresponda.

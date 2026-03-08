# Instalar Node.js en tu hosting – Paso a paso

Guía para instalar Node.js en un servidor con **Ferozo (DonWeb)** o similar (Cloud Server / Servidor Dedicado con acceso SSH). Sin SSH no podrá instalar Node.js; en ese caso debe consultar con soporte DonWeb.

---

## Paso 1 – Confirmar que tienes acceso SSH

1. Entra al **panel de DonWeb** ([donweb.com](https://www.donweb.com) o el que uses).
2. Ve a tu **Cloud Server** o **Servidor Dedicado** (no a una “cuenta de hosting” suelta).
3. Busca datos de **acceso SSH**:
   - **IP del servidor** (ej. `190.xx.xx.xx`)
   - **Usuario** (suele ser `root` o un usuario que te hayan dado)
   - **Contraseña** o **llave SSH** (archivo `.pem` o similar)

Si no ves SSH en el panel, revisa el email de bienvenida del servicio o abre un ticket a **soporte DonWeb** (24/7) y pregunta: *“¿Cómo obtengo el acceso SSH a mi servidor?”*  
[Soporte DonWeb – Ferozo](https://soporte.donweb.com/hc/es/sections/19551496212756-Ferozo)

---

## Paso 2 – Conectarte al servidor por SSH

### Opción A – Desde Windows (PowerShell o CMD)

1. Abre **PowerShell** o **Símbolo del sistema** (Win + R → `cmd`).
2. Ejecuta (reemplaza `usuario` e `ip-del-servidor` por tus datos):

```bash
ssh usuario@ip-del-servidor
```

Ejemplo:

```bash
ssh root@190.123.45.67
```

3. Cuando pregunte *“Are you sure you want to continue connecting?”* escribe **yes** y Enter.
4. Escribe la **contraseña** del usuario (no se verá al escribir) y Enter.

### Opción B – Usar PuTTY (Windows)

1. Descarga **PuTTY**: [https://www.putty.org](https://www.putty.org/)
2. Abre PuTTY.
3. En **Host Name** pon la **IP del servidor**.
4. **Port:** 22. **Connection type:** SSH.
5. Click en **Open**.
6. Si sale aviso de seguridad, acepta.
7. Escribe el **usuario** (ej. `root`) y Enter, luego la **contraseña** y Enter.

### Opción C – Usar WinSCP (subir archivos y abrir terminal)

1. Descarga **WinSCP**: [https://winscp.net](https://winscp.net/)
2. Conéctate con la IP, usuario y contraseña (protocolo SFTP/SSH).
3. Desde el menú puedes abrir una **terminal** en el servidor y seguir los comandos de más abajo.

Cuando veas un prompt tipo `root@servidor:~#` o `[usuario@servidor ~]$`, ya estás dentro del servidor.

---

## Paso 3 – Ver qué sistema usa el servidor

En la terminal del servidor ejecuta:

```bash
cat /etc/os-release
```

Anota si dice **CentOS**, **AlmaLinux**, **Rocky**, **Ubuntu**, etc. (o la línea que empiece por `NAME=`).

---

## Paso 4 – Instalar Node.js

Elige **solo una** de las opciones según tu sistema.

### Si sale **CentOS**, **AlmaLinux** o **Rocky** (habitual en Ferozo)

Ejecuta estos comandos **uno por uno** (copiar y pegar en la terminal):

```bash
# Instalar Node.js 18 (LTS)
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -

sudo yum install -y nodejs
```

Si no tienes `curl`:

```bash
sudo yum install -y curl
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs
```

### Si sale **Ubuntu** o **Debian**

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

---

## Paso 5 – Comprobar que Node.js está instalado

En la misma terminal:

```bash
node -v
npm -v
```

Deberías ver algo como:
- `v18.x.x` (o similar) para Node.
- `9.x.x` o `10.x.x` (o similar) para npm.

Si ambos comandos muestran una versión, **Node.js está instalado correctamente**.

---

## Paso 6 – (Opcional) Instalar PM2 para dejar la app siempre encendida

PM2 sirve para que tu app Next.js siga corriendo aunque cierres la sesión SSH:

```bash
sudo npm install -g pm2
pm2 -v
```

Si `pm2 -v` muestra una versión, PM2 está listo. Más adelante usarás algo como:

```bash
cd /ruta/donde/este/tu/app
npm install
npm run build
pm2 start npm --name "emprenor" -- start
pm2 save
pm2 startup
```

(Eso lo harás cuando subas la app al servidor; aquí solo dejamos Node y PM2 instalados.)

---

## Resumen rápido

| Paso | Acción |
|------|--------|
| 1 | Confirmar en DonWeb que tienes Cloud/Dedicado y datos SSH (IP, usuario, contraseña o llave). |
| 2 | Conectarte por SSH (PowerShell, PuTTY o WinSCP). |
| 3 | Ver sistema: `cat /etc/os-release`. |
| 4 | Instalar Node: con **yum** (CentOS/Alma/Rocky) o **apt** (Ubuntu/Debian) según el paso 4. |
| 5 | Verificar: `node -v` y `npm -v`. |
| 6 | (Opcional) Instalar PM2: `sudo npm install -g pm2`. |

---

## Si algo falla

- **“Permission denied” o “Access denied”:** Comprueba usuario y contraseña. Si usas llave SSH, en PuTTY configura la clave en Connection → SSH → Auth.
- **“curl: command not found”:** Instala curl antes:  
  - CentOS/Alma: `sudo yum install -y curl`  
  - Ubuntu/Debian: `sudo apt-get install -y curl`
- **“Cannot connect” o “Connection refused”:** Verifica la IP, que el puerto sea 22 y que el firewall del servidor permita SSH. Soporte DonWeb puede revisar esto.
- **No tienes SSH:** En planes solo de “hosting compartido” a veces no hay SSH. Pregunta a soporte: *“¿Mi plan incluye acceso SSH para instalar Node.js?”*  
  [Soporte Ferozo – DonWeb](https://soporte.donweb.com/hc/es/sections/19551496212756-Ferozo)

Cuando tengas Node.js instalado y verificado, el siguiente paso es subir tu proyecto (por FTP/Git), hacer `npm run build` y arrancar la app con `npm run start` o PM2, tal como se indica en **SUBIR-A-FEROZO-DONWEB.md**.

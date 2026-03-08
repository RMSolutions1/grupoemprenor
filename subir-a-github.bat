@echo off
chcp 65001 >nul
echo ============================================
echo  Subir proyecto a GitHub - RMSolutions1/grupoemprenor
echo ============================================
echo.

cd /d "c:\Users\Windows\Desktop\GRUPO EMPRENOR\emprenor-website"

where git >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Git no está instalado o no está en el PATH.
    echo.
    echo Instala Git desde: https://git-scm.com/download/win
    echo Luego cierra y abre de nuevo esta ventana y ejecuta otra vez este archivo.
    pause
    exit /b 1
)

echo Configurando usuario Git (solo primera vez)...
git config --global user.email "noacvys@gmail.com"
git config --global user.name "Angel Sebastian Romero"
echo.

echo Inicializando repositorio y añadiendo archivos...
if not exist .git git init
git add .
git status
echo.

echo Creando commit...
git commit -m "Sitio EMPRENOR - Grupo Emprenor completo con Next.js, login, admin, BD"
if errorlevel 1 (
    echo No hay cambios que subir, o ya se hizo commit. Continuando...
)
echo.

echo Conectando con GitHub...
git branch -M main
git remote remove origin 2>nul
git remote add origin https://github.com/RMSolutions1/grupoemprenor.git
echo.

echo Subiendo a GitHub...
echo.
echo Cuando pida credenciales:
echo   Username: RMSolutions1
echo   Password: Pega tu TOKEN de GitHub ^(Personal Access Token^), NO la contraseña.
echo   Crear token: GitHub - Settings - Developer settings - Personal access tokens
echo.
git push -u origin main

if errorlevel 1 (
    echo.
    echo [ERROR] El push falló. Si pide usuario/contraseña, usa:
    echo   Username: RMSolutions1
    echo   Password: tu Token de acceso ^(PAT^) de GitHub
    echo.
) else (
    echo.
    echo ============================================
    echo  Listo. Código subido a:
    echo  https://github.com/RMSolutions1/grupoemprenor
    echo ============================================
)

echo.
pause

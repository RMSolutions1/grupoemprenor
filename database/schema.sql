-- =============================================================================
-- GRUPO EMPRENOR - Esquema de base de datos
-- Ejecutar este archivo una sola vez en phpMyAdmin (o consola MySQL) del hosting.
-- Después de ejecutarlo, configurar las variables de entorno (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)
-- y desplegar la aplicación. Crear el primer usuario administrador en: /login/setup
-- =============================================================================

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- -----------------------------------------------------------------------------
-- Roles (cliente, proveedor, empleado, empresa, administración)
-- -----------------------------------------------------------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `slug` varchar(32) NOT NULL,
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `roles` (`slug`, `name`) VALUES
('cliente', 'Cliente'),
('proveedor', 'Proveedor'),
('empleado', 'Empleado'),
('empresa', 'Empresa'),
('administracion', 'Administración');

-- -----------------------------------------------------------------------------
-- Usuarios (login para todos los perfiles)
-- -----------------------------------------------------------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL DEFAULT '',
  `role_id` int unsigned NOT NULL,
  `phone` varchar(64) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `active` tinyint NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `users_role_fk` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- Contactos (formulario de contacto del sitio)
-- -----------------------------------------------------------------------------
DROP TABLE IF EXISTS `contacts`;
CREATE TABLE `contacts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(64) DEFAULT NULL,
  `message` text NOT NULL,
  `status` enum('nuevo','leido','respondido','archivado') NOT NULL DEFAULT 'nuevo',
  `admin_notes` text,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `status` (`status`),
  KEY `created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- Solicitudes (cotizaciones, calculadora, formularios por división)
-- -----------------------------------------------------------------------------
DROP TABLE IF EXISTS `requests`;
CREATE TABLE `requests` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `source` varchar(64) NOT NULL DEFAULT 'contacto',
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(64) DEFAULT NULL,
  `body` text,
  `service_slug` varchar(64) DEFAULT NULL,
  `status` enum('nuevo','en_proceso','cotizado','cerrado') NOT NULL DEFAULT 'nuevo',
  `assigned_to_id` int unsigned DEFAULT NULL,
  `admin_notes` text,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `status` (`status`),
  KEY `source` (`source`),
  KEY `created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- Servicios (contenido editable por admin, opcional: sitio puede usar constants)
-- -----------------------------------------------------------------------------
DROP TABLE IF EXISTS `services`;
CREATE TABLE `services` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `slug` varchar(64) NOT NULL,
  `title` varchar(255) NOT NULL,
  `short_title` varchar(128) NOT NULL DEFAULT '',
  `description` text,
  `long_description` text,
  `icon` varchar(32) DEFAULT NULL,
  `order_index` int NOT NULL DEFAULT 0,
  `active` tinyint NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `services` (`slug`, `title`, `short_title`, `description`, `icon`, `order_index`) VALUES
('arquitectura-construccion', 'Arquitectura y Construcción', 'Arquitectura', 'Construcción de viviendas, edificios comerciales e industriales con los más altos estándares. Diseño y ejecución llave en mano con garantía de calidad y plazos cumplidos.', 'building', 1),
('ingenieria', 'Ingeniería', 'Ingeniería', 'Proyectos residenciales, comerciales e industriales llave en mano. Estructuras metálicas y hormigón. Cálculo estructural, direcciones de obra y supervisión técnica por profesionales matriculados.', 'engineering', 2),
('refrigeracion', 'Refrigeración y Climatización', 'Climatización', 'Aire acondicionado central y split, ventilación industrial, sistemas VRV y mantenimiento preventivo. Soluciones HVAC para industria, comercio y hogar con eficiencia energética.', 'snowflake', 3),
('viviendas', 'Viviendas Prefabricadas', 'Viviendas', 'Casas modulares de alta calidad. Construcción en 60-90 días. Diseños personalizados, eficiencia energética y financiación disponible. Ideal para vivienda definitiva o ampliación.', 'home', 4),
('solucion-integral', 'Mantenimiento Integral', 'Mantenimiento', 'Servicios preventivos y correctivos 24/7. Termografía, protocolos de medición y reparaciones de emergencia. Un solo proveedor para todas sus instalaciones.', 'wrench', 5),
('soluciones-electricas', 'Instalaciones Eléctricas', 'Electricidad', 'Subestaciones hasta 132kV, media y baja tensión. Normativas AEA 90364, IRAM 2071. Tableros, automatización e ingenieros matriculados para proyectos certificados.', 'zap', 6);

-- -----------------------------------------------------------------------------
-- Proyectos (proyectos destacados, editables por admin)
-- -----------------------------------------------------------------------------
DROP TABLE IF EXISTS `projects`;
CREATE TABLE `projects` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `slug` varchar(128) NOT NULL,
  `description` text,
  `image_url` varchar(512) DEFAULT NULL,
  `division_slug` varchar(64) DEFAULT NULL,
  `project_date` date DEFAULT NULL,
  `order_index` int NOT NULL DEFAULT 0,
  `active` tinyint NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `division_slug` (`division_slug`),
  KEY `active` (`active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- Blog / noticias
-- -----------------------------------------------------------------------------
DROP TABLE IF EXISTS `blog_posts`;
CREATE TABLE `blog_posts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `slug` varchar(128) NOT NULL,
  `excerpt` text,
  `content` longtext,
  `image_url` varchar(512) DEFAULT NULL,
  `published_at` datetime DEFAULT NULL,
  `active` tinyint NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`),
  KEY `active` (`active`),
  KEY `published_at` (`published_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- Configuración del sitio (key-value, editable por admin)
-- -----------------------------------------------------------------------------
DROP TABLE IF EXISTS `site_config`;
CREATE TABLE `site_config` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `config_key` varchar(64) NOT NULL,
  `config_value` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `config_key` (`config_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `site_config` (`config_key`, `config_value`) VALUES
('name', 'EMPRENOR'),
('legalName', 'RM INTERNATIONAL GROUP SAS'),
('tagline', 'Construimos tus sueños con excelencia y profesionalismo'),
('description', 'Más de 15 años de experiencia en construcción y servicios en el NOA. Soluciones integrales: construcción, remodelación, instalaciones eléctricas, sanitarias y de gas; viviendas prefabricadas; obras industriales, hospitales, escuelas, laboratorios; barrios privados y urbanizaciones; obras viales, pavimentos, asfaltos y alumbrado público. Cobertura en Salta, Jujuy, Tucumán y Formosa.'),
('url', 'https://www.emprenor.com'),
('cuit', '30-71603601-0'),
('email', 'info@emprenor.com.ar'),
('emailAlt', 'info@emprenor.com'),
('phone', '+54 9 11 2758-6521'),
('phoneRaw', '5491127586521'),
('whatsapp', '5491127586521'),
('whatsappUrl', 'https://wa.me/5491127586521'),
('schedule', 'Lun-Vie: 8:00-18:00 | Sáb: 9:00-13:00'),
('emergency', 'Emergencias 24/7'),
('address', 'Ituzaingó 920, Salta Capital, Argentina');

-- -----------------------------------------------------------------------------
-- Oficinas / sedes
-- -----------------------------------------------------------------------------
DROP TABLE IF EXISTS `offices`;
CREATE TABLE `offices` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `city` varchar(128) NOT NULL,
  `address` varchar(255) NOT NULL,
  `zip` varchar(32) DEFAULT NULL,
  `phone` varchar(64) DEFAULT NULL,
  `order_index` int NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `offices` (`city`, `address`, `zip`, `phone`, `order_index`) VALUES
('Salta Capital', 'Ituzaingó 920', 'CP 4400', '+54 9 11 2758-6521', 1),
('Tartagal, Salta', 'Ituzaingó 1279', 'CP 4560', '+54 9 11 2758-6521', 2),
('Campamento Vespucio, Salta', 'Av. Casiano Casas S/N', '', '+54 9 387 352-2920', 3),
('San Miguel de Tucumán', 'San Martín de Porres 1040', 'Tucumán, Argentina', '+54 9 11 2758-6521', 4),
('CABA', 'Maipú 566', 'CP 1606', '+54 9 11 2758-6521', 5);

SET FOREIGN_KEY_CHECKS = 1;

-- =============================================================================
-- FIN. Después de ejecutar:
-- 1. Configurar en el hosting las variables: DB_HOST, DB_USER, DB_PASSWORD, DB_NAME
-- 2. Desplegar la aplicación
-- 3. Ir a /login/setup y crear el primer usuario administrador
-- =============================================================================

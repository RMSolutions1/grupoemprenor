-- =============================================================================
-- GRUPO EMPRENOR - Esquema para Neon (PostgreSQL)
-- Ejecutar en el SQL Editor de Neon: https://console.neon.tech
-- Luego en Vercel configurar: DATABASE_URL (o POSTGRES_URL) y JWT_SECRET
-- Crear primer admin en: /login/setup
-- =============================================================================

-- Orden de DROP (dependencias primero)
DROP TABLE IF EXISTS blog_posts CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS services CASCADE;
DROP TABLE IF EXISTS site_config CASCADE;
DROP TABLE IF EXISTS offices CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS contacts CASCADE;
DROP TABLE IF EXISTS requests CASCADE;
DROP TABLE IF EXISTS roles CASCADE;

CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(32) NOT NULL UNIQUE,
  name VARCHAR(64) NOT NULL
);

INSERT INTO roles (slug, name) VALUES
  ('cliente', 'Cliente'),
  ('proveedor', 'Proveedor'),
  ('empleado', 'Empleado'),
  ('empresa', 'Empresa'),
  ('administracion', 'Administración');

-- Usuarios
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL DEFAULT '',
  role_id INTEGER NOT NULL REFERENCES roles(id),
  phone VARCHAR(64),
  company_name VARCHAR(255),
  active SMALLINT NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role_id);

-- Contactos
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(64),
  message TEXT NOT NULL,
  status VARCHAR(32) NOT NULL DEFAULT 'nuevo' CHECK (status IN ('nuevo','leido','respondido','archivado')),
  admin_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_contacts_status ON contacts(status);
CREATE INDEX idx_contacts_created ON contacts(created_at DESC);

-- Solicitudes (para uso futuro)
CREATE TABLE requests (
  id SERIAL PRIMARY KEY,
  source VARCHAR(64) NOT NULL DEFAULT 'contacto',
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(64),
  body TEXT,
  service_slug VARCHAR(64),
  status VARCHAR(32) NOT NULL DEFAULT 'nuevo' CHECK (status IN ('nuevo','en_proceso','cotizado','cerrado')),
  assigned_to_id INTEGER,
  admin_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Trigger para updated_at (opcional)
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER users_updated BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER contacts_updated BEFORE UPDATE ON contacts FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER requests_updated BEFORE UPDATE ON requests FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Servicios
CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(64) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  short_title VARCHAR(128) NOT NULL DEFAULT '',
  description TEXT,
  long_description TEXT,
  icon VARCHAR(32),
  order_index INTEGER NOT NULL DEFAULT 0,
  active SMALLINT NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO services (slug, title, short_title, description, icon, order_index) VALUES
  ('arquitectura-construccion', 'Arquitectura y Construcción', 'Arquitectura', 'Construcción de viviendas, edificios comerciales e industriales con los más altos estándares. Diseño y ejecución llave en mano con garantía de calidad y plazos cumplidos.', 'building', 1),
  ('ingenieria', 'Ingeniería', 'Ingeniería', 'Proyectos residenciales, comerciales e industriales llave en mano. Estructuras metálicas y hormigón. Cálculo estructural, direcciones de obra y supervisión técnica por profesionales matriculados.', 'engineering', 2),
  ('refrigeracion', 'Refrigeración y Climatización', 'Climatización', 'Aire acondicionado central y split, ventilación industrial, sistemas VRV y mantenimiento preventivo. Soluciones HVAC para industria, comercio y hogar con eficiencia energética.', 'snowflake', 3),
  ('viviendas', 'Viviendas Prefabricadas', 'Viviendas', 'Casas modulares de alta calidad. Construcción en 60-90 días. Diseños personalizados, eficiencia energética y financiación disponible. Ideal para vivienda definitiva o ampliación.', 'home', 4),
  ('solucion-integral', 'Mantenimiento Integral', 'Mantenimiento', 'Servicios preventivos y correctivos 24/7. Termografía, protocolos de medición y reparaciones de emergencia. Un solo proveedor para todas sus instalaciones.', 'wrench', 5),
  ('soluciones-electricas', 'Instalaciones Eléctricas', 'Electricidad', 'Subestaciones hasta 132kV, media y baja tensión. Normativas AEA 90364, IRAM 2071. Tableros, automatización e ingenieros matriculados para proyectos certificados.', 'zap', 6);

-- Proyectos
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(128) NOT NULL,
  description TEXT,
  image_url VARCHAR(512),
  division_slug VARCHAR(64),
  project_date DATE,
  order_index INTEGER NOT NULL DEFAULT 0,
  active SMALLINT NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Blog
CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(128) NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT,
  image_url VARCHAR(512),
  published_at TIMESTAMPTZ,
  active SMALLINT NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Configuración del sitio
CREATE TABLE site_config (
  id SERIAL PRIMARY KEY,
  config_key VARCHAR(64) NOT NULL UNIQUE,
  config_value TEXT
);

INSERT INTO site_config (config_key, config_value) VALUES
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

-- Oficinas
CREATE TABLE offices (
  id SERIAL PRIMARY KEY,
  city VARCHAR(128) NOT NULL,
  address VARCHAR(255) NOT NULL,
  zip VARCHAR(32),
  phone VARCHAR(64),
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO offices (city, address, zip, phone, order_index) VALUES
  ('Salta Capital', 'Ituzaingó 920', 'CP 4400', '+54 9 11 2758-6521', 1),
  ('Tartagal, Salta', 'Ituzaingó 1279', 'CP 4560', '+54 9 11 2758-6521', 2),
  ('Campamento Vespucio, Salta', 'Av. Casiano Casas S/N', '', '+54 9 387 352-2920', 3),
  ('San Miguel de Tucumán', 'San Martín de Porres 1040', 'Tucumán, Argentina', '+54 9 11 2758-6521', 4),
  ('CABA', 'Maipú 566', 'CP 1606', '+54 9 11 2758-6521', 5);

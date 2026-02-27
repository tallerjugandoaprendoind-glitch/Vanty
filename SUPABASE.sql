-- ═══════════════════════════════════════════════════════════
--  VANTY — SUPABASE SQL
--  Copia y pega esto en el SQL Editor de tu Supabase
-- ═══════════════════════════════════════════════════════════

-- ── TABLA: centros ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS centros (
  id                   UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre               TEXT NOT NULL,
  responsable          TEXT NOT NULL DEFAULT '',
  email                TEXT NOT NULL DEFAULT '',
  telefono             TEXT DEFAULT '',
  plan                 TEXT DEFAULT 'mensual' CHECK (plan IN ('mensual','piloto')),
  estado               TEXT DEFAULT 'pendiente' CHECK (estado IN ('activo','pendiente','inactivo','prueba')),
  notas                TEXT DEFAULT '',
  fecha_inicio         DATE DEFAULT CURRENT_DATE,
  fecha_proximo_pago   DATE,
  created_at           TIMESTAMPTZ DEFAULT NOW()
);

-- ── TABLA: pagos ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS pagos (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  centro_id   UUID REFERENCES centros(id) ON DELETE CASCADE,
  monto       NUMERIC NOT NULL DEFAULT 250,
  tipo        TEXT DEFAULT 'mensual' CHECK (tipo IN ('primer_mes','mensual','otro')),
  metodo      TEXT DEFAULT 'yape' CHECK (metodo IN ('yape','plin','transferencia','efectivo','otro')),
  fecha       DATE DEFAULT CURRENT_DATE,
  referencia  TEXT DEFAULT '',
  confirmado  BOOLEAN DEFAULT TRUE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ── ROW LEVEL SECURITY ─────────────────────────────────────
-- Solo usuarios autenticados (admin Vanty) pueden ver y editar

ALTER TABLE centros ENABLE ROW LEVEL SECURITY;
ALTER TABLE pagos   ENABLE ROW LEVEL SECURITY;

-- Política: solo auth users
CREATE POLICY "auth_only_centros"
  ON centros FOR ALL
  USING (auth.role() = 'authenticated');

CREATE POLICY "auth_only_pagos"
  ON pagos FOR ALL
  USING (auth.role() = 'authenticated');

-- ── INSERTAR PRIMER CENTRO (Jugando Aprendo) ───────────────
INSERT INTO centros (nombre, responsable, email, telefono, plan, estado, notas, fecha_inicio)
VALUES (
  'Jugando Aprendo',
  'Directora del Centro',
  'contacto@jugandoaprendo.pe',
  '+51 999 000 001',
  'mensual',
  'activo',
  'Primer centro aliado de Vanty 💜 — Lima, Perú',
  '2026-02-01'
);

-- ═══════════════════════════════════════════════════════════
--  INSTRUCCIONES PARA EL ADMIN
-- ═══════════════════════════════════════════════════════════
--
--  1. Ve a Supabase → Authentication → Users
--  2. Crea un usuario con tu email y contraseña
--  3. Ese email y contraseña son los que usas para entrar
--     a vanty.app/admin
--
--  Con eso ya puedes:
--  ✅ Agregar centros/clientes
--  ✅ Registrar pagos (Yape, Plin, transferencia)
--  ✅ Al confirmar pago → centro se activa automáticamente
--  ✅ Activar/desactivar centros manualmente
--  ✅ Ver cuántos días le quedan a cada centro
--
-- ═══════════════════════════════════════════════════════════

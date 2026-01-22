# Технологический стек и хостинг (MVP → рост)

## 0) Контекст и допущения (MVP)
- **Приложение**: многопользовательский визуальный редактор онтологии/“big picture”.
- **Роли**: владелец бизнеса/визионер.
- **Совместная работа**: **single-writer** (1 редактирует), **multi-viewer realtime** (остальные видят изменения без F5).
- **Хостинг**: **VPS + Docker**.
- **БД**: **managed PostgreSQL**.

## 1) Рекомендованный стек (SOTA по умолчанию)

### Frontend
- **Next.js (App Router) + TypeScript**
- **UI**: Tailwind CSS (опционально shadcn/ui для ускорения)
- **Состояния/запросы**: TanStack Query
- **DnD**: `dnd-kit`
- **Граф/связи (следующий этап)**: React Flow (когда zoom in/out и связи станут “центром” UI)

### Backend
- **Node.js + TypeScript**
- **Фреймворк**: NestJS (структура/DI) или Fastify (легче). Для MVP рекомендую **NestJS**.
- **API**: REST + OpenAPI (Swagger)
- **Realtime**: **WebSocket** (events broadcast по `workspaceId`)

### Database
- **managed PostgreSQL**
- **DB layer**: Prisma (быстро/безопасно для MVP)

### Инфра (VPS + Docker)
- **Reverse proxy + TLS**: Caddy (простота) или Traefik (гибкость). Для MVP рекомендую **Caddy**.
- **Контейнеры**: `frontend`, `backend` (+ опционально `redis` позже)
- **Миграции**: выполняются при деплое контролируемо (one-shot job)
- **Бэкапы**: у managed Postgres обычно есть встроенные; дополнительно — регулярный `pg_dump` в S3‑совместимое хранилище (по желанию)

## 2) Что выбрать прямо сейчас (чтобы двигаться)

### Managed Postgres
Требования:
- доступ по TLS
- возможность создать read-only пользователя (для аналитики позже)
- понятные бэкапы и point-in-time recovery (желательно)

### VPS
Требования:
- нормальная сеть/latency
- snapshots
- минимум 2 vCPU / 4 GB RAM для MVP

## 3) Дорожная карта роста (без смены стека)
- **MVP**: REST команды + WS события, single-writer locking.
- **Следующий шаг**: presence, locks, аудит изменений.
- **Дальше**: полноценная совместная правка (CRDT/OT) — только если появится потребность.


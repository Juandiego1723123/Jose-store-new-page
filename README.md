# Jose Store

> Plataforma web de comercio electrónico para la presentación y gestión de productos de moda y accesorios.

---

## Índice

- [Descripción](#-descripción)
- [Características](#-características)
- [Categorías](#-categorías)
- [Tecnologías](#-tecnologías)
- [Arquitectura del proyecto](#-arquitectura-del-proyecto)
- [Estructura de archivos](#-estructura-de-archivos)
- [Flujo del usuario](#-flujo-del-usuario)
- [Instalación](#-instalación)
- [Despliegue](#-despliegue)
- [Estado del proyecto](#-estado-del-proyecto)
- [Autor](#-autor)

---

## Descripción

**Jose Store** es una plataforma web desarrollada para ofrecer una experiencia de compra digital enfocada en productos de moda y accesorios.

El proyecto cuenta con un catálogo organizado por categorías, páginas individuales de productos y un sistema de carrito de compras desarrollado mediante JavaScript.

La aplicación está construida utilizando tecnologías web estándar y está preparada para su despliegue mediante **Vercel**.

---

## Características

- Catálogo de productos.
- Navegación por categorías.
- Página individual de cada producto.
- Sistema de carrito de compras.
- Selección y visualización de productos.
- Interfaz adaptable a diferentes dispositivos.
- Organización de productos mediante JavaScript.
- Recursos multimedia para productos.
- Página de soporte.
- Configuración preparada para despliegue en Vercel.

---

## Categorías

```text
                    ┌─────────────────────┐
                    │      JOSE STORE     │
                    └──────────┬──────────┘
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
        ┌──────────┐      ┌──────────┐      ┌──────────┐
        │   Ropa   │      │ Zapatos  │      │  Relojes │
        └──────────┘      └──────────┘      └──────────┘
             │                 │                 │
             └─────────────────┼─────────────────┘
                               │
                               ▼
                     ┌──────────────────┐
                     │ Detalle producto │
                     └────────┬─────────┘
                              │
                              ▼
                     ┌──────────────────┐
                     │ Carrito de compra│
                     └──────────────────┘

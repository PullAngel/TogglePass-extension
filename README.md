# TogglePass

TogglePass is a Chromium-based browser extension that allows users to temporarily reveal and hide password fields in a controlled, reversible, and non-invasive way.

The project started as a practical solution to a common usability issue: websites that do not provide a "show password" button. Instead of manually opening DevTools and changing `type="password"` to `type="text"`, TogglePass automates the process through a browser extension while maintaining a clean and predictable user experience.

Beyond its utility, the project serves as a learning platform for browser extension development, software testing, Git/GitHub workflows, UI/UX design, and security-conscious engineering.

## Features

* Toggle password visibility on the active tab
* Reversible behavior
* Manifest V3 compatible
* Chrome and Brave support
* Lightweight and dependency-free
* No password storage or transmission

## Status

🚧 MVP completed and functional.

Current implementation:

* Password visibility toggle
* Popup-based activation
* Active-tab operation
* Basic extension icons

Planned improvements:

* Keyboard shortcuts
* Improved UI/UX
* Dynamic icon states
* Context menu integration
* Enhanced QA documentation
* Chrome Web Store publication

## Supported Browsers

* Google Chrome
* Brave Browser

## Project Structure

```text
/assets
    Extension icons and static resources

/docs
    Architecture, requirements and project documentation

/src
    Source code for content scripts, popup and background logic

manifest.json
    Extension manifest (Manifest V3)
```

## Security Principles

TogglePass is intentionally designed as a local visibility utility.

The extension:

* Does not store passwords
* Does not transmit credentials
* Does not collect user information
* Does not synchronize data remotely
* Does not modify authentication workflows

Its only purpose is to temporarily change the visual representation of password fields on the active page.

## Project Goals

This repository is also maintained as a portfolio project demonstrating:

* QA-oriented development practices
* Browser extension architecture
* Git and GitHub workflows
* Documentation-driven development
* Security-aware software design

## Roadmap

See:

* ROADMAP.md
* BACKLOG.md
* CLAUDE.md

#==========================
Español:
#=========================

# TogglePass

TogglePass es una extensión para navegadores basados en Chromium que permite mostrar y ocultar temporalmente campos de contraseña de forma controlada, reversible y no invasiva.

El proyecto nació como una solución práctica a un problema de usabilidad muy común: sitios web que no ofrecen un botón para visualizar la contraseña ingresada. En lugar de abrir manualmente las DevTools y modificar `type="password"` por `type="text"`, TogglePass automatiza ese proceso mediante una extensión de navegador manteniendo un comportamiento predecible y seguro.

Además de su utilidad práctica, el proyecto funciona como plataforma de aprendizaje para desarrollo de extensiones, testing de software, flujos de trabajo con Git/GitHub, diseño de experiencia de usuario e ingeniería orientada a la seguridad.

## Características

* Alternar visibilidad de contraseñas en la pestaña activa
* Comportamiento reversible
* Compatible con Manifest V3
* Soporte para Chrome y Brave
* Ligero y sin dependencias externas
* No almacena ni transmite contraseñas

## Estado

🚧 MVP completado y funcional.

Implementado actualmente:

* Mostrar/ocultar contraseñas
* Activación mediante popup
* Operación sobre la pestaña activa
* Íconos básicos

Mejoras planificadas:

* Atajos de teclado
* Mejora de interfaz y experiencia de usuario
* Estados visuales dinámicos
* Integración con menú contextual
* Mayor documentación de QA
* Publicación en Chrome Web Store

## Navegadores compatibles

* Google Chrome
* Brave Browser

## Estructura del proyecto

```text
/assets
    Íconos y recursos estáticos

/docs
    Arquitectura, requerimientos y documentación

/src
    Código fuente de content scripts, popup y lógica de fondo

manifest.json
    Manifiesto de la extensión (Manifest V3)
```

## Principios de seguridad

TogglePass está diseñado intencionalmente como una utilidad local de visualización.

La extensión:

* No almacena contraseñas
* No transmite credenciales
* No recopila información del usuario
* No sincroniza datos remotamente
* No modifica flujos de autenticación

Su único propósito es cambiar temporalmente la representación visual de los campos de contraseña en la página activa.

## Objetivos del proyecto

Este repositorio también se mantiene como proyecto de portafolio para demostrar:

* Prácticas de desarrollo orientadas a QA
* Arquitectura de extensiones de navegador
* Uso de Git y GitHub
* Desarrollo guiado por documentación
* Diseño de software con enfoque en seguridad

## Hoja de ruta

Ver:

* ROADMAP.md
* BACKLOG.md
* CLAUDE.md


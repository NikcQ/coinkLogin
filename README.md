# CoinkApp

Prueba tecnica para la empresa Coink.

## ¿Qué se dejó por fuera?

Por cuestiones de tiempo, se decidió priorizar funcionalidad por encima de estilo, siempre es preferible que el cliente vea algo que funcione.

Se dejó por fuera:

- Colores Scss customizados
- Implementacion de API:
  PAra implementacion, se crearia un boton para importar datos de la API, estos datos se pasaria a el formulario de Login y se poblaria el formulario con esos datos.
- Validacion extra de match de contraseña
- Dark Mode
- Funcionalidad del teclado implementado, aunque la tecla verde de siguiente tiene su validacion correcta y el input field del numero tiene validacion de caracteres.

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Install Ionic

```bash
  npm install -g @ionic/cli
```

Go to the project directory

```bash
  cd .\coinkApp\
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  ionic serve
```

## Build app

Build app

```bash
  ionic build android
```

```bash
  ionic cap open android
```

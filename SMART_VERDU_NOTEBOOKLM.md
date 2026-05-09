# Smart Verdu - Documentacion maestra para NotebookLM

Fecha de documentacion: 2026-05-09

Este documento resume la vision, el estado actual, la arquitectura, los archivos, el flujo de trabajo, el deploy y los proximos pasos del proyecto Smart Verdu. Esta pensado para ser cargado en Google NotebookLM como fuente principal de contexto.

---

## 1. Resumen ejecutivo

Smart Verdu es una web app para comercios de cercania, comenzando por verdulerias. El objetivo inicial no es crear una tienda online enorme, sino una demo comercial funcional que permita mostrar valor rapido:

- Catalogo de productos.
- Carrito de compras.
- Cantidades y total dinamico.
- Pedido final por WhatsApp.
- Deploy online con Vercel.

La vision grande es construir una infraestructura digital de crecimiento para el retail de cercania: un sistema que ayude al comercio a vender mas, organizar pedidos, reducir desperdicio, tomar decisiones con datos y eventualmente usar IA para recomendaciones, recetas y gestion de stock.

La prioridad actual es construir una version vendible, simple y entendible, sin sobreingenieria.

---

## 2. Objetivo personal del creador

El objetivo del proyecto no es solo tener una app hecha por IA. El objetivo es aprender a construirla con control real sobre carpetas, archivos, logica y decisiones tecnicas.

Forma de trabajo buscada:

- El humano decide la arquitectura.
- La IA escribe codigo puntual cuando se le pide.
- Cada cambio debe entenderse antes de avanzar.
- No pedir "haceme una app completa".
- Pedir piezas pequenas: componente, tipo, contexto, funcion, pantalla, flujo.
- Programar con urgencia comercial, pero sin perder comprension.

Condicion inicial importante: el proyecto nace con urgencia y sin presupuesto. Por eso se prioriza una demo que pueda venderse rapido antes que una arquitectura perfecta.

---

## 3. Vision del producto

Smart Verdu apunta a ser un sistema operativo simple para comercios de barrio.

### Portal del cliente

El cliente ve productos, agrega al carrito y envia el pedido por WhatsApp. En una version futura podria recibir sugerencias inteligentes:

- "Tenes tomate y berenjena, te falta queso para una receta."
- "Con estos productos podes hacer una tarta."
- "Este producto combina con lo que ya agregaste."

### Panel del dueno

El dueno podria administrar productos, precios, stock y pedidos. En una version posterior podria tener:

- Productos mas vendidos.
- Horarios de mayor demanda.
- Alertas de stock.
- Reportes diarios.
- Recomendaciones de ofertas.

### IA futura

La IA no entra primero. Entra cuando ya existe una base comercial funcional.

Usos posibles:

- Recomendaciones de ingredientes.
- Recetas segun carrito.
- Sugerencias para liquidar stock.
- Analisis de ventas.
- Consultor de negocio basado en datos reales.

---

## 4. Propuesta de valor comercial

No vender como "pagina web".

Vender como:

"Un sistema simple que toma pedidos por WhatsApp, organiza el carrito del cliente y profesionaliza la verduleria."

Dolores que resuelve:

- Tiempo perdido tomando pedidos manualmente.
- Pedidos desordenados por mensajes sueltos.
- Falta de imagen profesional.
- Dificultad para mostrar productos y precios actualizados.
- Futuro desperdicio por productos que no rotan.
- Falta de datos para decidir que comprar o promocionar.

Frase corta de venta:

"Te armo un catalogo online con carrito para que tus clientes pidan por WhatsApp de forma ordenada."

---

## 5. Alcance actual del MVP

El MVP actual busca validar el flujo basico:

1. El cliente entra a la web.
2. Ve productos destacados.
3. Agrega productos al carrito.
4. Cambia cantidades desde el carrito.
5. Ve el total.
6. Finaliza el pedido por WhatsApp.

No incluye todavia:

- Base de datos real.
- Login de dueno.
- Panel admin.
- Pagos online.
- Pedidos guardados en servidor.
- IA.
- Multi-tenant.
- Docker/VPS.

Estas partes son futuras.

---

## 6. Estado actual del proyecto

### Ya existe

- Proyecto Next.js creado.
- TypeScript activo.
- Tailwind CSS activo.
- App Router de Next.js.
- Git y GitHub configurados.
- Deploy en Vercel configurado.
- Pagina principal con hero y productos destacados.
- Datos mock de productos.
- Tipo `Product`.
- Tipo `CartItem`.
- Componente `ProductCard`.
- Componente `Header`.
- Componente `CartSidebar`.
- Contexto global `CartContext`.
- Agregar productos al carrito.
- Quitar productos del carrito.
- Aumentar y disminuir cantidades.
- Total dinamico.
- Persistencia del carrito con `localStorage`.
- Link de checkout por WhatsApp.

### Estado tecnico verificado

- `npm run lint` pasa con warnings de imagenes.
- `npm run build` pasa correctamente.
- Los warnings actuales de `<img>` no rompen la app.

### Dato importante pendiente

En `components/CartSidebar.tsx` existe un placeholder:

```ts
const WHATSAPP_PHONE = "5490000000000";
```

Hay que reemplazarlo por el numero real de WhatsApp del negocio, con formato internacional, sin espacios ni simbolos.

Ejemplo para Argentina:

```ts
const WHATSAPP_PHONE = "549CODIGOAREANUMERO";
```

---

## 7. Stack tecnico actual

### Frontend

- Next.js 16.2.6
- React 19.2.4
- TypeScript
- Tailwind CSS 4
- App Router

### Estado

- React Context API
- `useState`
- `useEffect`
- `localStorage`

### Deploy

- GitHub como repositorio remoto.
- Vercel conectado al repo.
- Cada `git push` actualiza la web online.

### Scripts disponibles

Archivo: `package.json`

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```

Comandos:

```bash
npm run dev
npm run lint
npm run build
npm run start
```

---

## 8. Estructura de carpetas actual

```txt
smart-verdu/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    CartSidebar.tsx
    Header.tsx
    ProductCard.tsx
  context/
    CartContext.tsx
  data/
    products.ts
  types/
    cart.ts
    product.ts
  public/
  package.json
  next.config.ts
  tsconfig.json
  README.md
  SMART_VERDU_NOTEBOOKLM.md
```

### Responsabilidad de cada carpeta

`app/`

Contiene las rutas y layout principal de Next.js App Router.

`components/`

Contiene piezas visuales reutilizables.

`context/`

Contiene estado global compartido. Hoy maneja el carrito.

`data/`

Contiene datos mock temporales. Luego se reemplazara por Supabase.

`types/`

Contiene definiciones TypeScript. Sirve para que los datos tengan estructura clara.

`public/`

Contiene archivos estaticos como imagenes locales. Futuramente conviene poner imagenes de productos aca o usar storage.

---

## 9. Archivos principales y que hace cada uno

### `app/layout.tsx`

Define el layout raiz de la aplicacion.

Responsabilidades:

- Define metadata basica.
- Setea `lang="es"`.
- Envuelve toda la app con `CartProvider`.

Esto permite que cualquier componente dentro de la app pueda acceder al carrito global.

### `app/page.tsx`

Es la pagina principal `/`.

Responsabilidades:

- Renderiza `Header`.
- Renderiza `CartSidebar`.
- Renderiza hero principal.
- Renderiza productos usando `products.map`.
- Usa `ProductCard` para cada producto.

Concepto importante:

```tsx
{products.map((product) => (
  <ProductCard key={product.id} product={product} />
))}
```

Esto significa: por cada producto del array, crear una tarjeta visual.

### `types/product.ts`

Define la forma de un producto:

```ts
export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}
```

### `types/cart.ts`

Define un item del carrito:

```ts
import { Product } from "./product";

export interface CartItem extends Product {
    quantity: number;
}
```

Un `CartItem` tiene todo lo de `Product` mas `quantity`.

### `data/products.ts`

Contiene productos falsos para desarrollar rapido:

- Tomate.
- Banana.
- Lechuga.

Esto es mock data. Luego se reemplazara por datos reales desde Supabase.

### `components/ProductCard.tsx`

Componente visual para mostrar un producto.

Responsabilidades:

- Mostrar imagen.
- Mostrar categoria.
- Mostrar nombre.
- Mostrar precio.
- Boton "Agregar al carrito".
- Llamar a `addToCart(product)` cuando se hace click.

Es un Client Component porque usa `useCart` y eventos de click.

### `components/Header.tsx`

Componente superior.

Responsabilidades:

- Mostrar marca "Smart Verdu".
- Mostrar cantidad total de productos en carrito.

Calcula la cantidad con:

```ts
const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
);
```

### `components/CartSidebar.tsx`

Panel lateral del carrito.

Responsabilidades:

- Mostrar productos agregados.
- Mostrar cantidad por producto.
- Boton `-` para reducir cantidad.
- Boton `+` para aumentar cantidad.
- Eliminar un producto cuando la cantidad llega a 0.
- Calcular total.
- Generar link de WhatsApp.
- Mostrar boton "Finalizar pedido".

### `context/CartContext.tsx`

Estado global del carrito.

Responsabilidades:

- Crear contexto.
- Guardar `cart`.
- Exponer `addToCart`.
- Exponer `removeFromCart`.
- Persistir el carrito en `localStorage`.
- Crear custom hook `useCart`.

Conceptos importantes:

- `createContext`: crea espacio global compartido.
- `useContext`: permite leer ese contexto.
- `useState`: guarda estado.
- `useEffect`: sincroniza carrito con `localStorage`.
- `children`: representa todo lo que vive dentro del provider.

---

## 10. Flujo actual del usuario

```txt
Usuario entra a la web
  ↓
Ve Header + Hero + Productos
  ↓
Hace click en "Agregar al carrito"
  ↓
ProductCard llama a addToCart(product)
  ↓
CartContext actualiza cart
  ↓
Header actualiza contador
  ↓
CartSidebar muestra item, cantidad y subtotal
  ↓
Usuario modifica cantidad con + o -
  ↓
CartSidebar recalcula total
  ↓
Usuario toca "Finalizar pedido"
  ↓
Se abre WhatsApp con mensaje estructurado
```

---

## 11. Flujo de datos del carrito

Estado central:

```txt
CartContext
  cart
  addToCart()
  removeFromCart()
```

Componentes que consumen el carrito:

```txt
ProductCard -> usa addToCart
Header -> usa cart para contar items
CartSidebar -> usa cart, addToCart y removeFromCart
```

Persistencia:

```txt
cart cambia
  ↓
useEffect guarda en localStorage
  ↓
si se refresca la pagina
  ↓
useState inicial lee localStorage
  ↓
el carrito se recupera
```

---

## 12. Deploy en Vercel

### Flujo profesional actual

```txt
PC local
  ↓ git add / commit / push
GitHub
  ↓ deploy automatico
Vercel
  ↓
URL publica online
```

### Primera vez en Vercel

1. Entrar a Vercel.
2. Loguearse con GitHub.
3. Add New Project.
4. Seleccionar repo `smart-verdu`.
5. No cambiar configuracion si Vercel detecta Next.js.
6. Deploy.

### Para actualizar la web despues de cambios

Ejecutar:

```bash
git status
git add .
git commit -m "mensaje descriptivo"
git push
```

Ejemplo:

```bash
git add .
git commit -m "add whatsapp checkout"
git push
```

Vercel detecta el push y publica automaticamente.

### Comandos locales utiles antes de subir

```bash
npm run lint
npm run build
```

Si ambos pasan, es buena senal antes de hacer push.

### Levantar local

```bash
npm run dev
```

Luego abrir:

```txt
http://localhost:3000
```

---

## 13. Checklist de lo que ya hay

### Configuracion base

- [x] Proyecto Next.js creado.
- [x] TypeScript activo.
- [x] Tailwind activo.
- [x] App Router activo.
- [x] Git inicializado.
- [x] GitHub conectado.
- [x] Vercel conectado.
- [x] Deploy online funcionando.

### Estructura

- [x] Carpeta `components/`.
- [x] Carpeta `context/`.
- [x] Carpeta `data/`.
- [x] Carpeta `types/`.
- [x] Separacion entre UI, datos, tipos y estado.

### Producto

- [x] Tipo `Product`.
- [x] Mock data de productos.
- [x] Render dinamico con `products.map`.
- [x] Card de producto.

### Carrito

- [x] Tipo `CartItem`.
- [x] Contexto global.
- [x] `addToCart`.
- [x] `removeFromCart`.
- [x] Aumentar cantidad.
- [x] Disminuir cantidad.
- [x] Eliminar item si llega a 0.
- [x] Total dinamico.
- [x] Contador en header.
- [x] Persistencia con `localStorage`.

### Checkout

- [x] Link de WhatsApp.
- [x] Mensaje armado con productos.
- [x] Total dentro del mensaje.
- [ ] Reemplazar numero placeholder por numero real.
- [ ] Mejorar formato del mensaje.
- [ ] Evitar finalizar si carrito esta vacio.

---

## 14. Checklist urgente antes de salir a vender

Prioridad alta:

- [ ] Cambiar `WHATSAPP_PHONE` por numero real.
- [ ] Probar checkout en celular.
- [ ] Confirmar que WhatsApp abre correctamente.
- [ ] Agregar productos reales de una verduleria.
- [ ] Agregar precios realistas.
- [ ] Corregir imagenes que no carguen.
- [ ] Mejorar responsive mobile.
- [ ] Hacer que el sidebar no tape toda la experiencia en celular.
- [ ] Cambiar textos genericos por nombre de negocio demo.
- [ ] Revisar URL de Vercel.
- [ ] Hacer una demo completa de pedido.

Prioridad media:

- [ ] Agregar boton para vaciar carrito.
- [ ] Agregar campo nombre del cliente.
- [ ] Agregar campo direccion.
- [ ] Agregar campo metodo de pago.
- [ ] Agregar envio/retiro.
- [ ] Agregar categorias.
- [ ] Agregar filtro por categoria.
- [ ] Agregar buscador.

Prioridad baja para esta etapa:

- [ ] Optimizar imagenes con `next/image`.
- [ ] Reemplazar mock data por Supabase.
- [ ] Agregar login.
- [ ] Agregar admin.
- [ ] Agregar IA.

---

## 15. Checklist fase 2: panel del dueno

Objetivo: que el comerciante pueda administrar el catalogo.

- [ ] Crear ruta `/admin`.
- [ ] Crear login simple.
- [ ] Conectar Supabase.
- [ ] Crear tabla `products`.
- [ ] Listar productos desde base de datos.
- [ ] Crear producto.
- [ ] Editar producto.
- [ ] Eliminar producto.
- [ ] Cambiar precio.
- [ ] Cambiar stock.
- [ ] Subir o cambiar imagen.
- [ ] Activar/desactivar producto.

---

## 16. Checklist fase 3: base de datos Supabase

Tablas iniciales recomendadas:

- [ ] `stores`
- [ ] `categories`
- [ ] `products`
- [ ] `customers`
- [ ] `orders`
- [ ] `order_items`

Campos sugeridos para `products`:

- `id`
- `store_id`
- `category_id`
- `name`
- `description`
- `price`
- `image_url`
- `stock`
- `unit`
- `is_active`
- `created_at`
- `updated_at`

Campos sugeridos para `orders`:

- `id`
- `store_id`
- `customer_name`
- `customer_phone`
- `customer_address`
- `payment_method`
- `delivery_method`
- `total`
- `status`
- `created_at`

Estados posibles de pedido:

- `pending`
- `confirmed`
- `preparing`
- `delivered`
- `cancelled`

---

## 17. Checklist fase 4: automatizacion

Herramienta futura recomendada: n8n.

Automatizaciones posibles:

- [ ] Pedido nuevo -> aviso al dueno.
- [ ] Resumen diario de pedidos.
- [ ] Alerta de productos con bajo stock.
- [ ] Recordatorio a clientes inactivos.
- [ ] Oferta diaria automatica.
- [ ] Reporte semanal de productos mas vendidos.

---

## 18. Checklist fase 5: IA

La IA debe entrar despues del flujo comercial basico.

Funciones para cliente:

- [ ] Recomendar productos complementarios.
- [ ] Sugerir recetas segun carrito.
- [ ] Detectar ingredientes faltantes.
- [ ] Sugerir combos.
- [ ] Empujar productos con exceso de stock.

Funciones para dueno:

- [ ] Preguntar "como me fue este mes".
- [ ] Recomendar ofertas.
- [ ] Detectar productos estancados.
- [ ] Proyectar compras.
- [ ] Analizar horarios de mayor venta.

Arquitectura recomendada:

```txt
Frontend
  ↓
Route Handler / API
  ↓
AI Service
  ↓
OpenRouter / Gemini / Ollama
```

No mezclar llamadas de IA directamente dentro de componentes visuales.

---

## 19. Checklist fase 6: escalar a producto SaaS

Esto no es urgente para vender la primera version.

- [ ] Multi-tenant.
- [ ] Multiples negocios.
- [ ] Subdominios por tienda.
- [ ] Aislamiento de datos por `store_id`.
- [ ] Planes de pago.
- [ ] Suscripciones.
- [ ] Roles de usuario.
- [ ] Panel superadmin.
- [ ] Deploy en VPS.
- [ ] Docker.
- [ ] Traefik.
- [ ] Backups.

---

## 20. Conceptos aprendidos en el proyecto

### React

- Componentes.
- Props.
- Eventos con `onClick`.
- Render dinamico con `.map`.
- Estado global con Context API.
- Custom hooks.

### TypeScript

- Interfaces.
- Extender tipos con `extends`.
- Tipar props.
- Tipar arrays.

### Next.js

- App Router.
- `app/page.tsx` como home.
- `app/layout.tsx` como layout global.
- Client Components con `"use client"`.
- Hot reload / Fast Refresh.

### Git

- `git status`
- `git add`
- `git commit`
- `git push`
- GitHub como remoto.

### Deploy

- Vercel conectado a GitHub.
- Deploy automatico en cada push.

---

## 21. Warnings y detalles tecnicos conocidos

### Warning de `<img>`

Next.js recomienda usar `next/image`.

Estado actual:

- No rompe la app.
- Se puede dejar para despues.
- Es mejora de performance, no error funcional.

Archivos donde aparece:

- `components/ProductCard.tsx`
- `components/CartSidebar.tsx`

### Imagenes externas

Actualmente se usan imagenes de Unsplash. Pueden fallar, cargar lento o cambiar.

Mejoras futuras:

- Usar imagenes locales en `public/products/`.
- Usar Supabase Storage.
- Usar `next/image`.

### Sidebar fijo

El carrito esta fijo a la derecha con ancho de 350px.

Problema futuro:

- En mobile puede tapar contenido.

Solucion futura:

- Convertirlo en drawer/boton flotante.
- Abrir/cerrar carrito.
- Mostrar sidebar solo en desktop.

---

## 22. Comandos utiles

### Desarrollo local

```bash
npm run dev
```

### Ver estado de Git

```bash
git status
```

### Guardar cambios en Git

```bash
git add .
git commit -m "mensaje"
```

### Subir a GitHub y Vercel

```bash
git push
```

### Verificar calidad

```bash
npm run lint
npm run build
```

### Crear archivos

```bash
touch components/NuevoComponente.tsx
```

### Crear carpetas

```bash
mkdir nombre-carpeta
```

---

## 23. Metodo recomendado para seguir trabajando con IA

Regla principal:

No pedir "haceme todo".

Pedir tareas pequenas:

- "Creame un componente de buscador."
- "Agregame una funcion clearCart al contexto."
- "Explicame este archivo linea por linea."
- "Converti este sidebar en drawer mobile."
- "Agrega validacion para que no se pueda finalizar con carrito vacio."

Proceso por feature:

1. Definir que se quiere lograr.
2. Identificar que archivo toca.
3. Pedir una pieza pequena.
4. Leer el codigo.
5. Probar en local.
6. Hacer commit.
7. Subir a Vercel.

Regla mental:

```txt
1 feature
  ↓
1 cambio pequeno
  ↓
1 prueba
  ↓
1 commit
```

---

## 24. Guion para mostrar la demo a una verduleria

1. Abrir la web en el celular.
2. Mostrar que carga como catalogo.
3. Agregar tomate, banana y lechuga.
4. Mostrar que el carrito suma cantidades.
5. Mostrar que se puede aumentar o bajar cantidad.
6. Mostrar el total.
7. Tocar "Finalizar pedido".
8. Mostrar WhatsApp con el pedido armado.

Explicacion al comerciante:

"En vez de que el cliente te mande mensajes desordenados, entra aca, arma el pedido y te llega todo listo por WhatsApp."

Beneficio directo:

- Menos ida y vuelta.
- Menos errores.
- Mejor presentacion.
- Mas facil vender por redes.
- Se puede compartir por WhatsApp, Instagram o QR.

---

## 25. Pitch corto

Smart Verdu es un sistema simple para que verdulerias y comercios de barrio reciban pedidos online sin pagar comisiones. El cliente arma su carrito desde el celular y el pedido llega ordenado por WhatsApp. La primera version sirve para vender rapido; las siguientes versiones agregan administracion, datos, automatizaciones e inteligencia artificial para aumentar ventas y reducir desperdicio.

---

## 26. Proximas acciones recomendadas

Orden sugerido:

1. Cambiar el numero de WhatsApp.
2. Probar pedido completo en celular.
3. Agregar productos reales.
4. Mejorar visual mobile.
5. Agregar campos de cliente.
6. Agregar categorias/filtros.
7. Preparar demo de venta.
8. Reemplazar imagenes por assets confiables.
9. Crear admin simple.
10. Conectar Supabase.

---

## 27. Decision estrategica actual

La decision correcta para esta etapa es no construir todavia:

- IA avanzada.
- Dashboard complejo.
- VPS.
- Docker.
- Microservicios.
- Multi-tenant.
- Pasarela de pagos.

La decision correcta es construir:

- Demo clara.
- Flujo de pedido completo.
- Buen aspecto visual.
- WhatsApp funcionando.
- URL online.

El objetivo inmediato no es perfeccion tecnica. Es conseguir validacion comercial y eventualmente el primer cliente.


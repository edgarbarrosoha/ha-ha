<aside> 💡

**Como usarlo**: copia el prompt, rellena las secciones entre `[corchetes]` con tu contenido especifico, y pegalo completo. Las reglas de arquitectura, animacion, tipografia y narrativa visual son independientes del tema -- son el ADN del estilo que construimos en esta presentacion.

</aside>

Crea una presentacion inmersiva en Next.js (App Router) con las siguientes caracteristicas. No uses librerias de presentaciones (reveal.js, Slidev, etc.). Construye todo desde cero con React + Framer Motion + Canvas API + Tailwind CSS.

---

## IDENTIDAD VISUAL

Marca / Proyecto: [NOMBRE] Paleta: exactamente 5 colores.

- 1 color de acento primario: [#HEX]
- 1 color de acento secundario (variante clara del primario): [#HEX]
- 1 negro profundo para fondos oscuros: [#HEX]
- 1 negro/gris oscuro para texto principal: [#HEX]
- 1 blanco roto / off-white para fondos claros: [#HEX]

Tipografia: maximo 2 familias. Una para todo el contenido (4 pesos: light, regular, medium, bold) y opcionalmente una monoespaciada para datos o etiquetas tecnicas. Self-hosted en /public/fonts/ con @font-face y font-display: swap.

Regla de bold: el peso bold se reserva EXCLUSIVAMENTE para 3-5 momentos climax en toda la presentacion. El resto de la jerarquia se construye combinando light/regular/medium + variaciones de tamano + opacidad.

---

## ARQUITECTURA

Cada slide es un componente React independiente en /components/presentation/slides/. Un orquestador central (presentation.tsx) renderiza el slide actual con AnimatePresence. Un hook (use-presentation.ts) maneja el estado, navegacion por teclado, click y clicker:

- Avanzar: ArrowRight, ArrowDown, Space, PageDown, Enter
- Retroceder: ArrowLeft, ArrowUp, PageUp, Backspace
- Click: zona derecha (65%) avanza, zona izquierda (35%) retrocede

Componentes compartidos en shared-elements.tsx:

- FadeIn: wrapper de fade + drift vertical sutil (el 80% de las animaciones)
- RevealText: cada palabra aparece con stagger de 80ms
- AnimatedNumber: conteo con fisica de resorte
- BlueLine (o AccentLine): linea del color de acento que se expande con scaleX
- SlideWrapper: wrapper con motion.div para transiciones enter/exit

---

## SISTEMA DE TEMAS (3 variantes de fondo)

Definir tres Sets en el orquestador:

- DARK_SLIDES: fondo negro profundo, texto claro
- LIGHT_SLIDES: fondo off-white, texto oscuro (default)
- ACCENT_SLIDES: fondo del color de acento primario, texto blanco

Las transiciones entre fondos usan transition-colors duration-700. Los controles de navegacion y la barra de progreso adaptan su color automaticamente segun la variante.

---

## NARRATIVA VISUAL (estructura dramatica)

La presentacion NO es una secuencia plana de slides. Tiene arco narrativo:

1. APERTURA (2-3 slides oscuras): titulo + frase de bienvenida. Particulas o animacion ambiental sutil.
2. CONTEXTO (3-5 slides claras): explicacion del tema. Tipografia limpia, espacio generoso, ghost numbers como fondo decorativo.
3. PUENTE (1-2 slides oscuras): frase de transicion que conecta el contexto con la xpropuesta. Texto grande, pocas palabras.
4. CAPACIDADES (1 slide de acento): 3-4 verbos o conceptos clave que aparecen con stagger.
5. EVIDENCIA (2-3 slides claras): datos, ejemplos, comparaciones. Numeros animados, grids limpios.
6. CLIMAX 1 (1 slide de acento): la frase mas potente de la primera mitad. Tipografia enorme, bold justificado.
7. PROFUNDIDAD (5-8 slides alternando claro/oscuro): la parte tecnica o detallada. Diagramas canvas, flujos, comparaciones.
8. CLIMAX 2 (1 slide de acento): la frase emocional mas potente. Bold, tamano maximo.
9. CIERRE (2-3 slides oscuras): llamada a la accion, frase emocional final. Minimalismo extremo.

---

## ANIMACIONES -- PRINCIPIOS

- Easing: [0.25, 0.46, 0.45, 0.94] para entradas suaves (no linear, no bounce)
- Delays escalonados: los elementos dentro de cada slide entran secuencialmente (0.3s, 0.5s, 0.7s...)
- Opacidad como herramienta de jerarquia: usar /80, /60, /40, /30 para crear profundidad sin agregar colores
- Canvas para animaciones complejas (particulas, grafos, visualizaciones), DOM para texto
- requestAnimationFrame para loops de animacion en canvas
- Las animaciones deben sentirse organicas: usar sin() para respiracion, fases aleatorias para evitar sincronizacion robotica
- Flotacion: los elementos que flotan deben tener derivas lissajous (combinacion de dos sin() con frecuencias distintas en X e Y)

---

## VISUALIZACIONES CANVAS

Para cada visualizacion compleja, usar <canvas> a pantalla completa con estas reglas:

- Inicializar particulas con propiedades aleatorias (phase, speed, brightness, size)
- Usar depth (0.4-1.0) para simular profundidad: particulas mas "lejanas" son mas pequenas y tenues
- Conexiones entre elementos: curvas quadraticCurveTo con curvatura ondulante (sin(time))
- Texto en canvas: font-weight 500+, tamano 16px+, color con opacidad suficiente para proyector
- REGLA DE PROYECTOR: toda opacidad minima debe ser 0.30+ para lineas, 0.40+ para texto, 0.50+ para nodos. Los proyectores pierden contraste.

---

## TIPOGRAFIA EN SLIDES

- Titulos de seccion: text-5xl a text-8xl, font-medium, leading-none
- Frases climax: text-7xl a text-[10rem], font-bold (solo 3-5 veces en toda la presentacion)
- Subtitulos: text-xl a text-3xl, font-light, opacidad reducida (/70, /60)
- Cuerpo: text-base a text-lg, font-normal, leading-relaxed
- Etiquetas/numeros fantasma: text-6xl+, opacidad 20-30%, como fondo decorativo
- Datos/metricas: font-mono si hay familia mono, font-medium si no
- NUNCA usar bullets convencionales. Usar: numeros fantasma, grids, o iconos minimalistas.
- NUNCA mas de 40 palabras por slide. Menos es mas.
- Cada slide debe poder entenderse en 5 segundos.

---

## CONTROLES Y UI

- Barra de progreso minimalista en esquina inferior derecha
- Contador de slides discreto (ej: "12 / 28")
- Sin botones visibles de navegacion (el click y teclado son suficientes)
- Cursor: default en toda la presentacion (no pointer)

---

## CONTENIDO DE LA PRESENTACION

Tema: [DESCRIPCION DEL TEMA] Audiencia: [QUIEN VA A VER ESTO] Tono: [PROFESIONAL / INSPIRACIONAL / TECNICO / EJECUTIVO] Duracion estimada: [X MINUTOS, Y SLIDES]

Estructura narrativa: [LISTA DE SLIDES CON SU CONTENIDO, indicando cuales son dark/light/accent]

---

## REGLAS FINALES

- Cada slide es un archivo independiente. Facil de editar, reordenar o eliminar.
- El contenido va hardcodeado en cada componente (no en JSON externo).
- Self-hosted fonts, sin dependencia de CDNs.
- Optimizado para 60fps en navegador moderno.
- Desplegable en Vercel con un click.
- Debe verse espectacular tanto en pantalla como en proyector.
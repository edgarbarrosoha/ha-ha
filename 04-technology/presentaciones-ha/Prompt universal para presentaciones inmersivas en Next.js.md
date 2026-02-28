Crea una presentacion inmersiva en Next.js (App Router). No uses librerias de presentaciones (reveal.js, Slidev, etc.). Construye todo desde cero con React + Framer Motion + Canvas API + Tailwind CSS v4.

---

## INSUMOS DE MARCA

A partir de los materiales que te adjunto, extrae:

- Paleta de color (exactamente 5 colores: 1 acento primario, 1 acento secundario/claro, 1 negro profundo, 1 gris/negro para texto, 1 blanco roto para fondos claros)
- Tipografia principal (busca la familia y pesos usados; si no es identificable, propone una con caracter similar)
- Tono visual (minimalista, corporativo, creativo, institucional, etc.)

Los materiales pueden ser:

- Un archivo PPTX o PDF de referencia
- Un manual de marca / brand guidelines
- Una URL de sitio web de la marca
- Logos e iconografia
- O simplemente una descripcion verbal del estilo deseado

Si no recibo ningun material de marca, preguntame:

1. Nombre del proyecto/organizacion
2. Sector (gobierno, tecnologia, educacion, salud, cultura, etc.)
3. Adjetivos que describan la personalidad (sobrio, innovador, calido, institucional, disruptivo, elegante)
4. Colores que te gusten o que debas evitar
5. Alguna referencia visual que admires (sitio web, presentacion, marca)

Con esas respuestas, propone una paleta de 5 colores y una tipografia antes de empezar a construir. Espera mi aprobacion.

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
- AccentLine: linea del color de acento que se expande con scaleX
- SlideWrapper: wrapper con motion.div para transiciones enter/exit

Definir los colores como tokens semanticos en globals.css (@theme inline), nunca como colores directos en los componentes. Esto permite cambiar toda la paleta editando solo el CSS, sin tocar ningun componente.

---

## SISTEMA DE TEMAS (3 variantes de fondo)

Definir tres Sets en el orquestador:

- DARK_SLIDES: fondo negro profundo, texto claro
- LIGHT_SLIDES: fondo off-white, texto oscuro (default)
- ACCENT_SLIDES: fondo del color de acento primario, texto blanco

Las transiciones entre fondos usan transition-colors duration-700. Los controles adaptan su color automaticamente segun la variante.

---

## NARRATIVA VISUAL (estructura dramatica)

La presentacion NO es una secuencia plana. Tiene arco narrativo:

1. APERTURA (2-3 slides oscuras): titulo + bienvenida. Animacion ambiental sutil en canvas.
2. CONTEXTO (3-5 slides claras): explicacion del tema. Tipografia limpia, espacio generoso, numeros fantasma decorativos.
3. PUENTE (1-2 slides oscuras): frase de transicion. Texto grande, pocas palabras.
4. CAPACIDADES (1 slide de acento): 3-4 conceptos clave con stagger.
5. EVIDENCIA (2-3 slides claras): datos, comparaciones. Numeros animados, grids.
6. CLIMAX 1 (1 slide de acento): frase potente. Tipografia enorme, bold.
7. PROFUNDIDAD (5-8 slides alternando claro/oscuro): parte tecnica o detallada. Canvas, diagramas, flujos.
8. CLIMAX 2 (1 slide de acento): frase emocional. Bold, tamano maximo.
9. CIERRE (2-3 slides oscuras): llamada a la accion. Minimalismo extremo.

Si el contenido no encaja exactamente en esta estructura, adaptala, pero mantener siempre la alternancia entre tension (oscuro) y respiro (claro), con los momentos de acento como picos emocionales.

---

## ANIMACIONES -- PRINCIPIOS

- Easing: [0.25, 0.46, 0.45, 0.94] para entradas suaves. Nunca linear ni bounce.
- Delays escalonados: elementos entran secuencialmente (0.3s, 0.5s, 0.7s...)
- Opacidad como jerarquia: /80, /60, /40, /30 crean profundidad sin colores extra
- Canvas para particulas, grafos, visualizaciones. DOM para texto.
- requestAnimationFrame para loops en canvas
- Organicidad: sin() para respiracion, fases aleatorias para evitar sincronizacion robotica
- Flotacion: derivas lissajous (dos sin() con frecuencias distintas en X e Y)
- Transiciones entre slides: AnimatePresence mode="wait" con direction para saber si avanza o retrocede

---

## VISUALIZACIONES CANVAS

- Particulas con propiedades aleatorias (phase, speed, brightness, size)
- depth (0.4-1.0) para profundidad: lejanas = pequenas y tenues
- Conexiones: curvas quadraticCurveTo con curvatura ondulante
- Texto en canvas: 500+ weight, 16px+, opacidad alta
- REGLA DE PROYECTOR: opacidad minima 0.30 lineas, 0.40 texto, 0.50 nodos. Los proyectores pierden contraste drasticamente.

---

## TIPOGRAFIA

- Maximo 2 familias. Self-hosted en /public/fonts/ con font-display: swap.
- Jerarquia solo con peso + tamano + opacidad:
    - Titulos: text-5xl a text-8xl, font-medium
    - Climax: text-7xl a text-[10rem], font-bold (SOLO 3-5 veces en toda la presentacion)
    - Subtitulos: text-xl a text-3xl, font-light, opacidad /70 /60
    - Cuerpo: text-base a text-lg, font-normal, leading-relaxed
    - Numeros fantasma: text-6xl+, opacidad 20-30%, fondo decorativo
- NUNCA bullets convencionales. Usar numeros fantasma, grids o iconos.
- NUNCA mas de 40 palabras por slide.
- Cada slide debe entenderse en 5 segundos.
- Prevenir italicas: font-style: normal !important, font-synthesis: none !important

---

## CONTROLES

- Barra de progreso minimalista en esquina inferior derecha
- Contador discreto (ej: "12 / 28")
- Sin botones de navegacion visibles
- Compatible con clicker (PageDown/PageUp/Enter)
- Cursor: default en toda la presentacion

---

## CONTENIDO

Tema: [adjuntar materiales, describir el tema, o decir "te lo dare slide por slide"] Audiencia: [quien va a ver esto] Tono: [profesional / inspiracional / tecnico / ejecutivo] Duracion estimada: [X minutos, Y slides aprox]

---

## REGLAS FINALES

- Cada slide es un archivo independiente
- Contenido hardcodeado en cada componente (no JSON externo)
- Self-hosted fonts, sin CDNs
- 60fps en navegador moderno
- Desplegable en Vercel con un click
- Debe verse espectacular en pantalla Y en proyector
- Todos los colores como tokens semanticos en CSS, nunca hardcodeados en componentes
- Si adjunto un PPTX/PDF de referencia, extrae contenido y estructura pero NUNCA repliques el diseno original: el objetivo es transformarlo en algo cinematografico e inmersivo que este en otro nivel
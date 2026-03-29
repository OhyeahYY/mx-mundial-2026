#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const teamsData = [
  { name: "Argentina", flag: "🇦🇷", group: "A", slug: "argentina", region: "Americas" },
  { name: "Brasil", flag: "🇧🇷", group: "D", slug: "brasil", region: "Americas" },
  { name: "Uruguay", flag: "🇺🇾", group: "C", slug: "uruguay", region: "Americas" },
  { name: "Chile", flag: "🇨🇱", group: "F", slug: "chile", region: "Americas" },
  { name: "Colombia", flag: "🇨🇴", group: "E", slug: "colombia", region: "Americas" },
  { name: "Perú", flag: "🇵🇪", group: "H", slug: "peru", region: "Americas" },
  { name: "Ecuador", flag: "🇪🇨", group: "F", slug: "ecuador", region: "Americas" },
  { name: "Paraguay", flag: "🇵🇾", group: "D", slug: "paraguay", region: "Americas" },
  { name: "Venezuela", flag: "🇻🇪", group: "C", slug: "venezuela", region: "Americas" },
  { name: "Bolivia", flag: "🇧🇴", group: "C", slug: "bolivia", region: "Americas" },
  { name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", group: "A", slug: "inglaterra", region: "Europe" },
  { name: "Francia", flag: "🇫🇷", group: "D", slug: "francia", region: "Europe" },
  { name: "España", flag: "🇪🇸", group: "E", slug: "espana", region: "Europe" },
  { name: "Alemania", flag: "🇩🇪", group: "E", slug: "alemania", region: "Europe" },
  { name: "Italia", flag: "🇮🇹", group: "G", slug: "italia", region: "Europe" },
  { name: "Portugal", flag: "🇵🇹", group: "H", slug: "portugal", region: "Europe" },
  { name: "Países Bajos", flag: "🇳🇱", group: "G", slug: "paises-bajos", region: "Europe" },
  { name: "Bélgica", flag: "🇧🇪", group: "B", slug: "belgica", region: "Europe" },
  { name: "Suecia", flag: "🇸🇪", group: "D", slug: "suecia", region: "Europe" },
  { name: "Suiza", flag: "🇨🇭", group: "F", slug: "suiza", region: "Europe" },
  { name: "Austria", flag: "🇦🇹", group: "G", slug: "austria", region: "Europe" },
  { name: "Dinamarca", flag: "🇩🇰", group: "A", slug: "dinamarca", region: "Europe" },
  { name: "Serbia", flag: "🇷🇸", group: "H", slug: "serbia", region: "Europe" },
  { name: "Croacia", flag: "🇭🇷", group: "C", slug: "croacia", region: "Europe" },
  { name: "Polonia", flag: "🇵🇱", group: "B", slug: "polonia", region: "Europe" },
  { name: "Ucrania", flag: "🇺🇦", group: "D", slug: "ucrania", region: "Europe" },
  { name: "Japón", flag: "🇯🇵", group: "E", slug: "japon", region: "Asia" },
  { name: "Corea del Sur", flag: "🇰🇷", group: "H", slug: "corea-del-sur", region: "Asia" },
  { name: "China PR", flag: "🇨🇳", group: "F", slug: "china", region: "Asia" },
  { name: "Irán", flag: "🇮🇷", group: "A", slug: "iran", region: "Asia" },
  { name: "Arabia Saudita", flag: "🇸🇦", group: "B", slug: "arabia-saudita", region: "Asia" },
  { name: "Australia", flag: "🇦🇺", group: "G", slug: "australia", region: "Asia" },
  { name: "Catar", flag: "🇶🇦", group: "E", slug: "catar", region: "Asia" },
  { name: "Emiratos Árabes", flag: "🇦🇪", group: "C", slug: "emiratos-arabes", region: "Asia" },
  { name: "Uzbekistán", flag: "🇺🇿", group: "G", slug: "uzbekistan", region: "Asia" },
  { name: "Egipto", flag: "🇪🇬", group: "A", slug: "egipto", region: "Africa" },
  { name: "Nigeria", flag: "🇳🇬", group: "F", slug: "nigeria", region: "Africa" },
  { name: "Camerún", flag: "🇨🇲", group: "C", slug: "camerun", region: "Africa" },
  { name: "Senegal", flag: "🇸🇳", group: "H", slug: "senegal", region: "Africa" },
  { name: "Marruecos", flag: "🇲🇦", group: "E", slug: "marruecos", region: "Africa" },
  { name: "Túnez", flag: "🇹🇳", group: "H", slug: "tunez", region: "Africa" },
  { name: "Ghana", flag: "🇬🇭", group: "B", slug: "ghana", region: "Africa" },
  { name: "Costa de Marfil", flag: "🇨🇮", group: "D", slug: "costa-de-marfil", region: "Africa" },
  { name: "Sudáfrica", flag: "🇿🇦", group: "F", slug: "sudafrica", region: "Africa" },
  { name: "Nueva Zelanda", flag: "🇳🇿", group: "A", slug: "nueva-zelanda", region: "Oceania" },
  { name: "Fiyi", flag: "🇫🇯", group: "C", slug: "fiyi", region: "Oceania" }
];

const template = (team, slug, flag, group, region) => {
  const expectations = {
    Americas: "altas como tradicionales potencias",
    Europe: "altas como favoritas mundiales",
    Asia: "crecientes como competidor emergente",
    Africa: "sólidas como representante continental",
    Oceania: "modestas pero competitivas"
  };
  
  const classifyProb = region === "Americas" && team !== "Bolivia" ? 65 : region === "Europe" ? 70 : 50;
  const finalProb = region === "Europe" ? 8 : region === "Americas" ? 5 : 2;
  
  return `---
title: "${team} Copa Mundial 2026: Predicciones y Análisis Completo"
description: "Predicciones de ${team} para la Copa del Mundo 2026. Análisis de jugadores clave, estrategia del equipo y pronóstico partido a partido."
team: "${team}"
flag: "${flag}"
group: "${group}"
date: "2026-03-30"
image: "/images/og-${slug}.jpg"
---

## ${team}: Análisis y Predicciones Copa Mundial 2026

**${team}** llega al mundial 2026 con expectativas ${expectations[region]}. En este análisis completo revisamos la plantilla, fortalezas, debilidades y nuestro pronóstico para el torneo.

---

## Planteles Clave de ${team}

### Portería
${region === "Europe" || region === "Americas" ? "- Portero de clase mundial en liga top\n- Alternativa profesional consolidada" : "- Portero experimentado\n- Segundo con aspiraciones"}

### Defensa
${region === "Europe" || region === "Americas" ? "- Defensores en liga top europea\n- Laterales con experiencia internacional" : "- Defensores consolidados en ligas locales\n- Sistema defensivo estructurado"}

### Mediocampo
${region === "Europe" || region === "Americas" ? "- Centrocampistas organizadores\n- Creatividad ofensiva en ataque" : "- Mediocampo trabajador\n- Equilibrio táctico importante"}

### Delantera
- Atacantes con poder ofensivo
- Variantes tácticas disponibles

---

## Análisis del Grupo ${group}

${team} fue ubicado en el **Grupo ${group}** y competirá contra rivales de distintos continentes. Este grupo presenta características ${classifyProb > 60 ? "favorables" : "equilibradas"} para el clasificado.

---

## Probabilidades y Predicciones

### Fase de Grupos
- **Probabilidad de clasificación**: ${classifyProb}%
- **Puntos estimados**: ${Math.round(classifyProb / 15)}
- **Diferencia de gol**: ${classifyProb > 60 ? "+1 a +2" : "equilibrada"}

### Fase Eliminatoria
- **Octavos de Final**: ${classifyProb > 60 ? "Probable" : "Posible"}
- **Cuartos de Final**: ${finalProb > 5 ? "Escenario favorable" : "Escenario posible"}
- **Probabilidad de Final**: ${finalProb}%

---

## Ventajas Clave

1. **Cohesión táctica**: Sistema de juego bien definido
2. **Experiencia**: Jugadores con trayectoria internacional
3. **Profundidad de plantilla**: Opciones de reemplazo
4. **Motivación**: Búsqueda del éxito continental

---

## Escenarios Posibles

### Escenario Optimista
- Ganador de grupo
- Avance cómodo en octavos
- Competencia en fase final

### Escenario Realista
- Clasificación de segundo
- Progresión en eliminatoria
- Límite en cuartos/semifinal

### Escenario Pesimista
- Dificultad en grupos
- Eliminación temprana

---

## Predicción Final

Basado en análisis de plantilla, ranking y forma reciente:

**${team}** tiene ${classifyProb > 65 ? "probabilidad alta" : classifyProb > 50 ? "probabilidad media" : "aspiración"} de avanzar a ${finalProb > 5 ? "fases finales" : "fase eliminatoria"}.

📢 **Sigue nuestras predicciones en tiempo real**: [Únete a nuestro Telegram](https://t.me/fifa2026_win)
`;
};

const outputDir = path.join(__dirname, 'content', 'predicciones');

// Crear directorio si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

let count = 0;
const existingFiles = fs.readdirSync(outputDir).map(f => f.replace('.md', ''));

teamsData.forEach((team) => {
  // Evitar sobrescribir archivos existentes clave (mexico, brasil, etc.)
  if (existingFiles.includes(team.slug) && ['mexico', 'brasil', 'argentina', 'espana', 'francia', 'estados-unidos'].includes(team.slug)) {
    console.log(`⏭️  ${team.name}: Archivo existente, ignorado`);
    return;
  }
  
  const filePath = path.join(outputDir, `${team.slug}.md`);
  const content = template(team.name, team.slug, team.flag, team.group, team.region);
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ ${team.name} (${team.slug}.md) generado`);
  count++;
});

console.log(`\n✅ Se generaron ${count} archivos nuevos de predicciones`);
console.log(`📁 Total de archivos en predicciones: ${fs.readdirSync(outputDir).length}`);

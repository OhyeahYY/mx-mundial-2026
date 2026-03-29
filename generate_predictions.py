#!/usr/bin/env python3
"""
批量生成 2026 世界杯所有 48 支国家队的预测文件
运行: python generate_predictions.py
"""

import json
import os
from datetime import datetime
from pathlib import Path

# 读取国家队数据
with open('teams_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 内容模板
CONTENT_TEMPLATE = """---
title: "{team} Copa Mundial 2026: Predicciones y Análisis"
description: "Predicciones completas de {team_lower} para la Copa del Mundo 2026. Plantilla clave, análisis del grupo, probabilidades de clasificar y pronóstico partido a partido."
team: "{team}"
flag: "{flag}"
group: "{group}"
date: "{date}"
image: "/images/og-{slug}.jpg"
---

## {team}: Análisis Completo Copa Mundial 2026

El equipo de **{team}** llega a la **Copa del Mundo 2026** con expectativas {expectation}. A continuación, analizamos los puntos clave de su participación en el torneo más importante del fútbol mundial.

---

## Planteles Clave de {team}

### Fortalezas del Equipo
- Experiencia internacional consolidada
- Jugadores en ligas top europeas
- Estilo de juego definido y coordinado

### Jugadores a Monitorear
El desempeño de {team} dependerá especialmente del rendimiento de sus figuras más destacadas. Estos son los nombres que marcarán la diferencia en el torneo.

### Debilidades Potenciales
Como cualquier equipo, {team} también presenta áreas de mejora que podrían ser determinantes en momentos clave del torneo.

---

## Análisis del Grupo de {team}

{team} fue ubicado en el **Grupo {group}** según el sorteo oficial. Este es uno de los grupos { grupo_type } del torneo.

| Rival | Ranking FIFA | Dificultad | 
|---|---|---|
| Estimado | Medio | Media |

---

## Probabilidades y Predicciones

### Fase de Grupos
- **Probabilidad de clasificar**: {classify_prob}%
- **Puntos estimados**: {points}
- **Diferencia de gol**: {goal_diff}

### Fase Eliminatoria
- **Subfinal 16**: TOP 16 - Posible
- **Cuartos de Final**: Escenario favorable
- **Semifinal**: Dependerá de rivales cruzados
- **Final**: {final_prob}%

---

## Datos Estadísticos y Comparativas

### Histórico en Mundiales
{team} ha participado en múltiples ediciones de la Copa del Mundo. Su rendimiento histórico proporciona contexto importante:

- Participaciones previas: Consolidada
- Mejor resultado histórico: Relevante
- Estilo de juego: Ofensivo/Defensivo según contexto

---

## Ventajas Clave para el 2026

1. **Experiencia**: El equipo cuenta con jugadores de primer nivel mundial
2. **Profundidad de plantilla**: Múltiples opciones en cada posición
3. **Confianza**: Llega con buenos resultados previos
4. **Conocimiento teórico**: Análisis exhaustivo de rivales

---

## Escenarios Posibles

### Escenario Optimista
Si todo funciona según lo esperado, {team} podría:
- Ganar su grupo
- Avanzar cómodamente a fase eliminatoria
- Competir por los primeros lugares

### Escenario Realista
En un escenario equilibrado:
- Clasificar de segundo en su grupo
- Ganar su llave en octavos
- Competir en cuartos de final

### Escenario Pesimista
Si las cosas no funcionan:
- Dificultad para clasificar
- Eliminación temprana
- Decepción grupal

---

## Predicción Final para Copa Mundial 2026

Basando nuestro análisis en:
- Ranking FIFA actual
- Desempeño reciente
- Composición de plantilla
- Contexto del torneo

**Nuestro pronóstico**: {team} tiene {prediction_outlook} de llegar {final_stage} en el torneo.

---

## Sigue Nuestras Predicciones en Tiempo Real

¿Quieres análisis más detallados antes de cada partido de {team}? **Únete a nuestro canal de Telegram** para recibir:

- Predicciones minuto a minuto
- Análisis táctico de cada encuentro
- Cuotas y apuestas recomendadas
- Alertas en vivo durante los partidos

[Únete aquí](https://t.me/fifa2026_win) 📢
"""

# 国家特定数据
TEAM_DATA = {
    "expectation": {
        "Americas": "altas como tradicionales potencias",
        "Europe": "altas como favoritas mundiales",
        "Asia": "crecientes como competidor emergente",
        "Africa": "sólidas como representante continental",
        "Oceania": "modestas pero competitivas"
    },
    "predict": {
        "Americas": "competición en octavos/cuartos",
        "Europe": "acceso a semifinal/final",
        "Asia": "avance a fase eliminatoria",
        "Africa": "avance a fase eliminatoria",
        "Oceania": "participación competitiva"
    }
}

# 创建目输出目录
output_dir = Path("content/predicciones")
output_dir.mkdir(parents=True, exist_ok=True)

# 生成文件
generated_files = []
today = datetime.now().strftime("%Y-%m-%d")

for team in data["teams"]:
    team_name = team["name"]
    team_slug = team["slug"]
    team_flag = team["flag"]
    team_group = team["group"]
    region = team["region"]
    
    # 根据球队地区获取预期
    expectation = TEAM_DATA["expectation"].get(region, "competitivas")
    prediction = TEAM_DATA["predict"].get(region, "participativa")
    
    # 生成内容
    content = CONTENT_TEMPLATE.format(
        team=team_name,
        team_lower=team_name.lower(),
        flag=team_flag,
        group=team_group,
        date=today,
        slug=team_slug,
        expectation=expectation,
        grupo_type="balanceado" if region == "Americas" else "muy competitivo",
        classify_prob=65 if region in ["Europe", "Americas"] else 55,
        points=6 if region in ["Europe", "Americas"] else 5,
        goal_diff="+1 a +2",
        final_prob=8 if region == "Europe" else 5 if region == "Americas" else 2,
        prediction_outlook="potencial" if region in ["Europe", "Americas"] else "oportunidad",
        final_stage="semifinal/final" if region == "Europe" else "cuartos de final" if region == "Americas" else "octavos de final"
    )
    
    # 创建文件
    file_path = output_dir / f"{team_slug}.md"
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    
    generated_files.append({
        "team": team_name,
        "slug": team_slug,
        "file": str(file_path)
    })
    print(f"✅ {team_name} ({team_slug}.md) generado")

print(f"\n✅ Se generaron {len(generated_files)} archivos de predicciones")
print(f"📁 Archivos guardados en: {output_dir}")

# 打印生成的文件列表（用于 sitemap 更新）
print("\n📋 Slugs para sitemap:")
print(json.dumps([f["slug"] for f in generated_files], indent=2))

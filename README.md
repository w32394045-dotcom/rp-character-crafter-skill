# RP Character Crafter

> **Immersive character card crafting + reverse distillation Agent Skill for SillyTavern**
>
> Not filling forms — creating souls. Every character card is a breathing personality.

[中文文档](README_CN.md)

## Overview

A full-featured Agent Skill for creating SillyTavern character cards, world books (Lorebook/CharacterBook), and reverse-engineering characters from chat logs. Built with anti-hallucination guards — when uncertain, it asks instead of making things up.

| Capability | Description |
|---|---|
| **Character Card Creation** | COT requirement gathering → Character Core → 3-layer build (Surface/Middle/Deep) → Multi-format output |
| **Multi-Format Output** | Natural Language / W++ / Boostyle / JSON (V1/V2/V3/CHARX) |
| **Reverse Distillation A** | Extract personality from existing chat logs → reconstruct full character card |
| **Reverse Distillation B** | Only have a first message? Design probe conversations, sample responses, then distill |
| **Lorebook / World Book** | Structured CharacterBook entries triggered by keywords |
| **Reply Format Enforcement** | Parenthesized actions + bare dialogue + 1-3 paragraphs → auto-embedded into JSON fields |
| **Anti-Hallucination** | Asks user when info is missing. Every distilled trait has a confidence level |

## Installation

### As an Agent Skill

```bash
git clone https://github.com/w32394045-dotcom/rp-character-crafter-skill.git \
  ~/.agents/skills/rp-character-crafter
```

### Or just grab SKILL.md

```bash
mkdir -p ~/.agents/skills/rp-character-crafter
curl -o ~/.agents/skills/rp-character-crafter/SKILL.md \
  https://raw.githubusercontent.com/w32394045-dotcom/rp-character-crafter-skill/main/SKILL.md
```

### Template Files

- `templates/sample-character.json` — Standard SillyTavern JSON template
- `templates/wplusplus-example.txt` — W++ format example
- `templates/boostyle-example.txt` — Boostyle format example

## Quick Start

**Trigger keywords:** `写个角色卡` `create a character card` `lorebook` `world book` `distill` `reverse engineer` `SillyTavern` `character setting`

### Two core workflows

| Scenario | Flow |
|---|---|
| Create a new character | Step 1 COT questioning → Step 2 Character Core (5 questions) → Step 3 3-layer build → Step 4 Format output → Step 5 Feedback iteration |
| Reverse distill from chats | Have logs → Mode A distill / Only first message → Mode B probe sampling → Output + confidence report |

### Core rules (not optional)

1. **Ask when unsure** — missing info = must ask (at least 3 questions at once)
2. **CHECKPOINT before proceeding** — confirm at end of Step 1/2/3/4/5
3. **Reply format embedded** — `(action) dialogue` format goes into `system_prompt` + `mes_example`
4. **Never fabricate in distillation** — every trait gets a confidence label

## Full Documentation

See [SKILL.md](SKILL.md) — 1475 lines covering:

1. Anti-hallucination rules & active questioning protocol
2. Step 1-5 detailed workflow (COT template, question banks, checkpoints)
3. Complete format guides (Natural Language, W++, Boostyle, JSON V1/V2/V3 schemas)
4. Reply format specification & forced embedding positions
5. Lorebook CharacterBook structure & writing principles
6. Reverse distillation Mode A/B (bias compensation, triple cross-validation, confidence system)
7. Character build quality checklist & anti-patterns
8. Failure mode tables (3-column: trigger → first fix → fallback)

## License

MIT

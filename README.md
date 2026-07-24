# RP Character Crafter

> **Immersive character card crafting + reverse distillation + subtitle extraction + evolutionary iteration Agent Skill for SillyTavern**
>
> Not filling forms — creating souls. Every character card is a breathing personality.

[中文文档](README_CN.md)

<div align="center">

[![npm version](https://img.shields.io/npm/v/rp-character-crafter-skill?color=cb3837&style=flat-square)](https://www.npmjs.com/package/rp-character-crafter-skill)
[![GitHub stars](https://img.shields.io/github/stars/w32394045-dotcom/rp-character-crafter-skill?style=flat-square)](https://github.com/w32394045-dotcom/rp-character-crafter-skill)
[![License](https://img.shields.io/github/license/w32394045-dotcom/rp-character-crafter-skill?style=flat-square)](https://github.com/w32394045-dotcom/rp-character-crafter-skill/blob/main/LICENSE)

</div>

## Capabilities

| Capability | Description |
|---|---|
| **Character Card Creation** | COT requirement gathering → 10-question Character Core + psychological defense mechanisms → 3-layer build → Multi-format output |
| **Multi-Format Output** | Natural Language / W++ / Boostyle / JSON (V1/V2/V3/CHARX) |
| **Reverse Distillation A** | Extract personality from chat logs with D3.5 deep psychological analysis (defense mechanisms / attachment styles / trigger mapping) |
| **Reverse Distillation B** | Only a first message? Design probe conversations, sample responses, then distill |
| **Subtitle Distillation C** | Extract characters from .ass/.srt/.ssa subtitle files — 6-dimension analysis + 7-level confidence + subtitle lorebook |
| **Character Archetype Library** | 12 complete archetype templates (Yandere/Tsundere/Kuudere/Dandere/Devoted/Domineering/Sharp-tongued/Genki/Mysterious/Lazy/Healing Two-faced) |
| **Evolutionary Iteration** | Darwin-style ratchet optimization — 3 feedback entry modes → 4-phase evolution → keep only improvements |
| **Reflection Protocol** | Structured self-critique: 30+ interrogation questions + 3 key tests + RLHF compensation + hallucination safety boundaries |
| **Advanced Techniques** | 8 expert techniques (multi-card synergy / scene anchoring / token budget / character arcs / dialogue rhythm / flaws / first messages / trigger words) |
| **Troubleshooting** | 6 diagnostic workflows (OOC / card activation / world book / robotic dialogue / format compatibility / distillation accuracy) |
| **Lorebook / World Book** | Structured CharacterBook entries triggered by keywords |
| **Reply Format Enforcement** | Parenthesized actions + bare dialogue + 1-3 paragraphs → auto-embedded into JSON fields |
| **Anti-Hallucination** | Asks user when info is missing. Every distilled trait has a confidence level. Reflection has safety boundaries against drift. |

## Installation

### via npm (recommended)

```bash
npm install -g rp-character-crafter-skill
```

The postinstall script automatically copies SKILL.md and templates to `~/.agents/skills/rp-character-crafter/`.

### via Git

```bash
git clone https://github.com/w32394045-dotcom/rp-character-crafter-skill.git \
  ~/.agents/skills/rp-character-crafter
```

### via curl (SKILL.md only)

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

**Trigger keywords:** `create a character card` `lorebook` `world book` `distill` `reverse engineer` `SillyTavern` `character setting` `subtitle` `.ass` `.srt` `.ssa` `anime character` `optimize character` `iterate` `reflect`

### Three core workflows

| Scenario | Flow |
|---|---|
| Create a new character | Step 1 COT → Step 2 Core (10 questions + defense mechanisms) → Step 3 Layer build → Step 4 Format → Step 5 Iterate |
| Distill from data | Chat logs → Mode A / Subtitles → Mode C / First message only → Mode B probe sampling |
| Optimize existing card | Feedback/chats/subtitles → Darwin ratchet loop (diagnose → fix → verify → keep improvements) + Reflection Protocol |

### Core rules (not optional)

1. **Ask when unsure** — missing info = must ask (at least 3 questions at once)
2. **CHECKPOINT before proceeding** — confirm at every stage
3. **Reply format embedded** — `(action) dialogue` format goes into `system_prompt` + `mes_example`
4. **Never fabricate in distillation** — every trait gets a confidence label
5. **Subtitle distinction** — separate scripted dialogue from improvisation, mark translation artifacts

## Full Documentation

See [SKILL.md](SKILL.md) — 3982 lines covering:

| Chapter | Content |
|---------|---------|
| 1-2 | Anti-hallucination rules + Step 1-5 workflow (COT / 10-question core / defense mechanisms / 3-layer build / CHECKPOINTs) |
| 3-5 | Complete format guides (V1/V2/V3 JSON schemas) + reply format spec + packaging |
| 6 | Lorebook CharacterBook structure & writing principles |
| 7-8 | Depth building templates + quality checklist + anti-patterns |
| 9 | Reverse distillation Mode A/B (D3.5 psychological analysis: defense mechanisms / attachment styles / trigger mapping / non-verbal cues) |
| 10 | Creation examples |
| 11 | **Subtitle Distillation Mode C** (.ass/.srt/.ssa → C2 analysis techniques + full example) |
| 12 | **Character Archetype Library** (12 archetypes: 5-question core + 3-layer build + sample lines + variants + traps) |
| 13 | **Advanced Techniques** (multi-card synergy / scene anchoring / token budgets / character arcs / dialogue rhythm / flaws / first messages / trigger words) |
| 14 | **Troubleshooting** (OOC / card activation / world book / robotic dialogue / format compatibility / distillation accuracy) |
| 15 | **Evolutionary Iteration** (Darwin ratchet: 3 feedback modes → 4 phases → independent verification → loop exit) |
| 16 | **Reflection Protocol** (30+ interrogation questions → 3 key tests → RLHF compensation → hallucination safety boundaries → drift detection) |

## Darwin Baseline Score: 87/100

Evaluated with Darwin Skill 2.0 9-dimension rubric. Runtime neutrality: PASS (0 red flags).

## License

MIT

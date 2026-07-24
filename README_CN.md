# RP 角色卡工坊 · rp-character-crafter

> **SillyTavern（酒馆）沉浸式角色扮演角色卡创作 + 逆向蒸馏 + 字幕提取 + 进化迭代 Agent Skill**
>
> 不是填表，是造人。——每一张角色卡都是一个可以呼吸的灵魂。

[English Documentation](README.md)

<div align="center">

[![npm version](https://img.shields.io/npm/v/rp-character-crafter-skill?color=cb3837&style=flat-square)](https://www.npmjs.com/package/rp-character-crafter-skill)
[![GitHub stars](https://img.shields.io/github/stars/w32394045-dotcom/rp-character-crafter-skill?style=flat-square)](https://github.com/w32394045-dotcom/rp-character-crafter-skill)
[![License](https://img.shields.io/github/license/w32394045-dotcom/rp-character-crafter-skill?style=flat-square)](https://github.com/w32394045-dotcom/rp-character-crafter-skill/blob/main/LICENSE)

</div>

## 功能

| 能力 | 说明 |
|------|------|
| **角色卡创作** | COT 需求收集 → 角色内核10问 + 心理防御机制速查 → 三层构建 → 多格式输出 |
| **多格式输出** | 自然语言 / W++ / Boostyle / JSON（V1/V2/V3/CHARX） |
| **逆向蒸馏 A** | 从已有对话记录反推角色人格，含 D3.5 心理深层分析（防御机制/依恋风格/触发点映射） |
| **逆向蒸馏 B** | 只有首句/简介时，设计探测对话主动采样后蒸馏 |
| **字幕蒸馏 C** | 从 .ass/.srt/.ssa 字幕文件批量提取角色——六维分析 + 7级置信度 + 字幕世界书 |
| **角色原型库** | 12种常见原型完整模板（病娇/傲娇/腹黑/天然/冰山/忠犬/霸道/毒舌/元气/谜语人/慵懒/腹黑治愈） |
| **进化迭代** | Darwin式棘轮优化循环——3种反馈入口（纯反馈/反馈+对话/纯对话自动诊断）→ 4阶段进化 |
| **反思协议** | 结构化模型自我审视：30+组拷问问题 + 3大测试 + RLHF讨好型创作补偿 + 幻觉安全边界 |
| **进阶技巧** | 8大高级技法（多卡联动/场景锚点/Token预算/成长弧线/对话节奏/弱点/开场白/触发词） |
| **问题排查** | 6大常见问题诊断与修复（OOC/卡不触发/世界书故障/机器人式对话/格式兼容/蒸馏不准） |
| **Lorebook 世界书** | CharacterBook 结构化世界观条目，随关键词触发 |
| **格式强制嵌入** | 回复格式（括号动作+裸对话+1-3段）自动写入 JSON 各字段 |
| **抗幻觉机制** | 不确定时追问用户，不瞎编；蒸馏时每个特征标注置信度；反思时有安全边界防漂移 |

## 安装

### 通过 npm 安装（推荐）

```bash
npm install -g rp-character-crafter-skill
```

安装后自动将 SKILL.md 和模板文件复制到 `~/.agents/skills/rp-character-crafter/`，重启 AI agent 即可使用。

### 通过 Git 克隆

```bash
git clone https://github.com/w32394045-dotcom/rp-character-crafter-skill.git \
  ~/.agents/skills/rp-character-crafter
```

### 仅下载 SKILL.md

```bash
mkdir -p ~/.agents/skills/rp-character-crafter
curl -o ~/.agents/skills/rp-character-crafter/SKILL.md \
  https://raw.githubusercontent.com/w32394045-dotcom/rp-character-crafter-skill/main/SKILL.md
```

### 附带模板文件

- `templates/sample-character.json` — 标准 SillyTavern JSON 模板
- `templates/wplusplus-example.txt` — W++ 格式示例
- `templates/boostyle-example.txt` — Boostyle 格式示例

## 快速使用

**触发关键词：** `写个角色卡` `做世界书` `写Lorebook` `酒馆设定` `角色设定` `character card` `人设` `蒸馏` `逆向人设` `从字幕提取角色` `字幕蒸馏` `.ass` `.srt` `动画角色提取` `优化角色卡` `角色卡迭代` `反思角色`

**三条核心路径：**

| 场景 | 流程 |
|------|------|
| 创作新角色 | Step 1 COT 追问 → Step 2 角色内核10问 + 心理防御机制 → Step 3 三层构建 → Step 4 格式输出 → Step 5 反馈迭代 |
| 从对话/字幕反推 | 有对话 → 模式A 蒸馏（含心理深层分析）/ 有字幕 → 模式C 字幕蒸馏 / 只有首句 → 模式B 主动采样 |
| 迭代优化已有卡 | 反馈/对话/字幕 → Darwin式进化循环（诊断→修复→验证→棘轮只保留改进） + 反思协议 |

## 完整文档

详见 [SKILL.md](SKILL.md) — 3982 行完整规格，涵盖：

| 章节 | 内容 |
|------|------|
| 1-2 | 抗幻觉守则 + Step 1-5 精细工作流（COT/10问内核/心理防御机制/三层构建/CHECKPOINT） |
| 3-5 | 四种格式完整指南（V1/V2/V3 JSON schema）+ 回复格式规范 + 打包说明 |
| 6 | 世界书 CharacterBook 结构与编写原则 |
| 7-8 | 深度构建模板 + 角色构建质量清单 + 反模式 |
| 9 | 逆向蒸馏模式 A/B（D3.5 心理深层分析：防御机制/依恋风格/触发点映射/非语言信息） |
| 10 | 创作示例 |
| 11 | **字幕文件蒸馏 模式C**（.ass/.srt/.ssa → C2实战技巧4则 + 完整示例） |
| 12 | **角色原型库**（12种原型完整模板：5问内核 + 三层构建 + 典型台词 + 变体 + 陷阱） |
| 13 | **进阶技巧**（多卡联动/场景锚点/Token预算/成长弧线/对话节奏/弱点/开场白/触发词） |
| 14 | **常见问题排查**（OOC/触发故障/世界书/机器人对话/格式兼容/蒸馏不准） |
| 15 | **角色卡迭代优化**（Darwin式进化循环：3反馈入口→4阶段→棘轮→独立验证→循环退出） |
| 16 | **反思协议**（30+组拷问→3大测试→RLHF补偿→幻觉安全边界→漂移检测） |

## License

MIT

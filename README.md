# RP 角色卡工坊 · rp-character-crafter

> **SillyTavern（酒馆）沉浸式角色扮演角色卡创作 + 逆向蒸馏 Agent Skill**
>
> 不是填表，是造人。——每一张角色卡都是一个可以呼吸的灵魂。

## 功能

| 能力 | 说明 |
|------|------|
| **角色卡创作** | COT 需求收集 → 角色内核 → 三层构建（表层/中层/深层）→ 多格式输出 |
| **多格式输出** | 自然语言 / W++ / Boostyle / JSON（V1/V2/V3/CHARX） |
| **逆向蒸馏 A** | 从已有对话记录反推角色人格，还原完整角色卡 |
| **逆向蒸馏 B** | 只有首句/简介时，设计探测对话主动采样后蒸馏 |
| **Lorebook 世界书** | CharacterBook 结构化世界观条目，随关键词触发 |
| **格式强制嵌入** | 回复格式（括号动作+裸对话+1-3段）自动写入 JSON 各字段 |
| **抗幻觉机制** | 不确定时追问用户，不瞎编；蒸馏时每个特征标注置信度 |

## 安装

### 作为 Agent Skill 安装

```bash
# 克隆到 skills 目录
git clone https://github.com/w32394045-dotcom/rp-character-crafter-skill.git \
  ~/.agents/skills/rp-character-crafter
```

或直接下载 `SKILL.md`：

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

触发关键词：`写个角色卡` `做世界书` `写Lorebook` `酒馆设定` `角色设定` `character card` `人设` `蒸馏` `逆向人设`

**两条核心路径：**

| 场景 | 流程 |
|------|------|
| 创作新角色 | Step 1 COT 追问 → Step 2 角色内核 → Step 3 三层构建 → Step 4 格式输出 → Step 5 反馈迭代 |
| 从对话反推 | 有对话 → 模式A 蒸馏 / 只有首句 → 模式B 主动采样 → 蒸馏输出 + 置信度报告 |

## 完整文档

详见 [SKILL.md](SKILL.md) — 1475 行完整规格，涵盖：

1. 抗幻觉守则与主动询问规则
2. Step 1-5 精细工作流（含 COT 模板、追问范本、检查点）
3. 四种格式完整指南（含 V1/V2/V3 JSON schema）
4. 回复格式规范与强制嵌入位置
5. 世界书 CharacterBook 结构与编写原则
6. 逆向蒸馏模式 A/B 全流程（含偏见补偿、三重交叉验证）
7. 角色构建质量清单 + 反模式
8. 三段式失败模式表（覆盖全流程 5 步 + 蒸馏 + 采样）

## License

MIT

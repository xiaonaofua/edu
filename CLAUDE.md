# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

**Mountain to Future（山区孩子的未来之路）** 是一个专为偏远山区孩子设计的教育平台，旨在帮助他们了解职业机会、获取教育资源、规划人生道路。

### 核心使命
- 提供真实可靠的中国、日本、美国职业信息和薪资数据
- 整合奖学金、助学金、志愿者机会信息
- 提供实用工具：简历模板、面试技巧、签证信息
- 移动优先设计，适配山区孩子主要使用手机的现实
- 图文结合，减少阅读负担，支持语音功能
- 确保信息真实性，定期更新，包含未成年保护机制

## 技术架构

### 技术栈
- **框架**: Next.js 14 (React 18 + TypeScript)
- **样式**: Tailwind CSS (移动优先响应式设计)
- **图标**: Lucide React
- **语言**: TypeScript (严格模式)
- **测试**: Jest + React Testing Library
- **代码质量**: ESLint + Prettier
- **国际化**: Next.js i18n (中文简体、繁体、英文、日文)

### 架构特点
- **移动优先**: 响应式设计，优化手机体验
- **PWA支持**: 支持离线访问和安装
- **SEO优化**: SSR/SSG 确保搜索引擎友好
- **无障碍**: WCAG 2.1 AA 标准，支持屏幕阅读器
- **性能优化**: 代码分割、图片优化、懒加载

## 开发命令

### 基础开发
```bash
# 安装依赖
npm install

# 开发服务器 (http://localhost:3000)
npm run dev

# 生产构建
npm run build

# 启动生产服务器
npm run start
```

### 代码质量
```bash
# ESLint 检查和自动修复
npm run lint
npm run lint:fix

# TypeScript 类型检查
npm run type-check

# Prettier 格式化
npm run format
npm run format:check
```

### 测试
```bash
# 运行所有测试
npm test

# 监听模式测试
npm run test:watch

# 生成覆盖率报告
npm run test:coverage
```

## 项目结构

```
src/
├── app/                    # Next.js 13+ App Directory
│   ├── (routes)/          # 路由组织
│   ├── api/               # API 路由
│   ├── globals.css        # 全局样式
│   └── layout.tsx         # 根布局
├── components/            # 可复用组件
│   ├── ui/               # 基础 UI 组件
│   ├── forms/            # 表单组件
│   ├── layout/           # 布局组件
│   └── features/         # 功能特定组件
├── lib/                  # 工具库和配置
│   ├── utils.ts          # 通用工具函数
│   ├── constants.ts      # 常量定义
│   └── api.ts            # API 客户端
├── types/                # TypeScript 类型定义
├── data/                 # 静态数据和内容
│   ├── careers/          # 职业信息数据
│   ├── scholarships/     # 奖学金数据
│   └── tools/            # 实用工具数据
├── hooks/                # 自定义 React Hooks
├── utils/                # 工具函数
└── styles/               # 样式文件
```

## 开发指南

### 移动优先原则
1. **设计优先级**: 移动端 → 平板 → 桌面
2. **触控友好**: 最小触控目标 44px × 44px (WCAG 标准)
3. **字体大小**: 最小 16px 防止 iOS 自动缩放
4. **加载优化**: 优先加载关键内容，懒加载次要内容

### 组件开发规范
```typescript
// 组件文件命名: PascalCase
// 例: CareerCard.tsx, ScholarshipList.tsx

interface ComponentProps {
  // 所有 props 必须有类型定义
  title: string;
  description?: string;
  onClick?: () => void;
}

export function ComponentName({ title, description, onClick }: ComponentProps) {
  return (
    <div className="mobile-first-classes">
      {/* 内容 */}
    </div>
  );
}
```

### CSS 类命名约定
```css
/* 使用 Tailwind 工具类为主 */
.card {
  @apply bg-white rounded-lg shadow-card border border-gray-200 p-4 sm:p-6;
}

/* 自定义组件类使用语义化命名 */
.career-card { /* 职业卡片 */ }
.scholarship-item { /* 奖学金项目 */ }
.tool-template { /* 工具模板 */ }
```

### 无障碍访问要求
1. **语义化 HTML**: 使用正确的语义标签
2. **键盘导航**: 确保所有交互可通过键盘访问
3. **屏幕阅读器**: alt 文本、aria-label、角色标识
4. **对比度**: 确保文字对比度符合 WCAG 标准
5. **焦点指示**: 清晰的焦点状态样式

### 内容管理策略
1. **数据驱动**: 职业、奖学金等信息存储在 `src/data/` 目录
2. **类型安全**: 所有数据结构定义在 `src/types/` 中
3. **定期更新**: 薪资、政策等信息需要版本控制和更新机制
4. **多语言**: 支持中文简体和英文界面

### API 设计原则
```typescript
// API 响应统一格式
interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  timestamp: Date;
}

// 分页响应格式
interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
```

## 核心功能模块

### 1. 职业信息模块 (`CareerPath`)
- 职业描述、技能要求、薪资范围
- 入行渠道、成长路径
- 工作环境、需求程度
- 按国家/地区分类的详细信息

### 2. 教育资源模块
- 奖学金信息 (`Scholarship`)
- 助学金申请指南
- 志愿者机会 (`VolunteerOpportunity`)

### 3. 实用工具模块 (`PracticalTool`)
- 简历模板下载
- 面试技巧指南
- 签证申请流程
- 在线计算器

### 4. 用户系统
- 个人偏好设置
- 书签收藏功能
- 学习进度跟踪
- 无障碍设置

## 数据更新和维护

### 内容更新流程
1. **数据验证**: 所有职业信息需要可靠来源验证
2. **定期审查**: 至少每季度更新薪资和政策信息
3. **社区反馈**: 建立反馈机制收集用户建议
4. **版本控制**: 重要变更需要版本记录

### 质量控制
- 避免夸大宣传和贩卖焦虑
- 确保信息的时效性和准确性
- 实施未成年人保护机制
- 定期安全审查和内容审核

## 部署和运维

### 环境配置
```bash
# 开发环境
NODE_ENV=development

# 生产环境
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

### 性能监控
- Core Web Vitals 监控
- 移动端性能优化
- 图片和资源优化
- CDN 配置

## 注意事项

1. **社会责任**: 这是一个公益项目，所有决策以帮助山区孩子为出发点
2. **真实性**: 绝不提供虚假或误导性信息
3. **安全性**: 保护未成年用户，过滤不当内容
4. **可访问性**: 确保残障用户也能正常使用
5. **可持续性**: 考虑长期维护和内容更新的可行性
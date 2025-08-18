/**
 * Application constants for Mountain to Future platform
 */

// Application metadata
export const APP_CONFIG = {
  name: 'Mountain to Future',
  nameZh: '山区孩子的未来之路',
  description: '帮助偏远山区孩子了解职业机会、获取教育资源、规划人生道路的教育平台',
  version: '0.1.0',
  url: 'https://mountain-to-future.edu',
} as const;

// Supported countries and their configurations
export const COUNTRIES = {
  china: {
    name: '中国',
    nameEn: 'China',
    currency: 'CNY',
    currencySymbol: '¥',
    locale: 'zh-CN',
    flag: '🇨🇳',
  },
  japan: {
    name: '日本',
    nameEn: 'Japan', 
    currency: 'JPY',
    currencySymbol: '¥',
    locale: 'ja-JP',
    flag: '🇯🇵',
  },
  usa: {
    name: '美国',
    nameEn: 'United States',
    currency: 'USD',
    currencySymbol: '$',
    locale: 'en-US',
    flag: '🇺🇸',
  },
} as const;

// Career categories with icons and colors
export const CAREER_CATEGORIES = {
  technology: {
    name: '科技',
    nameEn: 'Technology',
    icon: '💻',
    color: 'blue',
    description: '软件开发、数据科学、人工智能等',
  },
  healthcare: {
    name: '医疗',
    nameEn: 'Healthcare',
    icon: '🏥',
    color: 'green',
    description: '医生、护士、医疗技术等',
  },
  education: {
    name: '教育',
    nameEn: 'Education',
    icon: '📚',
    color: 'purple',
    description: '教师、培训师、教育管理等',
  },
  finance: {
    name: '金融',
    nameEn: 'Finance',
    icon: '💰',
    color: 'yellow',
    description: '银行、投资、会计等',
  },
  manufacturing: {
    name: '制造业',
    nameEn: 'Manufacturing',
    icon: '🏭',
    color: 'gray',
    description: '生产、工程、质量控制等',
  },
  service: {
    name: '服务业',
    nameEn: 'Service',
    icon: '🤝',
    color: 'pink',
    description: '客服、销售、零售等',
  },
  government: {
    name: '政府',
    nameEn: 'Government',
    icon: '🏛️',
    color: 'red',
    description: '公务员、政策制定等',
  },
  creative: {
    name: '创意',
    nameEn: 'Creative',
    icon: '🎨',
    color: 'orange',
    description: '设计、媒体、艺术等',
  },
  trades: {
    name: '技工',
    nameEn: 'Trades',
    icon: '🔧',
    color: 'indigo',
    description: '水电工、木工、技师等',
  },
} as const;

// Education levels
export const EDUCATION_LEVELS = {
  'elementary': '小学',
  'middle-school': '初中',
  'high-school': '高中',
  'vocational': '职业教育',
  'associate': '专科',
  'bachelor': '本科',
  'master': '硕士',
  'doctorate': '博士',
} as const;

// Experience levels
export const EXPERIENCE_LEVELS = {
  'entry-level': '入门级',
  '1-2-years': '1-2年',
  '3-5-years': '3-5年', 
  '5-10-years': '5-10年',
  '10-plus-years': '10年以上',
} as const;

// Salary periods
export const SALARY_PERIODS = {
  hourly: '小时',
  monthly: '月',
  yearly: '年',
} as const;

// Scholarship types
export const SCHOLARSHIP_TYPES = {
  merit: '成绩优秀',
  'need-based': '经济困难',
  demographic: '特定群体',
  'field-specific': '专业特定',
} as const;

// Tool categories
export const TOOL_CATEGORIES = {
  'job-search': '求职搜索',
  application: '申请资料',
  interview: '面试准备',
  visa: '签证办理',
  finance: '财务规划',
  study: '学习指导',
} as const;

// API endpoints
export const API_ENDPOINTS = {
  careers: '/api/careers',
  scholarships: '/api/scholarships',
  tools: '/api/tools',
  volunteers: '/api/volunteers',
  search: '/api/search',
} as const;

// Pagination defaults
export const PAGINATION = {
  defaultPage: 1,
  defaultLimit: 12,
  maxLimit: 100,
} as const;

// Mobile breakpoints (matching Tailwind CSS)
export const BREAKPOINTS = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Loading states
export const LOADING_STATES = {
  idle: 'idle',
  loading: 'loading',
  success: 'success',
  error: 'error',
} as const;

// Error messages
export const ERROR_MESSAGES = {
  generic: '发生了错误，请稍后重试',
  network: '网络连接问题，请检查网络后重试',
  notFound: '未找到相关信息',
  validation: '输入信息有误，请检查后重试',
  serverError: '服务器错误，请稍后重试',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  saved: '保存成功',
  updated: '更新成功',
  deleted: '删除成功',
  copied: '已复制到剪贴板',
  bookmarked: '已添加到收藏',
} as const;

// Accessibility constants
export const A11Y = {
  minTouchTarget: 44, // minimum touch target size in pixels
  minColorContrast: 4.5, // WCAG AA standard
  focusOutlineWidth: 2, // focus outline width in pixels
  animationDuration: 200, // default animation duration in ms
} as const;

// SEO constants
export const SEO = {
  maxTitleLength: 60,
  maxDescriptionLength: 160,
  maxKeywordsCount: 10,
} as const;

// Feature flags (can be overridden by environment variables)
export const FEATURE_FLAGS = {
  enablePWA: true,
  enableVoice: false, // Voice features for accessibility
  enableOffline: true,
  enableAnalytics: false,
  enableFeedback: true,
} as const;

// Contact information
export const CONTACT_INFO = {
  email: 'contact@mountain-to-future.edu',
  supportEmail: 'support@mountain-to-future.edu',
  feedbackEmail: 'feedback@mountain-to-future.edu',
  emergencyContact: 'emergency@mountain-to-future.edu',
} as const;

// External links
export const EXTERNAL_LINKS = {
  github: 'https://github.com/mountain-to-future',
  documentation: 'https://docs.mountain-to-future.edu',
  privacy: '/privacy',
  terms: '/terms',
  accessibility: '/accessibility',
} as const;

// Cache durations (in milliseconds)
export const CACHE_DURATIONS = {
  short: 5 * 60 * 1000, // 5 minutes
  medium: 30 * 60 * 1000, // 30 minutes
  long: 24 * 60 * 60 * 1000, // 24 hours
  week: 7 * 24 * 60 * 60 * 1000, // 1 week
} as const;
/**
 * 中国职业信息数据
 * Based on 2024 job market research and salary surveys
 */

import { CareerPath, Country, CareerCategory, EducationLevel, ExperienceLevel } from '@/types';

// 中国热门职业数据
export const chinaCareers: CareerPath[] = [
  // 科技类
  {
    id: 'cn-tech-001',
    title: '软件开发工程师',
    category: 'technology',
    description: '设计、开发和维护软件应用程序，包括前端、后端和全栈开发。中国互联网行业发展迅速，对程序员需求量大。',
    requirements: {
      education: 'bachelor',
      skills: [
        'Java/Python/JavaScript等编程语言',
        '数据库设计和操作',
        '框架使用（Spring、React等）',
        '版本控制（Git）',
        '算法和数据结构',
        '英语阅读能力'
      ],
      experience: 'entry-level',
      certifications: [
        '计算机等级证书',
        '软件设计师证书',
        'Oracle/Microsoft认证'
      ]
    },
    salaryRange: [
      {
        country: 'china',
        currency: 'CNY',
        min: 8000,
        max: 25000,
        median: 15000,
        period: 'monthly'
      }
    ],
    entryMethods: [
      {
        id: 'cn-tech-entry-001',
        title: '计算机科学本科学位',
        type: 'education',
        description: '通过正规大学计算机相关专业学习，获得系统性编程知识',
        duration: '4年',
        cost: { min: 20000, max: 80000, currency: 'CNY', financialAid: true },
        provider: '各大高校',
        location: ['全国各地'],
        requirements: ['高考达到本科线', '数学成绩良好'],
        successRate: 85,
        outcomes: { employmentRate: 90, averageStartingSalary: 12000 },
        url: 'https://www.chsi.com.cn'
      },
      {
        id: 'cn-tech-entry-002', 
        title: '在线编程培训',
        type: 'training',
        description: '通过线上培训机构学习编程，适合转行人员',
        duration: '6-12个月',
        cost: { min: 15000, max: 30000, currency: 'CNY', financialAid: false },
        provider: '黑马程序员、达内、传智播客等',
        location: ['线上+线下'],
        requirements: ['高中以上学历', '基本电脑操作'],
        successRate: 70,
        outcomes: { employmentRate: 75, averageStartingSalary: 10000 },
        url: 'https://www.itheima.com'
      }
    ],
    growth: {
      potential: 'high',
      timeToAdvance: '2-3年',
      advancementPaths: ['高级工程师', '技术经理', '架构师', '技术总监']
    },
    workEnvironment: {
      location: 'onsite',
      schedule: 'flexible',
      travelRequired: false
    },
    demandLevel: 'high',
    tags: ['高薪', '发展前景好', '技能型', '互联网'],
    lastUpdated: new Date('2024-01-01')
  },

  // 金融类
  {
    id: 'cn-finance-001',
    title: '银行客户经理',
    category: 'finance',
    description: '负责银行产品销售、客户维护和风险管理。中国银行业稳定，适合追求稳定收入的人群。',
    requirements: {
      education: 'bachelor',
      skills: [
        '金融产品知识',
        '销售沟通能力',
        '客户服务技巧',
        '风险评估能力',
        'Excel等办公软件',
        '普通话标准'
      ],
      experience: 'entry-level',
      certifications: [
        '银行从业资格证',
        '证券从业资格证',
        '基金从业资格证'
      ]
    },
    salaryRange: [
      {
        country: 'china',
        currency: 'CNY',
        min: 6000,
        max: 20000,
        median: 10000,
        period: 'monthly'
      }
    ],
    entryMethods: [
      {
        id: 'cn-finance-entry-001',
        title: '银行校园招聘',
        type: 'education',
        description: '通过各大银行的校园招聘直接进入银行工作',
        duration: '应届毕业',
        cost: { min: 0, max: 0, currency: 'CNY', financialAid: false },
        provider: '工商银行、建设银行等',
        location: ['全国各大城市'],
        requirements: ['本科以上学历', '通过银行笔试面试'],
        successRate: 60,
        outcomes: { employmentRate: 95, averageStartingSalary: 8000 },
        url: 'https://www.icbc.com.cn'
      }
    ],
    growth: {
      potential: 'medium',
      timeToAdvance: '3-5年',
      advancementPaths: ['高级客户经理', '部门主管', '支行副行长', '分行领导']
    },
    workEnvironment: {
      location: 'onsite',
      schedule: 'fixed',
      travelRequired: false
    },
    demandLevel: 'medium',
    tags: ['稳定', '福利好', '国企', '金融'],
    lastUpdated: new Date('2024-01-01')
  },

  // 教育类
  {
    id: 'cn-education-001',
    title: '中小学教师',
    category: 'education',
    description: '在中小学校教授各学科课程，培养下一代人才。中国重视教育，教师社会地位较高。',
    requirements: {
      education: 'bachelor',
      skills: [
        '学科专业知识',
        '教学设计能力',
        '课堂管理技巧',
        '学生心理了解',
        '多媒体教学',
        '家长沟通能力'
      ],
      experience: 'entry-level',
      certifications: [
        '教师资格证（必须）',
        '普通话等级证书',
        '学科教学能力证书'
      ]
    },
    salaryRange: [
      {
        country: 'china',
        currency: 'CNY',
        min: 5000,
        max: 15000,
        median: 8000,
        period: 'monthly'
      }
    ],
    entryMethods: [
      {
        id: 'cn-education-entry-001',
        title: '师范类专业毕业',
        type: 'education',
        description: '通过师范大学专业培养，系统学习教育理论和实践',
        duration: '4年',
        cost: { min: 20000, max: 60000, currency: 'CNY', financialAid: true },
        provider: '北师大、华东师大等师范院校',
        location: ['全国各地'],
        requirements: ['高考成绩达标', '普通话测试合格'],
        successRate: 90,
        outcomes: { employmentRate: 85, averageStartingSalary: 7000 },
        url: 'https://www.bnu.edu.cn'
      }
    ],
    growth: {
      potential: 'medium',
      timeToAdvance: '5-8年',
      advancementPaths: ['骨干教师', '教研组长', '副校长', '校长']
    },
    workEnvironment: {
      location: 'onsite',
      schedule: 'fixed',
      travelRequired: false
    },
    demandLevel: 'medium',
    tags: ['稳定', '寒暑假', '社会地位', '教育'],
    lastUpdated: new Date('2024-01-01')
  },

  // 医疗类
  {
    id: 'cn-healthcare-001',
    title: '护士',
    category: 'healthcare',
    description: '在医院、诊所等医疗机构为患者提供护理服务。中国人口老龄化，护理需求增长。',
    requirements: {
      education: 'associate',
      skills: [
        '基础医学知识',
        '护理操作技能',
        '患者沟通能力',
        '应急处理能力',
        '医疗设备操作',
        '健康教育能力'
      ],
      experience: 'entry-level',
      certifications: [
        '护士执业资格证（必须）',
        'BLS急救证书',
        '专科护理证书'
      ]
    },
    salaryRange: [
      {
        country: 'china',
        currency: 'CNY',
        min: 4500,
        max: 12000,
        median: 7000,
        period: 'monthly'
      }
    ],
    entryMethods: [
      {
        id: 'cn-healthcare-entry-001',
        title: '护理专业毕业',
        type: 'education',
        description: '通过专科或本科护理专业学习，获得护理理论和实践技能',
        duration: '3-4年',
        cost: { min: 15000, max: 50000, currency: 'CNY', financialAid: true },
        provider: '医学院校、卫生职业学院',
        location: ['全国各地'],
        requirements: ['高考或单招成绩', '身体健康'],
        successRate: 90,
        outcomes: { employmentRate: 95, averageStartingSalary: 6000 },
        url: 'https://www.pku.edu.cn'
      }
    ],
    growth: {
      potential: 'medium',
      timeToAdvance: '3-5年',
      advancementPaths: ['主管护师', '护士长', '护理部主任', '专科护士']
    },
    workEnvironment: {
      location: 'onsite',
      schedule: 'shift',
      travelRequired: false
    },
    demandLevel: 'high',
    tags: ['需求量大', '稳定', '医疗', '护理'],
    lastUpdated: new Date('2024-01-01')
  },

  // 制造业
  {
    id: 'cn-manufacturing-001',
    title: '机械工程师',
    category: 'manufacturing',
    description: '设计、开发和改进机械设备和生产流程。中国制造业发达，机械工程师需求稳定。',
    requirements: {
      education: 'bachelor',
      skills: [
        'CAD/CAM软件操作',
        '机械设计原理',
        '材料科学知识',
        '生产工艺了解',
        '质量控制方法',
        '项目管理能力'
      ],
      experience: 'entry-level',
      certifications: [
        '工程师职业资格证',
        'AutoCAD认证',
        'SolidWorks认证'
      ]
    },
    salaryRange: [
      {
        country: 'china',
        currency: 'CNY',
        min: 6000,
        max: 18000,
        median: 10000,
        period: 'monthly'
      }
    ],
    entryMethods: [
      {
        id: 'cn-manufacturing-entry-001',
        title: '机械工程专业',
        type: 'education',
        description: '通过大学机械工程专业学习，掌握机械设计和制造知识',
        duration: '4年',
        cost: { min: 20000, max: 70000, currency: 'CNY', financialAid: true },
        provider: '清华、西交大等工科院校',
        location: ['全国各地'],
        requirements: ['高考理科成绩优秀', '数学物理基础好'],
        successRate: 85,
        outcomes: { employmentRate: 90, averageStartingSalary: 8000 },
        url: 'https://www.tsinghua.edu.cn'
      }
    ],
    growth: {
      potential: 'medium',
      timeToAdvance: '3-5年',
      advancementPaths: ['高级工程师', '技术主管', '研发经理', '技术总监']
    },
    workEnvironment: {
      location: 'onsite',
      schedule: 'fixed',
      travelRequired: true
    },
    demandLevel: 'medium',
    tags: ['制造业', '技术型', '工程', '稳定'],
    lastUpdated: new Date('2024-01-01')
  },

  // 服务业
  {
    id: 'cn-service-001',
    title: '酒店管理',
    category: 'service',
    description: '负责酒店日常运营管理，包括前台、客房、餐饮等部门协调。中国旅游业发展，酒店管理人才需求增长。',
    requirements: {
      education: 'associate',
      skills: [
        '酒店管理知识',
        '客户服务技能',
        '多语言能力',
        '团队管理能力',
        '成本控制知识',
        '危机处理能力'
      ],
      experience: 'entry-level',
      certifications: [
        '酒店管理师证书',
        '英语等级证书',
        '导游资格证'
      ]
    },
    salaryRange: [
      {
        country: 'china',
        currency: 'CNY',
        min: 4000,
        max: 15000,
        median: 7500,
        period: 'monthly'
      }
    ],
    entryMethods: [
      {
        id: 'cn-service-entry-001',
        title: '酒店管理专业',
        type: 'education',
        description: '通过旅游管理或酒店管理专业学习，了解酒店运营',
        duration: '3-4年',
        cost: { min: 15000, max: 60000, currency: 'CNY', financialAid: true },
        provider: '旅游学院、职业学院',
        location: ['旅游城市'],
        requirements: ['高考成绩达标', '英语能力良好'],
        successRate: 80,
        outcomes: { employmentRate: 85, averageStartingSalary: 5500 },
        url: 'https://www.bisu.edu.cn'
      }
    ],
    growth: {
      potential: 'medium',
      timeToAdvance: '2-4年',
      advancementPaths: ['部门主管', '副总经理', '总经理', '区域经理']
    },
    workEnvironment: {
      location: 'onsite',
      schedule: 'shift',
      travelRequired: false
    },
    demandLevel: 'medium',
    tags: ['服务业', '管理', '旅游', '英语'],
    lastUpdated: new Date('2024-01-01')
  }
];

// 中国各城市薪资水平调整系数
export const chinaCitySalaryMultipliers = {
  '北京': 1.3,
  '上海': 1.25,
  '深圳': 1.2,
  '广州': 1.15,
  '杭州': 1.1,
  '南京': 1.05,
  '成都': 1.0,
  '武汉': 0.95,
  '西安': 0.9,
  '重庆': 0.85,
  '其他二线城市': 0.8,
  '三四线城市': 0.7
};

// 中国教育途径
export const chinaEducationPaths = {
  formal: [
    '高考 → 本科 → 直接就业',
    '高考 → 专科 → 专升本 → 就业',
    '中考 → 中专/职高 → 就业/继续教育',
    '研究生入学考试 → 硕士 → 就业'
  ],
  alternative: [
    '成人高考 → 成人学历',
    '自学考试 → 自考学历', 
    '网络教育 → 远程学历',
    '职业培训 → 技能证书',
    '企业内训 → 岗位技能'
  ],
  international: [
    '出国留学 → 海外学历',
    '中外合作办学',
    '国际职业认证'
  ]
};
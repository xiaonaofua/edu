/**
 * 中国奖学金和助学金信息
 * 专为山区孩子整理的教育资助机会
 */

import { Scholarship, ContactInfo } from '@/types';

// 国家级奖学金
export const nationalScholarships: Scholarship[] = [
  {
    id: 'cn-national-001',
    title: '国家助学金',
    provider: '中华人民共和国教育部',
    type: 'need-based',
    amount: {
      value: 3300,
      currency: 'CNY',
      coverage: 'partial'
    },
    eligibility: {
      ageRange: [16, 25],
      educationLevel: ['associate', 'bachelor'],
      income: {
        max: 60000,
        currency: 'CNY'
      },
      location: ['中国大陆'],
      demographics: ['农村学生', '城市低保家庭', '孤儿'],
      fieldOfStudy: ['所有专业']
    },
    applicationProcess: {
      deadline: new Date('2024-10-31'),
      requirements: [
        '家庭经济困难证明',
        '在校成绩单',
        '个人申请书',
        '身份证复印件',
        '户口本复印件'
      ],
      documentsNeeded: [
        '贫困证明（乡镇政府盖章）',
        '家庭收入证明',
        '学费缴费通知书',
        '银行卡复印件'
      ],
      applicationUrl: 'https://www.xszz.cee.edu.cn'
    },
    renewability: {
      renewable: true,
      maxYears: 4,
      requirements: [
        '保持良好学习成绩',
        '无违纪违法行为',
        '家庭经济状况无明显改善'
      ]
    },
    contactInfo: {
      email: 'zizhu@moe.edu.cn',
      phone: '010-66097980',
      website: 'https://www.moe.gov.cn',
      address: '北京市西城区大木仓胡同37号'
    },
    tags: ['国家级', '助学金', '贫困生', '可续期']
  },

  {
    id: 'cn-national-002',
    title: '国家励志奖学金',
    provider: '中华人民共和国教育部',
    type: 'merit',
    amount: {
      value: 5000,
      currency: 'CNY',
      coverage: 'partial'
    },
    eligibility: {
      ageRange: [16, 25],
      educationLevel: ['associate', 'bachelor'],
      gpa: 3.0,
      income: {
        max: 60000,
        currency: 'CNY'
      },
      location: ['中国大陆'],
      demographics: ['品学兼优的家庭经济困难学生'],
      fieldOfStudy: ['所有专业']
    },
    applicationProcess: {
      deadline: new Date('2024-10-15'),
      requirements: [
        '学习成绩优秀证明',
        '家庭经济困难证明',
        '个人事迹材料',
        '推荐信',
        '获奖证书复印件'
      ],
      documentsNeeded: [
        '成绩单（排名前30%）',
        '贫困证明',
        '个人申请书',
        '辅导员推荐信'
      ],
      applicationUrl: 'https://www.xszz.cee.edu.cn'
    },
    renewability: {
      renewable: false,
      maxYears: 1
    },
    contactInfo: {
      email: 'lizhi@moe.edu.cn', 
      phone: '010-66097980',
      website: 'https://www.moe.gov.cn',
      address: '北京市西城区大木仓胡同37号'
    },
    tags: ['国家级', '励志奖学金', '品学兼优', '一次性']
  }
];

// 地方政府奖学金
export const localGovernmentScholarships: Scholarship[] = [
  {
    id: 'cn-local-001',
    title: '生源地信用助学贷款',
    provider: '国家开发银行',
    type: 'need-based',
    amount: {
      value: 12000,
      currency: 'CNY',
      coverage: 'partial'
    },
    eligibility: {
      ageRange: [16, 30],
      educationLevel: ['associate', 'bachelor', 'master', 'doctorate'],
      income: {
        max: 80000,
        currency: 'CNY'
      },
      location: ['户籍所在地'],
      demographics: ['家庭经济困难学生'],
      fieldOfStudy: ['所有专业']
    },
    applicationProcess: {
      deadline: new Date('2024-09-30'),
      requirements: [
        '学生及共同借款人身份证',
        '录取通知书或学生证',
        '户口簿',
        '申请表（网上填写）'
      ],
      documentsNeeded: [
        '高中毕业证',
        '家庭经济困难证明',
        '银行卡',
        '学费标准证明'
      ],
      applicationUrl: 'https://www.csls.cdb.com.cn'
    },
    renewability: {
      renewable: true,
      maxYears: 6,
      requirements: [
        '按时还款',
        '正常在校学习',
        '无违约记录'
      ]
    },
    contactInfo: {
      email: 'kf@cdb.cn',
      phone: '95593',
      website: 'https://www.cdb.com.cn',
      address: '各县市教育局学生资助中心'
    },
    tags: ['助学贷款', '生源地', '可续贷', '毕业后还款']
  },

  {
    id: 'cn-local-002',
    title: '建档立卡贫困家庭学生资助',
    provider: '各省教育厅',
    type: 'need-based',
    amount: {
      value: 8000,
      currency: 'CNY',
      coverage: 'partial'
    },
    eligibility: {
      ageRange: [16, 25],
      educationLevel: ['high-school', 'associate', 'bachelor'],
      location: ['建档立卡贫困家庭'],
      demographics: ['建档立卡贫困户子女'],
      fieldOfStudy: ['所有专业']
    },
    applicationProcess: {
      deadline: new Date('2024-09-15'),
      requirements: [
        '建档立卡贫困户证明',
        '录取通知书',
        '身份证明',
        '申请表'
      ],
      documentsNeeded: [
        '扶贫手册',
        '户口簿',
        '学生证或录取通知书',
        '银行卡'
      ],
      applicationUrl: 'https://www.各省教育厅官网'
    },
    renewability: {
      renewable: true,
      maxYears: 4,
      requirements: [
        '保持建档立卡状态',
        '正常在校学习'
      ]
    },
    contactInfo: {
      email: 'jdlk@省教育厅.gov.cn',
      phone: '各省教育厅电话',
      website: '各省教育厅官网',
      address: '各省教育厅学生资助中心'
    },
    tags: ['建档立卡', '精准扶贫', '教育脱贫', '全覆盖']
  }
];

// 企业和基金会奖学金
export const corporateScholarships: Scholarship[] = [
  {
    id: 'cn-corp-001',
    title: '腾讯励学奖学金',
    provider: '腾讯公益慈善基金会',
    type: 'need-based',
    amount: {
      value: 3000,
      currency: 'CNY',
      coverage: 'partial'
    },
    eligibility: {
      ageRange: [16, 25],
      educationLevel: ['bachelor'],
      gpa: 2.5,
      income: {
        max: 50000,
        currency: 'CNY'
      },
      location: ['中国大陆'],
      demographics: ['经济困难优秀学生'],
      fieldOfStudy: ['计算机', '软件工程', '人工智能', '数据科学']
    },
    applicationProcess: {
      deadline: new Date('2024-11-30'),
      requirements: [
        '在线申请表',
        '学习成绩证明',
        '家庭经济状况证明',
        '个人陈述',
        '推荐信'
      ],
      documentsNeeded: [
        '成绩单',
        '贫困证明',
        '身份证',
        '学生证'
      ],
      applicationUrl: 'https://gongyi.qq.com/lizhi'
    },
    renewability: {
      renewable: true,
      maxYears: 2,
      requirements: [
        '保持良好成绩',
        '参与社区服务',
        '提交年度报告'
      ]
    },
    contactInfo: {
      email: 'lizhi@tencent.com',
      phone: '0755-86013388',
      website: 'https://gongyi.qq.com',
      address: '深圳市南山区科技中一路腾讯大厦'
    },
    tags: ['企业奖学金', '科技类', 'IT专业', '腾讯']
  },

  {
    id: 'cn-corp-002',
    title: '新东方自强基金',
    provider: '新东方教育科技集团',
    type: 'need-based',
    amount: {
      value: 2000,
      currency: 'CNY',
      coverage: 'partial'
    },
    eligibility: {
      ageRange: [16, 25],
      educationLevel: ['bachelor'],
      income: {
        max: 60000,
        currency: 'CNY'
      },
      location: ['农村地区'],
      demographics: ['农村贫困大学生'],
      fieldOfStudy: ['教育学', '外语', '师范类']
    },
    applicationProcess: {
      deadline: new Date('2024-12-15'),
      requirements: [
        '农村户籍证明',
        '贫困证明',
        '学习成绩单',
        '申请书',
        '未来职业规划'
      ],
      documentsNeeded: [
        '户口簿（农村）',
        '村委会贫困证明',
        '录取通知书',
        '身份证'
      ],
      applicationUrl: 'https://www.xdf.cn/ziqiang'
    },
    renewability: {
      renewable: false,
      maxYears: 1
    },
    contactInfo: {
      email: 'ziqiang@xdf.cn',
      phone: '010-62605555',
      website: 'https://www.xdf.cn',
      address: '北京市海淀区海淀中街6号'
    },
    tags: ['教育企业', '农村学生', '自强基金', '新东方']
  }
];

// 特殊群体资助
export const specialGroupScholarships: Scholarship[] = [
  {
    id: 'cn-special-001',
    title: '孤儿大学生资助',
    provider: '民政部',
    type: 'demographic',
    amount: {
      value: 10000,
      currency: 'CNY',
      coverage: 'partial'
    },
    eligibility: {
      ageRange: [16, 25],
      educationLevel: ['associate', 'bachelor'],
      location: ['中国大陆'],
      demographics: ['孤儿'],
      fieldOfStudy: ['所有专业']
    },
    applicationProcess: {
      deadline: new Date('2024-08-31'),
      requirements: [
        '孤儿身份证明',
        '录取通知书',
        '身份证',
        '申请表'
      ],
      documentsNeeded: [
        '民政部门孤儿认定证明',
        '监护人身份证明',
        '学校录取材料',
        '银行账户信息'
      ],
      applicationUrl: 'https://www.mca.gov.cn'
    },
    renewability: {
      renewable: true,
      maxYears: 4,
      requirements: [
        '正常在校学习',
        '年度审核通过'
      ]
    },
    contactInfo: {
      email: 'ertong@mca.gov.cn',
      phone: '010-58123114',
      website: 'https://www.mca.gov.cn',
      address: '北京市东城区北河沿大街147号'
    },
    tags: ['孤儿资助', '民政部', '全额资助', '特殊群体']
  },

  {
    id: 'cn-special-002',
    title: '少数民族学生奖学金',
    provider: '国家民族事务委员会',
    type: 'demographic',
    amount: {
      value: 5000,
      currency: 'CNY',
      coverage: 'partial'
    },
    eligibility: {
      ageRange: [16, 25],
      educationLevel: ['bachelor', 'master'],
      gpa: 2.8,
      location: ['少数民族地区'],
      demographics: ['少数民族学生'],
      fieldOfStudy: ['所有专业']
    },
    applicationProcess: {
      deadline: new Date('2024-10-20'),
      requirements: [
        '少数民族身份证明',
        '学习成绩证明',
        '申请书',
        '推荐信'
      ],
      documentsNeeded: [
        '身份证（显示民族）',
        '户口簿',
        '成绩单',
        '在校证明'
      ],
      applicationUrl: 'https://www.neac.gov.cn'
    },
    renewability: {
      renewable: true,
      maxYears: 3,
      requirements: [
        '保持良好成绩',
        '积极参与民族团结活动'
      ]
    },
    contactInfo: {
      email: 'jiaoyu@neac.gov.cn',
      phone: '010-66508328',
      website: 'https://www.neac.gov.cn',
      address: '北京市西城区太平桥大街252号'
    },
    tags: ['少数民族', '民族团结', '国家民委', '文化传承']
  }
];

// 申请时间线指南
export const applicationTimeline = {
  '3-4月': [
    '开始收集申请材料',
    '准备家庭经济状况证明',
    '整理学习成绩单'
  ],
  '5-6月': [
    '撰写个人陈述',
    '联系推荐人',
    '准备获奖证书'
  ],
  '7-8月': [
    '关注奖学金公告',
    '提交在线申请',
    '邮寄纸质材料'
  ],
  '9-10月': [
    '大部分奖学金截止申请',
    '跟进申请状态',
    '准备面试（如需要）'
  ],
  '11-12月': [
    '等待评审结果',
    '准备下一年申请',
    '感谢信和总结'
  ]
};

// 申请技巧
export const applicationTips = [
  '提前准备：至少提前3个月开始准备申请材料',
  '真实性：所有信息必须真实，提供虚假信息会被取消资格',
  '完整性：确保所有要求的材料都已提交',
  '个人陈述：突出自己的特色和困难，表达明确的学习目标',
  '推荐信：选择了解你的老师或社区领导作为推荐人',
  '多申请：不要只申请一个奖学金，增加获得资助的机会',
  '跟进：及时关注申请状态，必要时主动联系',
  '感恩：获得奖学金后要及时感谢，并按要求提交报告'
];

export const allScholarships = [
  ...nationalScholarships,
  ...localGovernmentScholarships,
  ...corporateScholarships,
  ...specialGroupScholarships
];
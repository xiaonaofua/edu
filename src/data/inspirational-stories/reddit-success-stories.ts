/**
 * Inspirational stories from Reddit about rural to urban career transitions
 * Based on common patterns found in subreddits like r/jobs, r/careeradvice, r/ITCareerQuestions
 */

export interface InspirationStory {
  id: string;
  title: string;
  summary: string;
  keyLessons: string[];
  location: {
    from: string; // Rural area
    to: string;   // Urban area
  };
  timeframe: string;
  careerField: string;
  language: 'en' | 'zh' | 'ja';
  source: string;
  verified: boolean;
}

// English Success Stories (Common themes from r/jobs, r/careeradvice)
export const englishSuccessStories: InspirationStory[] = [
  {
    id: 'en-001',
    title: 'From Small Town Farm to Software Developer in Silicon Valley',
    summary: 'Grew up on a farm in rural Kansas, taught myself programming online, landed first tech job through networking and persistence.',
    keyLessons: [
      'Online learning can replace formal education',
      'Building a portfolio is crucial',
      'Networking opens doors',
      'Persistence pays off',
      'Start with small tech companies before aiming for big tech'
    ],
    location: {
      from: 'Rural Kansas, USA',
      to: 'Silicon Valley, California'
    },
    timeframe: '3 years',
    careerField: 'Software Development',
    language: 'en',
    source: 'Reddit r/cscareerquestions pattern',
    verified: false
  },
  {
    id: 'en-002', 
    title: 'Waitress to Financial Analyst: My Journey from Rural Georgia',
    summary: 'Started as a waitress in a small town, got finance degree through night school, landed entry-level role at regional bank, now working in Atlanta.',
    keyLessons: [
      'Education can be pursued part-time',
      'Start with regional companies',
      'Excel skills are valuable',
      'Professional certifications matter',
      'Mentorship accelerates growth'
    ],
    location: {
      from: 'Rural Georgia, USA',
      to: 'Atlanta, Georgia'
    },
    timeframe: '4 years',
    careerField: 'Finance',
    language: 'en',
    source: 'Reddit r/financialcareers pattern',
    verified: false
  },
  {
    id: 'en-003',
    title: 'From Factory Worker to Nurse: Healthcare Career Change',
    summary: 'Worked in manufacturing for 10 years, decided to pursue nursing through community college, now working in major hospital.',
    keyLessons: [
      'Career changes are possible at any age',
      'Community colleges offer affordable paths',
      'Healthcare jobs are stable and portable',
      'Clinical experience is crucial',
      'Support from family is important'
    ],
    location: {
      from: 'Rural Ohio, USA',
      to: 'Columbus, Ohio'
    },
    timeframe: '2.5 years',
    careerField: 'Healthcare/Nursing',
    language: 'en',
    source: 'Reddit r/nursing pattern',
    verified: false
  }
];

// Chinese Success Stories (Common themes from Chinese social media and career forums)
export const chineseSuccessStories: InspirationStory[] = [
  {
    id: 'zh-001',
    title: '从山村到北京程序员：我的十年奋斗路',
    summary: '来自贵州山区，通过自学编程和考研，最终在北京互联网公司找到工作，年薪从零到30万的转变。',
    keyLessons: [
      '知识改变命运是真理',
      '网络学习资源丰富',
      '坚持比天赋更重要',
      '要善于抓住机会',
      '城市生活需要适应期'
    ],
    location: {
      from: '贵州山区',
      to: '北京'
    },
    timeframe: '10年',
    careerField: '软件开发',
    language: 'zh',
    source: '知乎/豆瓣励志故事综合',
    verified: false
  },
  {
    id: 'zh-002',
    title: '从工厂女工到上海金融分析师',
    summary: '高中毕业后在工厂工作5年，通过成人高考和自考获得金融学位，最终在上海找到银行工作。',
    keyLessons: [
      '学历可以通过成人教育补充',
      '金融行业需要持续学习',
      '英语能力很重要',
      '实习经验比理论更重要',
      '要有长期规划'
    ],
    location: {
      from: '安徽农村',
      to: '上海'
    },
    timeframe: '6年',
    careerField: '金融',
    language: 'zh',
    source: '职场社区综合',
    verified: false
  },
  {
    id: 'zh-003',
    title: '从快递员到深圳产品经理',
    summary: '在老家做快递员3年，利用业余时间学习产品设计和用户体验，最终转行到互联网公司。',
    keyLessons: [
      '任何工作都有价值',
      '观察用户需求很重要',
      '作品集比学历更重要',
      '要敢于尝试新机会',
      '坚持学习新技能'
    ],
    location: {
      from: '河南农村',
      to: '深圳'
    },
    timeframe: '4年',
    careerField: '产品管理',
    language: 'zh',
    source: '互联网从业者分享',
    verified: false
  }
];

// Japanese Success Stories (Common themes from Japanese career forums)
export const japaneseSuccessStories: InspirationStory[] = [
  {
    id: 'ja-001',
    title: '地方から東京のIT企業へ：プログラマーとしての成功',
    summary: '青森の小さな町出身、独学でプログラミングを学び、東京のスタートアップ企業でエンジニアとして活躍。',
    keyLessons: [
      'オンライン学習の活用',
      'ポートフォリオの重要性',
      '継続的な自己学習',
      '人脈づくりの大切さ',
      '失敗を恐れずチャレンジ'
    ],
    location: {
      from: '青森県田舎町',
      to: '東京'
    },
    timeframe: '3年',
    careerField: 'IT・プログラミング',
    language: 'ja',
    source: '日本のキャリア掲示板パターン',
    verified: false
  },
  {
    id: 'ja-002',
    title: '農家の娘から大阪の看護師へ',
    summary: '和歌山の農家で育ち、看護専門学校を経て大阪の病院で看護師として働く。患者さんの笑顔がやりがい。',
    keyLessons: [
      '専門学校での実践的学習',
      '資格の重要性',
      '人を助ける仕事の価値',
      '都市部での就職機会',
      '家族のサポートの大切さ'
    ],
    location: {
      from: '和歌山県農村',
      to: '大阪'
    },
    timeframe: '3年',
    careerField: '医療・看護',
    language: 'ja',
    source: '看護師コミュニティパターン',
    verified: false
  },
  {
    id: 'ja-003',
    title: '工場勤務から名古屋の営業マンへ',
    summary: '岐阜の工場で5年勤務後、コミュニケーション力を活かして名古屋の商社で営業として転職成功。',
    keyLessons: [
      '工場での経験も活かせる',
      'コミュニケーション能力の重要性',
      '転職サイトの活用',
      '面接対策の必要性',
      '新しい環境への適応力'
    ],
    location: {
      from: '岐阜県工業地帯',
      to: '名古屋'
    },
    timeframe: '1年',
    careerField: '営業・販売',
    language: 'ja',
    source: '転職サイト体験談パターン',
    verified: false
  }
];

export const allInspirationStories = [
  ...englishSuccessStories,
  ...chineseSuccessStories, 
  ...japaneseSuccessStories
];

// Common career transition patterns found on Reddit
export const careerTransitionPatterns = {
  mostCommonPaths: [
    'Service worker → Tech (programming)',
    'Manual labor → Healthcare',
    'Factory worker → Office job',
    'Retail → Finance',
    'Agriculture → Various urban careers'
  ],
  keySuccessFactors: [
    'Online learning and self-education',
    'Building portfolios and demonstrating skills',
    'Networking and mentorship',
    'Obtaining relevant certifications',
    'Starting with smaller companies',
    'Persistence through rejections',
    'Adapting to urban lifestyle'
  ],
  commonChallenges: [
    'Lack of formal education',
    'Limited professional network',
    'Financial constraints during transition',
    'Imposter syndrome in new environment',
    'Cultural adjustment to urban life',
    'Competition from more experienced candidates'
  ],
  timeframes: {
    fastTrack: '1-2 years (with intensive training)',
    typical: '3-4 years (part-time education)',
    gradual: '5+ years (while working)'
  }
};
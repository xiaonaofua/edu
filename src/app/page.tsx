import Link from 'next/link';
import { 
  BookOpen, 
  GraduationCap, 
  MapPin, 
  Users, 
  FileText, 
  Smartphone,
  Heart,
  ArrowRight 
} from 'lucide-react';

export default function HomePage() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section - Mobile First */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 px-4 py-8 sm:py-12 lg:py-16">
        <div className="container-responsive">
          <div className="text-center space-y-6">
            {/* Main heading optimized for mobile */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              山区孩子的
              <span className="text-primary-600 block sm:inline sm:ml-2">
                未来之路
              </span>
            </h1>
            
            {/* Subtitle with good contrast */}
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              发现职业机会 • 获取教育资源 • 规划人生道路
            </p>
            
            {/* Mobile-optimized CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link 
                href="/careers"
                className="btn-primary w-full sm:w-auto text-center"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                探索职业机会
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              
              <Link 
                href="/scholarships"
                className="btn-secondary w-full sm:w-auto text-center"
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                查看奖学金
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Card Grid */}
      <section className="px-4 py-12 bg-white">
        <div className="container-responsive">
          <h2 className="text-heading text-center mb-8">
            我们为你提供
          </h2>
          
          {/* Mobile-first responsive grid */}
          <div className="grid-cards">
            {/* Career Information Card */}
            <div className="card group hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-subheading mb-2">真实职业信息</h3>
                  <p className="text-body text-sm">
                    中国、日本、美国的工作薪资水平、技能要求、入行渠道等详细信息
                  </p>
                </div>
              </div>
            </div>

            {/* Educational Resources Card */}
            <div className="card group hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center group-hover:bg-success-200 transition-colors">
                  <GraduationCap className="w-6 h-6 text-success-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-subheading mb-2">教育资源</h3>
                  <p className="text-body text-sm">
                    奖学金、助学金申请指南，志愿者机会信息
                  </p>
                </div>
              </div>
            </div>

            {/* Practical Tools Card */}
            <div className="card group hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-warning-100 rounded-lg flex items-center justify-center group-hover:bg-warning-200 transition-colors">
                  <FileText className="w-6 h-6 text-warning-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-subheading mb-2">实用工具</h3>
                  <p className="text-body text-sm">
                    简历模板、面试技巧、签证信息等实用指导
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Optimized Card */}
            <div className="card group hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <Smartphone className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-subheading mb-2">手机优先</h3>
                  <p className="text-body text-sm">
                    专为手机用户设计，支持离线阅读和语音功能
                  </p>
                </div>
              </div>
            </div>

            {/* Community Card */}
            <div className="card group hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-subheading mb-2">社区支持</h3>
                  <p className="text-body text-sm">
                    志愿者指导、同伴交流、经验分享平台
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Card */}
            <div className="card group hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-subheading mb-2">可信赖</h3>
                  <p className="text-body text-sm">
                    真实数据，定期更新，未成年保护机制
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section - Mobile Optimized */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="container-responsive">
          <h2 className="text-heading text-center mb-8">
            从这里开始
          </h2>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link 
              href="/careers"
              className="p-6 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-200 text-center group"
            >
              <BookOpen className="w-8 h-8 text-primary-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-2">探索职业</h3>
              <p className="text-sm text-gray-600">了解不同工作的要求和机会</p>
            </Link>

            <Link 
              href="/scholarships"
              className="p-6 bg-white rounded-lg border border-gray-200 hover:border-success-300 hover:shadow-md transition-all duration-200 text-center group"
            >
              <GraduationCap className="w-8 h-8 text-success-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-2">奖学金</h3>
              <p className="text-sm text-gray-600">寻找适合的教育资助机会</p>
            </Link>

            <Link 
              href="/tools"
              className="p-6 bg-white rounded-lg border border-gray-200 hover:border-warning-300 hover:shadow-md transition-all duration-200 text-center group"
            >
              <FileText className="w-8 h-8 text-warning-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-2">实用工具</h3>
              <p className="text-sm text-gray-600">简历模板和面试指导</p>
            </Link>

            <Link 
              href="/volunteers"
              className="p-6 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-200 text-center group"
            >
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-2">志愿者</h3>
              <p className="text-sm text-gray-600">寻求指导和帮助</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Bottom Padding */}
      <div className="h-6"></div>
    </main>
  );
}
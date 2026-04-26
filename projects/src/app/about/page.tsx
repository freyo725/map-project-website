import { Card, CardContent } from '@/components/ui/card';

// 北大红配色
const PKU_RED = '#9B1B30';

function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-white" style={{ backgroundColor: PKU_RED }}>
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-slate-800">项目介绍</h2>
        <p className="mx-auto max-w-2xl text-slate-600">
          了解我们如何系统追踪中国应用心理专业硕士的职业发展
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card className="text-center transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <IconWrapper>
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </IconWrapper>
            <h3 className="mb-3 text-lg font-semibold text-slate-800">
              全面追踪个人成长和职业发展
            </h3>
            <p className="text-sm text-slate-600">
              我们构建了覆盖全国应用心理专业硕士（MAP）项目的就读学生队列，持续追踪他们从备考、读研到毕业工作的全过程，真实记录发展轨迹。
            </p>
          </CardContent>
        </Card>

        <Card className="text-center transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <IconWrapper>
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </IconWrapper>
            <h3 className="mb-3 text-lg font-semibold text-slate-800">
              探寻影响职业发展的关键因素
            </h3>
            <p className="text-sm text-slate-600">
              我们想探究在MAP职业探索和发展的过程中，学生就读体验、个人成长、外部环境等关键经历如何塑造MAP学生的职业选择、形成、发展与稳定。
            </p>
          </CardContent>
        </Card>

        <Card className="text-center transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <IconWrapper>
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </IconWrapper>
            <h3 className="mb-3 text-lg font-semibold text-slate-800">
              为改进培养就业提供系统依据
            </h3>
            <p className="text-sm text-slate-600">
              我们不仅记录现状，也希望推动改变。研究结果将为高校优化MAP培养方案、为行业改进支持体系、为学生进行职业规划提供更有依据的参考。
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

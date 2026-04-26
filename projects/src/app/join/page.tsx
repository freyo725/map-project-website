import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// 北大红配色
const PKU_RED = '#9B1B30';

function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-white" style={{ backgroundColor: PKU_RED }}>
      {children}
    </div>
  );
}

export default function JoinPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-slate-800">加入我们</h2>
        <p className="mx-auto max-w-2xl text-slate-600">
          成为中国应用心理专业硕士职业追踪研究的一员
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card className="text-center transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <IconWrapper>
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </IconWrapper>
            <h3 className="mb-3 text-lg font-semibold text-slate-800">
              专业发展支持
            </h3>
            <p className="text-sm text-slate-600">
              通过深度访谈和问卷调查梳理个人职业发展和成长轨迹，并获得个性化评估和反馈。
            </p>
          </CardContent>
        </Card>

        <Card className="text-center transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <IconWrapper>
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </IconWrapper>
            <h3 className="mb-3 text-lg font-semibold text-slate-800">
              朋辈交流平台
            </h3>
            <p className="text-sm text-slate-600">
              结交全国各地MAP同学，获取最新行业发展信息，并有机会参与由北京大学临床心理学专业学生带领的朋辈支持团体。
            </p>
          </CardContent>
        </Card>

        <Card className="text-center transition-all hover:shadow-lg">
          <CardContent className="p-6">
            <IconWrapper>
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </IconWrapper>
            <h3 className="mb-3 text-lg font-semibold text-slate-800">
              学术成果共享
            </h3>
            <p className="text-sm text-slate-600">
              优先获取研究成果摘要，有机会参与后续学术研讨，共同推动行业发展。
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-12">
        <Card className="mx-auto max-w-2xl">
          <CardContent className="p-8 text-center">
            <h3 className="mb-6 text-xl font-semibold text-slate-800">如何参与</h3>
            <div className="mb-8 space-y-4">
              <Button size="lg" className="w-full max-w-md text-white hover:opacity-90" style={{ backgroundColor: PKU_RED }}>
                作为参与者加入研究队列
              </Button>
              <p className="text-sm text-slate-500">
                点击上方按钮填写招募问卷
              </p>
            </div>
            <div className="border-t pt-6">
              <Button size="lg" variant="outline" className="w-full max-w-md border-2 hover:bg-slate-50" style={{ borderColor: PKU_RED, color: PKU_RED }}>
                作为研究者加入研究团队
              </Button>
              <p className="mt-4 text-sm text-slate-500">
                如有意向加入研究团队，请发送邮件至：<br />
                <a href="mailto:chinamap_pku@163.com" className="font-medium hover:underline" style={{ color: PKU_RED }}>
                  chinamap_pku@163.com
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-12">
        <Card style={{ backgroundColor: `${PKU_RED}10` }}>
          <CardContent className="p-6">
            <h3 className="mb-4 text-center font-semibold text-slate-800">
              研究报酬与捐赠
            </h3>
            <p className="text-center text-sm text-slate-600">
              完整参与研究的志愿者会获得相应报酬，同时报酬也可以捐赠于我们目前正在筹划为MAP毕业生建设的新手咨询师黄页平台，期待得到你的建议和反馈。
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

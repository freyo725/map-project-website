import { Card, CardContent } from '@/components/ui/card';

// 北大红配色
const PKU_RED = '#9B1B30';

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-slate-800">联系我们</h2>
        <p className="mx-auto max-w-2xl text-slate-600">
          如有任何问题，欢迎联系我们
        </p>
      </section>

      <div className="mx-auto max-w-2xl space-y-6">
        <Card>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full text-white" style={{ backgroundColor: PKU_RED }}>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">电子邮箱</h3>
                  <a href="mailto:chinamap_pku@163.com" className="hover:underline" style={{ color: PKU_RED }}>
                    chinamap_pku@163.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full text-white" style={{ backgroundColor: PKU_RED }}>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">通讯地址</h3>
                  <p className="text-slate-600">北京大学哲学楼</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full text-white" style={{ backgroundColor: PKU_RED }}>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">工作时间</h3>
                  <p className="text-slate-600">周一至周五 09:00 - 17:00</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card style={{ backgroundColor: `${PKU_RED}10` }}>
          <CardContent className="p-6 text-center">
            <h3 className="mb-3 font-semibold text-slate-800">项目负责人</h3>
            <p className="mb-2 text-slate-600">
              符仲芳 研究员
            </p>
            <p className="text-sm text-slate-500">
              北京大学心理与认知科学学院
            </p>
            <a href="mailto:z.fu@pku.edu.cn" className="mt-3 inline-block text-sm hover:underline" style={{ color: PKU_RED }}>
              z.fu@pku.edu.cn
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-sm text-slate-500">
              感谢各位志愿参与的同学的贡献，我们将珍惜在此过程中所建立的研究关系，进一步促进MAP项目的健康发展。
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

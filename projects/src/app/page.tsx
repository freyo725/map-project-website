import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

// 北大红配色
const PKU_RED = '#9B1B30';

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* 简介 */}
      <section className="text-center">
        <Card className="mx-auto max-w-3xl">
          <CardContent className="p-8">
            <p className="text-lg text-slate-600 leading-relaxed">
              本研究旨在系统追踪中国应用心理专业硕士（Master of Applied Psychology, MAP）的职业发展路径，探索专业培养与行业需求的匹配度，为学科建设、人才培养和行业发展提供实证依据。
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 项目进展 */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-800">项目进展</h2>
          <Link href="/progress" className="text-sm font-medium hover:underline" style={{ color: PKU_RED }}>
            查看详情 →
          </Link>
        </div>
        <Card className="border-l-4" style={{ borderLeftColor: PKU_RED }}>
          <CardContent className="p-6">
            <h3 className="mb-3 font-semibold text-slate-800">项目已完成研究队列招募及第一轮访谈和问卷调查</h3>
            <p className="text-sm text-slate-600">
              截至2026年3月，项目已完成研究队列招募及第一轮访谈和问卷调查。研究队列共241人，涵盖了华北、华中、华东、华南、西南和西北地区共31个高校。
            </p>
            <p className="mt-4 text-sm text-slate-600">
              研究方案已通过北京大学心理与认知科学学院伦理委员会审批（编号：#2024-06-03）
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 项目介绍 */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-800">项目介绍</h2>
          <Link href="/about" className="text-sm font-medium hover:underline" style={{ color: PKU_RED }}>
            查看详情 →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="text-center transition-all hover:shadow-md">
            <CardContent className="p-4">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full text-white" style={{ backgroundColor: PKU_RED }}>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-800">全面追踪</h3>
              <p className="mt-1 text-xs text-slate-600">持续追踪MAP学生从备考到毕业工作的全过程</p>
            </CardContent>
          </Card>
          <Card className="text-center transition-all hover:shadow-md">
            <CardContent className="p-4">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full text-white" style={{ backgroundColor: PKU_RED }}>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-800">探寻关键因素</h3>
              <p className="mt-1 text-xs text-slate-600">探究影响MAP学生职业发展的关键因素</p>
            </CardContent>
          </Card>
          <Card className="text-center transition-all hover:shadow-md">
            <CardContent className="p-4">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full text-white" style={{ backgroundColor: PKU_RED }}>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-800">提供系统依据</h3>
              <p className="mt-1 text-xs text-slate-600">为高校优化培养方案提供参考</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 加入我们 */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-800">加入我们</h2>
          <Link href="/join" className="text-sm font-medium hover:underline" style={{ color: PKU_RED }}>
            查看详情 →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="text-center transition-all hover:shadow-md">
            <CardContent className="p-4">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full text-white" style={{ backgroundColor: PKU_RED }}>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-800">专业发展支持</h3>
              <p className="mt-1 text-xs text-slate-600">获得个性化评估和反馈</p>
            </CardContent>
          </Card>
          <Card className="text-center transition-all hover:shadow-md">
            <CardContent className="p-4">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full text-white" style={{ backgroundColor: PKU_RED }}>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-800">朋辈交流平台</h3>
              <p className="mt-1 text-xs text-slate-600">结交全国各地MAP同学</p>
            </CardContent>
          </Card>
          <Card className="text-center transition-all hover:shadow-md">
            <CardContent className="p-4">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full text-white" style={{ backgroundColor: PKU_RED }}>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-800">学术成果共享</h3>
              <p className="mt-1 text-xs text-slate-600">优先获取研究成果摘要</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 团队介绍 */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-800">团队介绍</h2>
          <Link href="/team" className="text-sm font-medium hover:underline" style={{ color: PKU_RED }}>
            查看详情 →
          </Link>
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white" style={{ backgroundColor: PKU_RED }}>
                符
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">符仲芳</h3>
                <p className="text-sm text-slate-600">北京大学心理与认知科学学院研究员，博士生导师</p>
              </div>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-4">
              <div className="text-center">
                <p className="text-sm font-medium text-slate-800">张玉斌</p>
                <p className="text-xs text-slate-500">2023级MAP</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-slate-800">任晓青</p>
                <p className="text-xs text-slate-500">2024级MAP</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-slate-800">郭传璇</p>
                <p className="text-xs text-slate-500">2025级MAP</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-slate-800">郝熙鸣</p>
                <p className="text-xs text-slate-500">2026级博士</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 联系我们 */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-800">联系我们</h2>
          <Link href="/contact" className="text-sm font-medium hover:underline" style={{ color: PKU_RED }}>
            查看详情 →
          </Link>
        </div>
        <Card style={{ backgroundColor: `${PKU_RED}10` }}>
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: PKU_RED }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>chinamap_pku@163.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: PKU_RED }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>北京大学哲学楼</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: PKU_RED }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>周一至周五 09:00-17:00</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

import { Card, CardContent } from '@/components/ui/card';

// 北大红配色
const PKU_RED = '#9B1B30';

export default function TeamPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-slate-800">团队介绍</h2>
        <p className="mx-auto max-w-2xl text-slate-600">
          了解我们的研究团队
        </p>
      </section>

      <Card className="mx-auto max-w-4xl">
        <CardContent className="p-8">
          <div className="mb-8 border-b pb-8">
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white" style={{ backgroundColor: PKU_RED }}>
                符
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800">符仲芳</h3>
                <p className="text-sm text-slate-600">北京大学心理与认知科学学院研究员，博士生导师</p>
              </div>
            </div>
            <div className="ml-20 space-y-3 text-slate-600">
              <p className="text-sm leading-relaxed">
                符仲芳研究员于2016年毕业于北京师范大学心理学院，获得学士（2013）、硕士（2016）学位，专业方向为临床心理学。2021年毕业于阿姆斯特丹大学附属医院精神科，获得博士学位。2022年加入北京大学至今。
              </p>
              <p className="text-sm leading-relaxed">
                符仲芳研究员实验室主要聚焦于如何通过跨诊断的视角来促进对情绪障碍的理解和干预，实务方向以CBT为主进行整合，秉持循证干预的理念，将研究中发现的可改变元素转化进入实践领域中。在此基础上，希望进一步促进临床心理学专业硕士的培养与循证实践。
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-slate-800">研究团队成员</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border p-4 text-center transition-all hover:shadow-md">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white" style={{ backgroundColor: PKU_RED }}>
                  张
                </div>
                <h4 className="font-medium text-slate-800">张玉斌</h4>
                <p className="mt-1 text-xs text-slate-600">
                  北京大学心理与认知科学学院<br />
                  2023级应用心理专业硕士
                </p>
              </div>
              <div className="rounded-lg border p-4 text-center transition-all hover:shadow-md">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white" style={{ backgroundColor: PKU_RED }}>
                  任
                </div>
                <h4 className="font-medium text-slate-800">任晓青</h4>
                <p className="mt-1 text-xs text-slate-600">
                  北京大学心理与认知科学学院<br />
                  2024级应用心理专业硕士
                </p>
              </div>
              <div className="rounded-lg border p-4 text-center transition-all hover:shadow-md">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white" style={{ backgroundColor: PKU_RED }}>
                  郭
                </div>
                <h4 className="font-medium text-slate-800">郭传璇</h4>
                <p className="mt-1 text-xs text-slate-600">
                  北京大学心理与认知科学学院<br />
                  2025级应用心理专业硕士
                </p>
              </div>
              <div className="rounded-lg border p-4 text-center transition-all hover:shadow-md">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white" style={{ backgroundColor: PKU_RED }}>
                  郝
                </div>
                <h4 className="font-medium text-slate-800">郝熙鸣</h4>
                <p className="mt-1 text-xs text-slate-600">
                  北京大学心理与认知科学学院<br />
                  2026级博士研究生
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mx-auto max-w-4xl" style={{ backgroundColor: `${PKU_RED}10` }}>
        <CardContent className="p-6 text-center">
          <h3 className="mb-3 font-semibold text-slate-800">研究发起单位</h3>
          <p className="text-slate-600">
            北京大学临床与健康心理系 · 一抹阳光实验室
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

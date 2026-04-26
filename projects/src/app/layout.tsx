import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';
import TabNavigation from '@/components/tab-navigation';

export const metadata: Metadata = {
  title: '中国应用心理专业硕士职业追踪调查研究',
  description: '系统追踪中国应用心理专业硕士（MAP）的职业发展路径，探索专业培养与行业需求的匹配度',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="zh-CN">
      <body className="antialiased min-h-screen bg-slate-50">
        {isDev && <Inspector />}
        <TabNavigation />
        <main className="mx-auto max-w-6xl px-4 py-8">
          {children}
        </main>
        <footer className="bg-slate-800 py-8 text-white">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <p className="text-sm text-slate-300">
              中国应用心理专业硕士职业追踪调查研究 © 2024-2026
            </p>
            <p className="mt-2 text-xs text-slate-400">
              由北京大学临床与健康心理系一抹阳光实验室发起
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

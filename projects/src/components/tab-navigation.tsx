'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// 北大红配色
const PKU_RED = '#9B1B30';

const tabs = [
  { name: '首页', path: '/' },
  { name: '项目进展', path: '/progress' },
  { name: '项目介绍', path: '/about' },
  { name: '加入我们', path: '/join' },
  { name: '团队介绍', path: '/team' },
  { name: '联系我们', path: '/contact' },
];

export default function TabNavigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-lg font-bold md:text-xl" style={{ color: PKU_RED }}>
            中国应用心理专业硕士职业追踪调查研究
          </h1>
        </div>
        <nav className="-mb-px overflow-x-auto">
          <div className="flex space-x-1 md:space-x-4">
            {tabs.map((tab) => {
              const isActive = pathname === tab.path;
              return (
                <Link
                  key={tab.path}
                  href={tab.path}
                  className={`
                    whitespace-nowrap px-3 py-3 text-sm font-medium transition-colors
                    ${isActive
                      ? 'border-b-2 text-white'
                      : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent'
                    }
                  `}
                  style={isActive ? { backgroundColor: PKU_RED, borderBottomColor: PKU_RED } : {}}
                >
                  {tab.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}

import { DocsLayout } from '@/components/layout/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  const { nav, ...base } = baseOptions();

  return (
    <DocsLayout
      {...base}
      nav={{ ...nav, mode: 'top' }}
      tree={source.pageTree}
    >
      {children}
    </DocsLayout>
  );
}

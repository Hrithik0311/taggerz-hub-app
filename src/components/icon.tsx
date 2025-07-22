import type { LucideProps } from 'lucide-react';
import dynamic from 'next/dynamic';
import { icons } from 'lucide-react';

export interface IconProps extends LucideProps {
  name: keyof typeof icons;
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(() => import('lucide-react').then((mod) => mod[name] as React.ComponentType<LucideProps>));

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon {...props} />;
};

export default Icon;

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { fadeInUp } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionReveal({ children, className, id }: SectionRevealProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={fadeInUp}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}

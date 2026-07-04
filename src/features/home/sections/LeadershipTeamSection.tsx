import { motion } from 'framer-motion';
import { team } from '@/data/team';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { useLanguage } from '@/hooks/useLanguage';
import { Mail, Linkedin } from 'lucide-react';
import { useMousePosition } from '@/hooks/useMousePosition';

function LeadershipCard({
  name,
  role,
  roleEn,
  roleAr,
  bio,
  bioEn,
  index,
  isRtl,
}: {
  name: string;
  role: string;
  roleEn: string;
  roleAr: string;
  bio: string;
  bioEn: string;
  index: number;
  isRtl: boolean;
}) {
  const { coords, handleMouseMove } = useMousePosition();
  const initials = name.slice(0, 2).toUpperCase();

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-premium transition-all duration-300 hover:shadow-premium-hover hover:border-primary/30 hover:-translate-y-1 flex flex-col items-center text-center"
    >
      {/* Dynamic Cursor Light Source */}
      <div
        className="absolute w-72 h-72 rounded-full bg-primary/4 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${coords.x}px`,
          top: `${coords.y}px`,
        }}
      />

      {/* Abstract Portrait Illustration with initials */}
      <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-primary/20 via-primary/5 to-secondary/25 text-2xl font-bold text-primary border border-primary/20 shadow-inner group-hover:scale-105 transition-transform duration-500 overflow-hidden">
        {/* Luxury geometric circles */}
        <div className="absolute inset-2 rounded-full border border-primary/10 animate-spin-slow pointer-events-none" />
        <div className="absolute inset-4 rounded-full border border-dashed border-primary/10 pointer-events-none" />
        <span className="relative z-10 font-mono tracking-wider">{initials}</span>
      </div>

      {/* Name and Roles */}
      <div className="space-y-1.5 w-full">
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <p className="text-xs sm:text-sm font-semibold text-primary font-mono tracking-wide uppercase">
          {isRtl ? roleAr : roleEn}
        </p>
        
        <span className="inline-block text-xs font-semibold text-muted-foreground bg-muted px-2.5 py-0.5 rounded border border-border/60">
          {role}
        </span>
      </div>

      {/* Biography */}
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground flex-1">
        {isRtl ? bio : bioEn}
      </p>

      {/* Interactive Contacts inside Card */}
      <div className="mt-6 pt-4 border-t border-border/40 w-full flex items-center justify-center gap-3">
        <button
          className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-white transition-all focus-visible:ring-1 focus-visible:ring-primary"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="h-4 w-4" />
        </button>
        <button
          className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-white transition-all focus-visible:ring-1 focus-visible:ring-primary"
          aria-label="Send Email"
        >
          <Mail className="h-4 w-4" />
        </button>
      </div>

    </motion.article>
  );
}

export function LeadershipTeamSection() {
  const { locale, copy } = useLanguage();
  const isRtl = locale === 'ar';

  return (
    <section className="section-padding bg-noise bg-card border-t border-border/40 relative">
      <div className="section-container">
        
        {/* Section Heading */}
        <SectionHeading
          title={copy.leadership.title}
          subtitle={copy.leadership.subtitle}
          description={copy.leadership.description}
        />

        {/* Leadership Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {team.map((member, idx) => (
            <LeadershipCard
              key={member.id}
              name={isRtl ? member.name : member.nameEn}
              role={member.role}
              roleEn={member.roleEn}
              roleAr={member.roleAr}
              bio={member.bio}
              bioEn={member.bioEn}
              index={idx}
              isRtl={isRtl}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

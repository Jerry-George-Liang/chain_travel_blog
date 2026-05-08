export default function SectionHeading({ 
  title, 
  subtitle, 
  align = 'center',
  className = '' 
}) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-light mb-4">
        {title}
      </h2>
      
      <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-neon-violet to-transparent rounded-sm" />
        <div className="w-2 h-2 rounded-full bg-gradient-to-br from-neon-purple to-neon-cyan shadow-glow-purple" />
        <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-neon-violet to-transparent rounded-sm" />
      </div>
      
      {subtitle && (
        <p className="text-sm font-normal text-muted tracking-wider uppercase">
          {subtitle}
        </p>
      )}
    </div>
  );
}

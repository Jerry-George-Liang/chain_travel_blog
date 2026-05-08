const statusVariants = {
  completed: 'bg-green-500/15 text-green-400',
  'in-progress': 'bg-yellow-500/15 text-yellow-400',
  draft: 'bg-gray-500/15 text-gray-400'
};

export default function Badge({ 
  children, 
  variant = 'date', 
  status,
  className = '' 
}) {
  const baseStyle = 'inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium';
  
  if (variant === 'status' && status) {
    return (
      <span className={`${baseStyle} ${statusVariants[status]} ${className}`}>
        {children}
      </span>
    );
  }

  return (
    <span className={`${baseStyle} bg-neon-cyan/15 text-neon-cyan ${className}`}>
      {children}
    </span>
  );
}

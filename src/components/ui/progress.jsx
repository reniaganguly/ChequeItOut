import React from 'react';

// Utility function to merge classes (simplified version)
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-pink-200",
      className
    )}
    {...props}
  >
    <div
      className="h-full w-full flex-1 bg-pink-500 transition-all duration-500 ease-out"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </div>
));
Progress.displayName = "Progress";

export { Progress };

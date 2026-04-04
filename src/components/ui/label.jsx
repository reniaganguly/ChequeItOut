import React from 'react';

// Utility function to merge classes
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-900",
      className
    )}
    {...props}
  />
));
Label.displayName = "Label";

export { Label };

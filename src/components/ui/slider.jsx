import React from 'react';

// Utility function to merge classes
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const Slider = React.forwardRef(({ 
  className = "", 
  value = [0], 
  onValueChange, 
  max = 100, 
  min = 0, 
  step = 1, 
  ...props 
}, ref) => {
  const currentValue = value[0];

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (onValueChange) {
      onValueChange([newValue]);
    }
  };

  return (
    <input
      ref={ref}
      type="range"
      min={min}
      max={max}
      step={step}
      value={currentValue}
      onChange={handleChange}
      className={cn("w-full h-2 bg-pink-200 rounded-full appearance-none cursor-pointer custom-slider", className)}
      {...props}
    />
  );
});

Slider.displayName = "Slider";

export { Slider };

import React from 'react';

const Button = ({ 
  children, 
  variant = "default", 
  size = "default", 
  onClick, 
  disabled = false, 
  className = "",
  ...props 
}) => {
  // Base button styles
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  // Variant styles
  const variants = {
    default: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700 hover:text-gray-900",
    outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700",
    secondary: "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary",
  };
  
  // Size styles
  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    default: "px-4 py-2 text-sm rounded-lg",
    lg: "px-6 py-3 text-base rounded-lg",
  };
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };

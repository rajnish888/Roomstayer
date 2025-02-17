import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, placeholder, ...props }, ref) => {
  return (
    (<input
      type={type}
      placeholder={placeholder}
      className={cn(
        "flex h-[50px] w-full rounded-lg border border-input bg-[#F9F9F9] text-black px-4 py-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }

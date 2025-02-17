"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
  <label className="flex items-center space-x-2 cursor-pointer">
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "h-4 w-4 rounded border-2 border-blue-500 flex items-center justify-center transition-colors duration-200 focus:outline-none  focus:ring-blue-500",
        "data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator>
        <Check className="h-3 w-3 text-white" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
   
  </label>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }

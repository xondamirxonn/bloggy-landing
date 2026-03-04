import { cn } from "@/lib/utils"
import * as React from "react"


export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mx-auto w-full max-w-300", className)}
        style={{
          paddingLeft: "clamp(0.938rem, 0.321vw + 0.865rem, 1.25rem)",
          paddingRight: "clamp(0.938rem, 0.321vw + 0.865rem, 1.25rem)",
        }}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = "Container"

export { Container }

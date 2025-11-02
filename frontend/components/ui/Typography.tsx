import { cva, type VariantProps } from "class-variance-authority";
import { ReactNode, ElementType } from "react";
import { cn } from "@/lib/utils";


const textVariants = cva("", {
  variants: {
    size: {
      normal: "text-[14px]",
      base: "text-base",
      sm: "text-sm",
      xs: "text-xs",
      lg: "text-lg"
    },
    weight: {
      normal: "font-base",
      bold: "font-bold",
      black: "font-black",
      medium: "font-medium",
    },
    color: {
      gray: "text-gray-500",
      gray_700: "text-gray-700",
      gray_900: "text-gray-900",
      white: "text-white",
      primary: "text-primary-500",
      primary_600: "text-primary-600",
      primary_700: "text-primary-700",
    },
    variant: {
      p: "",
      title: "font-medium text-gray-900 text-[30px]",
      containerTitle: "font-medium text-gray-800 text-base",
      sectionTitle: "font-medium text-gray-900 text-[18px]",
      sectionTitle2: "font-medium text-gray-700 text-[16px]",
      sectionTitle2Var: "font-normal text-gray-500 text-[16px]",
    },
  },
  defaultVariants: {
    variant: "p",
    weight: "normal",
    size: "normal",
    color: "gray",
  },
});

type TextProps = {
  children: ReactNode;
  className?: string;
} & VariantProps<typeof textVariants>;

export default function Typography({ children, className, color, variant, size, weight }: TextProps) {

  let Component: ElementType = "p";
  if (variant === "title") {
    Component = "h2";
  }

  return (
    <Component className={cn(textVariants({ weight, size, color, variant }), className)}>
      {children}
    </Component>
  );
}

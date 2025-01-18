"use client";

import React from "react";
import { Button } from "./ui/button";
import { PRODUCT_CATEGORIES } from "@/config";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

//

const NavItem = ({ category, isAnyOpen, isOpen, handleOpen }: NavItemProps) => {
  return (
    <div className="relative flex items-center">
      <Button
        className="gap-1.5"
        variant={isOpen ? "secondary" : "ghost"}
        onClick={handleOpen}
      >
        {category.label}
        <ChevronDown
          className={cn("h-4 w-4 transition-all text-muted-foreground", {
            "-rotate-180": isOpen,
          })}
        />
      </Button>
    </div>
  );
};

export default NavItem;

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        <li>
          <Link href="/" className="font-medium text-blue-700 hover:text-blue-800">
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              <ChevronRight aria-hidden className="size-3.5 text-slate-400" />
              {item.href && !isLast ? (
                <Link href={item.href} className="font-medium text-blue-700 hover:text-blue-800">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className="text-slate-500">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

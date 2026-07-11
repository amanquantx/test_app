import { Link } from "wouter";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div className="border border-accent h-full p-8 transition-all duration-300 shadow-lg relative overflow-hidden rounded-none flex flex-col bg-[#20242c]">
        <div className="absolute top-0 right-0 p-4 opacity-40 transition-opacity text-white">
          <Icon size={120} />
        </div>
        
        <div className="mb-6 inline-flex p-4 bg-accent text-white transition-colors rounded-none w-fit">
          <Icon size={32} />
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-accent transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-300 leading-relaxed mb-8 flex-grow">
          {description}
        </p>
        
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent mt-auto transition-colors">
          Explore Service <ArrowRight className="h-4 w-4 transition-transform translate-x-1" />
        </div>
        
        {/* Accent bar at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-accent transition-all duration-300" />
      </div>
    </Link>
  );
}

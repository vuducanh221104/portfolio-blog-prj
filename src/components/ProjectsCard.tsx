import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  value: {
    title: string;
    description: string;
    tags: string[];
    link: string;
    image?: string;
  };
  num: number;
}

const ProjectCards: React.FC<ProjectCardProps> = ({ value, num }) => {
  const gradientColors = [
    "from-blue-500/10 via-purple-500/10 to-pink-500/10",
    "from-emerald-500/10 via-teal-500/10 to-cyan-500/10",
    "from-orange-500/10 via-red-500/10 to-rose-500/10",
  ];

  const borderColors = [
    "border-blue-500/20 hover:border-blue-500/40",
    "border-emerald-500/20 hover:border-emerald-500/40",
    "border-orange-500/20 hover:border-orange-500/40",
  ];

  const gradientIndex = num % 3;

  return (
    <Card 
      className={cn(
        "group relative w-full h-full flex flex-col overflow-hidden",
        "bg-gradient-to-br",
        gradientColors[gradientIndex],
        "border-2 transition-all duration-500",
        borderColors[gradientIndex],
        "hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
      )}
    >
      {/* Decorative gradient overlay */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        "bg-gradient-to-br",
        gradientColors[gradientIndex]
      )} />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Project Image */}
        {value.image && (
          <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
            <Image
              src={value.image}
              alt={value.title}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <div className="absolute top-3 right-3 p-2 rounded-lg bg-background/80 backdrop-blur-sm group-hover:bg-background/90 transition-colors">
              <ExternalLink className="h-4 w-4 text-primary/60 group-hover:text-primary" />
            </div>
          </div>
        )}
        
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-bold text-primary group-hover:text-[#2f7df4] transition-colors">
            {value.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-grow flex flex-col gap-4 pb-4">
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {value.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {value.tags.map((tag: string, index: number) => {
              const tagStyles = {
                'Nextjs': 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
                'Freelancing': 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20',
                'Shadcn Ui': 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20',
                'Shadcnui': 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20',
                'Typescript': 'bg-blue-600/10 text-blue-800 dark:text-blue-300 border-blue-600/20',
                'MySQL': 'bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20',
                'Zustand': 'bg-purple-600/10 text-purple-800 dark:text-purple-300 border-purple-600/20',
                'Supabase': 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20',
                'Npx': 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20',
                'Library': 'bg-pink-500/10 text-pink-700 dark:text-pink-400 border-pink-500/20',
                'Zod': 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20',
                'React Hook Form': 'bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-500/20',
                'Redis': 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20',
                'Authjs': 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20',
              }[tag] || 'bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20';

              return (
                <span 
                  key={index}
                  className={cn(
                    "inline-flex items-center px-3 py-1 rounded-md text-xs font-medium",
                    "border transition-all duration-200",
                    "group-hover:scale-105",
                    tagStyles
                  )}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </CardContent>

        <CardFooter className="pt-4 border-t border-border/50">
          <Link
            href={value.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ 
                variant: "default", 
                size: "sm" 
              }),
              "w-full group/btn transition-all duration-300",
              "hover:shadow-lg hover:shadow-primary/20"
            )}
          >
            <span className="flex items-center justify-center gap-2">
              View Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </span>
          </Link>
        </CardFooter>
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </Card>
  );
};

export default ProjectCards;

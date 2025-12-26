import { portfolioConfig } from "@/config/portfolio.config";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ScrollReveal from "@/components/animation/ScrollReveal";
import Image from "next/image";

export default function BlogPage() {
  // Group posts by year
  const postsByYear = portfolioConfig.blogPosts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<number, typeof portfolioConfig.blogPosts>);

  const years = Object.keys(postsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Badge variant="secondary" className="gap-1.5 py-1 mb-4">
            <BookOpen className="h-4 w-4" />
            Blog
          </Badge>
          <Heading>My Blog</Heading>
          <p className="font-poppins text-lg text-muted-foreground mt-4">
            Thoughts, tutorials, and insights about web development, fullstack engineering, and technology.
          </p>
        </div>

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-primary">Blog</span>
        </nav>

        {/* Blog Posts by Year */}
        <div className="space-y-12">
          {years.map((year) => (
            <div key={year}>
              <ScrollReveal direction="fade" delay={0.1}>
                <h2 className="text-4xl font-bold text-primary mb-6">{year}</h2>
              </ScrollReveal>

              <div className="space-y-6">
                {postsByYear[year].map((post, index) => (
                  <ScrollReveal
                    key={post.slug}
                    direction="left"
                    delay={0.2 + index * 0.1}
                    randomDelay
                  >
                    <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                      <div className="flex flex-col md:flex-row gap-4">
                        {/* Image */}
                        <div className="relative w-full md:w-64 h-48 md:h-auto bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-t-lg md:rounded-l-lg md:rounded-tr-none overflow-hidden flex-shrink-0">
                          {post.image ? (
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, 256px"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-6xl font-bold text-gray-300 dark:text-gray-700 opacity-50">
                                {post.title.charAt(0)}
                              </div>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                          <div className="absolute bottom-2 right-2">
                            <Badge variant="secondary" className="text-xs backdrop-blur-sm bg-background/80">
                              #{post.tags[0]}
                            </Badge>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-6">
                          <CardHeader className="p-0 pb-3">
                            <Link
                              href={`/blog/${post.slug}`}
                              className="group-hover:text-primary transition-colors"
                            >
                              <h3 className="text-2xl font-bold text-primary group-hover:text-[#2f7df4] transition-colors">
                                {post.title}
                              </h3>
                            </Link>
                          </CardHeader>

                          <CardContent className="p-0 space-y-4">
                            <p className="text-muted-foreground leading-relaxed line-clamp-2">
                              {post.description}
                            </p>

                            {/* Metadata */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-2">
                              {post.tags.map((tag, tagIndex) => (
                                <Badge
                                  key={tagIndex}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  #{tag}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination placeholder */}
        <div className="mt-12 flex justify-center items-center gap-2">
          <span className="text-sm text-muted-foreground">Page 1</span>
        </div>
      </div>
    </div>
  );
}


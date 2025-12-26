import { portfolioConfig } from "@/config/portfolio.config";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/animation/ScrollReveal";

export function generateStaticParams() {
  return portfolioConfig.blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = portfolioConfig.blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <ScrollReveal direction="fade" delay={0.1}>
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </ScrollReveal>

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-primary">{slug}</span>
        </nav>

        {/* Header */}
        <ScrollReveal direction="fade" delay={0.2}>
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  #{tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {post.title}
            </h1>
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
          </div>
        </ScrollReveal>

        {/* Featured Image */}
        {post.image && (
          <ScrollReveal direction="fade" delay={0.3}>
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </ScrollReveal>
        )}

        {/* Content */}
        <ScrollReveal direction="fade" delay={0.4}>
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div className="font-poppins text-base md:text-lg leading-relaxed space-y-6">
              <p className="text-xl text-foreground font-medium">{post.description}</p>
              
              {post.content ? (
                <div 
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              ) : (
                <p className="text-muted-foreground">{post.description}</p>
              )}
            </div>
          </article>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal direction="fade" delay={0.5}>
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-sm font-semibold">Tags:</span>
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  #{tag}
                </Badge>
              ))}
            </div>
            <Link href="/blog">
              <Button variant="outline" className="w-full sm:w-auto">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Posts
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}


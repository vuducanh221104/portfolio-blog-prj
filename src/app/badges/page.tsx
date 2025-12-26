import { portfolioConfig } from "@/config/portfolio.config";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { Button } from "@/components/ui/button";

export default function BadgesPage() {
  return (
    <div className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Badge variant="secondary" className="gap-1.5 py-1 mb-4">
            <Award className="h-4 w-4" />
            Certifications & Badges
          </Badge>
          <Heading>My Certifications</Heading>
          <p className="font-poppins text-lg text-muted-foreground mt-4">
            Các chứng chỉ và badges tôi đã đạt được trong quá trình học tập và phát triển kỹ năng.
          </p>
        </div>

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-primary">Badges</span>
        </nav>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioConfig.certifications.map((cert, index) => (
            <ScrollReveal
              key={index}
              direction="left"
              delay={index * 0.1}
              randomDelay
            >
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 h-full flex flex-col">
                {/* Badge Image */}
                <div className="relative w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 flex items-center justify-center overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <CardHeader className="flex-grow">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-primary group-hover:text-[#2f7df4] transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </CardContent>

                <CardFooter className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Issued {cert.issued}</span>
                  </div>
                  <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      View
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}


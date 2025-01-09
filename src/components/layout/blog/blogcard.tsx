import { Button } from '../../ui/button'
import { ArrowRight } from "lucide-react"
import Link from 'next/link';
import { Badge } from '../../ui/badge';
import Image from 'next/image';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card'

type BlogCardProps = {
    PostTitle: string;
    PostSlug: string;
    PostDescription: string;
    PostCategory?: string;
    PostTags?: string[];
    PostImageURL?: string;
  };

const BlogCard = ({ PostTitle, PostSlug, PostDescription, PostCategory, PostTags, PostImageURL}: BlogCardProps) => {
    return (
      <Link href={PostSlug}>
        <Card className="border-2 border-border">
          <div className="rounded-lg overflow-hidden text-center relative">
            <CardHeader className="p-0 text-center">
                {PostImageURL &&
                <div className="relative w-full md:h-36 lg:h-48">
                <Image
                  className="hidden md:block lg:h-48 md:h-36 md:border-b-2 border-primary-border w-full object-cover object-center"
                  src="/placeholder.png"
                  alt="blog"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
                }
                
                {PostTags &&
                <div className="flex justify-start gap-2 flex-wrap p-4 mt-2">
                    {PostTags.map(
                        (tag, index) => 
                        (
                            <Badge key={index} className="bg-secondary-card text-on-secondary-card font-normal tracking-4x-wide text-xs border-secondary-border border">{tag}</Badge>
                        )
                    )}
                </div>}
                {PostCategory &&
                <CardDescription className="tracking-widest text-xs title-font font-medium text-on-primary-muted uppercase">
                    {PostCategory}
                </CardDescription>}
                <CardTitle className="sm:text-2xl text-xl font-medium text-on-primary-accent pt-0 pb-4 mx-4 hover:text-primary hover:underline hover:decoration-primary">
                    {PostTitle}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center leading-relaxed mb-0 pb-2 px-0 mx-4 break-normal whitespace-normal overflow-wrap break-word">
              {/* Wrapper div to center content and control alignment */}
              <div className="text-left max-w-md w-full">
                <p className="pb-4">{PostDescription}</p>
              </div>
            </CardContent>
          </div>
          </Card>
        </Link>
      );
}

export default BlogCard
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BlogPostType } from './blogpost.type';
import { BlogpostService } from './blogpost.service';
import { BlogPost } from './blogpost.schema';

@Resolver((of) => BlogPostType)
export class BlogPostResolver {
  constructor(private blogpostService: BlogpostService) {}

  @Query((returns) => BlogPostType)
  blogpost(@Args('id') id: string) {
    return this.blogpostService.getBlogPost(id);
  }

  @Mutation((returns) => BlogPostType)
  createBlogPost(
    @Args('title') title: string,
    @Args('content') content: string,
  ) {
    return this.blogpostService.createBlogPost(title, content);
  }
}
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BlogService } from './blog.service';
import { BlogPost } from './blog.model';
import { AuthService } from '../../auth/auth.service';
import { contentFadeInOut } from '../../app.animations';

@Component({
  selector: 'app-blogs',
  imports: [CommonModule],
  animations: [contentFadeInOut],
  templateUrl: './blogs.html',
  styleUrl: './blogs.css',
})
export class BlogsComponent implements OnInit {
  private blogService = inject(BlogService);
  private authService = inject(AuthService);
  private router = inject(Router);

  blogs: BlogPost[] = [];
  featuredBlog?: BlogPost;

  firstSection: BlogPost[] = [];
  secondSection: BlogPost[] = [];
  thirdSection: BlogPost[] = [];

  ngOnInit(): void {
    this.blogs = this.blogService.getAllBlogs();
    this.featuredBlog = this.blogService.getFeaturedBlog();

    const nonFeatured = this.blogs;

    this.firstSection = nonFeatured.slice(0, 6);
    this.secondSection = nonFeatured.slice(6, 9); 
    this.thirdSection = nonFeatured.slice(9); 
  }

  openBlog(blog: BlogPost) {
    this.router.navigate(['/insights', blog.slug]);
  }

  onExploreFleet() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/fleet']);
    } else {
      this.router.navigate(['/authentication']);
    }
  }

  onBecomeHost() {
    this.router.navigate(['/partner']);
  }
}

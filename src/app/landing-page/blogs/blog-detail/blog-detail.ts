import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BlogPost } from '../blog.model';
import { BlogService } from '../blog.service';
import { contentFadeInOut } from '../../../app.animations';

@Component({
  selector: 'app-blog-detail',
  imports: [],
  animations: [contentFadeInOut],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css',
})
export class BlogDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  private router = inject(Router);

  blog?: BlogPost;

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (!slug) {
      this.router.navigate(['/insights']);
      return;
    }

    const found = this.blogService.getBlogBySlug(slug);

    if (!found) {
      this.router.navigate(['/insights']);
      return;
    }

    this.blog = found;
  }

  goBack() {
    this.router.navigate(['/insights']);
  }
}

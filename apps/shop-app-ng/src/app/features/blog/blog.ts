import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BlogPost } from '../../data/blog-post-model'; 
import { PageTitle } from '../../shared/components/ui-components/page-title/page-title';
import { OrdinalDatePipe } from './utils/ordinal-date-pipe';

@Component({
  selector: 'app-blog',
  imports: [PageTitle, OrdinalDatePipe],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Blog {
  protected blogPosts: BlogPost[] = [
    {
      id: 'bf5ed41d-7251-4a3a-8e7f-05b5ffbbbd64',
      title: 'Introducing One-Click Checkout',
      date: 'Jan 28, 2026',
      content: 'We\'re excited to announce our new one-click checkout feature that makes purchasing faster and more convenient.'
    },
    {
      id: '1d51357b-4895-4abe-8266-61addb6d7c49',
      title: 'New Spring Collection 2026',
      date: 'Jan 15, 2026',
      content: 'Discover our latest spring collection featuring fresh designs, sustainable materials, and vibrant colors.'
    }
  ];
}

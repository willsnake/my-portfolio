import type { Meta, StoryObj } from '@storybook/preact';
import { CardBlog } from './CardBlog';
import type { CardBlogProps } from './types';

const meta: Meta<CardBlogProps> = {
  title: 'Design System/CardBlog',
  component: CardBlog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Blog post title',
    },
    description: {
      control: 'text',
      description: 'Blog post description',
    },
    imageSrc: {
      control: 'text',
      description: 'Image source URL',
    },
    imageAlt: {
      control: 'text',
      description: 'Image alt text',
    },
    buttonText: {
      control: 'text',
      description: 'Button text',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    onButtonClick: {
      action: 'button clicked',
      description: 'Button click handler',
    },
  },
};

export default meta;
type Story = StoryObj<CardBlogProps>;

// Default card
export const Default: Story = {
  args: {
    title: "How to do x & y tutorial really long article title",
    description: "Secure Development of web and Android apps based on OWASP standards. Development of Augmented Reality apps.",
    imageSrc: "https://willsnake.dev/assets/blog-placeholder.webp",
    imageAlt: "Blog post image",
    buttonText: "Read more",
    onButtonClick: () => console.log('Read more clicked'),
  },
};

// Short content
export const ShortContent: Story = {
  args: {
    title: "Quick Guide",
    description: "A brief overview of the topic.",
    imageSrc: "https://willsnake.dev/assets/blog-placeholder.webp",
    imageAlt: "Guide image",
    buttonText: "Learn more",
    onButtonClick: () => console.log('Learn more clicked'),
  },
};

// Long content
export const LongContent: Story = {
  args: {
    title: "The Complete Guide to Modern Web Development: Best Practices, Tools, and Techniques for Building Scalable Applications",
    description: "This comprehensive article covers everything you need to know about modern web development, including the latest frameworks, development tools, testing methodologies, deployment strategies, and performance optimization techniques that every developer should master.",
    imageSrc: "https://willsnake.dev/assets/blog-placeholder.webp",
    imageAlt: "Web development guide",
    buttonText: "Read full article",
    onButtonClick: () => console.log('Read full article clicked'),
  },
  parameters: {
    layout: 'padded',
  },
};

// Custom button text
export const CustomButton: Story = {
  args: {
    title: "Project Showcase",
    description: "Explore this amazing project and see how it was built.",
    imageSrc: "https://willsnake.dev/assets/blog-placeholder.webp",
    imageAlt: "Project showcase",
    buttonText: "View Project",
    onButtonClick: () => console.log('View Project clicked'),
  },
};

// With custom styling
export const WithCustomStyling: Story = {
  args: {
    title: "Featured Article",
    description: "This is a featured article with special styling.",
    imageSrc: "https://willsnake.dev/assets/blog-placeholder.webp",
    imageAlt: "Featured article",
    buttonText: "Read more",
    className: "border-2 border-blue",
    onButtonClick: () => console.log('Featured article clicked'),
  },
};

// Multiple cards showcase
export const MultipleCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
      <CardBlog
        title="Getting Started with React"
        description="Learn the fundamentals of React development."
        imageSrc="https://willsnake.dev/assets/blog-placeholder.webp"
        imageAlt="React tutorial"
        buttonText="Start Learning"
        onButtonClick={() => console.log('React tutorial clicked')}
      />
      <CardBlog
        title="Advanced TypeScript Tips"
        description="Master advanced TypeScript patterns and techniques."
        imageSrc="https://willsnake.dev/assets/blog-placeholder.webp"
        imageAlt="TypeScript guide"
        buttonText="Explore"
        onButtonClick={() => console.log('TypeScript guide clicked')}
      />
      <CardBlog
        title="CSS Grid Layout"
        description="Build responsive layouts with CSS Grid."
        imageSrc="https://willsnake.dev/assets/blog-placeholder.webp"
        imageAlt="CSS Grid tutorial"
        buttonText="Learn More"
        onButtonClick={() => console.log('CSS Grid tutorial clicked')}
      />
      <CardBlog
        title="Performance Optimization"
        description="Optimize your web applications for better performance."
        imageSrc="https://willsnake.dev/assets/blog-placeholder.webp"
        imageAlt="Performance guide"
        buttonText="Optimize Now"
        onButtonClick={() => console.log('Performance guide clicked')}
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

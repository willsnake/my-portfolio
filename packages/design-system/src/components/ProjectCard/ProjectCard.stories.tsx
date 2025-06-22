import type { Meta, StoryObj } from "@storybook/preact";
import { ProjectCard } from "./ProjectCard";

const meta: Meta<typeof ProjectCard> = {
  title: "Design System/ProjectCard",
  component: ProjectCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    projectLink: {
      control: "text",
    },
    topics: {
      control: "object",
    },
    className: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Project Card Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    projectLink: "#",
    topics: ["React", "TypeScript"],
  },
};

export const WithMultipleTopics: Story = {
  args: {
    title: "Multi-Topic Project",
    description: "This is a project with multiple technologies and topics.",
    projectLink: "https://github.com/username/project",
    topics: ["React", "TypeScript", "GraphQL", "Node.js", "PostgreSQL"],
  },
};

export const WithLongDescription: Story = {
  args: {
    title: "Detailed Project",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nisl nisl ultricies nisl, nec ultricies nisl nisl eget. Nullam euismod, nisl eget ultricies ultricies, nisl nisl ultricies nisl, nec ultricies nisl nisl eget. Nullam euismod, nisl eget ultricies ultricies, nisl nisl ultricies nisl, nec ultricies nisl nisl eget.",
    projectLink: "#",
    topics: ["React", "Firebase"],
  },
};

export const WithCustomClass: Story = {
  args: {
    title: "Custom Styled Project",
    description: "A project card with custom styling",
    projectLink: "#",
    topics: ["Design", "UI/UX"],
    className: "border border-dark-blue rounded-lg",
  },
};

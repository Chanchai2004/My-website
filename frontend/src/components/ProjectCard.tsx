import { ArrowRight } from 'lucide-react';
import Button from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  status: 'Completed' | 'In Progress' | 'Planning';
  image?: string;
  onClick?: () => void;
  projectId?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  status,
  image,
  onClick,
  projectId
}: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-[var(--success)]/20 text-[var(--success)]';
      case 'In Progress':
        return 'bg-[var(--warning)]/20 text-[var(--warning)]';
      case 'Planning':
        return 'bg-[var(--muted)]/20 text-[var(--muted-foreground)]';
      default:
        return 'bg-[var(--muted)]/20 text-[var(--muted-foreground)]';
    }
  };

  return (
    <div
      className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer relative overflow-hidden"
      onClick={onClick}
      data-project-id={projectId}
    >
      {/* Project Image (if provided) */}
      {image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Project Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
          {title}
        </h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
          {status}
        </span>
      </div>

      {/* Project Description */}
      <p className="text-[var(--muted-foreground)] mb-4 leading-relaxed">
        {description}
      </p>

      {/* Technology Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((technology, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-[var(--muted)] text-[var(--muted-foreground)] rounded-full text-xs font-medium"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* View Details Button */}
      <Button variant="outline" size="sm" className="w-full group">
        View Details
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
}

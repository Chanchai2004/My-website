'use client';

import { useEffect, useState } from 'react';
import { X, ExternalLink, Calendar, MapPin, Users, Eye } from 'lucide-react';
import Button from './Button';
import ImageGallery from './ImageGallery';
import { useLanguage } from './LanguageProvider';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    title: { en: string; th: string };
    description: { en: string; th: string };
    fullDescription: { en: string; th: string };
    tech: string[];
    status: 'Completed' | 'In Progress' | 'Planning';
    duration?: string;
    location?: { en: string; th: string };
    team?: { en: string; th: string };
    images?: string[];
    challenges?: { en: string[]; th: string[] };
    solutions?: { en: string[]; th: string[] };
    results?: { en: string[]; th: string[] };
    links?: {
      demo?: string;
      github?: string;
      website?: string;
    };
  } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const { language } = useLanguage();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--card)] rounded-xl border border-[var(--border)] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
          <div>
            <h2 className="text-2xl font-bold text-[var(--foreground)]">{project.title[language]}</h2>
            <div className="flex items-center gap-4 mt-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
              {project.duration && (
                <div className="flex items-center text-[var(--muted-foreground)]">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{project.duration}</span>
                </div>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[var(--muted)] rounded-lg transition-colors"
          >
            <X className="h-6 w-6 text-[var(--muted-foreground)]" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="p-6 space-y-6">
            {/* Project Images */}
            {project.images && project.images.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">
                    {language === 'en' ? 'Project Screenshots' : 'ภาพหน้าจอโปรเจกต์'}
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsGalleryOpen(true)}
                    className="group"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    {language === 'en' ? 'View Gallery' : 'ดูแกลเลอรี'}
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.slice(0, 4).map((image, index) => (
                    <div 
                      key={index} 
                      className="relative rounded-lg overflow-hidden cursor-pointer group"
                      onClick={() => {
                        setGalleryIndex(index);
                        setIsGalleryOpen(true);
                      }}
                    >
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      {index === 3 && project.images && project.images.length > 4 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">
                            +{project.images.length - 4} more
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Full Description */}
            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">
                {language === 'en' ? 'Project Overview' : 'ภาพรวมโปรเจกต์'}
              </h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                {project.fullDescription[language]}
              </p>
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-6">
              {project.location && (
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-[var(--primary)]" />
                  <span className="text-[var(--muted-foreground)]">{project.location[language]}</span>
                </div>
              )}
              {project.team && (
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-[var(--secondary)]" />
                  <span className="text-[var(--muted-foreground)]">{project.team[language]}</span>
                </div>
              )}
            </div>

            {/* Challenges & Solutions */}
            {project.challenges && project.challenges[language] && project.challenges[language].length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">
                  {language === 'en' ? 'Challenges' : 'ความท้าทาย'}
                </h3>
                <ul className="space-y-2">
                  {project.challenges[language].map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-[var(--error)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-[var(--muted-foreground)]">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.solutions && project.solutions[language] && project.solutions[language].length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">
                  {language === 'en' ? 'Solutions' : 'แนวทางแก้ไข'}
                </h3>
                <ul className="space-y-2">
                  {project.solutions[language].map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-[var(--success)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-[var(--muted-foreground)]">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Results */}
            {project.results && project.results[language] && project.results[language].length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">
                  {language === 'en' ? 'Results' : 'ผลลัพธ์'}
                </h3>
                <ul className="space-y-2">
                  {project.results[language].map((result, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-[var(--primary)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-[var(--muted-foreground)]">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technology Stack */}
            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">
                {language === 'en' ? 'Technology Stack' : 'เทคโนโลยีที่ใช้'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((technology, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[var(--muted)] text-[var(--muted-foreground)] rounded-full text-sm font-medium"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {project.links && (project.links.demo || project.links.github || project.links.website) && (
              <div>
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">
                  {language === 'en' ? 'Project Links' : 'ลิงก์โปรเจกต์'}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.links?.demo && (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => window.open(project.links?.demo, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {language === 'en' ? 'Live Demo' : 'ทดลองใช้'}
                    </Button>
                  )}
                  {project.links?.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.links?.github, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  )}
                  {project.links?.website && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.links?.website, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {language === 'en' ? 'Website' : 'เว็บไซต์'}
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Gallery Modal */}
      <ImageGallery
        images={project.images || []}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        initialIndex={galleryIndex}
      />
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '../components/LanguageProvider';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Zap, 
  Users, 
  Award, 
  Mail,
  Github,
  Linkedin,
  Twitter,
  Download,
  ArrowRight,
  Star,
  CheckCircle,
  Rocket,
  Palette,
  Cpu,
  Terminal,
  Layers,
  Cloud,
  Settings,
  Building2,
  Calendar,
  MapPin,
  ExternalLink
} from 'lucide-react';
import Button from '../components/Button';
import { PageLoader } from '../components/LottieLoader';
import ProjectCard from '../components/ProjectCard';
import TabSystem from '../components/TabSystem';
import ProjectModal from '../components/ProjectModal';
import { projectCategories } from '../lib/projects';
import { experiences } from '../lib/experience';

interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  roleId: string;
}

export default function Home() {
  const { language } = useLanguage();
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('web-apps');
  const router = useRouter();

  useEffect(() => {
    // ตรวจสอบการ login
    const isLogin = localStorage.getItem('isLogin');

    // ดึงข้อมูล user จาก localStorage (ถ้ามี)
    const userData = localStorage.getItem('user');
    if (userData && isLogin === 'true') {
      setUser(JSON.parse(userData));
    } else {
      // ถ้าไม่ได้ login ให้แสดงเป็น Guest
      setUser({
        id: 'guest',
        firstName: 'Guest',
        lastName: 'User',
        email: 'guest@example.com',
        role: 'Guest',
        roleId: '0'
      });
    }
    
    // Simulate loading
    setTimeout(() => setIsLoaded(true), 2000);
  }, [router]);

  const handleLogout = () => {
    // ลบข้อมูลจาก localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('isLogin');
    
    // ลบ cookies
    document.cookie = 'isLogin=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    
    // Navigate ไปหน้า login
    router.push('/login');
  };

  const handleProjectClick = (project: any) => {
    // ลบ highlight class จากการ์ดที่ถูกคลิก
    document.querySelectorAll('.highlight-project-card').forEach(card => {
      card.classList.remove('highlight-project-card');
    });
    
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleViewScienceParkProject = () => {
    console.log('🎯 handleViewScienceParkProject called');
    
    // เปลี่ยน tab ไปที่ Web Applications ก่อน
    setActiveTab('web-apps');
    console.log('✅ Changed tab to web-apps');
    
    // เลื่อนไปที่ส่วน Featured Projects
    const projectsSection = document.getElementById('featured-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      console.log('✅ Scrolled to featured-projects section');
    }
    
    // หน่วงเวลาให้ tab เปลี่ยนและเลื่อนเสร็จก่อน
    setTimeout(() => {
      console.log('⏰ Timeout 1: Looking for RSP card...');
      
      // ลบ highlight class จากการ์ดอื่นๆ ก่อน
      document.querySelectorAll('.highlight-project-card').forEach(card => {
        card.classList.remove('highlight-project-card');
      });
      
      // เพิ่มคลาส highlight ให้กับการ์ด RSP Northeast 2
      const rspCard = document.querySelector('[data-project-id="rsp-northeast2-system"]');
      console.log('🔍 Found RSP card:', rspCard);
      
      if (rspCard) {
        rspCard.classList.add('highlight-project-card');
        console.log('✨ Added highlight-project-card class');
        
        // เลื่อนไปที่การ์ดนั้นเพิ่มเติม
        setTimeout(() => {
          rspCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          console.log('✅ Scrolled to RSP card');
        }, 300);
      } else {
        console.error('❌ RSP card not found!');
        // ลอง log all cards
        const allCards = document.querySelectorAll('[data-project-id]');
        console.log('📋 All project cards found:', Array.from(allCards).map(c => c.getAttribute('data-project-id')));
      }
    }, 1000);
  };

  const handleViewSkaiMedProject = () => {
    console.log('🎯 handleViewSkaiMedProject called');
    
    // เปลี่ยน tab ไปที่ Web Applications ก่อน
    setActiveTab('web-apps');
    console.log('✅ Changed tab to web-apps');
    
    // เลื่อนไปที่ส่วน Featured Projects
    const projectsSection = document.getElementById('featured-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      console.log('✅ Scrolled to featured-projects section');
    }
    
    // หน่วงเวลาให้ tab เปลี่ยนและเลื่อนเสร็จก่อน
    setTimeout(() => {
      console.log('⏰ Timeout 1: Looking for SKAI PHI card...');
      
      // ลบ highlight class จากการ์ดอื่นๆ ก่อน
      document.querySelectorAll('.highlight-project-card').forEach(card => {
        card.classList.remove('highlight-project-card');
      });
      
      // เพิ่มคลาส highlight ให้กับการ์ด SKAI PHI
      const skaiCard = document.querySelector('[data-project-id="skai-phi-medical-system"]');
      console.log('🔍 Found SKAI PHI card:', skaiCard);
      
      if (skaiCard) {
        skaiCard.classList.add('highlight-project-card');
        console.log('✨ Added highlight-project-card class');
        
        // เลื่อนไปที่การ์ดนั้นเพิ่มเติม
        setTimeout(() => {
          skaiCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          console.log('✅ Scrolled to SKAI PHI card');
        }, 300);
      } else {
        console.error('❌ SKAI PHI card not found!');
        // ลอง log all cards
        const allCards = document.querySelectorAll('[data-project-id]');
        console.log('📋 All project cards found:', Array.from(allCards).map(c => c.getAttribute('data-project-id')));
      }
    }, 1000);
  };

  if (!user || !isLoaded) {
    return <PageLoader />;
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'var(--gradient-bg)' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            {/* Avatar */}
            <div className="relative mx-auto mb-8 w-32 h-32 group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/30 via-[var(--secondary)]/30 to-[var(--accent)]/30 rounded-full animate-pulse"></div>
              <Image
                src="/robot.png"
                alt="Chanchai Lertsri"
                width={128}
                height={128}
                className="relative z-10 rounded-full object-cover shadow-2xl transition-all duration-300 group-hover:scale-105"
              />
            </div>

            {/* Greeting */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6">
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
                Chanchai Lertsri
              </span>
            </h1>
            
            {/* Welcome Message based on login status */}
            {user.role === 'Guest' ? (
              <p className="text-lg text-[var(--muted-foreground)] mb-8 max-w-3xl mx-auto">
                {language === 'en' 
                  ? 'Welcome to my portfolio! Feel free to explore my work and skills.'
                  : 'ยินดีต้อนรับสู่พอร์ตโฟลิโอของฉัน! สำรวจผลงานและทักษะของฉันได้อย่างอิสระ'}
              </p>
            ) : (
              <p className="text-lg text-[var(--muted-foreground)] mb-8 max-w-3xl mx-auto">
                {language === 'en'
                  ? `Welcome back, ${user.firstName}! Thank you for visiting my portfolio.`
                  : `ยินดีต้อนรับกลับมา, ${user.firstName}! ขอบคุณที่เข้าชมพอร์ตโฟลิโอของฉัน`}
              </p>
            )}
            
            <p className="text-xl sm:text-2xl text-[var(--muted-foreground)] mb-8 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Full-Stack Developer & AI Enthusiast'
                : 'นักพัฒนา Full-Stack และผู้ชื่นชอบ AI'}
            </p>

            <p className="text-lg text-[var(--muted-foreground)] mb-12 max-w-4xl mx-auto leading-relaxed">
              {language === 'en'
                ? 'Passionate about creating innovative web applications with modern technologies. Specializing in React, Next.js, Go, and AI integration to build scalable and user-friendly solutions.'
                : 'หลงใหลในการสร้างเว็บแอปพลิเคชันที่เป็นนวัตกรรมใหม่ด้วยเทคโนโลยีที่ทันสมัย เชี่ยวชาญด้าน React, Next.js, Go และการรวม AI เพื่อสร้างโซลูชันที่ปรับขนาดได้และใช้งานง่าย'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="gradient"
                size="lg"
                className="group"
                onClick={() => document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {language === 'en' ? 'View My Work' : 'ดูผลงานของฉัน'}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                {language === 'en' ? 'Get In Touch' : 'ติดต่อฉัน'}
              </Button>
            </div>

            {/* User Role Badge */}
            <div className="mt-12">
              <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                user.role === 'Admin' 
                  ? 'bg-gradient-to-r from-[var(--error)]/20 to-[var(--warning)]/20 text-[var(--error)] border border-[var(--error)]/30' 
                  : 'bg-gradient-to-r from-[var(--primary)]/20 to-[var(--secondary)]/20 text-[var(--primary)] border border-[var(--primary)]/30'
              }`}>
                <Award className="mr-2 h-4 w-4" />
                {user.role} {language === 'en' ? 'Access' : 'การเข้าถึง'}
              </span>
            </div>
            
            {/* Login/Logout Button */}
            <div className="mt-6">
              {user.role === 'Guest' ? (
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => {
                    // Temporarily disabled - login feature not available
                    alert(language === 'en' 
                      ? 'Login feature is temporarily disabled. Please contact the administrator.'
                      : 'ฟีเจอร์เข้าสู่ระบบถูกปิดชั่วคราว กรุณาติดต่อผู้ดูแลระบบ');
                  }}
                  className="group opacity-50 cursor-not-allowed"
                  disabled
                >
                  {language === 'en' ? 'Login' : 'เข้าสู่ระบบ'}
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="md"
              onClick={handleLogout}
                  className="group text-[var(--error)] hover:bg-[var(--error)]/10"
            >
              {language === 'en' ? 'Logout' : 'ออกจากระบบ'}
                  <ArrowRight className="ml-2 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-[var(--card)]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
              {language === 'en' ? 'Technical Skills' : 'ทักษะทางเทคนิค'}
              </h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Core programming skills and technologies I specialize in'
                : 'ทักษะการเขียนโปรแกรมหลักและเทคโนโลยีที่ฉันเชี่ยวชาญ'}
            </p>
            </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { 
                icon: Globe, 
                name: { en: 'Web Applications', th: 'เว็บแอปพลิเคชัน' },
                color: 'from-blue-400 to-blue-600' 
              },
              { 
                icon: Code, 
                name: { en: 'Problem Solving', th: 'การแก้ปัญหา' },
                color: 'from-green-400 to-green-600' 
              },
              { 
                icon: Zap, 
                name: { en: 'AI/ML', th: 'AI/ML' },
                color: 'from-orange-400 to-orange-600' 
              },
              { 
                icon: Database, 
                name: { en: 'SQL', th: 'SQL' },
                color: 'from-cyan-400 to-cyan-600' 
              },
              { 
                icon: Layers, 
                name: { en: 'CRUD Operations', th: 'การจัดการข้อมูล' },
                color: 'from-purple-400 to-purple-600' 
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="group bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-[var(--foreground)] text-sm">{skill.name[language]}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Collaborations Section */}
      <section className="py-20 bg-[var(--card)]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
              {language === 'en' ? 'Experience & Collaborations' : 'ประสบการณ์และความร่วมมือ'}
              </h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Professional partnerships and work experiences'
                : 'ความร่วมมือทางวิชาชีพและประสบการณ์การทำงาน'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
            <div key={exp.id} className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${index === 0 ? 'from-[var(--primary)] to-[var(--secondary)]' : 'from-[var(--accent)] to-[var(--secondary)]'} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {index === 0 ? <Building2 className="h-6 w-6 text-white" /> : <Code className="h-6 w-6 text-white" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors flex items-center">
                      {index === 0 ? <Rocket className="h-5 w-5 mr-2 text-[var(--primary)]" /> : <Code className="h-5 w-5 mr-2 text-[var(--accent)]" />}
                      {exp.title[language]}
                    </h3>
                    <p className="text-[var(--muted-foreground)] font-medium">
                      {exp.organization[language]}
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-[var(--warning)]/20 text-[var(--warning)] rounded-full text-xs font-medium">
                  {exp.type === 'Collaboration' 
                    ? (language === 'en' ? 'Completed' : 'เสร็จสิ้น')
                    : (language === 'en' ? 'Ongoing' : 'กำลังดำเนินการ')}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-[var(--muted-foreground)]">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{exp.period}</span>
                </div>
                {exp.location && (
                  <div className="flex items-center text-[var(--muted-foreground)]">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{exp.location[language]}</span>
                  </div>
                )}
                <div className="flex items-center text-[var(--muted-foreground)]">
                  {index === 0 ? <Globe className="h-4 w-4 mr-2" /> : <Users className="h-4 w-4 mr-2" />}
                  <span className="text-sm">{exp.type}</span>
                </div>
              </div>

              <div className="text-[var(--muted-foreground)] leading-relaxed mb-6">
                <p>{exp.fullDescription[language]}</p>
                </div>

              {exp.tech && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.tech.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-[var(--muted)] text-[var(--muted-foreground)] rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {exp.links?.website && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="group"
                  onClick={() => {
                    // ถ้าเป็น Science Park ให้เลื่อนไปที่โปรเจกต์และเปิด modal
                    if (exp.id === 'rsp-northeast2-collaboration') {
                      handleViewScienceParkProject();
                    } else if (exp.id === 'skai-med-software-engineer') {
                      handleViewSkaiMedProject();
                    } else {
                      window.open(exp.links?.website, '_blank');
                    }
                  }}
                >
                  {language === 'en' ? 'View Project' : 'ดูโปรเจกต์'}
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              )}
            </div>
            ))}
          </div>

          {/* Additional Collaborations */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">
              {language === 'en' ? 'Additional Partnerships' : 'ความร่วมมือเพิ่มเติม'}
            </h3>
            <p className="text-[var(--muted-foreground)] max-w-3xl mx-auto leading-relaxed">
              {language === 'en'
                ? "I'm always open to new collaborations and partnerships. Whether you're looking for web development, software engineering, or technical consulting services, I'd love to discuss how we can work together to bring your ideas to life."
                : 'ฉันเปิดรับความร่วมมือและพันธมิตรใหม่ๆ เสมอ ไม่ว่าคุณกำลังมองหาการพัฒนาเว็บ, วิศวกรรมซอฟต์แวร์ หรือบริการให้คำปรึกษาด้านเทคนิค ฉันอยากจะหารือว่าเราจะทำงานร่วมกันเพื่อทำให้ไอเดียของคุณเป็นจริงได้อย่างไร'}
            </p>
            <div className="mt-6">
              <Button
                variant="gradient"
                size="md"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group"
              >
                {language === 'en' ? 'Start a Collaboration' : 'เริ่มความร่วมมือ'}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="featured-projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
              {language === 'en' ? 'Featured Projects' : 'โปรเจกต์เด่น'}
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
              {language === 'en'
                ? 'Explore my work across different technology domains'
                : 'สำรวจผลงานของฉันในด้านเทคโนโลยีต่างๆ'}
            </p>
          </div>

          <TabSystem
            defaultTab="web-apps"
            activeTab={activeTab}
            onTabChange={setActiveTab}
            tabs={projectCategories.map((category) => ({
              id: category.id,
              label: category.label[language],
              icon: category.id === 'web-apps' ? <Globe className="h-4 w-4" /> :
                    category.id === 'ai-ml' ? <Zap className="h-4 w-4" /> :
                    category.id === 'hardware-os' ? <Cpu className="h-4 w-4" /> :
                    <Cloud className="h-4 w-4" />,
              content: (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.projects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      projectId={project.id}
                      title={project.title[language]}
                      description={project.description[language]}
                      tech={project.tech}
                      status={project.status}
                      onClick={() => handleProjectClick(project)}
                    />
                  ))}
                </div>
              )
            }))}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[var(--card)]/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            {language === 'en' ? "Let's Work Together" : 'มาทำงานด้วยกัน'}
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] mb-12 max-w-2xl mx-auto">
            {language === 'en'
              ? "Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life."
              : 'มีโปรเจกต์ในใจอยู่หรือไม่? ฉันอยากจะได้ยินเกี่ยวกับมัน ส่งข้อความถึงฉันแล้วมาคุยกันว่าเราจะทำให้ไอเดียของคุณเป็นจริงได้อย่างไร'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="gradient"
              size="lg"
              className="group"
              onClick={() => window.open('mailto:chanchai@example.com', '_blank')}
            >
              <Mail className="mr-2 h-5 w-5" />
              {language === 'en' ? 'Send Email' : 'ส่งอีเมล'}
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="group"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              {language === 'en' ? 'View GitHub' : 'ดู GitHub'}
            </Button>
              </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
            ].map((social, index) => (
              <button
                key={index}
                onClick={() => window.open(social.href, '_blank')}
                className="p-3 bg-[var(--card)] border border-[var(--border)] rounded-xl hover:bg-[var(--muted)] transition-all duration-300 hover:-translate-y-1 group"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6 text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors" />
              </button>
            ))}
          </div>
                </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/robot.png"
                alt="Logo"
                width={32}
                height={32}
                className="rounded-full mr-3"
              />
              <span className="text-[var(--foreground)] font-semibold">
                Chanchai Lertsri
              </span>
                </div>
            
            <div className="flex items-center space-x-6">
              {user.role !== 'Guest' && (
                <button
                  onClick={handleLogout}
                  className="text-[var(--muted-foreground)] hover:text-[var(--error)] transition-colors duration-200 flex items-center"
                >
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  {language === 'en' ? 'Logout' : 'ออกจากระบบ'}
                </button>
              )}
            </div>
          </div>
          
            <div className="mt-8 pt-8 border-t border-[var(--border)] text-center">
            <p className="text-[var(--muted-foreground)] text-sm">
              {language === 'en'
                ? '© 2024 Chanchai Lertsri. Built with Next.js and lots of ☕'
                : '© 2024 Chanchai Lertsri. สร้างด้วย Next.js และกาแฟมากมาย ☕'}
            </p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </div>
  );
}

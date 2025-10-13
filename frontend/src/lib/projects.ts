export interface Project {
  id: string;
  title: {
    en: string;
    th: string;
  };
  description: {
    en: string;
    th: string;
  };
  fullDescription: {
    en: string;
    th: string;
  };
  tech: string[];
  status: 'Completed' | 'In Progress' | 'Planning';
  duration?: string;
  location?: {
    en: string;
    th: string;
  };
  team?: {
    en: string;
    th: string;
  };
  images?: string[];
  challenges?: {
    en: string[];
    th: string[];
  };
  solutions?: {
    en: string[];
    th: string[];
  };
  results?: {
    en: string[];
    th: string[];
  };
  links?: {
    demo?: string;
    github?: string;
    website?: string;
  };
}

export interface ProjectCategory {
  id: string;
  label: {
    en: string;
    th: string;
  };
  icon: string;
  projects: Project[];
}

export const projectCategories: ProjectCategory[] = [
  {
    id: 'web-apps',
    label: {
      en: 'Web Applications',
      th: 'เว็บแอปพลิเคชัน'
    },
    icon: 'Globe',
    projects: [
      {
        id: 'personal-portfolio',
        title: {
          en: 'Personal Portfolio',
          th: 'พอร์ตโฟลิโอส่วนตัว'
        },
        description: {
          en: 'Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark/light theme, responsive design, and smooth animations.',
          th: 'เว็บไซต์พอร์ตโฟลิโอที่ทันสมัยสร้างด้วย Next.js, TypeScript และ Tailwind CSS มีฟีเจอร์ธีมมืด/สว่าง, การออกแบบที่ตอบสนอง และแอนิเมชันที่ลื่นไหล'
        },
        fullDescription: {
          en: 'This personal portfolio website represents a comprehensive showcase of modern web development practices. Built from the ground up using Next.js 15 and TypeScript, it demonstrates advanced React patterns, custom hooks, and component architecture. The site features a sophisticated dark/light theme system with CSS variables, responsive design that works seamlessly across all devices, and smooth animations powered by CSS transitions and transforms. The project showcases expertise in modern frontend development, UI/UX design principles, and performance optimization techniques.',
          th: 'เว็บไซต์พอร์ตโฟลิโอส่วนตัวนี้แสดงถึงการนำเสนอแบบครบวงจรของแนวทางการพัฒนาเว็บสมัยใหม่ สร้างขึ้นตั้งแต่ต้นด้วย Next.js 15 และ TypeScript แสดงให้เห็นถึงรูปแบบ React ขั้นสูง, Custom Hooks และสถาปัตยกรรมคอมโพเนนต์ เว็บไซต์มีระบบธีมมืด/สว่างที่ซับซ้อนด้วย CSS Variables, การออกแบบที่ตอบสนองซึ่งทำงานได้อย่างราบรื่นบนทุกอุปกรณ์ และแอนิเมชันที่ลื่นไหลขับเคลื่อนด้วย CSS Transitions และ Transforms โปรเจกต์นี้แสดงให้เห็นถึงความเชี่ยวชาญในการพัฒนา Frontend สมัยใหม่, หลักการออกแบบ UI/UX และเทคนิคการเพิ่มประสิทธิภาพ'
        },
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GO', 'Smtp Email', 'Lottie Animation', 'Sqlite'],
        status: 'In Progress',
        duration: '2 weeks',
        team: {
          en: 'Solo Project',
          th: 'โปรเจกต์เดี่ยว'
        },
        images: [
          '/images/projects/personal-portfolio/hero.png',
          '/images/projects/personal-portfolio/getIn.png',
          '/images/projects/personal-portfolio/card.png',
          '/images/projects/personal-portfolio/details.png'
        ],
        challenges: {
          en: [
            'Creating a modern and visually appealing UI/UX design that stands out',
            'Implementing SMTP email functionality for contact form submissions',
            'Securing API endpoints with JWT token authentication and role-based middleware'
          ],
          th: [
            'สร้างการออกแบบ UI/UX ที่ทันสมัยและดึงดูดสายตาที่โดดเด่น',
            'ใช้งานฟังก์ชัน SMTP Email สำหรับการส่งแบบฟอร์มติดต่อ',
            'รักษาความปลอดภัย API Endpoints ด้วยการยืนยันตัวตน JWT Token และ Middleware ตามบทบาท'
          ]
        },
        solutions: {
          en: [
            'Applied modern design principles with Tailwind CSS and smooth animations',
            'Integrated SMTP service with proper error handling and validation',
            'Built JWT authentication system with middleware for Admin/Guest role management',
            'Used CSS variables for seamless dark/light theme switching'
          ],
          th: [
            'ใช้หลักการออกแบบสมัยใหม่ด้วย Tailwind CSS และแอนิเมชันที่ลื่นไหล',
            'รวม SMTP Service เข้ากับการจัดการข้อผิดพลาดและการตรวจสอบความถูกต้องที่เหมาะสม',
            'สร้างระบบยืนยันตัวตน JWT พร้อม Middleware สำหรับการจัดการบทบาท Admin/Guest',
            'ใช้ CSS Variables สำหรับการสลับธีมมืด/สว่างอย่างราบรื่น'
          ]
        },
        results: {
          en: [
            'Modern, professional portfolio with excellent user experience',
            'Fully functional contact system with email notifications',
            'Secure API with proper authentication and authorization'
          ],
          th: [
            'พอร์ตโฟลิโอที่ทันสมัยและเป็นมืออาชีพพร้อมประสบการณ์ผู้ใช้ที่ยอดเยี่ยม',
            'ระบบติดต่อที่ทำงานได้อย่างสมบูรณ์พร้อมการแจ้งเตือนทางอีเมล',
            'API ที่ปลอดภัยพร้อมการยืนยันตัวตนและการอนุญาตที่เหมาะสม'
          ]
        },
        links: {
          website: 'https://www.chanchailertsri.online/'
        }
      },
      {
        id: 'rsp-northeast2-system',
        title: {
          en: 'RSP Northeast 2 Facility Management System',
          th: 'ระบบจัดการสิ่งอำนวยความสะดวก อว.ภาคตะวันออกเฉียงเหนือ 2'
        },
        description: {
          en: 'Comprehensive facility management system for Northeast Science Park 2, featuring room booking, maintenance requests, invoice generation, and service area requests.',
          th: 'ระบบจัดการสิ่งอำนวยความสะดวกแบบครบวงจรสำหรับอุทยานวิทยาศาสตร์ภาคตะวันออกเฉียงเหนือ 2 มีฟีเจอร์การจองห้อง, การร้องขอซ่อมบำรุง, การสร้างใบแจ้งหนี้ และการร้องขอพื้นที่บริการ'
        },
        fullDescription: {
          en: 'A complete facility management system designed and developed for the Northeast Science Park 2 in Nakhon Ratchasima province. This web-based application provides comprehensive management capabilities including meeting room booking, maintenance request submissions, invoice printing for rented spaces, and online service area requests. The system elevates resource management efficiency, reduces operational complexity, minimizes errors from previous systems, and enhances systematic data inspection, tracking, and storage capabilities.',
          th: 'ระบบจัดการสิ่งอำนวยความสะดวกที่สมบูรณ์ซึ่งออกแบบและพัฒนาสำหรับอุทยานวิทยาศาสตร์ภาคตะวันออกเฉียงเหนือ 2 ในจังหวัดนครราชสีมา แอปพลิเคชันบนเว็บนี้ให้ความสามารถในการจัดการที่ครบวงจร รวมถึงการจองห้องประชุม, การส่งคำขอซ่อมบำรุง, การพิมพ์ใบแจ้งหนี้สำหรับพื้นที่เช่า และการร้องขอพื้นที่บริการออนไลน์ ระบบยกระดับประสิทธิภาพการจัดการทรัพยากร ลดความซับซ้อนในการดำเนินงาน ลดข้อผิดพลาดจากระบบก่อนหน้า และเพิ่มความสามารถในการตรวจสอบ ติดตาม และจัดเก็บข้อมูลอย่างเป็นระบบ'
        },
        tech: ['React Native', 'TypeScript', 'JWT', 'Go', 'Material-UI', 'SMTP Email', 'CSV', 'PDF.js', 'OK Slip'],
        status: 'Completed',
        duration: '8 months',
        team: {
          en: 'Solo Project',
          th: 'โปรเจกต์เดี่ยว'
        },
        images: [
          '/images/projects/rsp-northeast2-system/ant.png',
          '/images/projects/rsp-northeast2-system/booking.png',
          '/images/projects/rsp-northeast2-system/home.png',
          '/images/projects/rsp-northeast2-system/otp.png',
          '/images/projects/rsp-northeast2-system/popup.png',
          '/images/projects/rsp-northeast2-system/ps.png',
        ],
        challenges: {
          en: [
            'Gathering and adapting to frequently changing user requirements from real stakeholders',
            'Managing complex and detailed requirement structures with intricate specifications'
          ],
          th: [
            'รวบรวมและปรับตัวกับความต้องการของผู้ใช้ที่เปลี่ยนแปลงบ่อยครั้งจากผู้มีส่วนได้ส่วนเสียจริง',
            'จัดการโครงสร้างความต้องการที่ซับซ้อนและละเอียดพร้อมข้อกำหนดที่ซับซ้อน'
          ]
        },
        solutions: {
          en: [
            'Built comprehensive system using React Native frontend with Material-UI components',
            'Implemented Go backend with JWT authentication and GORM for database management',
            'Integrated SMTP email service, CSV processing, PDF.js for document generation, and Slip.js for receipts'
          ],
          th: [
            'สร้างระบบที่ครอบคลุมโดยใช้ React Native Frontend พร้อมคอมโพเนนต์ Material-UI',
            'ใช้งาน Go Backend ด้วยการยืนยันตัวตน JWT และ GORM สำหรับการจัดการฐานข้อมูล',
            'รวม SMTP Email Service, การประมวลผล CSV, PDF.js สำหรับการสร้างเอกสาร และ Slip.js สำหรับใบเสร็จ'
          ]
        },
        results: {
          en: [
            'Fully functional facility management system successfully deployed',
            'Significantly reduced data collection errors and processing time for maintenance requests',
            'Streamlined room booking and service area request processes'
          ],
          th: [
            'ระบบจัดการสิ่งอำนวยความสะดวกที่ทำงานได้อย่างสมบูรณ์และติดตั้งใช้งานสำเร็จ',
            'ลดข้อผิดพลาดในการรวบรวมข้อมูลและเวลาในการประมวลผลคำขอซ่อมบำรุงอย่างมาก',
            'ปรับปรุงกระบวนการจองห้องและการร้องขอพื้นที่บริการให้คล่องตัวขึ้น'
          ]
        },
        links: {
          website: 'https://rsp-northeast2.org'
        }
      },
      {
        id: 'hospital-management-system',
        title: {
          en: 'Hospital Management System',
          th: 'ระบบจัดการโรงพยาบาล'
        },
        description: {
          en: 'Comprehensive hospital management system with role-based access control, payment processing, and human resource management for Software Engineering course project.',
          th: 'ระบบจัดการโรงพยาบาลแบบครบวงจรพร้อมระบบควบคุมการเข้าถึงตามบทบาท, การประมวลผลการชำระเงิน และการจัดการทรัพยากรบุคคล สำหรับโปรเจกต์วิชาวิศวกรรมซอฟต์แวร์'
        },
        fullDescription: {
          en: 'A comprehensive hospital management system developed as part of a Software Engineering course group project. The system features role-based access control with different interfaces for doctors, nurses, and administrative staff. I was responsible for developing two core modules: the payment processing system and the human resource management system. The system ensures data security and privacy by implementing strict role separation where each user type can only access their designated interface and functionality.',
          th: 'ระบบจัดการโรงพยาบาลแบบครบวงจรที่พัฒนาขึ้นเป็นส่วนหนึ่งของโปรเจกต์กลุ่มวิชาวิศวกรรมซอฟต์แวร์ ระบบมีการควบคุมการเข้าถึงตามบทบาทพร้อมอินเทอร์เฟซที่แตกต่างกันสำหรับแพทย์, พยาบาล และเจ้าหน้าที่บริหาร ผมรับผิดชอบในการพัฒนาสองโมดูลหลัก: ระบบประมวลผลการชำระเงินและระบบจัดการทรัพยากรบุคคล ระบบรับประกันความปลอดภัยและความเป็นส่วนตัวของข้อมูลโดยการแยกบทบาทอย่างเข้มงวด โดยแต่ละประเภทผู้ใช้สามารถเข้าถึงได้เฉพาะอินเทอร์เฟซและฟังก์ชันที่กำหนดไว้เท่านั้น'
        },
        tech: ['React Native', 'TypeScript', 'JWT', 'Go', 'Ant Design', 'SMTP Email', 'OK Slip'],
        status: 'Completed',
        duration: '4 months',
        team: {
          en: 'Software Engineering Course Group Project',
          th: 'โปรเจกต์กลุ่มวิชาวิศวกรรมซอฟต์แวร์'
        },
        images: [
          '/images/projects/hospital-management-system/1.png',
          '/images/projects/hospital-management-system/22.png',
          '/images/projects/hospital-management-system/2.png',
          '/images/projects/hospital-management-system/3.png',
          '/images/projects/hospital-management-system/4.png',
          '/images/projects/hospital-management-system/5.png',
          '/images/projects/hospital-management-system/6.png',
        ],
        challenges: {
          en: [
            'Building payment processing system with no prior experience using Stripe service',
            'Implementing complex role-based access control for doctors, nurses, and admin staff',
            'Creating separate interfaces and permissions for different user types',
            'Integrating email notification system for HR management'
          ],
          th: [
            'สร้างระบบประมวลผลการชำระเงินโดยไม่มีประสบการณ์ก่อนหน้านี้ในการใช้บริการ Stripe',
            'ใช้งานระบบควบคุมการเข้าถึงตามบทบาทที่ซับซ้อนสำหรับแพทย์, พยาบาล และเจ้าหน้าที่บริหาร',
            'สร้างอินเทอร์เฟซและสิทธิ์การเข้าถึงที่แยกกันสำหรับผู้ใช้แต่ละประเภท',
            'รวมระบบแจ้งเตือนทางอีเมลสำหรับการจัดการ HR'
          ]
        },
        solutions: {
          en: [
            'Implemented Stripe payment service for secure transaction processing',
            'Built comprehensive role-based middleware with JWT authentication',
            'Created separate dashboard interfaces for doctors, nurses, and administrative staff',
            'Integrated email service for HR notifications and system updates'
          ],
          th: [
            'ใช้งานบริการชำระเงิน Stripe สำหรับการประมวลผลธุรกรรมที่ปลอดภัย',
            'สร้าง Middleware ตามบทบาทที่ครอบคลุมพร้อมการยืนยันตัวตน JWT',
            'สร้างอินเทอร์เฟซแดชบอร์ดแยกกันสำหรับแพทย์, พยาบาล และเจ้าหน้าที่บริหาร',
            'รวมบริการอีเมลสำหรับการแจ้งเตือน HR และการอัปเดตระบบ'
          ]
        },
        results: {
          en: [
            'Successfully implemented payment system with Stripe integration',
            'Robust role-based access control ensuring data privacy and security',
            'Separate user interfaces for different hospital staff roles',
            'Efficient HR management with automated email notifications'
          ],
          th: [
            'ใช้งานระบบชำระเงินพร้อมการรวม Stripe สำเร็จ',
            'ระบบควบคุมการเข้าถึงตามบทบาทที่แข็งแกร่งรับประกันความเป็นส่วนตัวและความปลอดภัยของข้อมูล',
            'อินเทอร์เฟซผู้ใช้แยกกันสำหรับบทบาทเจ้าหน้าที่โรงพยาบาลที่แตกต่างกัน',
            'การจัดการ HR ที่มีประสิทธิภาพพร้อมการแจ้งเตือนทางอีเมลอัตโนมัติ'
          ]
        },
        links: {
          github: 'https://github.com/sut67/team04.git'
        }
      },
      {
        id: 'movie-theater-management-system',
        title: {
          en: 'Movie Theater Management System',
          th: 'ระบบจัดการโรงภาพยนตร์'
        },
        description: {
          en: 'Comprehensive movie theater management system with showtime scheduling, seat booking, and payment processing for System Analysis course project.',
          th: 'ระบบจัดการโรงภาพยนตร์แบบครบวงจรพร้อมการจัดตารางรอบฉาย, การจองที่นั่ง และการประมวลผลการชำระเงิน สำหรับโปรเจกต์วิชาการวิเคราะห์ระบบ'
        },
        fullDescription: {
          en: 'A complete movie theater management system developed as part of a System Analysis course group project. The system features showtime scheduling, movie management, theater mapping, and seat booking capabilities. I was responsible for developing the showtime management module and the booking system integration. The main challenge involved complex mapping between movies, theaters, and time slots, requiring careful database design and user interface development to display this information in an intuitive table format.',
          th: 'ระบบจัดการโรงภาพยนตร์ที่สมบูรณ์ซึ่งพัฒนาขึ้นเป็นส่วนหนึ่งของโปรเจกต์กลุ่มวิชาการวิเคราะห์ระบบ ระบบมีฟีเจอร์การจัดตารางรอบฉาย, การจัดการภาพยนตร์, การแมปโรงภาพยนตร์ และความสามารถในการจองที่นั่ง ผมรับผิดชอบในการพัฒนาโมดูลจัดการรอบฉายและการรวมระบบจอง ความท้าทายหลักเกี่ยวข้องกับการแมปที่ซับซ้อนระหว่างภาพยนตร์, โรงภาพยนตร์ และช่วงเวลา ซึ่งต้องการการออกแบบฐานข้อมูลอย่างรอบคอบและการพัฒนาอินเทอร์เฟซผู้ใช้เพื่อแสดงข้อมูลนี้ในรูปแบบตารางที่ใช้งานง่าย'
        },
        tech: ['React Native', 'Ant Design', 'Go', 'SQLite', 'System Analysis'],
        status: 'Completed',
        duration: '3 months',
        team: {
          en: 'System Analysis Course Group Project',
          th: 'โปรเจกต์กลุ่มวิชาการวิเคราะห์ระบบ'
        },
        images: [
          '/images/projects/movie-theater-management-system/1.png',
          '/images/projects/movie-theater-management-system/6.png',
          '/images/projects/movie-theater-management-system/2.png',
          '/images/projects/movie-theater-management-system/4.png',
          '/images/projects/movie-theater-management-system/5.png',
          '/images/projects/movie-theater-management-system/3.png',
        ],
        challenges: {
          en: [
            'Complex mapping system between movies, theaters, and time slots',
            'Creating intuitive table display for showtime scheduling',
            'Managing movie allocation across multiple theaters and time periods',
            'Integrating booking system with showtime management'
          ],
          th: [
            'ระบบการแมปที่ซับซ้อนระหว่างภาพยนตร์, โรงภาพยนตร์ และช่วงเวลา',
            'สร้างการแสดงผลตารางที่ใช้งานง่ายสำหรับการจัดตารางรอบฉาย',
            'จัดการการจัดสรรภาพยนตร์ในหลายโรงและช่วงเวลา',
            'รวมระบบจองเข้ากับการจัดการรอบฉาย'
          ]
        },
        solutions: {
          en: [
            'Designed comprehensive database schema for movie-theater-time relationships',
            'Built dynamic table interface using Ant Design components',
            'Implemented efficient query system for showtime retrieval and display',
            'Created seamless integration between showtime and booking modules'
          ],
          th: [
            'ออกแบบ Schema ฐานข้อมูลที่ครอบคลุมสำหรับความสัมพันธ์ภาพยนตร์-โรง-เวลา',
            'สร้างอินเทอร์เฟซตารางแบบไดนามิกโดยใช้คอมโพเนนต์ Ant Design',
            'ใช้งานระบบ Query ที่มีประสิทธิภาพสำหรับการดึงและแสดงรอบฉาย',
            'สร้างการรวมที่ราบรื่นระหว่างโมดูลรอบฉายและการจอง'
          ]
        },
        results: {
          en: [
            'Successfully implemented showtime management system',
            'Created functional movie theater booking platform',
            'Enabled seamless integration with team members\' payment and seat selection systems',
            'Delivered complete movie theater management solution'
          ],
          th: [
            'ใช้งานระบบจัดการรอบฉายสำเร็จ',
            'สร้างแพลตฟอร์มจองโรงภาพยนตร์ที่ใช้งานได้',
            'เปิดใช้งานการรวมที่ราบรื่นกับระบบชำระเงินและการเลือกที่นั่งของสมาชิกในทีม',
            'ส่งมอบโซลูชันการจัดการโรงภาพยนตร์ที่สมบูรณ์'
          ]
        },
        links: {
          github: 'https://github.com/sut67/movie-theater-system'
        }
      }
    ]
  },
  {
    id: 'ai-ml',
    label: {
      en: 'AI/ML Projects',
      th: 'โปรเจกต์ AI/ML'
    },
    icon: 'Zap',
    projects: [
      {
        id: 'ai-chatbot',
        title: {
          en: 'AI Chatbot Integration',
          th: 'การรวมระบบ AI Chatbot'
        },
        description: {
          en: 'Intelligent chatbot system with natural language processing and real-time communication capabilities.',
          th: 'ระบบแชทบอทอัจฉริยะพร้อมการประมวลผลภาษาธรรมชาติและความสามารถในการสื่อสารแบบเรียลไทม์'
        },
        fullDescription: {
          en: 'An advanced AI chatbot system that leverages natural language processing to provide intelligent responses. The system integrates with OpenAI\'s API to understand user intent and generate contextual responses. Features include conversation memory, multi-language support, and real-time communication using WebSockets. The chatbot can handle complex queries and maintain context throughout conversations.',
          th: 'ระบบ AI Chatbot ขั้นสูงที่ใช้ประโยชน์จากการประมวลผลภาษาธรรมชาติเพื่อให้การตอบกลับที่ชาญฉลาด ระบบรวมเข้ากับ API ของ OpenAI เพื่อเข้าใจเจตนาของผู้ใช้และสร้างการตอบกลับตามบริบท ฟีเจอร์ต่างๆ ได้แก่ หน่วยความจำการสนทนา, การรองรับหลายภาษา และการสื่อสารแบบเรียลไทม์โดยใช้ WebSockets แชทบอทสามารถจัดการกับคำถามที่ซับซ้อนและรักษาบริบทตลอดการสนทนา'
        },
        tech: ['Python', 'OpenAI', 'WebSocket', 'NLP', 'FastAPI', 'PostgreSQL', 'Docker'],
        status: 'Completed',
        duration: '4 months',
        team: {
          en: 'Solo Project',
          th: 'โปรเจกต์เดี่ยว'
        },
        images: [
          '/images/chatbot-interface.png',
          '/images/chatbot-training.png',
          '/images/chatbot-analytics.png'
        ],
        challenges: {
          en: [
            'Integrating OpenAI API for intelligent responses',
            'Managing conversation context and memory'
          ],
          th: [
            'รวม OpenAI API สำหรับการตอบกลับที่ชาญฉลาด',
            'จัดการบริบทและหน่วยความจำการสนทนา'
          ]
        },
        solutions: {
          en: [
            'Used OpenAI API with custom prompt engineering',
            'Implemented Redis for conversation state management',
            'Built WebSocket connection for real-time communication'
          ],
          th: [
            'ใช้ OpenAI API พร้อม Prompt Engineering ที่กำหนดเอง',
            'ใช้งาน Redis สำหรับการจัดการสถานะการสนทนา',
            'สร้างการเชื่อมต่อ WebSocket สำหรับการสื่อสารแบบเรียลไทม์'
          ]
        },
        results: {
          en: [
            'Natural language understanding with high accuracy',
            'Real-time response delivery',
            'Persistent conversation memory'
          ],
          th: [
            'การเข้าใจภาษาธรรมชาติด้วยความแม่นยำสูง',
            'การส่งมอบการตอบกลับแบบเรียลไทม์',
            'หน่วยความจำการสนทนาที่คงอยู่'
          ]
        },
        links: {
          demo: 'https://chatbot-demo.com',
          github: 'https://github.com/chanchai/ai-chatbot'
        }
      },
      {
        id: 'image-recognition',
        title: {
          en: 'Image Recognition System',
          th: 'ระบบจดจำภาพ'
        },
        description: {
          en: 'Computer vision application for object detection and classification using deep learning models.',
          th: 'แอปพลิเคชัน Computer Vision สำหรับการตรวจจับและจำแนกวัตถุโดยใช้โมเดล Deep Learning'
        },
        fullDescription: {
          en: 'A sophisticated computer vision system built with TensorFlow and OpenCV for real-time object detection and classification. The system can identify and classify objects in images and video streams with high accuracy. Features include custom model training, batch processing, and real-time inference capabilities. The application includes a web interface for uploading images and viewing results.',
          th: 'ระบบ Computer Vision ที่ซับซ้อนซึ่งสร้างด้วย TensorFlow และ OpenCV สำหรับการตรวจจับและจำแนกวัตถุแบบเรียลไทม์ ระบบสามารถระบุและจำแนกวัตถุในภาพและสตรีมวิดีโอด้วยความแม่นยำสูง ฟีเจอร์ต่างๆ ได้แก่ การฝึกโมเดลที่กำหนดเอง, การประมวลผลแบบแบตช์ และความสามารถในการอนุมานแบบเรียลไทม์ แอปพลิเคชันรวมถึงอินเทอร์เฟซเว็บสำหรับการอัปโหลดภาพและดูผลลัพธ์'
        },
        tech: ['Python', 'TensorFlow', 'OpenCV', 'CNN', 'Flask', 'NumPy', 'Pandas'],
        status: 'In Progress',
        duration: '5 months',
        team: {
          en: 'Research Team (2 members)',
          th: 'ทีมวิจัย (2 คน)'
        },
        images: [
          '/images/recognition-upload.png',
          '/images/recognition-results.png',
          '/images/recognition-training.png'
        ],
        challenges: {
          en: [
            'Training accurate CNN models with limited dataset',
            'Optimizing inference speed for real-time detection',
            'Handling various image qualities and formats'
          ],
          th: [
            'ฝึกโมเดล CNN ที่แม่นยำด้วยชุดข้อมูลที่จำกัด',
            'เพิ่มประสิทธิภาพความเร็วการอนุมานสำหรับการตรวจจับแบบเรียลไทม์',
            'จัดการกับคุณภาพและรูปแบบภาพที่หลากหลาย'
          ]
        },
        solutions: {
          en: [
            'Applied data augmentation to expand training dataset',
            'Used TensorFlow Lite for optimized inference',
            'Built preprocessing pipeline with OpenCV'
          ],
          th: [
            'ใช้ Data Augmentation เพื่อขยายชุดข้อมูลการฝึก',
            'ใช้ TensorFlow Lite สำหรับการอนุมานที่ได้รับการเพิ่มประสิทธิภาพ',
            'สร้าง Pipeline การประมวลผลล่วงหน้าด้วย OpenCV'
          ]
        },
        results: {
          en: [
            '90% accuracy in object detection',
            'Real-time processing at 30 FPS'
          ],
          th: [
            'ความแม่นยำ 90% ในการตรวจจับวัตถุ',
            'การประมวลผลแบบเรียลไทม์ที่ 30 FPS'
          ]
        },
        links: {
          demo: 'https://image-recognition-demo.com',
          github: 'https://github.com/chanchai/image-recognition'
        }
      },
      {
        id: 'predictive-analytics',
        title: {
          en: 'Predictive Analytics Dashboard',
          th: 'แดชบอร์ดการวิเคราะห์เชิงคาดการณ์'
        },
        description: {
          en: 'Data analysis platform with machine learning models for business intelligence and forecasting.',
          th: 'แพลตฟอร์มการวิเคราะห์ข้อมูลพร้อมโมเดล Machine Learning สำหรับธุรกิจอัจฉริยะและการพยากรณ์'
        },
        fullDescription: {
          en: 'A comprehensive business intelligence platform that combines data analysis with machine learning for predictive insights. The system processes large datasets, applies various ML algorithms, and presents results through interactive dashboards. Features include automated data preprocessing, model training, and visualization of trends and predictions. The platform helps businesses make data-driven decisions.',
          th: 'แพลตฟอร์มธุรกิจอัจฉริยะที่ครอบคลุมซึ่งรวมการวิเคราะห์ข้อมูลกับ Machine Learning สำหรับข้อมูลเชิงลึกเชิงคาดการณ์ ระบบประมวลผลชุดข้อมูลขนาดใหญ่ ใช้อัลกอริทึม ML ต่างๆ และนำเสนอผลลัพธ์ผ่านแดชบอร์ดแบบอินเทอร์แอคทีฟ ฟีเจอร์ต่างๆ ได้แก่ การประมวลผลล่วงหน้าข้อมูลอัตโนมัติ, การฝึกโมเดล และการแสดงภาพแนวโน้มและการคาดการณ์ แพลตฟอร์มช่วยให้ธุรกิจตัดสินใจโดยอิงจากข้อมูล'
        },
        tech: ['Python', 'Pandas', 'Scikit-learn', 'D3.js', 'Flask', 'PostgreSQL', 'Docker'],
        status: 'Planning',
        duration: '6 months',
        team: {
          en: 'Data Science Team (4 members)',
          th: 'ทีม Data Science (4 คน)'
        },
        images: [
          '/images/analytics-dashboard.png',
          '/images/analytics-models.png',
          '/images/analytics-predictions.png'
        ],
        challenges: {
          en: [
            'Processing large datasets efficiently',
            'Creating intuitive visualizations for business users'
          ],
          th: [
            'ประมวลผลชุดข้อมูลขนาดใหญ่อย่างมีประสิทธิภาพ',
            'สร้างการแสดงภาพที่ใช้งานง่ายสำหรับผู้ใช้ทางธุรกิจ'
          ]
        },
        solutions: {
          en: [
            'Used Pandas with optimized data processing pipelines',
            'Built interactive dashboards with D3.js',
            'Applied Scikit-learn for predictive modeling'
          ],
          th: [
            'ใช้ Pandas พร้อม Pipeline การประมวลผลข้อมูลที่ได้รับการเพิ่มประสิทธิภาพ',
            'สร้างแดชบอร์ดแบบอินเทอร์แอคทีฟด้วย D3.js',
            'ใช้ Scikit-learn สำหรับการสร้างโมเดลเชิงคาดการณ์'
          ]
        },
        results: {
          en: [
            '85% accuracy in forecasting',
            'Interactive data exploration tools',
            'Automated model training and evaluation',
            'Scalable architecture for large datasets'
          ],
          th: [
            'ความแม่นยำ 85% ในการพยากรณ์',
            'เครื่องมือสำรวจข้อมูลแบบอินเทอร์แอคทีฟ',
            'การฝึกและประเมินโมเดลอัตโนมัติ',
            'สถาปัตยกรรมที่ปรับขนาดได้สำหรับชุดข้อมูลขนาดใหญ่'
          ]
        },
        links: {
          demo: 'https://analytics-demo.com',
          github: 'https://github.com/chanchai/predictive-analytics'
        }
      }
    ]
  },
  {
    id: 'hardware-os',
    label: {
      en: 'Hardware & OS',
      th: 'ฮาร์ดแวร์และระบบปฏิบัติการ'
    },
    icon: 'Cpu',
    projects: [
      {
        id: 'iot-sensor-network',
        title: {
          en: 'IoT Sensor Network',
          th: 'เครือข่ายเซ็นเซอร์ IoT'
        },
        description: {
          en: 'Internet of Things system with multiple sensors, data collection, and real-time monitoring dashboard.',
          th: 'ระบบ Internet of Things พร้อมเซ็นเซอร์หลายตัว, การรวบรวมข้อมูล และแดชบอร์ดการตรวจสอบแบบเรียลไทม์'
        },
        fullDescription: {
          en: 'A comprehensive IoT system that connects multiple sensors to collect environmental data and provide real-time monitoring capabilities. The system includes temperature, humidity, light, and motion sensors connected via MQTT protocol. Data is collected, processed, and visualized through a web-based dashboard. The system supports remote configuration and alert notifications.',
          th: 'ระบบ IoT ที่ครอบคลุมซึ่งเชื่อมต่อเซ็นเซอร์หลายตัวเพื่อรวบรวมข้อมูลสิ่งแวดล้อมและให้ความสามารถในการตรวจสอบแบบเรียลไทม์ ระบบรวมถึงเซ็นเซอร์อุณหภูมิ, ความชื้น, แสง และการเคลื่อนไหวที่เชื่อมต่อผ่าน MQTT Protocol ข้อมูลถูกรวบรวม ประมวลผล และแสดงภาพผ่านแดชบอร์ดบนเว็บ ระบบรองรับการกำหนดค่าระยะไกลและการแจ้งเตือน'
        },
        tech: ['Arduino', 'Raspberry Pi', 'MQTT', 'Python', 'Node.js', 'MongoDB', 'Grafana'],
        status: 'Completed',
        duration: '3 months',
        team: {
          en: 'IoT Team (2 members)',
          th: 'ทีม IoT (2 คน)'
        },
        images: [
          '/images/iot-sensors.png',
          '/images/iot-dashboard.png',
          '/images/iot-network.png'
        ],
        challenges: {
          en: [
            'Ensuring reliable MQTT communication between multiple devices',
            'Managing power consumption for battery-operated sensors'
          ],
          th: [
            'รับประกันการสื่อสาร MQTT ที่เชื่อถือได้ระหว่างอุปกรณ์หลายตัว',
            'จัดการการใช้พลังงานสำหรับเซ็นเซอร์ที่ใช้แบตเตอรี่'
          ]
        },
        solutions: {
          en: [
            'Implemented MQTT protocol with QoS levels',
            'Used Arduino sleep modes for power efficiency',
            'Built real-time dashboard with Grafana and Node.js'
          ],
          th: [
            'ใช้งาน MQTT Protocol พร้อมระดับ QoS',
            'ใช้โหมดสลีป Arduino เพื่อประสิทธิภาพพลังงาน',
            'สร้างแดชบอร์ดแบบเรียลไทม์ด้วย Grafana และ Node.js'
          ]
        },
        results: {
          en: [
            '99% network uptime',
            'Extended battery life (6+ months)',
            'Real-time monitoring dashboard'
          ],
          th: [
            'เวลาทำงานของเครือข่าย 99%',
            'อายุแบตเตอรี่ที่ยาวนานขึ้น (6+ เดือน)',
            'แดชบอร์ดการตรวจสอบแบบเรียลไทม์'
          ]
        },
        links: {
          demo: 'https://iot-dashboard.com',
          github: 'https://github.com/chanchai/iot-sensor-network'
        }
      },
      {
        id: 'custom-linux',
        title: {
          en: 'Custom Linux Distribution',
          th: 'Linux Distribution แบบกำหนดเอง'
        },
        description: {
          en: 'Lightweight Linux distribution optimized for embedded systems and specific hardware requirements.',
          th: 'Linux Distribution ที่มีน้ำหนักเบาซึ่งปรับให้เหมาะสมสำหรับระบบฝังตัวและความต้องการฮาร์ดแวร์เฉพาะ'
        },
        fullDescription: {
          en: 'A custom Linux distribution built from scratch using Buildroot for embedded systems. The distribution is optimized for specific hardware requirements with minimal resource usage. Features include custom kernel configuration, optimized boot process, and specialized packages for embedded applications. The system is designed for industrial automation and IoT devices.',
          th: 'Linux Distribution ที่กำหนดเองซึ่งสร้างขึ้นตั้งแต่ต้นโดยใช้ Buildroot สำหรับระบบฝังตัว การกระจายได้รับการปรับให้เหมาะสมสำหรับความต้องการฮาร์ดแวร์เฉพาะด้วยการใช้ทรัพยากรที่น้อยที่สุด ฟีเจอร์ต่างๆ ได้แก่ การกำหนดค่า Kernel ที่กำหนดเอง, กระบวนการบูตที่ได้รับการเพิ่มประสิทธิภาพ และแพ็คเกจเฉพาะทางสำหรับแอปพลิเคชันฝังตัว ระบบออกแบบมาสำหรับระบบอัตโนมัติอุตสาหกรรมและอุปกรณ์ IoT'
        },
        tech: ['Linux', 'Kernel', 'C/C++', 'Buildroot', 'U-Boot', 'BusyBox', 'Cross-compilation'],
        status: 'In Progress',
        duration: '4 months',
        team: {
          en: 'Embedded Systems Team (3 members)',
          th: 'ทีมระบบฝังตัว (3 คน)'
        },
        images: [
          '/images/linux-build.png',
          '/images/linux-boot.png',
          '/images/linux-system.png'
        ],
        challenges: {
          en: [
            'Optimizing Linux kernel for embedded hardware',
            'Minimizing system footprint for limited resources',
            'Creating fast boot process'
          ],
          th: [
            'เพิ่มประสิทธิภาพ Linux Kernel สำหรับฮาร์ดแวร์ฝังตัว',
            'ลดขนาดระบบสำหรับทรัพยากรที่จำกัด',
            'สร้างกระบวนการบูตที่เร็ว'
          ]
        },
        solutions: {
          en: [
            'Used Buildroot for custom kernel compilation',
            'Removed unnecessary kernel modules and services',
            'Optimized init system with custom scripts'
          ],
          th: [
            'ใช้ Buildroot สำหรับการคอมไพล์ Kernel ที่กำหนดเอง',
            'ลบโมดูล Kernel และบริการที่ไม่จำเป็นออก',
            'เพิ่มประสิทธิภาพระบบ Init ด้วยสคริปต์ที่กำหนดเอง'
          ]
        },
        results: {
          en: [
            '50% smaller system footprint',
            'Boot time under 10 seconds'
          ],
          th: [
            'ขนาดระบบเล็กลง 50%',
            'เวลาบูตต่ำกว่า 10 วินาที'
          ]
        },
        links: {
          github: 'https://github.com/chanchai/custom-linux'
        }
      },
      {
        id: 'embedded-controller',
        title: {
          en: 'Embedded System Controller',
          th: 'ตัวควบคุมระบบฝังตัว'
        },
        description: {
          en: 'Microcontroller-based control system for industrial automation and monitoring applications.',
          th: 'ระบบควบคุมที่ใช้ไมโครคอนโทรลเลอร์สำหรับการใช้งานระบบอัตโนมัติและการตรวจสอบในอุตสาหกรรม'
        },
        fullDescription: {
          en: 'An advanced embedded control system designed for industrial automation applications. The system uses STM32 microcontrollers with FreeRTOS for real-time task management. Features include Modbus communication protocol, sensor integration, actuator control, and data logging capabilities. The system provides reliable control for industrial processes with safety features and fault detection.',
          th: 'ระบบควบคุมฝังตัวขั้นสูงที่ออกแบบมาสำหรับการใช้งานระบบอัตโนมัติในอุตสาหกรรม ระบบใช้ไมโครคอนโทรลเลอร์ STM32 พร้อม FreeRTOS สำหรับการจัดการงานแบบเรียลไทม์ ฟีเจอร์ต่างๆ ได้แก่ Modbus Communication Protocol, การรวมเซ็นเซอร์, การควบคุม Actuator และความสามารถในการบันทึกข้อมูล ระบบให้การควบคุมที่เชื่อถือได้สำหรับกระบวนการอุตสาหกรรมพร้อมฟีเจอร์ความปลอดภัยและการตรวจจับข้อผิดพลาด'
        },
        tech: ['STM32', 'FreeRTOS', 'C', 'Modbus', 'CAN Bus', 'ADC', 'PWM'],
        status: 'Planning',
        duration: '5 months',
        team: {
          en: 'Industrial Automation Team (3 members)',
          th: 'ทีมระบบอัตโนมัติอุตสาหกรรม (3 คน)'
        },
        images: [
          '/images/embedded-hardware.png',
          '/images/embedded-control.png',
          '/images/embedded-monitoring.png'
        ],
        challenges: {
          en: [
            'Implementing real-time control with FreeRTOS',
            'Ensuring reliable Modbus communication in harsh environments'
          ],
          th: [
            'ใช้งานการควบคุมแบบเรียลไทม์ด้วย FreeRTOS',
            'รับประกันการสื่อสาร Modbus ที่เชื่อถือได้ในสภาพแวดล้อมที่รุนแรง'
          ]
        },
        solutions: {
          en: [
            'Used FreeRTOS for deterministic real-time scheduling',
            'Implemented Modbus RTU with error checking',
            'Built safety system with fault detection'
          ],
          th: [
            'ใช้ FreeRTOS สำหรับการกำหนดเวลาแบบเรียลไทม์ที่แน่นอน',
            'ใช้งาน Modbus RTU พร้อมการตรวจสอบข้อผิดพลาด',
            'สร้างระบบความปลอดภัยพร้อมการตรวจจับข้อผิดพลาด'
          ]
        },
        results: {
          en: [
            'Real-time control with microsecond precision',
            'Reliable Modbus communication',
            'Safety-critical operation capability'
          ],
          th: [
            'การควบคุมแบบเรียลไทม์ด้วยความแม่นยำระดับไมโครวินาที',
            'การสื่อสาร Modbus ที่เชื่อถือได้',
            'ความสามารถในการดำเนินงานที่สำคัญต่อความปลอดภัย'
          ]
        },
        links: {
          demo: 'https://embedded-controller-demo.com',
          github: 'https://github.com/chanchai/embedded-controller'
        }
      }
    ]
  },
  {
    id: 'deploy-cicd',
    label: {
      en: 'Deploy & CI/CD',
      th: 'การติดตั้งและ CI/CD'
    },
    icon: 'Cloud',
    projects: [
      {
        id: 'docker-containerization',
        title: {
          en: 'Docker Containerization',
          th: 'การทำ Containerization ด้วย Docker'
        },
        description: {
          en: 'Containerized applications with Docker and Docker Compose for easy deployment and scaling.',
          th: 'แอปพลิเคชันที่ทำ Containerization ด้วย Docker และ Docker Compose สำหรับการติดตั้งและการปรับขนาดที่ง่าย'
        },
        fullDescription: {
          en: 'A comprehensive containerization solution using Docker and Docker Compose for application deployment and scaling. The project includes multi-stage builds for optimized images, container orchestration, and automated deployment pipelines. Features include health checks, logging, monitoring, and security best practices. The solution supports both development and production environments.',
          th: 'โซลูชันการทำ Containerization ที่ครอบคลุมโดยใช้ Docker และ Docker Compose สำหรับการติดตั้งและการปรับขนาดแอปพลิเคชัน โปรเจกต์รวมถึง Multi-stage Builds สำหรับ Images ที่ได้รับการเพิ่มประสิทธิภาพ, การจัดการ Container และ Pipeline การติดตั้งอัตโนมัติ ฟีเจอร์ต่างๆ ได้แก่ การตรวจสอบสุขภาพ, การบันทึก, การตรวจสอบ และแนวทางปฏิบัติที่ดีที่สุดด้านความปลอดภัย โซลูชันรองรับทั้งสภาพแวดล้อมการพัฒนาและการใช้งานจริง'
        },
        tech: ['Docker', 'Docker Compose', 'Multi-stage Build', 'Optimization', 'Kubernetes', 'GitHub Actions'],
        status: 'Completed',
        duration: '2 months',
        team: {
          en: 'DevOps Team (2 members)',
          th: 'ทีม DevOps (2 คน)'
        },
        images: [
          '/images/docker-containers.png',
          '/images/docker-compose.png',
          '/images/docker-deployment.png'
        ],
        challenges: {
          en: [
            'Optimizing Docker image size for faster deployment',
            'Orchestrating multiple services with Docker Compose'
          ],
          th: [
            'เพิ่มประสิทธิภาพขนาด Docker Image สำหรับการติดตั้งที่เร็วขึ้น',
            'จัดการบริการหลายตัวด้วย Docker Compose'
          ]
        },
        solutions: {
          en: [
            'Used multi-stage builds to minimize image size',
            'Implemented Docker Compose for service management',
            'Integrated GitHub Actions for automated deployment'
          ],
          th: [
            'ใช้ Multi-stage Builds เพื่อลดขนาด Image',
            'ใช้งาน Docker Compose สำหรับการจัดการบริการ',
            'รวม GitHub Actions สำหรับการติดตั้งอัตโนมัติ'
          ]
        },
        results: {
          en: [
            '70% smaller Docker images',
            'Automated deployment pipeline',
            'Easy service orchestration'
          ],
          th: [
            'Docker Images เล็กลง 70%',
            'Pipeline การติดตั้งอัตโนมัติ',
            'การจัดการบริการที่ง่าย'
          ]
        },
        links: {
          demo: 'https://docker-demo.com',
          github: 'https://github.com/chanchai/docker-containerization'
        }
      },
      {
        id: 'github-actions-cicd',
        title: {
          en: 'GitHub Actions CI/CD',
          th: 'GitHub Actions CI/CD'
        },
        description: {
          en: 'Automated build, test, and deployment pipeline using GitHub Actions for continuous integration.',
          th: 'Pipeline การสร้าง, ทดสอบ และติดตั้งอัตโนมัติโดยใช้ GitHub Actions สำหรับการรวมระบบอย่างต่อเนื่อง'
        },
        fullDescription: {
          en: 'A robust CI/CD pipeline built with GitHub Actions that automates the entire software development lifecycle. The pipeline includes automated testing, code quality checks, security scanning, and deployment to multiple environments. Features include parallel job execution, conditional deployments, and comprehensive reporting. The system ensures code quality and reliability before deployment.',
          th: 'Pipeline CI/CD ที่แข็งแกร่งซึ่งสร้างด้วย GitHub Actions ที่ทำให้วงจรการพัฒนาซอฟต์แวร์ทั้งหมดเป็นอัตโนมัติ Pipeline รวมถึงการทดสอบอัตโนมัติ, การตรวจสอบคุณภาพโค้ด, การสแกนความปลอดภัย และการติดตั้งในสภาพแวดล้อมหลายแห่ง ฟีเจอร์ต่างๆ ได้แก่ การทำงานแบบขนาน, การติดตั้งตามเงื่อนไข และรายงานที่ครอบคลุม ระบบรับประกันคุณภาพและความน่าเชื่อถือของโค้ดก่อนการติดตั้ง'
        },
        tech: ['GitHub Actions', 'CI/CD', 'Automation', 'Testing', 'Security Scanning', 'Multi-environment Deployment'],
        status: 'In Progress',
        duration: '3 months',
        team: {
          en: 'DevOps Team (3 members)',
          th: 'ทีม DevOps (3 คน)'
        },
        images: [
          '/images/cicd-pipeline.png',
          '/images/cicd-tests.png',
          '/images/cicd-deployment.png'
        ],
        challenges: {
          en: [
            'Automating build, test, and deployment process',
            'Managing secrets securely in GitHub Actions',
            'Deploying to multiple environments'
          ],
          th: [
            'ทำให้กระบวนการสร้าง, ทดสอบ และติดตั้งเป็นอัตโนมัติ',
            'จัดการข้อมูลลับอย่างปลอดภัยใน GitHub Actions',
            'ติดตั้งในสภาพแวดล้อมหลายแห่ง'
          ]
        },
        solutions: {
          en: [
            'Built GitHub Actions workflows with automated testing',
            'Used GitHub Secrets for credential management',
            'Implemented environment-specific deployment jobs'
          ],
          th: [
            'สร้าง Workflows ของ GitHub Actions พร้อมการทดสอบอัตโนมัติ',
            'ใช้ GitHub Secrets สำหรับการจัดการข้อมูลประจำตัว',
            'ใช้งาน Deployment Jobs เฉพาะสภาพแวดล้อม'
          ]
        },
        results: {
          en: [
            '95% automation of deployment tasks',
            '90% code coverage with automated tests',
            'Secure multi-environment deployment'
          ],
          th: [
            'ระบบอัตโนมัติ 95% ของงานติดตั้ง',
            'Code Coverage 90% ด้วยการทดสอบอัตโนมัติ',
            'การติดตั้งหลายสภาพแวดล้อมที่ปลอดภัย'
          ]
        },
        links: {
          demo: 'https://cicd-demo.com',
          github: 'https://github.com/chanchai/github-actions-cicd'
        }
      },
      {
        id: 'cloud-infrastructure',
        title: {
          en: 'Cloud Infrastructure',
          th: 'โครงสร้างพื้นฐานบนคลาวด์'
        },
        description: {
          en: 'Cloud-based infrastructure setup with auto-scaling, load balancing, and monitoring systems.',
          th: 'การตั้งค่าโครงสร้างพื้นฐานบนคลาวด์พร้อมการปรับขนาดอัตโนมัติ, การกระจายโหลด และระบบตรวจสอบ'
        },
        fullDescription: {
          en: 'A comprehensive cloud infrastructure solution built on AWS with auto-scaling, load balancing, and comprehensive monitoring. The infrastructure includes multi-tier architecture, database clustering, CDN integration, and disaster recovery capabilities. Features include automated scaling based on demand, health monitoring, and cost optimization. The system ensures high availability and performance.',
          th: 'โซลูชันโครงสร้างพื้นฐานบนคลาวด์ที่ครอบคลุมซึ่งสร้างบน AWS พร้อมการปรับขนาดอัตโนมัติ, การกระจายโหลด และการตรวจสอบที่ครอบคลุม โครงสร้างพื้นฐานรวมถึงสถาปัตยกรรมหลายชั้น, การรวมกลุ่มฐานข้อมูล, การรวม CDN และความสามารถในการกู้คืนภัยพิบัติ ฟีเจอร์ต่างๆ ได้แก่ การปรับขนาดอัตโนมัติตามความต้องการ, การตรวจสอบสุขภาพ และการเพิ่มประสิทธิภาพต้นทุน ระบบรับประกันความพร้อมใช้งานสูงและประสิทธิภาพ'
        },
        tech: ['AWS', 'Load Balancer', 'Auto Scaling', 'Monitoring', 'CloudFormation', 'Terraform'],
        status: 'Planning',
        duration: '4 months',
        team: {
          en: 'Cloud Infrastructure Team (4 members)',
          th: 'ทีมโครงสร้างพื้นฐานคลาวด์ (4 คน)'
        },
        images: [
          '/images/cloud-architecture.png',
          '/images/cloud-monitoring.png',
          '/images/cloud-scaling.png'
        ],
        challenges: {
          en: [
            'Setting up auto-scaling infrastructure on AWS',
            'Implementing load balancing for high availability'
          ],
          th: [
            'ตั้งค่าโครงสร้างพื้นฐานการปรับขนาดอัตโนมัติบน AWS',
            'ใช้งานการกระจายโหลดเพื่อความพร้อมใช้งานสูง'
          ]
        },
        solutions: {
          en: [
            'Used AWS Auto Scaling Groups with CloudWatch metrics',
            'Configured Application Load Balancer for traffic distribution',
            'Applied Terraform for infrastructure as code'
          ],
          th: [
            'ใช้ AWS Auto Scaling Groups พร้อม CloudWatch Metrics',
            'กำหนดค่า Application Load Balancer สำหรับการกระจายทราฟฟิก',
            'ใช้ Terraform สำหรับ Infrastructure as Code'
          ]
        },
        results: {
          en: [
            '99.9% uptime achieved',
            'Automatic scaling based on load',
            '40% cost reduction through optimization'
          ],
          th: [
            'บรรลุเวลาทำงาน 99.9%',
            'การปรับขนาดอัตโนมัติตามโหลด',
            'ลดต้นทุน 40% ผ่านการเพิ่มประสิทธิภาพ'
          ]
        },
        links: {
          demo: 'https://cloud-infrastructure-demo.com',
          github: 'https://github.com/chanchai/cloud-infrastructure'
        }
      }
    ]
  }
];

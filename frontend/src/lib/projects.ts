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
          th: 'ระบบจัดการสิ่งอำนวยความสะดวกที่ซึ่งออกแบบและพัฒนาสำหรับอุทยานวิทยาศาสตร์ภาคตะวันออกเฉียงเหนือ 2 ในจังหวัดนครราชสีมา แอปพลิเคชันบนเว็บนี้ให้ความสามารถในการจัดการที่ครบวงจร รวมถึงการจองห้องประชุม, การส่งคำขอซ่อมบำรุง, การพิมพ์ใบแจ้งหนี้สำหรับพื้นที่เช่า และการร้องขอพื้นที่บริการออนไลน์ ระบบยกระดับประสิทธิภาพการจัดการทรัพยากร ลดความซับซ้อนในการดำเนินงาน ลดข้อผิดพลาดจากระบบก่อนหน้า และเพิ่มความสามารถในการตรวจสอบ ติดตาม และจัดเก็บข้อมูลอย่างเป็นระบบ'
        },
        tech: ['React Native', 'TypeScript', 'JWT', 'Go', 'Material-UI', 'SMTP Email', 'CSV', 'PDF.js', 'OK Slip'],
        status: 'Completed',
        duration: '8 months',
        team: {
          en: 'Capstone Project Group Project',
          th: 'โปรเจกต์กลุ่ม'
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
            
            'Implementing complex role-based access control for doctors, nurses, and admin staff',
            'Creating separate interfaces and permissions for different user types',
            'Integrating email notification system for HR management'
          ],
          th: [
            
            'ใช้งานระบบควบคุมการเข้าถึงตามบทบาทที่ซับซ้อนสำหรับแพทย์, พยาบาล และเจ้าหน้าที่บริหาร',
            'สร้างอินเทอร์เฟซและสิทธิ์การเข้าถึงที่แยกกันสำหรับผู้ใช้แต่ละประเภท',
            'รวมระบบแจ้งเตือนทางอีเมลสำหรับการจัดการ HR'
          ]
        },
        solutions: {
          en: [
            'Implemented OK Slip payment service for secure Check the slip processing',
            'Built comprehensive role-based middleware with JWT authentication',
            'Created separate dashboard interfaces for doctors, nurses, and administrative staff',
            'Integrated email service for HR notifications and system updates'
          ],
          th: [
            'ใช้งานบริการชำระเงิน OK Slip สำหรับการประมวลผลตรวจสอบสลิปที่ปลอดภัย',
            'สร้าง Middleware ตามบทบาทที่ครอบคลุมพร้อมการยืนยันตัวตน JWT',
            'สร้างอินเทอร์เฟซแดชบอร์ดแยกกันสำหรับแพทย์, พยาบาล และเจ้าหน้าที่บริหาร',
            'รวมบริการอีเมลสำหรับการแจ้งเตือน HR และการอัปเดตระบบ'
          ]
        },
        results: {
          en: [
            
            'Robust role-based access control ensuring data privacy and security',
            'Separate user interfaces for different hospital staff roles',
            'Efficient user management with automated email notifications'
          ],
          th: [
            'ระบบควบคุมการเข้าถึงตามบทบาทหน้าที่ความเป็นส่วนตัวและความปลอดภัยของข้อมูล',
            'อินเทอร์เฟซผู้ใช้แยกกันสำหรับบทบาทเจ้าหน้าที่โรงพยาบาลที่แตกต่างกัน',
            'การจัดการผู้ใช้ที่มีประสิทธิภาพพร้อมการแจ้งเตือนทางอีเมลอัตโนมัติ'
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
          th: 'ระบบจัดการโรงภาพยนตร์ซึ่งพัฒนาขึ้นเป็นส่วนหนึ่งของโปรเจกต์กลุ่มวิชาการวิเคราะห์ระบบ ระบบมีฟีเจอร์การจัดตารางรอบฉาย, การจัดการภาพยนตร์, การแมปโรงภาพยนตร์ และความสามารถในการจองที่นั่ง ผมรับผิดชอบในการพัฒนาส่วนจัดการรอบฉายและการรวมระบบจอง ความท้าทายหลักเกี่ยวข้องกับการจับคู่ที่ซับซ้อนระหว่างภาพยนตร์, โรงภาพยนตร์ และช่วงเวลา ซึ่งต้องการการออกแบบฐานข้อมูลอย่างรอบคอบและการพัฒนาอินเทอร์เฟซผู้ใช้เพื่อแสดงข้อมูลนี้ในรูปแบบตารางที่ใช้งานง่าย'
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
            'ระบบการจับคู่ที่ซับซ้อนระหว่างภาพยนตร์, โรงภาพยนตร์ และช่วงเวลา',
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
          github: 'https://github.com/Chanchai2004/Sum_code_Sa.git'
        }
      },
      {
        id: 'skai-phi-medical-system',
        title: {
          en: 'SKAI PHI - Medical Data Collection System',
          th: 'SKAI PHI - ระบบรวบรวมข้อมูลทางการแพทย์'
        },
        description: {
          en: 'Medical data collection and analysis system for stroke risk assessment with AI prediction integration.',
          th: 'ระบบรวบรวมและวิเคราะห์ข้อมูลทางการแพทย์สำหรับการประเมินความเสี่ยงโรคหลอดเลือดสมองพร้อมการทำนายด้วย AI'
        },
        fullDescription: {
          en: 'A confidential medical data collection system designed for stroke risk assessment. The system features patient registration, comprehensive data collection, and AI model integration for risk prediction. The application focuses on data security and privacy compliance, implementing robust authentication and encryption methods. Results are displayed through an intuitive web interface for medical professionals to analyze patient data efficiently.',
          th: 'ระบบรวบรวมข้อมูลทางการแพทย์ที่เป็นความลับสำหรับการประเมินความเสี่ยงโรคหลอดเลือดสมอง ระบบมีฟีเจอร์การลงทะเบียนผู้ป่วย, การเก็บรวบรวมข้อมูลอย่างครอบคลุม และการผสานรวมโมเดล AI สำหรับการทำนายความเสี่ยง แอปพลิเคชันมุ่งเน้นที่ความปลอดภัยของข้อมูลและการปฏิบัติตามข้อกำหนดความเป็นส่วนตัว โดยใช้วิธีการยืนยันตัวตนและการเข้ารหัสที่แข็งแกร่ง ผลลัพธ์จะแสดงผ่านอินเทอร์เฟซเว็บที่ใช้งานง่ายสำหรับบุคลากรทางการแพทย์ในการวิเคราะห์ข้อมูลผู้ป่วยอย่างมีประสิทธิภาพ'
        },
        tech: ['Secret'],
        status: 'In Progress',
        duration: 'Ongoing',
        team: {
          en: 'Collaborative Medical Technology Project',
          th: 'โปรเจกต์ความร่วมมือด้านเทคโนโลยีทางการแพทย์'
        },
        images: [
          '/images/projects/skai-phi-medical-system/1.png',

        ],
        challenges: {
          en: [
            'Implementing robust security measures including hash functions and password salting',
            'Ensuring PDPA compliance for sensitive medical data collection and storage',
            'Designing secure data storage infrastructure for patient privacy protection'
          ],
          th: [
            'การใช้มาตรการรักษาความปลอดภัยที่แข็งแกร่งรวมถึง hash functions และ password salting',
            'การปฏิบัติตาม PDPA สำหรับการเก็บรวบรวมและจัดเก็บข้อมูลทางการแพทย์ที่ละเอียดอ่อน',
            'การออกแบบโครงสร้างพื้นฐานการจัดเก็บข้อมูลที่ปลอดภัยเพื่อปกป้องความเป็นส่วนตัวของผู้ป่วย'
          ]
        },
        solutions: {
          en: [
            'Developed secure web application with comprehensive data collection capabilities',
            'Implemented multi-layer security architecture with encryption and access control',
            'Created role-based system for medical professionals and data analysts',
            'Integrated with AI prediction models for stroke risk assessment'
          ],
          th: [
            'พัฒนาเว็บแอปพลิเคชันที่ปลอดภัยพร้อมความสามารถในการเก็บรวบรวมข้อมูลที่ครอบคลุม',
            'ใช้สถาปัตยกรรมความปลอดภัยแบบหลายชั้นด้วยการเข้ารหัสและการควบคุมการเข้าถึง',
            'สร้างระบบแบ่งบทบาทสำหรับบุคลากรทางการแพทย์และนักวิเคราะห์ข้อมูล',
            'ผสานรวมกับโมเดลการทำนายด้วย AI สำหรับการประเมินความเสี่ยงโรคหลอดเลือดสมอง'
          ]
        },
        results: {
          en: [
            'Facilitated efficient data collection process for medical professionals',
            'Successfully met company requirements and project objectives',
            'Enhanced data analysis capabilities with secure access controls'
          ],
          th: [
            'อำนวยความสะดวกในกระบวนการเก็บรวบรวมข้อมูลสำหรับบุคลากรทางการแพทย์อย่างมีประสิทธิภาพ',
            'ตอบสนองความต้องการของบริษัทและวัตถุประสงค์ของโปรเจกต์ได้สำเร็จ',
            'เพิ่มความสามารถในการวิเคราะห์ข้อมูลด้วยการควบคุมการเข้าถึงที่ปลอดภัย'
          ]
        },
        links: {}
      },
      {
        id: 'iot-hardware-documentation',
        title: {
          en: 'IoT Hardware Documentation Website',
          th: 'เว็บไซต์เอกสารฮาร์ดแวร์ IoT'
        },
        description: {
          en: 'Comprehensive static website documenting embedded systems and IoT hardware components for Embedded Systems course project.',
          th: 'เว็บไซต์สแตติกที่ครอบคลุมสำหรับเอกสารระบบฝังตัวและฮาร์ดแวร์ IoT สำหรับโปรเจกต์รายวิชา Embedded Systems'
        },
        fullDescription: {
          en: 'A comprehensive static documentation website created as a solo project for the Embedded Systems course to explain various embedded systems and IoT hardware components and their capabilities. The website covers detailed information about Raspberry Pi, Node-RED, IoT Pi, ChatBot integration, ESP32, RS485 communication, Think Board PLC, Siemens Logo 8, HMI, Modbus PLC, and other industrial automation components. Each section provides clear explanations of what each component is, how it works, and what it can accomplish in embedded systems and automation projects.',
          th: 'เว็บไซต์เอกสารสแตติกที่ครอบคลุมซึ่งสร้างขึ้นเป็นโปรเจกต์เดี่ยวสำหรับรายวิชา Embedded Systems เพื่ออธิบายระบบฝังตัวและฮาร์ดแวร์ IoT ต่างๆ และความสามารถของพวกมัน เว็บไซต์ครอบคลุมข้อมูลรายละเอียดเกี่ยวกับ Raspberry Pi, Node-RED, IoT Pi, การรวม ChatBot, ESP32, การสื่อสาร RS485, Think Board PLC, Siemens Logo 8, HMI, Modbus PLC และคอมโพเนนต์ระบบอัตโนมัติในอุตสาหกรรมอื่นๆ แต่ละส่วนให้คำอธิบายที่ชัดเจนเกี่ยวกับคอมโพเนนต์แต่ละตัวคืออะไร ทำงานอย่างไร และสามารถทำอะไรได้ในโปรเจกต์ระบบฝังตัวและระบบอัตโนมัติ'
        },
        tech: ['HTML', 'CSS', 'Firebase'],
        status: 'Completed',
        duration: '2 months',
        team: {
          en: 'Solo Project',
          th: 'โปรเจกต์เดี่ยว'
        },
        images: [
          '/images/projects/iot-hardware-documentation/1.png',
          '/images/projects/iot-hardware-documentation/2.png',
          '/images/projects/iot-hardware-documentation/3.png',
          '/images/projects/iot-hardware-documentation/4.png',
          '/images/projects/iot-hardware-documentation/5.png',
          '/images/projects/iot-hardware-documentation/6.png',
          '/images/projects/iot-hardware-documentation/7.png',

        ],
        challenges: {
          en: [
            'Organizing and structuring vast amounts of technical information',
            'Creating clear and understandable explanations for complex hardware components',
            'Designing intuitive navigation for multiple hardware categories'
          ],
          th: [
            'การจัดระเบียบและจัดโครงสร้างข้อมูลทางเทคนิคจำนวนมาก',
            'การสร้างคำอธิบายที่ชัดเจนและเข้าใจง่ายสำหรับคอมโพเนนต์ฮาร์ดแวร์ที่ซับซ้อน',
            'การออกแบบการนำทางที่ใช้งานง่ายสำหรับหมวดหมู่ฮาร์ดแวร์หลายประเภท'
          ]
        },
        solutions: {
          en: [
            'Developed systematic content organization with clear categorization',
            'Created detailed documentation with practical examples and use cases',
            'Implemented responsive design for optimal viewing across devices'
          ],
          th: [
            'พัฒนาการจัดระเบียบเนื้อหาแบบเป็นระบบพร้อมการจัดหมวดหมู่ที่ชัดเจน',
            'สร้างเอกสารรายละเอียดพร้อมตัวอย่างการใช้งานจริงและกรณีการใช้งาน',
            'ใช้การออกแบบที่ตอบสนองสำหรับการดูที่เหมาะสมในอุปกรณ์ต่างๆ'
          ]
        },
        results: {
          en: [
            'Comprehensive documentation covering 10+ IoT hardware components',
            'Clear educational resource for understanding industrial automation',
            'Successfully deployed static website with Firebase hosting'
          ],
          th: [
            'เอกสารที่ครอบคลุมคอมโพเนนต์ฮาร์ดแวร์ IoT มากกว่า 10 ชนิด',
            'แหล่งข้อมูลทางการศึกษาที่ชัดเจนสำหรับการทำความเข้าใจระบบอัตโนมัติในอุตสาหกรรม',
            'เว็บไซต์สแตติกที่ใช้งานได้สำเร็จพร้อม Firebase hosting'
          ]
        },
        links: {
          website: 'https://em-b-92544.web.app/?fbclid=IwY2xjawNZoM9leHRuA2FlbQIxMABicmlkETF2V2YzT0RXMFJoRjFGMm5EAR5sq7AfYfCuQLPj1lk80f3GacsJgq5mPAI7TN7cfxwIEvlCWY_rB0m2749lgA_aem_I-ySWLUrCErOWH766X4F-A'
        }
      },
      {
        id: 'education-guidance-website',
        title: {
          en: 'Education Guidance Website',
          th: 'เว็บไซต์แนะแนวการศึกษา'
        },
        description: {
          en: 'Interactive guidance website for high school students providing information about university life, academic programs, and campus experiences at Suranaree University of Technology.',
          th: 'เว็บไซต์แนะแนวแบบโต้ตอบสำหรับนักเรียนมัธยมปลาย ให้ข้อมูลเกี่ยวกับชีวิตมหาวิทยาลัย, หลักสูตรการศึกษา และประสบการณ์ในมหาวิทยาลัยเทคโนโลยีสุรนารี'
        },
        fullDescription: {
          en: 'A comprehensive guidance website created as a solo project to help high school students understand university life and academic programs. The website features interactive content about Suranaree University of Technology, including detailed information about different academic majors, teaching methods, faculty experiences, campus life, and daily student activities. The site includes voice features with AI-generated speech to enhance user engagement and accessibility.',
          th: 'เว็บไซต์แนะแนวที่ครอบคลุมซึ่งสร้างขึ้นเป็นโปรเจกต์เดี่ยวเพื่อช่วยนักเรียนมัธยมปลายเข้าใจชีวิตมหาวิทยาลัยและหลักสูตรการศึกษา เว็บไซต์มีเนื้อหาแบบโต้ตอบเกี่ยวกับมหาวิทยาลัยเทคโนโลยีสุรนารี รวมถึงข้อมูลรายละเอียดเกี่ยวกับสาขาวิชาต่างๆ, วิธีการสอน, ประสบการณ์ของอาจารย์, ชีวิตในมหาวิทยาลัย และกิจกรรมประจำวันของนักศึกษา เว็บไซต์มีฟีเจอร์เสียงด้วย AI-generated speech เพื่อเพิ่มการมีส่วนร่วมของผู้ใช้และความสามารถในการเข้าถึง'
        },
        tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
        status: 'Completed',
        duration: '1 day',
        team: {
          en: 'Solo Project - Educational Guidance',
          th: 'โปรเจกต์เดี่ยว - แนะแนวการศึกษา'
        },
        images: [
          '/images/projects/education-guidance-website/1.png',
          '/images/projects/education-guidance-website/2.png',
          '/images/projects/education-guidance-website/3.png',
          '/images/projects/education-guidance-website/4.png',
        ],
        challenges: {
          en: [
            'Organizing and presenting complex university information in an engaging way',
            'Implementing voice features with AI-generated speech for better accessibility'
          ],
          th: [
            'การจัดระเบียบและนำเสนอข้อมูลมหาวิทยาลัยที่ซับซ้อนในรูปแบบที่น่าสนใจ',
            'การใช้งานฟีเจอร์เสียงด้วย AI-generated speech เพื่อความสามารถในการเข้าถึงที่ดีขึ้น'
          ]
        },
        solutions: {
          en: [
            'Developed structured content organization with clear sections for different aspects of university life',
            'Integrated AI voice features to enhance user experience and accessibility',
            'Created responsive design with intuitive navigation and interactive elements',
            'Implemented user-friendly interface for easy navigation'
          ],
          th: [
            'พัฒนาการจัดระเบียบเนื้อหาแบบมีโครงสร้างพร้อมส่วนที่ชัดเจนสำหรับแง่มุมต่างๆ ของชีวิตมหาวิทยาลัย',
            'รวมฟีเจอร์เสียง AI เพื่อเพิ่มประสบการณ์ผู้ใช้และความสามารถในการเข้าถึง',
            'สร้างการออกแบบที่ตอบสนองพร้อมการนำทางที่ใช้งานง่ายและองค์ประกอบแบบโต้ตอบ',
            'ใช้งานอินเทอร์เฟซที่ใช้งานง่ายสำหรับการนำทางที่สะดวก'
          ]
        },
        results: {
          en: [
            'Successfully created comprehensive guidance resource for high school students',
            'Enhanced accessibility with AI voice features'
          ],
          th: [
            'สร้างแหล่งข้อมูลแนะแนวที่ครอบคลุมสำหรับนักเรียนมัธยมปลายได้สำเร็จ',
            'เพิ่มความสามารถในการเข้าถึงด้วยฟีเจอร์เสียง AI'
          ]
        },
        links: {
          website: 'https://education-guidance-activities-for-kws.netlify.app/index.html'
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
        id: 'data extraction ultrasound-label-box',
        title: {
          en: 'Ultrasound Data Extraction - Crop & OCR System',
          th: 'ระบบสกัดข้อมูลอัลตร้าซาวด์ - Crop & OCR'
        },
        description: {
          en: 'AI-powered ultrasound data extraction system with interactive crop boxes for region selection and OCR text extraction from draggable selection areas.',
          th: 'ระบบสกัดข้อมูลอัลตร้าซาวด์ขับเคลื่อนด้วย AI พร้อมกล่อง crop แบบโต้ตอบสำหรับการเลือกพื้นที่และสกัดข้อความด้วย OCR จากพื้นที่ที่ลาก'
        },
        fullDescription: {
          en: 'An intelligent ultrasound data extraction system using AI OCR technology. Users can drag and create crop boxes on medical images to select specific regions for data extraction. The system extracts text data from the cropped areas using OCR technology. It processes complex medical information from PDF files and applies automated validation. After extraction, the data is automatically saved and uploaded to cloud storage via API integration. The workflow includes PDF import, interactive draggable crop box creation, OCR text extraction from selected regions, automated form filling, and cloud synchronization.',
          th: 'ระบบสกัดข้อมูลอัลตร้าซาวด์อัจฉริยะโดยใช้เทคโนโลยี AI OCR ผู้ใช้สามารถลากและสร้างกล่อง crop บนภาพทางการแพทย์เพื่อเลือกพื้นที่เฉพาะสำหรับการสกัดข้อมูล ระบบสกัดข้อมูลข้อความจากพื้นที่ที่ crop โดยใช้เทคโนโลยี OCR ประมวลผลข้อมูลทางการแพทย์ที่ซับซ้อนจากไฟล์ PDF และใช้การตรวจสอบอัตโนมัติ หลังจากสกัดข้อมูลแล้ว ข้อมูลจะถูกบันทึกและอัปโหลดไปยังการจัดเก็บบนคลาวด์ผ่านการรวม API กระบวนการทำงานรวมถึงการนำเข้า PDF, การสร้างกล่อง crop แบบลากได้แบบโต้ตอบ, การสกัดข้อความด้วย OCR จากพื้นที่ที่เลือก, การกรอกฟอร์มอัตโนมัติ และการซิงค์กับคลาวด์'
        },
        tech: ['Python', 'FastAPI', 'OCR' ,'Customtkinter'],
        status: 'Completed',
        duration: '1 week',
        team: {
          en: 'Solo Project - Extrac AI',
          th: 'โปรเจกต์เดี่ยว - AI สกัดข้อมูล ทางการแพทย์'
        },
        images: [
          '/images/projects/data extraction ultrasound-label-box/1.png',
        ],
        challenges: {
          en: [
            'Creating interactive draggable crop box system for precise region selection',
            'Implementing accurate OCR text extraction from cropped image regions',
            'Processing large volumes of complex medical data with validation'
          ],
          th: [
            'การสร้างระบบกล่อง crop แบบลากได้แบบโต้ตอบสำหรับการเลือกพื้นที่ที่แม่นยำ',
            'การใช้งานการสกัดข้อความ OCR ที่แม่นยำจากพื้นที่รูปภาพที่ crop',
            'การประมวลผลข้อมูลทางการแพทย์จำนวนมากและซับซ้อนพร้อมการตรวจสอบ'
          ]
        },
        solutions: {
          en: [
            'Developed interactive drag-and-drop crop box system using Customtkinter',
            'Implemented AI OCR integration for text extraction from cropped regions',
            'Created automated validation and form-filling system for medical data'
          ],
          th: [
            'พัฒนาระบบกล่อง crop แบบลากและวางโดยใช้ Customtkinter',
            'ใช้งานการรวม AI OCR สำหรับการสกัดข้อความจากพื้นที่ที่ crop',
            'สร้างระบบตรวจสอบอัตโนมัติและการกรอกฟอร์มสำหรับข้อมูลทางการแพทย์'
          ]
        },
        results: {
          en: [
            'Successfully implemented draggable crop box system for precise region selection',
            'Achieved high accuracy in OCR text extraction from cropped image areas',
            'Streamlined medical data processing with automated validation and form filling'
          ],
          th: [
            'ใช้งานระบบกล่อง crop แบบลากได้สำหรับการเลือกพื้นที่ที่แม่นยำได้สำเร็จ',
            'บรรลุความแม่นยำสูงในการสกัดข้อความด้วย OCR จากพื้นที่รูปภาพที่ crop',
            'ทำให้การประมวลผลข้อมูลทางการแพทย์ราบรื่นด้วยการตรวจสอบและกรอกฟอร์มอัตโนมัติ'
          ]
        },
        links: {}
      },
      {
        id: 'food-detection-yolo-transformers',
        title: {
          en: 'Food Detection and Classification',
          th: 'การตรวจจับและจำแนกประเภทอาหาร'
        },
        description: {
          en: 'Comparative study of YOLO and Vision Transformer (ViT) models for food detection and classification, analyzing performance under limited resources and dataset constraints.',
          th: 'การศึกษาเปรียบเทียบโมเดล YOLO และ Vision Transformer (ViT) สำหรับการตรวจจับและจำแนกประเภทอาหาร วิเคราะห์ประสิทธิภาพภายใต้ข้อจำกัดด้านทรัพยากรและชุดข้อมูล'
        },
        fullDescription: {
          en: 'A comprehensive Deep Learning project comparing the performance of YOLO (You Only Look Once) and Vision Transformer (ViT) models for food detection and classification. The study focuses on analyzing accuracy, training time, and resource requirements under limited computational resources and small dataset constraints. The project includes data augmentation techniques, hyperparameter optimization using Random Search, and detailed performance evaluation using mAP (mean Average Precision) metrics. The dataset consists of 10 Thai food classes with 1,200 images after augmentation, processed using Roboflow for labeling in both YOLO and Pascal VOC XML formats.',
          th: 'โปรเจกต์ Deep Learning ที่ครอบคลุมเปรียบเทียบประสิทธิภาพของโมเดล YOLO (You Only Look Once) และ Vision Transformer (ViT) สำหรับการตรวจจับและจำแนกประเภทอาหาร การศึกษามุ่งเน้นการวิเคราะห์ความแม่นยำ, เวลาในการฝึก และความต้องการทรัพยากรภายใต้ข้อจำกัดด้านการคำนวณและชุดข้อมูลขนาดเล็ก โปรเจกต์รวมเทคนิคการเพิ่มข้อมูล, การปรับแต่งพารามิเตอร์ด้วย Random Search และการประเมินประสิทธิภาพโดยละเอียดด้วยเมตริก mAP (mean Average Precision) ชุดข้อมูลประกอบด้วยอาหารไทย 10 ประเภท พร้อมรูปภาพ 1,200 รูปหลังการเพิ่มข้อมูล ประมวลผลด้วย Roboflow สำหรับการป้ายกำกับในรูปแบบ YOLO และ Pascal VOC XML'
        },
        tech: ['Python', 'YOLO', 'Vision Transformer', 'PyTorch', 'Google Colab', 'Roboflow', 'mAP'],
        status: 'Completed',
        duration: '3 weeks',
        team: {
          en: 'Deep Learning Course Group Project (2 members)',
          th: 'โปรเจกต์กลุ่มรายวิชา Deep Learning (2 คน)'
        },
        images: [
          '/images/projects/food-detection-yolo-transformers/1.png',
          '/images/projects/food-detection-yolo-transformers/2.png',
          '/images/projects/food-detection-yolo-transformers/3.png',
          '/images/projects/food-detection-yolo-transformers/4.png',
          '/images/projects/food-detection-yolo-transformers/5.png',
          '/images/projects/food-detection-yolo-transformers/6.png',
        ],
        challenges: {
          en: [
            'Limited dataset size requiring effective data augmentation techniques',
            'Resource constraints affecting model training and hyperparameter optimization',
            'Different output formats between YOLO and ViT requiring code adaptation'
          ],
          th: [
            'ขนาดชุดข้อมูลที่จำกัดต้องการเทคนิคการเพิ่มข้อมูลที่มีประสิทธิภาพ',
            'ข้อจำกัดด้านทรัพยากรที่ส่งผลต่อการฝึกโมเดลและการปรับแต่งพารามิเตอร์',
            'รูปแบบผลลัพธ์ที่แตกต่างระหว่าง YOLO และ ViT ต้องการการปรับแต่งโค้ด'
          ]
        },
        solutions: {
          en: [
            'Implemented data augmentation using Roboflow to increase dataset from 500 to 1,200 images',
            'Used Random Search for hyperparameter optimization within resource constraints',
            'Developed unified evaluation framework using mAP metrics for fair comparison'
          ],
          th: [
            'ใช้งานการเพิ่มข้อมูลด้วย Roboflow เพื่อเพิ่มชุดข้อมูลจาก 500 เป็น 1,200 รูป',
            'ใช้ Random Search สำหรับการปรับแต่งพารามิเตอร์ภายใต้ข้อจำกัดด้านทรัพยากร',
            'พัฒนากรอบการประเมินแบบรวมด้วยเมตริก mAP สำหรับการเปรียบเทียบที่ไม่ลำเอียง'
          ]
        },
        results: {
          en: [
            'YOLO achieved mAP@0.5: 0.88 and mAP@0.5:0.95: 0.71 with 45-minute training time',
            'ViT achieved mAP@0.5: 0.336 and mAP@0.5:0.95: 0.456 with 60-70 minute training time',
            'Successfully compared 10 Thai food classes with comprehensive performance analysis'
          ],
          th: [
            'YOLO บรรลุ mAP@0.5: 0.88 และ mAP@0.5:0.95: 0.71 ด้วยเวลาในการฝึก 45 นาที',
            'ViT บรรลุ mAP@0.5: 0.336 และ mAP@0.5:0.95: 0.456 ด้วยเวลาในการฝึก 60-70 นาที',
            'เปรียบเทียบอาหารไทย 10 ประเภทได้สำเร็จพร้อมการวิเคราะห์ประสิทธิภาพที่ครอบคลุม'
          ]
        },

      },
      {
        id: 'stock-price-prediction-rnn-lstm-gru',
        title: {
          en: 'Stock Price Prediction using RNN, LSTM, and GRU',
          th: 'การพยากรณ์ราคาหุ้นด้วย RNN, LSTM และ GRU'
        },
        description: {
          en: 'Comprehensive time series analysis project comparing three deep learning models (RNN, LSTM, GRU) for NVIDIA stock price prediction using historical market data.',
          th: 'โปรเจกต์วิเคราะห์อนุกรมเวลาที่ครอบคลุมเปรียบเทียบโมเดล Deep Learning 3 แบบ (RNN, LSTM, GRU) สำหรับการพยากรณ์ราคาหุ้น NVIDIA โดยใช้ข้อมูลตลาดในอดีต'
        },
        fullDescription: {
          en: 'A comprehensive Deep Learning project that implements and compares three different recurrent neural network architectures for stock price prediction. The project uses NVIDIA stock data including Open, High, Low, Close prices to predict future stock values. Three models are implemented: Simple RNN for basic sequence learning, LSTM (Long Short-Term Memory) for handling long-term dependencies, and GRU (Gated Recurrent Unit) for efficient memory management. The project includes both Many-to-One and Many-to-Many prediction approaches, with detailed performance analysis using metrics like MAPE, MSE, and R². All models are trained on historical data and tested for future price prediction accuracy.',
          th: 'โปรเจกต์ Deep Learning ที่ครอบคลุมซึ่งใช้งานและเปรียบเทียบสถาปัตยกรรม Recurrent Neural Network 3 แบบที่แตกต่างกันสำหรับการพยากรณ์ราคาหุ้น โปรเจกต์ใช้ข้อมูลหุ้น NVIDIA รวมถึงราคาเปิด, สูงสุด, ต่ำสุด, ปิด เพื่อพยากรณ์มูลค่าหุ้นในอนาคต ใช้งานโมเดล 3 แบบ: Simple RNN สำหรับการเรียนรู้ลำดับพื้นฐาน, LSTM (Long Short-Term Memory) สำหรับจัดการความสัมพันธ์ระยะยาว, และ GRU (Gated Recurrent Unit) สำหรับการจัดการหน่วยความจำที่มีประสิทธิภาพ โปรเจกต์รวมทั้งแนวทาง Many-to-One และ Many-to-Many ในการพยากรณ์ พร้อมการวิเคราะห์ประสิทธิภาพโดยละเอียดด้วยเมตริกเช่น MAPE, MSE และ R² โมเดลทั้งหมดได้รับการฝึกด้วยข้อมูลในอดีตและทดสอบความแม่นยำในการพยากรณ์ราคาในอนาคต'
        },
        tech: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'NumPy', 'Google Colab', 'Plotly', 'Matplotlib'],
        status: 'Completed',
        duration: '1 week',
        team: {
          en: 'Deep Learning Course Group Project',
          th: 'โปรเจกต์กลุ่มรายวิชา Deep Learning'
        },
        images: [
          '/images/projects/stock-price-prediction-rnn-lstm-gru/1.png',
          '/images/projects/stock-price-prediction-rnn-lstm-gru/2.png',
          '/images/projects/stock-price-prediction-rnn-lstm-gru/3.png',
          '/images/projects/stock-price-prediction-rnn-lstm-gru/4.png',
          '/images/projects/stock-price-prediction-rnn-lstm-gru/5.png',

        ],
        challenges: {
          en: [
            'Handling time series data preprocessing and sequence creation for different model architectures',
            'Managing vanishing gradient problem in RNN models for long-term dependencies',
            'Optimizing hyperparameters for three different neural network architectures'
          ],
          th: [
            'การจัดการการประมวลผลข้อมูลอนุกรมเวลาและการสร้างลำดับสำหรับสถาปัตยกรรมโมเดลที่แตกต่างกัน',
            'การจัดการปัญหา vanishing gradient ในโมเดล RNN สำหรับความสัมพันธ์ระยะยาว',
            'การปรับแต่งพารามิเตอร์สำหรับสถาปัตยกรรม Neural Network 3 แบบที่แตกต่างกัน'
          ]
        },
        solutions: {
          en: [
            'Implemented MinMaxScaler for data normalization and created 30-day sequences for training',
            'Used LSTM and GRU architectures with gating mechanisms to address vanishing gradient issues',
            'Applied dropout regularization and different layer configurations for each model type',
            'Developed comprehensive evaluation framework with multiple metrics and visualization'
          ],
          th: [
            'ใช้งาน MinMaxScaler สำหรับการปรับมาตรฐานข้อมูลและสร้างลำดับ 30 วันสำหรับการฝึก',
            'ใช้สถาปัตยกรรม LSTM และ GRU พร้อมกลไก gating เพื่อแก้ปัญหา vanishing gradient',
            'ใช้ dropout regularization และการกำหนดค่าชั้นที่แตกต่างกันสำหรับแต่ละประเภทโมเดล',
            'พัฒนากรอบการประเมินที่ครอบคลุมด้วยเมตริกหลายตัวและการแสดงผล'
          ]
        },
        results: {
          en: [
            'Successfully implemented and compared three RNN architectures for stock prediction',
            'Achieved different performance levels across models with LSTM showing best long-term memory',
            'Generated comprehensive visualizations comparing actual vs predicted stock prices',
            'Demonstrated effectiveness of gated architectures over simple RNN for time series prediction'
          ],
          th: [
            'ใช้งานและเปรียบเทียบสถาปัตยกรรม RNN 3 แบบสำหรับการพยากรณ์หุ้นได้สำเร็จ',
            'บรรลุระดับประสิทธิภาพที่แตกต่างกันระหว่างโมเดล โดย LSTM แสดงความจำระยะยาวที่ดีที่สุด',
            'สร้างการแสดงผลที่ครอบคลุมเปรียบเทียบราคาหุ้นจริงกับราคาที่พยากรณ์',
            'แสดงให้เห็นประสิทธิภาพของสถาปัตยกรรม gated มากกว่า RNN ธรรมดาสำหรับการพยากรณ์อนุกรมเวลา'
          ]
        },
        links: {
          github: 'https://github.com/Chanchai2004/Stock-Price-Prediction-RNN-LSTM-GRU.git',
          demo: 'https://colab.research.google.com/drive/1E8dAGOpAuOw7uOf1MjponqTUwL_2xM1X'
        }
      },
      {
        id: 'housing-price-prediction-feature-analysis',
        title: {
          en: 'Housing Price Prediction - Feature Analysis',
          th: 'การทำนายราคาบ้าน - การวิเคราะห์ความสำคัญของฟีเจอร์'
        },
        description: {
          en: 'Machine learning project analyzing and ranking feature importance for housing price prediction using Linear Regression and Ridge Regression models.',
          th: 'โปรเจกต์ Machine Learning วิเคราะห์และจัดอันดับความสำคัญของฟีเจอร์สำหรับการทำนายราคาบ้านโดยใช้โมเดล Linear Regression และ Ridge Regression'
        },
        fullDescription: {
          en: 'A comprehensive machine learning project that analyzes various housing features to determine their impact on property prices. The project implements both Linear Regression and Ridge Regression (L2 Regularization) models to evaluate feature importance. Features analyzed include area, number of bedrooms, bathrooms, stories, parking spaces, and amenities such as main road access, guest rooms, basement, hot water heating, air conditioning, and furnishing status. Each feature is tested individually to calculate error metrics (MSE, MAE, MAPE, RMSE) and R-squared scores, providing insights into which factors have the most significant impact on housing prices. The analysis reveals that area has the highest correlation with price (R² = 0.272), followed by bathrooms (R² = 0.218) and stories (R² = 0.190).',
          th: 'โปรเจกต์ Machine Learning ที่ครอบคลุมซึ่งวิเคราะห์ฟีเจอร์ต่างๆ ของบ้านเพื่อกำหนดผลกระทบต่อราคาอสังหาริมทรัพย์ โปรเจกต์ใช้งานโมเดล Linear Regression และ Ridge Regression (L2 Regularization) เพื่อประเมินความสำคัญของฟีเจอร์ ฟีเจอร์ที่วิเคราะห์รวมถึงพื้นที่, จำนวนห้องนอน, ห้องน้ำ, ชั้น, ที่จอดรถ, และสิ่งอำนวยความสะดวกต่างๆ เช่น การเข้าถึงถนนหลัก, ห้องรับแขก, ห้องใต้ดิน, เครื่องทำน้ำร้อน, เครื่องปรับอากาศ, และสถานะการตกแต่ง แต่ละฟีเจอร์ถูกทดสอบแยกกันเพื่อคำนวณเมตริกข้อผิดพลาด (MSE, MAE, MAPE, RMSE) และคะแนน R-squared ให้ข้อมูลเชิงลึกว่าปัจจัยใดมีผลกระทบที่สำคัญที่สุดต่อราคาบ้าน การวิเคราะห์เผยให้เห็นว่าพื้นที่มีความสัมพันธ์สูงสุดกับราคา (R² = 0.272) รองลงมาคือห้องน้ำ (R² = 0.218) และจำนวนชั้น (R² = 0.190)'
        },
        tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Linear Regression', 'Ridge Regression', 'Google Colab'],
        status: 'Completed',
        duration: '3 days',
        team: {
          en: 'Deep Learning Course Group Project (2 members)',
          th: 'โปรเจกต์กลุ่มรายวิชา Deep Learning (2 คน)'
        },
        images: [
          '/images/projects/housing-price-prediction-feature-analysis/1.png',
          '/images/projects/housing-price-prediction-feature-analysis/2.png',
          '/images/projects/housing-price-prediction-feature-analysis/3.png',
        ],
        challenges: {
          en: [
            'Converting categorical features to numerical format for model training',
            'Determining optimal regularization parameter (alpha) for Ridge Regression'
          ],
          th: [
            'การแปลงฟีเจอร์เชิงหมวดหมู่เป็นรูปแบบตัวเลขสำหรับการฝึกโมเดล',
            'การกำหนดค่าพารามิเตอร์ regularization (alpha) ที่เหมาะสมสำหรับ Ridge Regression'
          ]
        },
        solutions: {
          en: [
            'Applied data preprocessing with pandas to convert categorical variables to binary (0/1) format',
            'Implemented both Linear Regression and Ridge Regression models for comparison',
            'Conducted individual feature testing to calculate MSE, MAE, MAPE, RMSE, and R² scores'
          ],
          th: [
            'ใช้การประมวลผลข้อมูลด้วย pandas เพื่อแปลงตัวแปรเชิงหมวดหมู่เป็นรูปแบบไบนารี (0/1)',
            'ใช้งานโมเดล Linear Regression และ Ridge Regression สำหรับการเปรียบเทียบ',
            'ทดสอบฟีเจอร์แต่ละตัวเพื่อคำนวณคะแนน MSE, MAE, MAPE, RMSE และ R²'
          ]
        },
        results: {
          en: [
            'Area identified as most important feature with highest R² score (0.272)',
            'Bathrooms ranked second (R² = 0.218) and stories third (R² = 0.190)',
            'Ridge Regression prevented overfitting through L2 regularization'
          ],
          th: [
            'พื้นที่ถูกระบุว่าเป็นฟีเจอร์ที่สำคัญที่สุดด้วยคะแนน R² สูงสุด (0.272)',
            'ห้องน้ำอันดับสอง (R² = 0.218) และจำนวนชั้นอันดับสาม (R² = 0.190)',
            'Ridge Regression ป้องกัน overfitting ผ่าน L2 regularization'
          ]
        },
        links: {
          github: 'https://github.com/Chanchai2004/Housing-Price-Feature-Analysis.git',
          demo: 'https://colab.research.google.com/drive/1VwUlGixGvzThrRRA-u715l15_Vwh_4g_'
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
        id: 'rfid-attendance-raspberry-pi',
        title: {
          en: 'RFID Attendance System with Raspberry Pi',
          th: 'ระบบเช็คชื่อด้วย RFID บน Raspberry Pi'
        },
        description: {
          en: 'IoT-based attendance tracking system using RFID technology, Raspberry Pi 4, and MariaDB for automated student check-in management.',
          th: 'ระบบติดตามการเช็คชื่อแบบ IoT โดยใช้เทคโนโลยี RFID, Raspberry Pi 4 และ MariaDB สำหรับการจัดการเช็คอินนักเรียนอัตโนมัติ'
        },
        fullDescription: {
          en: 'A comprehensive IoT attendance management system developed for Operating Systems course. The project integrates RFID RC522 module with Raspberry Pi 4 to create an automated check-in system for students. Features include student registration via RFID card scanning, automated attendance tracking with status classification (Present/Late/Absent) based on arrival time, course schedule management, database backup to USB flash drive, and buzzer feedback for successful scans. The system uses MariaDB for data persistence and Python for hardware interfacing with GPIO pins. The project demonstrates embedded systems programming, database management, and hardware integration on Linux-based OS.',
          th: 'ระบบการจัดการเช็คชื่อแบบ IoT ที่ครอบคลุมซึ่งพัฒนาสำหรับรายวิชา Operating Systems โปรเจกต์รวม RFID RC522 module กับ Raspberry Pi 4 เพื่อสร้างระบบเช็คอินอัตโนมัติสำหรับนักเรียน ฟีเจอร์รวมถึงการลงทะเบียนนักเรียนผ่านการสแกนบัตร RFID, การติดตามการเช็คชื่ออัตโนมัติพร้อมการจำแนกสถานะ (มา/มาสาย/ขาด) ตามเวลามาถึง, การจัดการตารางเรียน, การสำรองข้อมูลไปยัง USB flash drive และ buzzer สำหรับตอบกลับการสแกนที่สำเร็จ ระบบใช้ MariaDB สำหรับการจัดเก็บข้อมูลและ Python สำหรับการเชื่อมต่อฮาร์ดแวร์กับพิน GPIO โปรเจกต์แสดงการเขียนโปรแกรมระบบฝังตัว, การจัดการฐานข้อมูล และการรวมฮาร์ดแวร์บน OS ที่ใช้ Linux'
        },
        tech: ['Raspberry Pi 4', 'Python', 'RFID RC522', 'MariaDB', 'GPIO', 'SPI', 'Linux OS', 'MySQL Connector'],
        status: 'Completed',
        duration: '2 weeks',
        team: {
          en: 'Operating Systems Course Group Project',
          th: 'โปรเจกต์กลุ่มรายวิชา Operating Systems'
        },
        images: [
          '/images/projects/rfid-attendance-raspberry-pi/1.jpg',
          '/images/projects/rfid-attendance-raspberry-pi/2.jpg',
          '/images/projects/rfid-attendance-raspberry-pi/4.jpg'
        ],
        challenges: {
          en: [
            'Interfacing RFID RC522 module with Raspberry Pi GPIO using SPI protocol',
            'Managing MariaDB database operations on resource-constrained embedded system',
            'Implementing real-time attendance status classification based on course schedules'
          ],
          th: [
            'การเชื่อมต่อ RFID RC522 module กับ Raspberry Pi GPIO โดยใช้โปรโตคอล SPI',
            'การจัดการการทำงานของฐานข้อมูล MariaDB บนระบบฝังตัวที่มีทรัพยากรจำกัด',
            'การใช้งานการจำแนกสถานะการเช็คชื่อแบบเรียลไทม์ตามตารางเรียน'
          ]
        },
        solutions: {
          en: [
            'Configured SPI interface and GPIO pins for RFID reader communication with Python libraries',
            'Designed normalized database schema with 5 tables for students, courses, schedules, and attendance',
            'Implemented time-based logic for attendance status with duplicate check-in prevention',
            'Added USB flash drive support for database backup and restore functionality'
          ],
          th: [
            'กำหนดค่าอินเทอร์เฟซ SPI และพิน GPIO สำหรับการสื่อสารของ RFID reader ด้วยไลบรารี Python',
            'ออกแบบสคีมาฐานข้อมูลที่ปรับให้เป็นมาตรฐานด้วย 5 ตารางสำหรับนักเรียน, วิชา, ตารางเรียน และการเช็คชื่อ',
            'ใช้งานตรรกะตามเวลาสำหรับสถานะการเช็คชื่อพร้อมการป้องกันการเช็คชื่อซ้ำ',
            'เพิ่มการรองรับ USB flash drive สำหรับฟังก์ชันการสำรองข้อมูลและการกู้คืน'
          ]
        },
        results: {
          en: [
            'Successfully deployed functional RFID attendance system with automated status tracking',
            'Achieved 100% accurate student identification through RFID card scanning',
            'Implemented complete database management with backup/restore to USB drive',
            'Created reliable hardware-software integration with buzzer feedback system'
          ],
          th: [
            'ติดตั้งระบบเช็คชื่อ RFID ที่ทำงานได้พร้อมการติดตามสถานะอัตโนมัติสำเร็จ',
            'บรรลุการระบุตัวตนนักเรียนที่แม่นยำ 100% ผ่านการสแกนบัตร RFID',
            'ใช้งานการจัดการฐานข้อมูลที่สมบูรณ์พร้อมการสำรองข้อมูล/กู้คืนไปยัง USB drive',
            'สร้างการรวมฮาร์ดแวร์-ซอฟต์แวร์ที่เชื่อถือได้พร้อมระบบตอบกลับด้วย buzzer'
          ]
        },
        links: {
          github: 'https://github.com/Chanchai2004/Pi-RFID-Attendance-Tracker.git',
          demo: 'https://drive.google.com/file/d/1zvMX1VxE48uVO-xt54P8NTFb9XSdDjGL/view?usp=sharing'
        }
      },
      {
        id: 'iot-hardware-documentation',
        title: {
          en: 'IoT Hardware Documentation Website',
          th: 'เว็บไซต์เอกสารฮาร์ดแวร์ IoT'
        },
        description: {
          en: 'Comprehensive static website documenting embedded systems and IoT hardware components for Embedded Systems course project.',
          th: 'เว็บไซต์สแตติกที่ครอบคลุมสำหรับเอกสารระบบฝังตัวและฮาร์ดแวร์ IoT สำหรับโปรเจกต์รายวิชา Embedded Systems'
        },
        fullDescription: {
          en: 'A comprehensive static documentation website created as a solo project for the Embedded Systems course to explain various embedded systems and IoT hardware components and their capabilities. The website covers detailed information about Raspberry Pi, Node-RED, IoT Pi, ChatBot integration, ESP32, RS485 communication, Think Board PLC, Siemens Logo 8, HMI, Modbus PLC, and other industrial automation components. Each section provides clear explanations of what each component is, how it works, and what it can accomplish in embedded systems and automation projects.',
          th: 'เว็บไซต์เอกสารสแตติกที่ครอบคลุมซึ่งสร้างขึ้นเป็นโปรเจกต์เดี่ยวสำหรับรายวิชา Embedded Systems เพื่ออธิบายระบบฝังตัวและฮาร์ดแวร์ IoT ต่างๆ และความสามารถของพวกมัน เว็บไซต์ครอบคลุมข้อมูลรายละเอียดเกี่ยวกับ Raspberry Pi, Node-RED, IoT Pi, การรวม ChatBot, ESP32, การสื่อสาร RS485, Think Board PLC, Siemens Logo 8, HMI, Modbus PLC และคอมโพเนนต์ระบบอัตโนมัติในอุตสาหกรรมอื่นๆ แต่ละส่วนให้คำอธิบายที่ชัดเจนเกี่ยวกับคอมโพเนนต์แต่ละตัวคืออะไร ทำงานอย่างไร และสามารถทำอะไรได้ในโปรเจกต์ระบบฝังตัวและระบบอัตโนมัติ'
        },
        tech: ['HTML', 'CSS', 'Firebase'],
        status: 'Completed',
        duration: '2 months',
        team: {
          en: 'Embedded Systems Course - Solo Project',
          th: 'โปรเจกต์เดี่ยวรายวิชา Embedded Systems'
        },
        images: [
          '/images/projects/iot-hardware-documentation/1.png',
          '/images/projects/iot-hardware-documentation/2.png',
          '/images/projects/iot-hardware-documentation/3.png',
          '/images/projects/iot-hardware-documentation/4.png',
          '/images/projects/iot-hardware-documentation/5.png',
          '/images/projects/iot-hardware-documentation/6.png',
          '/images/projects/iot-hardware-documentation/7.png',
        ],
        challenges: {
          en: [
            'Organizing and structuring vast amounts of technical information',
            'Creating clear and understandable explanations for complex hardware components',
            'Designing intuitive navigation for multiple hardware categories'
          ],
          th: [
            'การจัดระเบียบและจัดโครงสร้างข้อมูลทางเทคนิคจำนวนมาก',
            'การสร้างคำอธิบายที่ชัดเจนและเข้าใจง่ายสำหรับคอมโพเนนต์ฮาร์ดแวร์ที่ซับซ้อน',
            'การออกแบบการนำทางที่ใช้งานง่ายสำหรับหมวดหมู่ฮาร์ดแวร์หลายประเภท'
          ]
        },
        solutions: {
          en: [
            'Developed systematic content organization with clear categorization',
            'Created detailed documentation with practical examples and use cases',
            'Implemented responsive design for optimal viewing across devices'
          ],
          th: [
            'พัฒนาการจัดระเบียบเนื้อหาแบบเป็นระบบพร้อมการจัดหมวดหมู่ที่ชัดเจน',
            'สร้างเอกสารรายละเอียดพร้อมตัวอย่างการใช้งานจริงและกรณีการใช้งาน',
            'ใช้การออกแบบที่ตอบสนองสำหรับการดูที่เหมาะสมในอุปกรณ์ต่างๆ'
          ]
        },
        results: {
          en: [
            'Comprehensive documentation covering 10+ IoT hardware components',
            'Clear educational resource for understanding industrial automation',
            'Successfully deployed static website with Firebase hosting'
          ],
          th: [
            'เอกสารที่ครอบคลุมคอมโพเนนต์ฮาร์ดแวร์ IoT มากกว่า 10 ชนิด',
            'แหล่งข้อมูลทางการศึกษาที่ชัดเจนสำหรับการทำความเข้าใจระบบอัตโนมัติในอุตสาหกรรม',
            'เว็บไซต์สแตติกที่ใช้งานได้สำเร็จพร้อม Firebase hosting'
          ]
        },
        links: {
          website: 'https://em-b-92544.web.app/?fbclid=IwY2xjawNZoM9leHRuA2FlbQIxMABicmlkETF2V2YzT0RXMFJoRjFGMm5EAR5sq7AfYfCuQLPj1lk80f3GacsJgq5mPAI7TN7cfxwIEvlCWY_rB0m2749lgA_aem_I-ySWLUrCErOWH766X4F-A'
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
        id: 'personal-portfolio-deploy',
        title: {
          en: 'Personal Portfolio - Deployment',
          th: 'Personal Portfolio - การติดตั้ง'
        },
        description: {
          en: 'Full-stack deployment of personal portfolio website using Docker containerization, DigitalOcean hosting, and GoDaddy domain management.',
          th: 'การติดตั้งเว็บไซต์พอร์ตโฟลิโอส่วนตัวแบบ Full-stack โดยใช้ Docker containerization, การโฮสต์ด้วย DigitalOcean และการจัดการโดเมนด้วย GoDaddy'
        },
        fullDescription: {
          en: 'A comprehensive deployment project showcasing modern DevOps practices for a full-stack portfolio website. The deployment process includes containerizing both frontend (Next.js) and backend (Go) applications using Docker, setting up multi-container orchestration with Docker Compose, deploying to DigitalOcean cloud infrastructure, and configuring custom domain through GoDaddy. The project demonstrates end-to-end deployment workflow including environment configuration, SSL/TLS setup, reverse proxy configuration with Nginx, and continuous deployment practices.',
          th: 'โปรเจกต์การติดตั้งที่ครอบคลุมซึ่งแสดงแนวทาง DevOps สมัยใหม่สำหรับเว็บไซต์พอร์ตโฟลิโอแบบ Full-stack กระบวนการติดตั้งรวมถึงการทำ containerization ทั้งแอปพลิเคชัน frontend (Next.js) และ backend (Go) โดยใช้ Docker, การตั้งค่าการจัดการ multi-container ด้วย Docker Compose, การติดตั้งบนโครงสร้างพื้นฐานคลาวด์ DigitalOcean และการกำหนดค่าโดเมนที่กำหนดเองผ่าน GoDaddy โปรเจกต์แสดงให้เห็นเวิร์กโฟลว์การติดตั้งแบบ end-to-end รวมถึงการกำหนดค่าสภาพแวดล้อม, การตั้งค่า SSL/TLS, การกำหนดค่า reverse proxy ด้วย Nginx และแนวทางการติดตั้งอย่างต่อเนื่อง'
        },
        tech: ['Docker', 'Docker Compose', 'DigitalOcean', 'GoDaddy', 'Nginx', 'SSL/TLS', 'Next.js', 'Go'],
        status: 'Completed',
        duration: '2 weeks',
        team: {
          en: 'Solo Project - DevOps',
          th: 'โปรเจกต์เดี่ยว - DevOps'
        },
        images: [
          '/images/projects/personal-portfolio/hero.png',
          '/images/projects/personal-portfolio/getIn.png',
          '/images/projects/personal-portfolio/card.png',
          '/images/projects/personal-portfolio/details.png'
        ],
        challenges: {
          en: [
            'Containerizing Next.js application with optimized build process',
            'Setting up secure Docker Compose configuration for production'
          ],
          th: [
            'การทำ containerization แอปพลิเคชัน Next.js ด้วยกระบวนการ build ที่เพิ่มประสิทธิภาพ',
            'การตั้งค่า Docker Compose ที่ปลอดภัยสำหรับการใช้งานจริง'
          ]
        },
        solutions: {
          en: [
            'Implemented multi-stage Docker builds for optimized image sizes',
            'Deployed on DigitalOcean with Docker Compose orchestration',
            'Configured custom domain via GoDaddy with SSL/TLS encryption'
          ],
          th: [
            'ใช้งาน multi-stage Docker builds สำหรับขนาด image ที่เพิ่มประสิทธิภาพ',
            'ติดตั้งบน DigitalOcean ด้วยการจัดการ Docker Compose',
            'กำหนดค่าโดเมนที่กำหนดเองผ่าน GoDaddy พร้อมการเข้ารหัส SSL/TLS'
          ]
        },
        results: {
          en: [
            'Successfully deployed full-stack application with 99.9% uptime',
            'Optimized Docker images reducing deployment time by 60%',
            'Secure HTTPS connection with custom domain'
          ],
          th: [
            'ติดตั้งแอปพลิเคชัน full-stack ได้สำเร็จด้วย uptime 99.9%',
            'เพิ่มประสิทธิภาพ Docker images ลดเวลาการติดตั้ง 60%',
            'การเชื่อมต่อ HTTPS ที่ปลอดภัยด้วยโดเมนที่กำหนดเอง'
          ]
        },
        links: {
          website: 'https://yourportfolio.com',
          github: 'https://github.com/chanchai/personal-portfolio'
        }
      },
      {
        id: 'rsp-northeast2-deploy',
        title: {
          en: 'RSP Northeast 2 - Deployment',
          th: 'RSP Northeast 2 - การติดตั้ง'
        },
        description: {
          en: 'Enterprise-grade deployment of facility management system with Docker containerization, DigitalOcean cloud hosting, and custom domain configuration.',
          th: 'การติดตั้งระบบจัดการสิ่งอำนวยความสะดวกระดับองค์กรด้วย Docker containerization, การโฮสต์คลาวด์ DigitalOcean และการกำหนดค่าโดเมนที่กำหนดเอง'
        },
        fullDescription: {
          en: 'A professional deployment project for the RSP Northeast 2 Facility Management System. The deployment architecture includes containerization of React Native frontend and Go backend using Docker, orchestration with Docker Compose for service management, deployment on DigitalOcean Droplets for reliable cloud hosting, and domain configuration through GoDaddy with SSL/TLS security. The project demonstrates production-ready deployment practices including load balancing, database containerization, automated backups, monitoring setup, and scalability considerations for handling multiple concurrent users.',
          th: 'โปรเจกต์การติดตั้งระดับมืออาชีพสำหรับระบบจัดการสิ่งอำนวยความสะดวก RSP Northeast 2 สถาปัตยกรรมการติดตั้งรวมถึงการทำ containerization ของ frontend React Native และ backend Go โดยใช้ Docker, การจัดการด้วย Docker Compose สำหรับการจัดการบริการ, การติดตั้งบน DigitalOcean Droplets สำหรับการโฮสต์คลาวด์ที่เชื่อถือได้ และการกำหนดค่าโดเมนผ่าน GoDaddy ด้วยความปลอดภัย SSL/TLS โปรเจกต์แสดงให้เห็นแนวทางการติดตั้งที่พร้อมสำหรับการใช้งานจริงรวมถึง load balancing, การทำ containerization ฐานข้อมูล, การสำรองข้อมูลอัตโนมัติ, การตั้งค่าการตรวจสอบ และการพิจารณาการปรับขนาดสำหรับการจัดการผู้ใช้พร้อมกันหลายคน'
        },
        tech: ['Docker', 'Docker Compose', 'DigitalOcean', 'GoDaddy', 'Nginx', 'SSL/TLS', 'React Native', 'Go'],
        status: 'Completed',
        duration: '3 weeks',
        team: {
          en: 'Solo Project - Full-stack DevOps',
          th: 'โปรเจกต์เดี่ยว - Full-stack DevOps'
        },
        images: [
          '/images/projects/rsp-northeast2-system/ant.png',
          '/images/projects/rsp-northeast2-system/booking.png',
          '/images/projects/rsp-northeast2-system/home.png',
          '/images/projects/rsp-northeast2-system/otp.png'
        ],
        challenges: {
          en: [
            'Deploying React Native web application in containerized environment',
            'Managing database containerization with data persistence'
          ],
          th: [
            'การติดตั้งแอปพลิเคชันเว็บ React Native ในสภาพแวดล้อม containerized',
            'การจัดการ containerization ฐานข้อมูลด้วยการรักษาข้อมูล'
          ]
        },
        solutions: {
          en: [
            'Containerized full-stack application with Docker multi-stage builds',
            'Deployed on DigitalOcean with Docker Compose for service orchestration',
            'Configured domain via GoDaddy with Let\'s Encrypt SSL certificates',
            'Implemented automated backup system for PostgreSQL database'
          ],
          th: [
            'ทำ containerization แอปพลิเคชัน full-stack ด้วย Docker multi-stage builds',
            'ติดตั้งบน DigitalOcean ด้วย Docker Compose สำหรับการจัดการบริการ',
            'กำหนดค่าโดเมนผ่าน GoDaddy ด้วยใบรับรอง SSL Let\'s Encrypt',
            'ใช้งานระบบสำรองข้อมูลอัตโนมัติสำหรับฐานข้อมูล PostgreSQL'
          ]
        },
        results: {
          en: [
            'Successfully deployed enterprise system serving 100+ users',
            'Achieved 99.9% uptime with automated monitoring',
            'Reduced deployment time from hours to minutes with Docker'
          ],
          th: [
            'ติดตั้งระบบองค์กรที่ให้บริการผู้ใช้ 100+ คนได้สำเร็จ',
            'บรรลุ uptime 99.9% ด้วยการตรวจสอบอัตโนมัติ',
            'ลดเวลาการติดตั้งจากชั่วโมงเหลือนาทีด้วย Docker'
          ]
        },
        links: {
          website: 'https://rsp-northeast2.org'
        }
      },
      {
        id: 'hospital-management-deploy',
        title: {
          en: 'Hospital Management System - Deployment',
          th: 'ระบบจัดการโรงพยาบาล - การติดตั้ง'
        },
        description: {
          en: 'Cloud deployment of hospital management system with containerized microservices, secure hosting, and domain management for production use.',
          th: 'การติดตั้งบนคลาวด์ของระบบจัดการโรงพยาบาลด้วย microservices ที่ทำ containerization, การโฮสต์ที่ปลอดภัย และการจัดการโดเมนสำหรับการใช้งานจริง'
        },
        fullDescription: {
          en: 'A comprehensive deployment solution for a hospital management system developed as part of a Software Engineering course. The deployment includes containerizing the React Native frontend and Go backend with separate containers for payment and HR modules, orchestrating multiple services using Docker Compose, deploying on DigitalOcean cloud infrastructure for high availability, and configuring custom domain through GoDaddy with enterprise-grade security. The project showcases deployment of a complex multi-module system with role-based access control, secure API endpoints, and integration with external services like SMTP email and payment gateways.',
          th: 'โซลูชันการติดตั้งที่ครอบคลุมสำหรับระบบจัดการโรงพยาบาลที่พัฒนาเป็นส่วนหนึ่งของหลักสูตร Software Engineering การติดตั้งรวมถึงการทำ containerization ของ frontend React Native และ backend Go พร้อมคอนเทนเนอร์แยกสำหรับโมดูลการชำระเงินและ HR, การจัดการบริการหลายตัวโดยใช้ Docker Compose, การติดตั้งบนโครงสร้างพื้นฐานคลาวด์ DigitalOcean สำหรับความพร้อมใช้งานสูง และการกำหนดค่าโดเมนที่กำหนดเองผ่าน GoDaddy ด้วยความปลอดภัยระดับองค์กร โปรเจกต์แสดงการติดตั้งระบบหลายโมดูลที่ซับซ้อนพร้อมการควบคุมการเข้าถึงตามบทบาท, จุดสิ้นสุด API ที่ปลอดภัย และการรวมกับบริการภายนอกเช่น SMTP email และ payment gateways'
        },
        tech: ['Docker', 'Docker Compose', 'DigitalOcean', 'GoDaddy', 'Nginx', 'SSL/TLS', 'React Native', 'Go', 'SQLite'],
        status: 'Completed',
        duration: '2 weeks',
        team: {
          en: 'Software Engineering Course - DevOps Role',
          th: 'รายวิชา Software Engineering - บทบาท DevOps'
        },
        images: [
          '/images/projects/hospital-management-system/1.png',
          '/images/projects/hospital-management-system/22.png',
          '/images/projects/hospital-management-system/2.png',
          '/images/projects/hospital-management-system/3.png'
        ],
        challenges: {
          en: [
            'Containerizing multi-module system with separate payment and HR services',
            'Ensuring secure deployment for sensitive medical data'
          ],
          th: [
            'การทำ containerization ระบบหลายโมดูลด้วยบริการการชำระเงินและ HR แยกกัน',
            'การรับประกันการติดตั้งที่ปลอดภัยสำหรับข้อมูลทางการแพทย์ที่ละเอียดอ่อน'
          ]
        },
        solutions: {
          en: [
            'Implemented Docker microservices architecture for modular deployment',
            'Deployed on DigitalOcean with Docker Compose for multi-container management',
            'Configured domain via GoDaddy with SSL/TLS encryption for security'
          ],
          th: [
            'ใช้งานสถาปัตยกรรม Docker microservices สำหรับการติดตั้งแบบโมดูลาร์',
            'ติดตั้งบน DigitalOcean ด้วย Docker Compose สำหรับการจัดการ multi-container',
            'กำหนดค่าโดเมนผ่าน GoDaddy ด้วยการเข้ารหัส SSL/TLS เพื่อความปลอดภัย'
          ]
        },
        results: {
          en: [
            'Successfully deployed multi-module hospital system for 50+ users',
            'Implemented secure role-based access with containerized authentication',
            'Achieved zero-downtime deployment with Docker orchestration'
          ],
          th: [
            'ติดตั้งระบบโรงพยาบาลหลายโมดูลสำหรับผู้ใช้ 50+ คนได้สำเร็จ',
            'ใช้งานการเข้าถึงตามบทบาทที่ปลอดภัยด้วยการตรวจสอบสิทธิ์ที่ทำ containerization',
            'บรรลุการติดตั้งแบบ zero-downtime ด้วยการจัดการ Docker'
          ]
        },
        links: {
          github: 'https://github.com/sut67/team04.git'
        }
      },
      
      {
        id: 'iot-hardware-documentation',
        title: {
          en: 'IoT Hardware Documentation Website',
          th: 'เว็บไซต์เอกสารฮาร์ดแวร์ IoT'
        },
        description: {
          en: 'Comprehensive static website documenting embedded systems and IoT hardware components for Embedded Systems course project.',
          th: 'เว็บไซต์สแตติกที่ครอบคลุมสำหรับเอกสารระบบฝังตัวและฮาร์ดแวร์ IoT สำหรับโปรเจกต์รายวิชา Embedded Systems'
        },
        fullDescription: {
          en: 'A comprehensive static documentation website created as a solo project for the Embedded Systems course to explain various embedded systems and IoT hardware components and their capabilities. The website covers detailed information about Raspberry Pi, Node-RED, IoT Pi, ChatBot integration, ESP32, RS485 communication, Think Board PLC, Siemens Logo 8, HMI, Modbus PLC, and other industrial automation components. Each section provides clear explanations of what each component is, how it works, and what it can accomplish in embedded systems and automation projects.',
          th: 'เว็บไซต์เอกสารสแตติกที่ครอบคลุมซึ่งสร้างขึ้นเป็นโปรเจกต์เดี่ยวสำหรับรายวิชา Embedded Systems เพื่ออธิบายระบบฝังตัวและฮาร์ดแวร์ IoT ต่างๆ และความสามารถของพวกมัน เว็บไซต์ครอบคลุมข้อมูลรายละเอียดเกี่ยวกับ Raspberry Pi, Node-RED, IoT Pi, การรวม ChatBot, ESP32, การสื่อสาร RS485, Think Board PLC, Siemens Logo 8, HMI, Modbus PLC และคอมโพเนนต์ระบบอัตโนมัติในอุตสาหกรรมอื่นๆ แต่ละส่วนให้คำอธิบายที่ชัดเจนเกี่ยวกับคอมโพเนนต์แต่ละตัวคืออะไร ทำงานอย่างไร และสามารถทำอะไรได้ในโปรเจกต์ระบบฝังตัวและระบบอัตโนมัติ'
        },
        tech: ['HTML', 'CSS', 'Firebase'],
        status: 'Completed',
        duration: '2 months',
        team: {
          en: 'Embedded Systems Course - Solo Project',
          th: 'โปรเจกต์เดี่ยวรายวิชา Embedded Systems'
        },
        images: [
          '/images/projects/iot-hardware-documentation/1.png',
          '/images/projects/iot-hardware-documentation/2.png',
          '/images/projects/iot-hardware-documentation/3.png',
          '/images/projects/iot-hardware-documentation/4.png',
          '/images/projects/iot-hardware-documentation/5.png',
          '/images/projects/iot-hardware-documentation/6.png',
          '/images/projects/iot-hardware-documentation/7.png',
        ],
        challenges: {
          en: [
            'Organizing and structuring vast amounts of technical information',
            'Creating clear and understandable explanations for complex hardware components',
            'Designing intuitive navigation for multiple hardware categories'
          ],
          th: [
            'การจัดระเบียบและจัดโครงสร้างข้อมูลทางเทคนิคจำนวนมาก',
            'การสร้างคำอธิบายที่ชัดเจนและเข้าใจง่ายสำหรับคอมโพเนนต์ฮาร์ดแวร์ที่ซับซ้อน',
            'การออกแบบการนำทางที่ใช้งานง่ายสำหรับหมวดหมู่ฮาร์ดแวร์หลายประเภท'
          ]
        },
        solutions: {
          en: [
            'Developed systematic content organization with clear categorization',
            'Created detailed documentation with practical examples and use cases',
            'Implemented responsive design for optimal viewing across devices'
          ],
          th: [
            'พัฒนาการจัดระเบียบเนื้อหาแบบเป็นระบบพร้อมการจัดหมวดหมู่ที่ชัดเจน',
            'สร้างเอกสารรายละเอียดพร้อมตัวอย่างการใช้งานจริงและกรณีการใช้งาน',
            'ใช้การออกแบบที่ตอบสนองสำหรับการดูที่เหมาะสมในอุปกรณ์ต่างๆ'
          ]
        },
        results: {
          en: [
            'Comprehensive documentation covering 10+ IoT hardware components',
            'Clear educational resource for understanding industrial automation',
            'Successfully deployed static website with Firebase hosting'
          ],
          th: [
            'เอกสารที่ครอบคลุมคอมโพเนนต์ฮาร์ดแวร์ IoT มากกว่า 10 ชนิด',
            'แหล่งข้อมูลทางการศึกษาที่ชัดเจนสำหรับการทำความเข้าใจระบบอัตโนมัติในอุตสาหกรรม',
            'เว็บไซต์สแตติกที่ใช้งานได้สำเร็จพร้อม Firebase hosting'
          ]
        },
        links: {
          website: 'https://em-b-92544.web.app/?fbclid=IwY2xjawNZoM9leHRuA2FlbQIxMABicmlkETF2V2YzT0RXMFJoRjFGMm5EAR5sq7AfYfCuQLPj1lk80f3GacsJgq5mPAI7TN7cfxwIEvlCWY_rB0m2749lgA_aem_I-ySWLUrCErOWH766X4F-A'
        }
      },
      {
        id: 'education-guidance-website',
        title: {
          en: 'Education Guidance Website',
          th: 'เว็บไซต์แนะแนวการศึกษา'
        },
        description: {
          en: 'Interactive guidance website for high school students providing information about university life, academic programs, and campus experiences at Suranaree University of Technology.',
          th: 'เว็บไซต์แนะแนวแบบโต้ตอบสำหรับนักเรียนมัธยมปลาย ให้ข้อมูลเกี่ยวกับชีวิตมหาวิทยาลัย, หลักสูตรการศึกษา และประสบการณ์ในมหาวิทยาลัยเทคโนโลยีสุรนารี'
        },
        fullDescription: {
          en: 'A comprehensive guidance website created as a solo project to help high school students understand university life and academic programs. The website features interactive content about Suranaree University of Technology, including detailed information about different academic majors, teaching methods, faculty experiences, campus life, and daily student activities. The site includes voice features with AI-generated speech to enhance user engagement and accessibility.',
          th: 'เว็บไซต์แนะแนวที่ครอบคลุมซึ่งสร้างขึ้นเป็นโปรเจกต์เดี่ยวเพื่อช่วยนักเรียนมัธยมปลายเข้าใจชีวิตมหาวิทยาลัยและหลักสูตรการศึกษา เว็บไซต์มีเนื้อหาแบบโต้ตอบเกี่ยวกับมหาวิทยาลัยเทคโนโลยีสุรนารี รวมถึงข้อมูลรายละเอียดเกี่ยวกับสาขาวิชาต่างๆ, วิธีการสอน, ประสบการณ์ของอาจารย์, ชีวิตในมหาวิทยาลัย และกิจกรรมประจำวันของนักศึกษา เว็บไซต์มีฟีเจอร์เสียงด้วย AI-generated speech เพื่อเพิ่มการมีส่วนร่วมของผู้ใช้และความสามารถในการเข้าถึง'
        },
        tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
        status: 'Completed',
        duration: '1 day',
        team: {
          en: 'Solo Project - Educational Guidance',
          th: 'โปรเจกต์เดี่ยว - แนะแนวการศึกษา'
        },
        images: [
          '/images/projects/education-guidance-website/1.png',
          '/images/projects/education-guidance-website/2.png',
          '/images/projects/education-guidance-website/3.png',
          '/images/projects/education-guidance-website/4.png',
        ],
        challenges: {
          en: [
            'Organizing and presenting complex university information in an engaging way',
            'Implementing voice features with AI-generated speech for better accessibility'
          ],
          th: [
            'การจัดระเบียบและนำเสนอข้อมูลมหาวิทยาลัยที่ซับซ้อนในรูปแบบที่น่าสนใจ',
            'การใช้งานฟีเจอร์เสียงด้วย AI-generated speech เพื่อความสามารถในการเข้าถึงที่ดีขึ้น'
          ]
        },
        solutions: {
          en: [
            'Developed structured content organization with clear sections for different aspects of university life',
            'Integrated AI voice features to enhance user experience and accessibility',
            'Created responsive design with intuitive navigation and interactive elements',
            'Implemented user-friendly interface for easy navigation'
          ],
          th: [
            'พัฒนาการจัดระเบียบเนื้อหาแบบมีโครงสร้างพร้อมส่วนที่ชัดเจนสำหรับแง่มุมต่างๆ ของชีวิตมหาวิทยาลัย',
            'รวมฟีเจอร์เสียง AI เพื่อเพิ่มประสบการณ์ผู้ใช้และความสามารถในการเข้าถึง',
            'สร้างการออกแบบที่ตอบสนองพร้อมการนำทางที่ใช้งานง่ายและองค์ประกอบแบบโต้ตอบ',
            'ใช้งานอินเทอร์เฟซที่ใช้งานง่ายสำหรับการนำทางที่สะดวก'
          ]
        },
        results: {
          en: [
            'Successfully created comprehensive guidance resource for high school students',
            'Enhanced accessibility with AI voice features'
          ],
          th: [
            'สร้างแหล่งข้อมูลแนะแนวที่ครอบคลุมสำหรับนักเรียนมัธยมปลายได้สำเร็จ',
            'เพิ่มความสามารถในการเข้าถึงด้วยฟีเจอร์เสียง AI'
          ]
        },
        links: {
          website: 'https://education-guidance-activities-for-kws.netlify.app/index.html'
        }
      }
    ]
  }
];

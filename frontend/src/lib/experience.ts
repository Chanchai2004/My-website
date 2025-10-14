export interface Experience {
  id: string;
  title: {
    en: string;
    th: string;
  };
  organization: {
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
  period: string;
  type: 'Work' | 'Collaboration' | 'Part-time' | 'Project';
  location?: {
    en: string;
    th: string;
  };
  tech?: string[];
  responsibilities?: {
    en: string[];
    th: string[];
  };
  achievements?: {
    en: string[];
    th: string[];
  };
  links?: {
    website?: string;
    github?: string;
    demo?: string;
  };
}

export const experiences: Experience[] = [
  {
    id: 'rsp-northeast2-collaboration',
    title: {
      en: 'Science Park Website Development',
      th: 'พัฒนาเว็บไซต์อุทยานวิทยาศาสตร์'
    },
    organization: {
      en: 'Regional Science Park Northeast 2',
      th: 'อุทยานวิทยาศาสตร์ภูมิภาค ภาคตะวันออกเฉียงเหนือ 2'
    },
    description: {
      en: 'Developed comprehensive facility management system for Northeast Science Park 2, including room booking, maintenance requests, and invoice generation.',
      th: 'พัฒนาระบบจัดการสิ่งอำนวยความสะดวกแบบครบวงจรสำหรับอุทยานวิทยาศาสตร์ภาคตะวันออกเฉียงเหนือ 2 รวมถึงระบบจองห้อง การร้องขอซ่อมบำรุง และการสร้างใบแจ้งหนี้'
    },
    fullDescription: {
      en: 'Collaborated with Regional Science Park Northeast 2 to develop a comprehensive facility management system. Worked as part of a development team to create a web application that handles room booking, maintenance requests, and invoice generation. Gained hands-on experience in full-stack development, client communication, and understanding real-world business requirements. The project involved working with React Native frontend, Go backend, and integrating various services like SMTP email and PDF generation.',
      th: 'ร่วมมือกับอุทยานวิทยาศาสตร์ภูมิภาคภาคตะวันออกเฉียงเหนือ 2 ในการพัฒนาระบบจัดการสิ่งอำนวยความสะดวกแบบครบวงจร ทำงานเป็นส่วนหนึ่งของทีมพัฒนาเพื่อสร้างเว็บแอปพลิเคชันที่จัดการการจองห้อง การร้องขอซ่อมบำรุง และการสร้างใบแจ้งหนี้ ได้รับประสบการณ์จริงในการพัฒนา Full-stack การสื่อสารกับลูกค้า และการเข้าใจความต้องการทางธุรกิจจริง โครงการนี้เกี่ยวข้องกับการทำงานกับ React Native frontend, Go backend และการรวมบริการต่างๆ เช่น SMTP email และการสร้าง PDF'
    },
    period: 'November 2024 - August 2025',
    type: 'Collaboration',
    location: {
      en: 'Northeastern Regional Science Park 2, Thailand',
      th: 'อุทยานวิทยาศาสตร์ภูมิภาค ภาคตะวันออกเฉียงเหนือ 2, ประเทศไทย'
    },
    tech: ['Problem Solving', 'User Experience Design', 'Client Communication', 'Web Development'],
    responsibilities: {
      en: [
        'Full-stack development of facility management system',
        'Requirements gathering and analysis with real stakeholders',
        'Database design and API development',
        'Frontend UI/UX implementation',
        'System testing and deployment'
      ],
      th: [
        'พัฒนาระบบจัดการสิ่งอำนวยความสะดวกแบบ Full-stack',
        'รวบรวมและวิเคราะห์ความต้องการกับผู้มีส่วนได้ส่วนเสียจริง',
        'ออกแบบฐานข้อมูลและพัฒนา API',
        'พัฒนา UI/UX ส่วน Frontend',
        'ทดสอบระบบและติดตั้งใช้งาน'
      ]
    },
    achievements: {
      en: [
        'Successfully deployed system serving real users',
        'Significantly reduced manual processes and errors',
        'Improved facility management efficiency',
        
      ],
      th: [
        'ติดตั้งระบบสำเร็จและให้บริการผู้ใช้งานจริง',
        'ลดขั้นตอนการทำงานด้วยมือและข้อผิดพลาดอย่างมาก',
        'เพิ่มประสิทธิภาพการจัดการสิ่งอำนวยความสะดวก',
        
      ]
    },
    links: {
      website: 'https://rsp-northeast2.org'
    }
  },
  {
    id: 'skai-med-software-engineer',
    title: {
      en: 'Software Engineer (Part-time)',
      th: 'วิศวกรซอฟต์แวร์ (พาร์ทไทม์)'
    },
    organization: {
      en: 'SKAI MED Co., Limited',
      th: 'บริษัท สกาย เมด จำกัด'
    },
    description: {
      en: 'Part-time software engineer position focusing on healthcare technology solutions and system development.',
      th: 'ตำแหน่งวิศวกรซอฟต์แวร์พาร์ทไทม์ที่มุ่งเน้นไปที่โซลูชันเทคโนโลยีด้านการดูแลสุขภาพและการพัฒนาระบบ'
    },
    fullDescription: {
      en: 'Working as a part-time software engineer at SKAI MED, focusing on healthcare technology solutions. Involved in developing and maintaining medical software systems, ensuring data security and privacy compliance. Collaborated with healthcare professionals to understand system requirements and implement user-friendly interfaces. Gained experience in critical system maintenance, debugging healthcare applications, and working with sensitive medical data while maintaining high security standards.',
      th: 'ทำงานเป็นวิศวกรซอฟต์แวร์พาร์ทไทม์ที่ SKAI MED มุ่งเน้นไปที่โซลูชันเทคโนโลยีด้านการดูแลสุขภาพ มีส่วนร่วมในการพัฒนาและดูแลระบบซอฟต์แวร์ทางการแพทย์ รับประกันความปลอดภัยของข้อมูลและการปฏิบัติตามข้อกำหนดความเป็นส่วนตัว ทำงานร่วมกับผู้เชี่ยวชาญด้านการดูแลสุขภาพเพื่อเข้าใจความต้องการของระบบและพัฒนา UI ที่ใช้งานง่าย ได้รับประสบการณ์ในการบำรุงรักษาระบบที่สำคัญ การแก้ไขข้อบกพร่องแอปพลิเคชันด้านการดูแลสุขภาพ และการทำงานกับข้อมูลทางการแพทย์ที่ละเอียดอ่อนพร้อมรักษามาตรฐานความปลอดภัยสูง'
    },
    period: 'Started: September 2025 - Present',
    type: 'Part-time',
    location: {
      en: 'WFH/On-site',
      th: 'ทำงานที่บ้าน/ออนไซต์'
    },
    tech: ['System Debugging', 'Medical Software Development', 'Healthcare Requirements', 'Critical System Maintenance'],
    responsibilities: {
      en: [
        'Developed healthcare management software modules',
        'Implemented data security and privacy measures',
        'Collaborated with medical professionals on system requirements',
        'Maintained and updated existing healthcare systems',
        'Participated in code reviews and team meetings'
      ],
      th: [
        'พัฒนาโมดูลซอฟต์แวร์จัดการด้านการดูแลสุขภาพ',
        'ใช้มาตรการรักษาความปลอดภัยและความเป็นส่วนตัวของข้อมูล',
        'ทำงานร่วมกับผู้เชี่ยวชาญทางการแพทย์เกี่ยวกับความต้องการของระบบ',
        'ดูแลและอัปเดตระบบการดูแลสุขภาพที่มีอยู่',
        'เข้าร่วมการตรวจสอบโค้ดและการประชุมทีม'
      ]
    },
    achievements: {
      en: [
        'Contributed to improved patient data management',
        'Enhanced system security compliance',
        'Reduced system downtime through proactive maintenance',
        'Gained valuable healthcare technology experience'
      ],
      th: [
        'มีส่วนร่วมในการปรับปรุงการจัดการข้อมูลผู้ป่วย',
        'เพิ่มความปลอดภัยของระบบให้สอดคล้องกับข้อกำหนด',
        'ลดเวลาหยุดทำงานของระบบผ่านการบำรุงรักษาเชิงรุก',
        'ได้รับประสบการณ์ที่มีค่าด้านเทคโนโลยีการดูแลสุขภาพ'
      ]
    },
    links: {
      website: 'https://skai-med.com'
    }
  }
];

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
      en: 'Embarked on an exciting journey to transform the digital presence of Regional Science Park Northeast 2! Started with a challenge: how do we make science and technology accessible and engaging for everyone? The solution was creating a modern, responsive website that showcases amazing research and innovations. From solving complex technical challenges to making information easily digestible for students, researchers, and the community. Every line of code was written with the mission to bridge the gap between cutting-edge science and everyday life!',
      th: 'เริ่มต้นการเดินทางที่น่าตื่นเต้นในการเปลี่ยนแปลงสถานะดิจิทัลของอุทยานวิทยาศาสตร์ภูมิภาคภาคตะวันออกเฉียงเหนือ 2! เริ่มต้นด้วยความท้าทาย: เราจะทำอย่างไรให้วิทยาศาสตร์และเทคโนโลยีเข้าถึงได้และน่าสนใจสำหรับทุกคน? คำตอบคือการสร้างเว็บไซต์ที่ทันสมัยและตอบสนองได้ดี ที่จัดแสดงงานวิจัยและนวัตกรรมที่น่าทึ่ง ตั้งแต่การแก้ไขปัญหาทางเทคนิคที่ซับซ้อน ไปจนถึงการทำให้ข้อมูลเข้าใจง่ายสำหรับนักเรียน นักวิจัย และชุมชน ทุกบรรทัดของโค้ดถูกเขียนขึ้นด้วยภารกิจเพื่อเชื่อมช่องว่างระหว่างวิทยาศาสตร์ที่ทันสมัยกับชีวิตประจำวัน!'
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
      en: 'Dive into the fascinating world of medical technology with SKAI MED! Every day brings new challenges: how do we make complex medical software user-friendly? How can we ensure systems run smoothly when lives might depend on them? From debugging critical systems to developing innovative solutions that help healthcare professionals focus on patient care. Every bug fixed and every feature added brings us closer to a healthier future!',
      th: 'ดำดิ่งสู่โลกที่น่าหลงใหลของเทคโนโลยีทางการแพทย์กับ SKAI MED! ทุกวันนำมาซึ่งความท้าทายใหม่ๆ: เราจะทำให้ซอฟต์แวร์ทางการแพทย์ที่ซับซ้อนใช้งานง่ายได้อย่างไร? เราจะมั่นใจได้อย่างไรว่าระบบทำงานได้อย่างราบรื่นเมื่อชีวิตอาจขึ้นอยู่กับมัน? ตั้งแต่การแก้ไขข้อบกพร่องระบบที่สำคัญ ไปจนถึงการพัฒนาโซลูชันที่เป็นนวัตกรรมใหม่ที่ช่วยให้ผู้เชี่ยวชาญด้านการดูแลสุขภาพมุ่งเน้นไปที่การดูแลผู้ป่วย ทุกข้อบกพร่องที่แก้ไขและทุกฟีเจอร์ที่เพิ่มเข้ามาทำให้เราใกล้ชิดกับอนาคตที่มีสุขภาพดีขึ้น!'
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

// Course database with detailed information
const coursesData = {
  'fullstack-web': {
    id: 'fullstack-web',
    title: 'Fullstack Web Development',
    price: '₹10,578',
    rating: 4.8,
    reviews: 2340,
    image: 'linear-gradient(135deg, #4047aa, #5e5df5)',
    instructor: 'Sarah Johnson',
    instructorImage: 'SJ',
    students: 25420,
    level: 'Intermediate',
    duration: '8 weeks',
    language: 'English',
    description: 'Learn to build professional, production-ready web applications from scratch. This comprehensive course covers modern web technologies and best practices.',
    overview: 'Build responsive websites, APIs, and deploy real applications using the latest web technologies. Master HTML5, CSS3, JavaScript ES6+, React, Node.js, databases, and deployment strategies.',
    whatYouLearn: [
      'Master HTML5, CSS3, and modern JavaScript ES6+',
      'Build interactive UIs with React and state management',
      'Create RESTful APIs with Node.js and Express',
      'Work with databases (MongoDB, PostgreSQL)',
      'Deploy applications to production',
      'Implement authentication and security',
      'Version control with Git and GitHub'
    ],
    curriculum: [
      { module: 'Module 1: Foundations', lessons: 12, duration: '6 hours' },
      { module: 'Module 2: HTML & CSS Mastery', lessons: 18, duration: '9 hours' },
      { module: 'Module 3: JavaScript Fundamentals', lessons: 25, duration: '14 hours' },
      { module: 'Module 4: React Deep Dive', lessons: 30, duration: '18 hours' },
      { module: 'Module 5: Backend Development', lessons: 22, duration: '13 hours' },
      { module: 'Module 6: Databases & APIs', lessons: 20, duration: '12 hours' },
      { module: 'Module 7: Deployment & DevOps', lessons: 15, duration: '9 hours' },
      { module: 'Module 8: Real Project', lessons: 10, duration: '20 hours' }
    ],
    requirements: [
      'Basic understanding of programming concepts',
      'Computer with code editor installed',
      'Curiosity to learn and solve problems'
    ],
    highlights: [
      '📚 45+ hours of video content',
      '🎯 8 comprehensive modules',
      '💻 Real-world projects',
      '📜 Certificate of completion',
      '♾️ Lifetime access',
      '🤝 Dedicated support'
    ]
  },
  'mobile-app': {
    id: 'mobile-app',
    title: 'Mobile App Development',
    price: '₹8,118',
    rating: 4.9,
    reviews: 1850,
    image: 'linear-gradient(135deg, #1f4e73, #1b94c3)',
    instructor: 'Michael Chen',
    instructorImage: 'MC',
    students: 18950,
    level: 'Beginner to Intermediate',
    duration: '6 weeks',
    language: 'English',
    description: 'Create stunning Android and iOS apps with modern tools and frameworks. Learn to build native and cross-platform mobile applications.',
    overview: 'Develop production-ready mobile applications for iOS and Android using React Native and Flutter. Learn app architecture, state management, APIs integration, and app deployment.',
    whatYouLearn: [
      'Build cross-platform apps with React Native',
      'Develop native iOS apps with Swift',
      'Create Android apps with Kotlin',
      'Implement push notifications',
      'Handle offline data with SQLite',
      'Integrate third-party APIs',
      'Publish apps to App Store and Google Play'
    ],
    curriculum: [
      { module: 'Module 1: Mobile Basics', lessons: 10, duration: '5 hours' },
      { module: 'Module 2: React Native Setup', lessons: 15, duration: '8 hours' },
      { module: 'Module 3: UI Components', lessons: 20, duration: '12 hours' },
      { module: 'Module 4: Navigation', lessons: 12, duration: '7 hours' },
      { module: 'Module 5: State Management', lessons: 18, duration: '11 hours' },
      { module: 'Module 6: APIs & Backend', lessons: 16, duration: '10 hours' },
      { module: 'Module 7: Native Modules', lessons: 14, duration: '9 hours' },
      { module: 'Module 8: Publishing', lessons: 8, duration: '5 hours' }
    ],
    requirements: [
      'Knowledge of JavaScript fundamentals',
      'Mac or Linux recommended for iOS development',
      'Android Studio for Android development'
    ],
    highlights: [
      '📱 iOS & Android development',
      '⚡ React Native & Flutter',
      '🚀 Quick deployment',
      '📜 Industry certificates',
      '♾️ Lifetime access',
      '👥 Active community support'
    ]
  },
  'data-science': {
    id: 'data-science',
    title: 'Data Science & Analytics',
    price: '₹9,758',
    rating: 4.7,
    reviews: 2100,
    image: 'linear-gradient(135deg, #3b5d4f, #1cc0a0)',
    instructor: 'Dr. Priya Sharma',
    instructorImage: 'PS',
    students: 21800,
    level: 'Intermediate',
    duration: '10 weeks',
    language: 'English',
    description: 'Analyze real datasets and build predictive machine learning models. Master data science tools and techniques used in industry.',
    overview: 'Learn data science from scratch and become a professional data analyst. Work with Python, Pandas, NumPy, Scikit-learn, and Matplotlib to extract insights from data.',
    whatYouLearn: [
      'Data collection, cleaning, and preprocessing',
      'Exploratory data analysis (EDA)',
      'Statistical analysis and hypothesis testing',
      'Machine learning algorithms',
      'Build predictive models',
      'Data visualization and dashboards',
      'Time series analysis'
    ],
    curriculum: [
      { module: 'Module 1: Python Fundamentals', lessons: 14, duration: '8 hours' },
      { module: 'Module 2: NumPy & Pandas', lessons: 18, duration: '11 hours' },
      { module: 'Module 3: Data Visualization', lessons: 15, duration: '9 hours' },
      { module: 'Module 4: Statistics', lessons: 16, duration: '10 hours' },
      { module: 'Module 5: ML Algorithms', lessons: 24, duration: '16 hours' },
      { module: 'Module 6: Feature Engineering', lessons: 14, duration: '9 hours' },
      { module: 'Module 7: Model Evaluation', lessons: 12, duration: '8 hours' },
      { module: 'Module 8: Real Projects', lessons: 16, duration: '20 hours' }
    ],
    requirements: [
      'Basic Python knowledge',
      'Understanding of algebra and statistics',
      'Laptop with Python installed'
    ],
    highlights: [
      '📊 Real datasets',
      '🔍 Statistical analysis',
      '🤖 Machine learning models',
      '📈 Predictive analytics',
      '♾️ Lifetime access',
      '🏆 Portfolio projects'
    ]
  },
  'ai-ml': {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    price: '₹11,398',
    rating: 4.9,
    reviews: 1650,
    image: 'linear-gradient(135deg, #632d7b, #ce4fef)',
    instructor: 'Prof. Akshay Kumar',
    instructorImage: 'AK',
    students: 14200,
    level: 'Advanced',
    duration: '12 weeks',
    language: 'English',
    description: 'Master neural networks, deep learning, and intelligent systems. Learn cutting-edge AI techniques and applications.',
    overview: 'Deep dive into artificial intelligence and machine learning. Build neural networks, work with TensorFlow, implement deep learning models, and understand AI ethics.',
    whatYouLearn: [
      'Neural networks from scratch',
      'Deep learning with TensorFlow & PyTorch',
      'CNNs for image recognition',
      'RNNs and LSTMs for sequences',
      'Natural Language Processing',
      'Reinforcement learning basics',
      'Deployment of ML models'
    ],
    curriculum: [
      { module: 'Module 1: ML Review', lessons: 10, duration: '6 hours' },
      { module: 'Module 2: Neural Networks', lessons: 20, duration: '14 hours' },
      { module: 'Module 3: Deep Learning', lessons: 24, duration: '16 hours' },
      { module: 'Module 4: CNNs', lessons: 18, duration: '12 hours' },
      { module: 'Module 5: RNNs & Sequences', lessons: 16, duration: '11 hours' },
      { module: 'Module 6: NLP', lessons: 18, duration: '12 hours' },
      { module: 'Module 7: Reinforcement Learning', lessons: 14, duration: '10 hours' },
      { module: 'Module 8: Capstone Project', lessons: 12, duration: '25 hours' }
    ],
    requirements: [
      'Strong Python programming skills',
      'Understanding of calculus and linear algebra',
      'GPU recommended (Google Colab works)'
    ],
    highlights: [
      '🧠 Neural networks & deep learning',
      '🎯 Advanced algorithms',
      '🚀 Industry-ready skills',
      '📜 Advanced certificate',
      '♾️ Lifetime access',
      '🤖 AI projects'
    ]
  },
  'ui-ux': {
    id: 'ui-ux',
    title: 'UI/UX Design Essentials',
    price: '₹7,298',
    rating: 4.8,
    reviews: 1920,
    image: 'linear-gradient(135deg, #cc5c5c, #ff8a5d)',
    instructor: 'Emma Watson',
    instructorImage: 'EW',
    students: 19650,
    level: 'Beginner to Intermediate',
    duration: '6 weeks',
    language: 'English',
    description: 'Learn design systems, prototyping, and polished user interfaces. Create beautiful and functional digital products.',
    overview: 'Master the principles of UI/UX design and create user-centered digital experiences. Learn Figma, design thinking, and user research.',
    whatYouLearn: [
      'Design principles and psychology',
      'User research and personas',
      'Wireframing and prototyping',
      'Master Figma for design',
      'Design systems and components',
      'Mobile app design',
      'Usability testing'
    ],
    curriculum: [
      { module: 'Module 1: Design Basics', lessons: 12, duration: '7 hours' },
      { module: 'Module 2: User Research', lessons: 10, duration: '6 hours' },
      { module: 'Module 3: Wireframing', lessons: 14, duration: '8 hours' },
      { module: 'Module 4: Visual Design', lessons: 16, duration: '10 hours' },
      { module: 'Module 5: Figma Mastery', lessons: 18, duration: '12 hours' },
      { module: 'Module 6: Prototyping', lessons: 14, duration: '10 hours' },
      { module: 'Module 7: Design Systems', lessons: 12, duration: '9 hours' },
      { module: 'Module 8: Case Studies', lessons: 10, duration: '15 hours' }
    ],
    requirements: [
      'Basic design understanding',
      'Access to Figma (free)',
      'Creative thinking mindset'
    ],
    highlights: [
      '🎨 Industry design tools',
      '👥 User-centered approach',
      '🎯 Real-world case studies',
      '📜 Design certificate',
      '♾️ Lifetime access',
      '💼 Portfolio building'
    ]
  },
  'cyber-security': {
    id: 'cyber-security',
    title: 'Cyber Security Fundamentals',
    price: '₹8,938',
    rating: 4.7,
    reviews: 1420,
    image: 'linear-gradient(135deg, #374f6b, #2cc7d7)',
    instructor: 'James Mitchell',
    instructorImage: 'JM',
    students: 16200,
    level: 'Intermediate',
    duration: '8 weeks',
    language: 'English',
    description: 'Protect networks, identify vulnerabilities, and secure digital assets. Learn ethical hacking and security best practices.',
    overview: 'Comprehensive cybersecurity training covering offensive and defensive security. Learn ethical hacking, penetration testing, and security architecture.',
    whatYouLearn: [
      'Network security fundamentals',
      'Cryptography and encryption',
      'Ethical hacking basics',
      'Penetration testing',
      'Vulnerability assessment',
      'Security incident response',
      'Compliance and regulations'
    ],
    curriculum: [
      { module: 'Module 1: Security Basics', lessons: 12, duration: '7 hours' },
      { module: 'Module 2: Networking', lessons: 16, duration: '10 hours' },
      { module: 'Module 3: Cryptography', lessons: 14, duration: '9 hours' },
      { module: 'Module 4: Ethical Hacking', lessons: 20, duration: '13 hours' },
      { module: 'Module 5: Penetration Testing', lessons: 18, duration: '12 hours' },
      { module: 'Module 6: Incident Response', lessons: 12, duration: '8 hours' },
      { module: 'Module 7: Compliance', lessons: 10, duration: '6 hours' },
      { module: 'Module 8: Capstone Lab', lessons: 14, duration: '18 hours' }
    ],
    requirements: [
      'Basic networking knowledge',
      'Understanding of Linux/Windows',
      'Ethical hacking mindset'
    ],
    highlights: [
      '🛡️ Ethical hacking',
      '🔐 Security protocols',
      '🔍 Penetration testing',
      '📜 Security certificate',
      '♾️ Lifetime access',
      '🏆 Hands-on labs'
    ]
  }
};

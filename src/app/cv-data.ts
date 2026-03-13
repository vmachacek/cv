import { CvData } from './cv.model';

export const CV_DATA: CvData = {
  basics: {
    name: 'Vojtech Machacek',
    headline: 'Full-stack Developer',
    location: 'Menasha, WI, United States',
    verifiedExpertise: 'Engineering',
    summary:
      'Reliable software developer with over a decade of experience in full-stack development. Worked with large eCommerce stores, international startups, and Fortune 100 companies. Comfortable across software development and project management roles.',
    availability: 'Part-time',
    preferredEnvironment: ['.NET', 'Angular', 'Azure','AWS'],
    toptalMemberSince: '2021-01-27',
    imageUrl:
      'https://bs-uploads.toptal.io/blackfish-uploads/talent/720679/picture/optimized/huge_f49ba1cd79e5f4f74abd732b4b1a5df5-c3b5cec39107c83526d9035974972d32.jpeg',
    publicProfileUrl: 'https://www.toptal.com/developers/resume/vojtech-machacek',
  },
  highlights: {
    signatureAchievement: 'Co-founded a business while traveling around the world.',
    portfolioHighlights: [
      {
        title: 'Fortune 100 North American Construction Equipment Manufacturer',
        summaryTech: 'Angular, C#, ASP.NET Core, Python, HTML, CSS, JavaScript, ASP.NET...',
      },
      {
        title: 'Orchestr8',
        summaryTech: 'Amazon Web Services (AWS), Entity Framework, Angular, .NET Core, C#, APIs...',
      },
      {
        title: 'Microsoft',
        summaryTech: 'React, .NET Core, Azure Cosmos DB, Entity Framework, C#, APIs, ASP.NET, C#.NET...',
      },
    ],
    experienceByTechnology: [
      'C# - 10 years',
      'TypeScript - 5 years',
      '.NET - 5 years',
      'Test Automation - 5 years',
      'Angular - 4 years',
      '.NET Core - 4 years',
      'Domain-driven Design (DDD) - 3 years',
      'Azure - 2 years',
    ],
  },
  skills: {
    'Libraries/APIs': ['Entity Framework', 'React'],
    Tools: ['Azure App Service'],
    Languages: ['C#', 'C#.NET', 'TypeScript', 'Python', 'HTML', 'CSS', 'JavaScript'],
    Frameworks: ['.NET Core', 'Angular', '.NET', 'ASP.NET', 'Bootstrap', 'ASP.NET Core'],
    Paradigms: ['Test Automation', 'Event Sourcing', 'Test-driven Development (TDD)'],
    Platforms: ['Azure', 'Xamarin', 'Amazon Web Services (AWS)', 'Windows'],
    Storage: ['Redis', 'PostgreSQL', 'Microsoft SQL Server', 'Azure Cosmos DB', 'MongoDB', 'Azure Blobs', 'NoSQL'],
    Other: ['APIs', 'Pulumi', 'Domain-driven Design (DDD)', 'Microsoft Azure Cloud Server', 'Azure Portals'],
  },
  featuredExpertise: [
    'C#',
    '.NET',
    'Angular',
    'TypeScript',
    'Test Automation',
    'Bootstrap',
    'Redis',
    'Xamarin',
    'PostgreSQL',
    'Agile Development',
    'AWS',
    'React.js',
    'Python',
    'CSS',
  ],
  workExperience: [
    {
      role: 'Senior Full-stack Developer',
      period: '2021 – Present',
      company: 'Fortune 100 North American Construction Equipment Manufacturer',
      bullets: [
        'Maintained and continuously improved a mission-critical line-of-business application supporting a global dealer network in a zero-downtime environment.',
        'Worked in a highly autonomous technical role focused on improving the experience for end users, dealers, developers, and other stakeholders.',
        'Identified and resolved performance bottlenecks to ensure reliable and efficient system operation.',
        'Collaborated with project managers to identify practical solutions that best supported business needs.',
        'Helped establish an automated testing suite in collaboration with QA personnel.',
        'Supported the onboarding of new developers and provided guidance when needed.',
      ],
    },
    {
      role: 'Senior Full-stack Developer',
      period: '2020 – 2021',
      company: 'Orchestr8',
      bullets: [
        'Re-architected a legacy system through incremental modernization, replacing critical components while maintaining production stability.',
        'Collaborated closely with domain experts and business stakeholders to understand the problem domain and translate insights into technical solutions.',
        'Designed a new domain model and schema for the next generation of a PostgreSQL database based on insights gathered during domain analysis.',
        'Implemented a comprehensive testing framework using Docker to replicate production environments and improve the reliability of automated tests.',
        'Established and enforced engineering standards and code policies to ensure maintainability, consistency, and adherence to best practices.',
        'Developed a database benchmarking project using the client`s real datasets to evaluate and compare mature database engines on the market.',
      ],
    },
    {
      role: 'Senior Full-stack Developer',
      period: '2019 – 2020',
      company: 'Microsoft',
      bullets: [
        'Developed the web and front-end part of the application, a social network in the education industry.',
        'Worked on the client-side using Ant Design framework and React. Made sure we were following accessibility principles.',
        'Integrated AI that flags any sensitive content uploaded by malicious users.',
        'Managed infrastructure in Microsoft Azure using Cosmos DB.',
      ],
    },
    {
      role: 'Senior Full-stack Developer',
      period: '2018 – 2020',
      company: 'Lykke',
      bullets: [
        'Developed a microservice to manage the user\'s personal data, KYC process, and user preferences. Used event sourcing as a data store.',
        'Defined infrastructure as code with TypeScript and Pulumi.',
        'Developed operations dashboards to support developers maintaining our systems.',
      ],
    },
    {
      role: 'Software Developer',
      period: '2013 – 2018',
      company: 'Blocshop',
      bullets: [
        'Refactored a legacy checkout system for a client in the eCommerce industry, resulting in a severalfold response time improvement.',
        'Built a client-facing app for managing orders and personal information.',
        'Prepared and ran a series of load tests. Reported results to the management. Revised and implemented improvements to the infrastructure.',
        'Developed a geocaching game with object detection features.',
      ],
    },
    {
      role: 'Application Developer',
      period: '2011 – 2013',
      company: 'Landis+Gyr s.r.o',
      bullets: [
        'Developed a Silverlight application for the smart city concept.',
        'Integrated with WCF services within the client\'s infrastructure.',
        'Developed a UI toolkit reflecting the company\'s design language in XAML.',
      ],
    },
    {
      role: 'Web Developer',
      period: '2008 – 2011',
      company: 'SlickTouch',
      bullets: [
        'Maintained and developed a homegrown CMS framework used on other software projects.',
        'Developed a bespoke eCommerce solution for a client.',
        'Built a scheduling platform for a client in the education industry.',
        'Developed a number of websites with varying levels of complexity and requirements.',
      ],
    },
  ],
  projects: [
    {
      name: 'DuckFerries',
      description:
        'Bootstrapped a little company from the ground up. DuckFerries aggregates regional ferry ticket providers and operates as an affiliate channel for ferry boat operators.',
      keyResponsibilities: [
        'Set up infrastructure that enabled company growth.',
        'Programmed and maintained a customer-facing checkout system.',
        'Programmed and maintained the back-office system.',
        'Hired key team members.',
        'Ran A/B testing and implemented UX changes.',
        'Automated tests and deployments.',
      ],
    },
  ],
};

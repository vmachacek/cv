import { CvData } from './cv.model';

export const CV_DATA: CvData = {
  basics: {
    name: 'Vojtech Machacek',
    headline: 'Principal Software Engineer',
    location: 'Menasha, WI, United States',
    verifiedExpertise: 'Engineering',
    summary:
      'Full-stack software developer with 10+ years of experience building production systems for startups, large eCommerce platforms, and Fortune 100 companies. Experienced in designing, implementing, and improving software systems while working closely with technical and business stakeholders.',
    availability: 'Part-time',
    preferredEnvironment: ['.NET', 'Angular', 'Azure/AWS'],
    toptalMemberSince: '2021-01-27',
    imageUrl:
      'https://bs-uploads.toptal.io/blackfish-uploads/talent/720679/picture/optimized/huge_f49ba1cd79e5f4f74abd732b4b1a5df5-c3b5cec39107c83526d9035974972d32.jpeg',
    publicProfileUrl: 'https://www.toptal.com/developers/resume/vojtech-machacek',
  },
  highlights: {
    signatureAchievement: 'Founded and ran a profitable online e-commerce business while traveling internationally.',
    portfolioHighlights: [
      {
        title: 'Fortune 100 North American Construction Equipment Manufacturer',
        summaryTech: 'Angular, C#, ASP.NET Core, Python, HTML, CSS, JavaScript, ASP.NET...',
      },
      {
        title: 'Orchestr8',
        summaryTech: 'AWS, Entity Framework, Angular, .NET Core, C#, APIs...',
      },
      {
        title: 'Microsoft',
        summaryTech: 'React, .NET Core, Azure Cosmos DB, Entity Framework, C#, APIs, ASP.NET, C#.NET...',
      },
    ],
    experienceByTechnology: [
      'C# / .NET - 10 years',
      'SQL - 9 years',
      'Angular & TypeScript - 7 years',
      'Domain-driven Design - 6 years',
      'Test Automation - 5 years',
      'Azure & AWS - 4 years',
    ],
  },
  skills: {
    Languages: ['C#', 'SQL', 'TypeScript', 'Python'],
    'Frameworks / Libraries': ['ASP.NET Core', 'Angular', '.NET', 'SignalR', 'Entity Framework', 'React' ],
    Paradigms: ['CQRS', 'Event Sourcing', 'Test Automation','Blue/Green Deployment', 'Feature Flags', 'Test-driven Development (TDD)'],
    'Cloud Platforms': ['Azure', 'AWS'],
    Storage: ['PostgreSQL', 'Azure Cosmos DB', 'Redis', 'Microsoft SQL Server', 'MongoDB', 'Azure Blobs', 'NoSQL'],
    Other: ['Pulumi', 'PowerShell'],
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
      role: 'Principal Software Engineer',
      period: '2021 – Present',
      company: 'Fortune 100 North American Construction Equipment Manufacturer',
      bullets: [
        'Maintained and continuously improved a mission-critical line-of-business application supporting a global dealer network in a zero-downtime environment.',
        'Worked in a highly autonomous technical role focused on improving the experience for end users, dealers, developers, and other stakeholders.',
        'Identified and resolved performance bottlenecks to ensure reliable and efficient system operation.',
        'Collaborated with program managers to identify practical solutions that best supported business needs.',
        'Helped establish an automated testing suite in collaboration with QA personnel.',
        'Supported team expansion by screening candidates, participating in technical interviews, and mentoring newly hired developers during onboarding.',
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
        'Developed the front end of a social networking platform in the education industry.',
        'Built user-facing features while ensuring accessibility standards were followed.',
        'Implemented automated moderation to detect and flag sensitive user-generated content.',
        'Managed the cloud infrastructure supporting the application’s data and services.',
      ],
    },
    {
      role: 'Senior Full-stack Developer',
      period: '2018 – 2020',
      company: 'Lykke',
      bullets: [
        'Designed and developed a microservice responsible for user data, identity verification workflows, and account preferences.',
        'Implemented infrastructure as code to improve reliability and repeatability of system deployments.',
        'Built operational dashboards that improved visibility and support for developers maintaining the platform.',
      ],
    },
    {
      role: 'Software Developer',
      period: '2013 – 2018',
      company: 'Blocshop',
      bullets: [
        'Modernized a legacy checkout system for an e-commerce platform, delivering severalfold performance improvements.',
        'Built a client-facing application for managing orders and customer account data.',
        'Conducted load testing, presented performance insights to leadership, and implemented infrastructure improvements.',
        'Developed a geocaching game that incorporated object detection features.',
      ],
    },
    {
      role: 'Application Developer',
      period: '2011 – 2013',
      company: 'Landis+Gyr',
      bullets: [
        'Developed an application supporting a smart city platform for monitoring and managing connected infrastructure.',
        'Integrated the application with internal enterprise services to enable seamless data exchange.',
        'Created a reusable UI toolkit implementing the company’s design language and improving consistency across internal applications.',
      ],
    },
    {
      role: 'Web Developer',
      period: '2008 – 2011',
      company: 'SlickTouch',
      bullets: [
        'Maintained and extended an internal CMS platform used across multiple client projects.',
        'Developed a custom e-commerce solution designed around the client’s specific business processes.',
        'Built a scheduling platform for an organization in the education sector.',
        'Delivered a range of websites with varying levels of complexity and functionality.',
      ],
    },
  ],
  projects: [
    {
      name: 'DuckFerries',
      description:
        'Bootstrapped and built an online ferry ticket aggregation platform connecting regional ferry operators with customers.',
      keyResponsibilities: [
        'Designed and implemented the technical infrastructure supporting the business.',
        'Developed the customer-facing booking and checkout experience.',
        'Built the internal systems used to manage operations and partner integrations.',
        'Hired and onboarded key early team members.',
        'Ran A/B experiments and implemented UX improvements to increase conversions.',
        'Introduced automated testing and deployment processes.',
      ],
    },
  ],
  education: [
    {
      institution: 'Czech Technical University in Prague',
      field: 'Computer Science',
      note: 'Attended 2009 — program not completed',
    },
    {
      institution: 'Smíchov Secondary Technical School, Prague',
      field: 'Information Technology',
      note: 'Graduated with Secondary School Leaving Examination (Matura)',
    },
  ],
};


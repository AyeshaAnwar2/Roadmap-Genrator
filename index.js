/* ----------------- Tech Road‑maps Library -----------------*/

window.ROADMAPS = [
  /* ======================== Frontend ======================== */
  {
    field: "Frontend Development",
    totalHours: 180,
    modules: [
      {
        id: "html",
        title: "HTML Foundations",
        hours: 10,
        resources: [
          { label: "MDN Intro to HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
          { label: "freeCodeCamp HTML Course", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design" }
        ]
      },
      {
        id: "css",
        title: "CSS Design & Layout",
        hours: 25,
        resources: [
          { label: "CSS Tricks Complete Guide", url: "https://css-tricks.com/guides/" },
          { label: "Kevin Powell YouTube", url: "https://www.youtube.com/@KevinPowell" },
          { label: "Flexbox Froggy (Game)", url: "https://flexboxfroggy.com/" }
        ]
      },
      {
        id: "javascript",
        title: "Modern JavaScript (ES6+)",
        hours: 40,
        resources: [
          { label: "JavaScript.info", url: "https://javascript.info/" },
          { label: "Eloquent JS (Book)", url: "https://eloquentjavascript.net/" }
        ]
      },
      {
        id: "react",
        title: "React Basics",
        hours: 30,
        resources: [
          { label: "Official React Docs", url: "https://react.dev/learn" },
          { label: "Net Ninja React Playlist", url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9iJE5CU7K6N9hnaA97f_gW-" }
        ]
      },
      {
        id: "advanced-react",
        title: "Advanced React + Tooling",
        hours: 35,
        resources: [
          { label: "React Router v6", url: "https://reactrouter.com/en/main" },
          { label: "Redux Essentials", url: "https://redux.js.org/tutorials/essentials/part-1-overview-concepts" },
          { label: "Vite + Tailwind Setup", url: "https://vitejs.dev/guide/" }
        ]
      },
      {
        id: "frontend-projects",
        title: "Capstone Projects",
        hours: 40,
        resources: [
          { label: "Frontend Mentor Challenges", url: "https://www.frontendmentor.io/" },
          { label: "Build Your Portfolio Site", url: "#" }
        ]
      }
    ]
  },

  /* ========================= Backend ======================== */
  {
    field: "Backend Development",
    totalHours: 200,
    modules: [
      {
        id: "prog-fundamentals",
        title: "Programming Fundamentals (Python/JS)",
        hours: 20,
        resources: [
          { label: "Python Docs Tutorial", url: "https://docs.python.org/3/tutorial/" },
          { label: "JavaScript.info Basics", url: "https://javascript.info/first-steps" }
        ]
      },
      {
        id: "databases",
        title: "Databases (SQL & NoSQL)",
        hours: 25,
        resources: [
          { label: "SQL Bolt Interactive", url: "https://sqlbolt.com/" },
          { label: "MongoDB University Basics", url: "https://university.mongodb.com/" }
        ]
      },
      {
        id: "framework",
        title: "Server side Framework (Node/Django)",
        hours: 35,
        resources: [
          { label: "Express Docs", url: "https://expressjs.com/" },
          { label: "Django Official Tutorial", url: "https://docs.djangoproject.com/en/5.0/intro/tutorial01/" }
        ]
      },
      {
        id: "apis",
        title: "API Design (REST & GraphQL)",
        hours: 20,
        resources: [
          { label: "REST Best Practices", url: "https://restfulapi.net/" },
          { label: "Apollo GraphQL Docs", url: "https://www.apollographql.com/docs/" }
        ]
      },
      {
        id: "auth-security",
        title: "Authentication & Security",
        hours: 20,
        resources: [
          { label: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
          { label: "JWT Intro", url: "https://jwt.io/introduction" }
        ]
      },
      {
        id: "deployment",
        title: "Deployment & CI/CD",
        hours: 20,
        resources: [
          { label: "Docker Getting Started", url: "https://docs.docker.com/get-started/" },
          { label: "GitHub Actions Docs", url: "https://docs.github.com/actions" }
        ]
      },
      {
        id: "backend-projects",
        title: "Capstone Projects",
        hours: 40,
        resources: [
          { label: "Build a REST API", url: "#" },
          { label: "Personal Backend Project", url: "#" }
        ]
      }
    ]
  },

  /* ======================= Full‑Stack ======================= */
  {
    field: "Full-Stack Development",
    totalHours: 190,
    modules: [
      {
        id: "web-fundamentals",
        title: "Web Fundamentals (HTML/CSS/JS)",
        hours: 20,
        resources: [
          { label: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/" },
          { label: "freeCodeCamp Responsive Web Design", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design" }
        ]
      },
      {
        id: "frontend-framework",
        title: "Frontend Framework (React)",
        hours: 35,
        resources: [
          { label: "React Official Docs", url: "https://react.dev/" },
          { label: "React Router v6", url: "https://reactrouter.com/en/main" }
        ]
      },
      {
        id: "backend-framework",
        title: "Backend Framework (Node/Express)",
        hours: 35 ,
        resources: [
          { label: "Express Docs", url: "https://expressjs.com/" },
          { label: "Node.js Guide", url: "https://nodejs.dev/learn" }
        ]
      },
      {
        id: "databases-fs",
        title: "Databases & ORM",
        hours: 20,
        resources: [
          { label: "Prisma ORM", url: "https://www.prisma.io/docs" },
          { label: "PostgreSQL Tutorial", url: "https://www.postgresqltutorial.com/" }
        ]
      },
      {
        id: "devops-basics",
        title: "DevOps Basics & CI/CD",
        hours: 20,
        resources: [
          { label: "Docker Intro", url: "https://docs.docker.com/get-started/" },
          { label: "Netlify/Vercel Deploy", url: "https://vercel.com/docs" }
        ]
      },
      {
        id: "fullstack-projects",
        title: "Capstone Full Stack Projects",
        hours: 60,
        resources: [
          { label: "Build a SaaS App", url: "#" },
          { label: "Open Source Contribution", url: "https://opensource.guide/" }
        ]
      }
    ]
  },

  /* ===================== DevOps & Cloud ===================== */
  {
    field: "Devops and Cloud",
    totalHours: 210,
    modules: [
      {
        id: "linux-shell",
        title: "Linux & Shell Scripting",
        hours: 20,
        resources: [
          { label: "Linux Command Handbook", url: "https://www.freecodecamp.org/news/linux-command-line-tutorial/" },
          { label: "Bash Guide", url: "https://tldp.org/LDP/abs/html/" }
        ]
      },
      {
        id: "version-ci",
        title: "Git & CI/CD Pipelines",
        hours: 25,
        resources: [
          { label: "Pro Git Book", url: "https://git-scm.com/book/en/v2" },
          { label: "CI/CD with GitHub Actions", url: "https://docs.github.com/actions" }
        ]
      },
      {
        id: "docker",
        title: "Containerization with Docker",
        hours: 25,
        resources: [
          { label: "Docker Docs Tutorial", url: "https://docs.docker.com/get-started/" },
          { label: "Play with Docker", url: "https://labs.play-with-docker.com/" }
        ]
      },
      {
        id: "kubernetes",
        title: "Kubernetes Orchestration",
        hours: 30,
        resources: [
          { label: "Kubernetes Basics", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" },
          { label: "Learn k8s Interactive", url: "https://www.katacoda.com/courses/kubernetes" }
        ]
      },
      {
        id: "cloud-provider",
        title: "AWS/Azure/GCP Core Services",
        hours: 40,
        resources: [
          { label: "AWS Free Tier Workshops", url: "https://aws.amazon.com/getting-started/hands-on/" },
          { label: "Google Cloud Skills Boost", url: "https://cloud.google.com/training" }
        ]
      },
      {
        id: "monitoring",
        title: "Monitoring & Logging",
        hours: 20,
        resources: [
          { label: "Prometheus Docs", url: "https://prometheus.io/docs/" },
          { label: "Grafana Getting Started", url: "https://grafana.com/docs/grafana/latest/getting-started/" }
        ]
      },
      {
        id: "devops-projects",
        title: "DevOps/Cloud Projects",
        hours: 50,
        resources: [
          { label: "Deploy Microservices on AWS", url: "#" },
          { label: "Kubernetes Side Project", url: "#" }
        ]
      }
    ]
  },

  /* ===================== Mobile Development ================= */
  {
    field: "Mobile Development",
    totalHours: 160,
    modules: [
      {
        id: "language-basics",
        title: "Language Basics (Kotlin/Swift/Dart)",
        hours: 25,
        resources: [
          { label: "Kotlin Docs", url: "https://kotlinlang.org/docs/home.html" },
          { label: "Swift Playgrounds", url: "https://developer.apple.com/swift-playgrounds/" },
          { label: "Dart Language Tour", url: "https://dart.dev/guides/language/language-tour" }
        ]
      },
      {
        id: "ui-layout",
        title: "UI Layout & Widgets",
        hours: 20,
        resources: [
          { label: "Android Compose Basics", url: "https://developer.android.com/jetpack/compose/documentation" },
          { label: "SwiftUI Tutorial", url: "https://developer.apple.com/tutorials/swiftui" },
          { label: "Flutter Widgets Catalog", url: "https://docs.flutter.dev/ui/widgets" }
        ]
      },
      {
        id: "state-management",
        title: "State Management",
        hours: 20,
        resources: [
          { label: "Android ViewModel", url: "https://developer.android.com/topic/libraries/architecture/viewmodel" },
          { label: "Flutter Bloc", url: "https://bloclibrary.dev/#/" }
        ]
      },
      {
        id: "networking",
        title: "Networking & APIs",
        hours: 20,
        resources: [
          { label: "Retrofit (Android)", url: "https://square.github.io/retrofit/" },
          { label: "Alamofire (iOS)", url: "https://alamofire.github.io/Alamofire/" },
          { label: "Dio (Flutter)", url: "https://pub.dev/packages/dio" }
        ]
      },
      {
        id: "publishing",
        title: "Testing & Publishing",
        hours: 15,
        resources: [
          { label: "Android Testing Guide", url: "https://developer.android.com/training/testing" },
          { label: "App Store Connect Help", url: "https://developer.apple.com/support/app-store/" }
        ]
      },
      {
        id: "mobile-projects",
        title: "Capstone Mobile Projects",
        hours: 60,
        resources: [
          { label: "Build a Todo App", url: "#" },
          { label: "Publish Your First App", url: "#" }
        ]
      }
    ]
  },

  /* ===================== Data Science ======================= */
  {
    field: "Data Science",
    totalHours: 180,
    modules: [
      {
        id: "python-libs",
        title: "Python & DS Libraries",
        hours: 25,
        resources: [
          { label: "Python for Data Analysis", url: "https://wesmckinney.com/book/" },
          { label: "NumPy Docs", url: "https://numpy.org/doc/" }
        ]
      },
      {
        id: "stats-prob",
        title: "Statistics & Probability",
        hours: 30,
        resources: [
          { label: "Khan Academy Statistics", url: "https://www.khanacademy.org/math/statistics-probability" },
          { label: "StatQuest YouTube", url: "https://www.youtube.com/c/joshstarmer" }
        ]
      },
      {
        id: "data-wrangling",
        title: "Data Wrangling & Cleaning",
        hours: 25,
        resources: [
          { label: "Pandas Docs", url: "https://pandas.pydata.org/docs/" },
          { label: "Data Cleaning MC Course", url: "https://www.datacamp.com/courses/cleaning-data-in-python" }
        ]
      },
      {
        id: "visualization",
        title: "Data Visualization",
        hours: 20,
        resources: [
          { label: "Matplotlib Tutorial", url: "https://matplotlib.org/stable/tutorials/index.html" },
          { label: "Seaborn Guide", url: "https://seaborn.pydata.org/tutorial.html" }
        ]
      },
      {
        id: "ml-intro",
        title: "Machine Learning Intro",
        hours: 40,
        resources: [
          { label: "Andrew Ng ML Course", url: "https://www.coursera.org/learn/machine-learning" },
          { label: "sklearn Docs", url: "https://scikit-learn.org/stable/" }
        ]
      },
      {
        id: "ds-projects",
        title: "Capstone Data Projects",
        hours: 40,
        resources: [
          { label: "Kaggle Competitions", url: "https://www.kaggle.com/competitions" },
          { label: "Public Datasets Project", url: "#" }
        ]
      }
    ]
  },

  /* =================== Machine Learning ===================== */
  {
    field: "Machine Learning",
    totalHours: 210,
    modules: [
      {
        id: "math-fundamentals",
        title: "Math Foundations (Linear Algebra, Calc)",
        hours: 30,
        resources: [
          { label: "3Blue1Brown Essence of LA", url: "https://www.3blue1brown.com/lessons/linear-algebra" },
          { label: "Khan Academy Calculus", url: "https://www.khanacademy.org/math/calculus-1" }
        ]
      },
      {
        id: "python-ml",
        title: "Python ML Libraries",
        hours: 30,
        resources: [
          { label: "NumPy & Pandas", url: "https://pandas.pydata.org/" },
          { label: "scikit learn Docs", url: "https://scikit-learn.org/stable/" }
        ]
      },
      {
        id: "supervised",
        title: "Supervised Learning",
        hours: 30,
        resources: [
          { label: "Hands on ML sBook", url: "https://github.com/ageron/handson-ml2" },
          { label: "StatQuest Supervised", url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUIxGDQs4LFFD--41Vzf-ME1" }
        ]
      },
      {
        id: "unsupervised",
        title: "Unsupervised Learning",
        hours: 20,
        resources: [
          { label: "scikit learn Clustering", url: "https://scikit-learn.org/stable/modules/clustering.html" },
          { label: "Dimensionality Reduction Guide", url: "https://towardsdatascience.com/dimensionality-reduction-for-machine-learning-data-visualization-fa78e79221b" }
        ]
      },
      {
        id: "deep-learning",
        title: "Deep Learning Basics",
        hours: 40,
        resources: [
          { label: "DeepLearning.AI Specialization", url: "https://www.coursera.org/specializations/deep-learning" },
          { label: "PyTorch Tutorial", url: "https://pytorch.org/tutorials/" }
        ]
      },
      {
        id: "mlops",
        title: "MLOps & Deployment",
        hours: 20,
        resources: [
          { label: "TensorFlow Serving", url: "https://www.tensorflow.org/tfx/guide/serving" },
          { label: "MLflow Docs", url: "https://mlflow.org/docs/" }
        ]
      },
      {
        id: "ml-projects",
        title: "Capstone ML Projects",
        hours: 40,
        resources: [
          { label: "End to end ML Project", url: "#" },
          { label: "Kaggle Grandmaster s Tips", url: "https://www.kaggle.com/discussions/t/260640" }
        ]
      }
    ]
  },

  /* ==================== Cybersecurity ======================= */
  {
    field: "Cybersecurity",
    totalHours: 185,
    modules: [
      {
        id: "sec-fundamentals",
        title: "Security Fundamentals",
        hours: 20,
        resources: [
          { label: "Cybrary Sec+ Prep", url: "https://www.cybrary.it/course/comptia-security-plus/" },
          { label: "Open Security Training", url: "http://opensecuritytraining.info/" }
        ]
      },
      {
        id: "networking",
        title: "Networking & Protocols",
        hours: 25,
        resources: [
          { label: "Cisco NetAcad Courses", url: "https://www.netacad.com/" },
          { label: "Practical Networking YouTube", url: "https://www.youtube.com/c/PracticalNetworking" }
        ]
      },
      {
        id: "system-security",
        title: "System Security (Linux/Windows)",
        hours: 25,
        resources: [
          { label: "Hardening Linux", url: "https://linuxsecurity.expert/tutorials/hardening" },
          { label: "Microsoft Security Docs", url: "https://learn.microsoft.com/security" }
        ]
      },
      {
        id: "web-security",
        title: "Web Application Security",
        hours: 25,
        resources: [
          { label: "PortSwigger Web Security Academy", url: "https://portswigger.net/web-security" },
          { label: "OWASP Juice Shop", url: "https://owasp.org/www-project-juice-shop/" }
        ]
      },
      {
        id: "security-tools",
        title: "Security Tools & Monitoring",
        hours: 20,
        resources: [
          { label: "Wireshark Docs", url: "https://www.wireshark.org/docs/" },
          { label: "Splunk Fundamentals", url: "https://www.splunk.com/en_us/training.html" }
        ]
      },
      {
        id: "offensive-security",
        title: "Offensive Security (PenTesting)",
        hours: 30,
        resources: [
          { label: "Hack The Box", url: "https://www.hackthebox.com/" },
          { label: "Metasploit Unleashed", url: "https://metasploit.help.rapid7.com/docs" }
        ]
      },
      {
        id: "cyber-projects",
        title: "CTFs & Practical Labs",
        hours: 40,
        resources: [
          { label: "TryHackMe Paths", url: "https://tryhackme.com/" },
          { label: "OverTheWire Wargames", url: "https://overthewire.org/wargames/" }
        ]
      }
    ]
  },

  /* ==================== UI/UX Design ======================== */
  {
    field: "Ui Ux Design",
    totalHours: 165,
    modules: [
      {
        id: "design-principles",
        title: "Design Principles & Color Theory",
        hours: 20,
        resources: [
          { label: "Refactoring UI  ook", url: "https://refactoringui.com/book/" },
          { label: "Adobe Color Wheel", url: "https://color.adobe.com/" }
        ]
      },
      {
        id: "user-research",
        title: "User Research & Personas",
        hours: 20,
        resources: [
          { label: "IDEO Design Kit", url: "https://www.designkit.org/methods" },
          { label: "NN Group Articles", url: "https://www.nngroup.com/articles/" }
        ]
      },
      {
        id: "wireframes",
        title: "Wireframing & Prototyping",
        hours: 25,
        resources: [
          { label: "Balsamiq Wireframes", url: "https://balsamiq.com/learn/" },
          { label: "Figma Prototyping", url: "https://help.figma.com/hc/en-us/articles/360040451373" }
        ]
      },
      {
        id: "ui-tools",
        title: "UI Tools (Figma / Adobe XD)",
        hours: 20,
        resources: [
          { label: "Figma Beginner Course", url: "https://www.youtube.com/watch?v=jwCmIBJ8Jtc" },
          { label: "Adobe XD tutorials", url: "https://helpx.adobe.com/xd/tutorials.html" }
        ]
      },
      {
        id: "interaction-design",
        title: "Interaction Design & Animation",
        hours: 20,
        resources: [
          { label: "Framer Motion Docs", url: "https://www.framer.com/motion/" },
          { label: "Principles of IxD", url: "https://www.interaction-design.org/" }
        ]
      },
      {
        id: "usability-testing",
        title: "Usability Testing",
        hours: 20,
        resources: [
          { label: "NN Group Usability", url: "https://www.nngroup.com/topic/usability-testing/" },
          { label: "UserTesting University", url: "https://university.usertesting.com/" }
        ]
      },
      {
        id: "design-projects",
        title: "Portfolio Design Projects",
        hours: 40,
        resources: [
          { label: "Dribbble Weekly Warm-Up", url: "https://dribbble.com/tags/warmup" },
          { label: "UX Challenge 100", url: "https://www.uxchallenge.co/" }
        ]
      }
    ]
  },

  /* ================== Blockchain Development ================= */
  {
    field: "Blockchain Development",
    totalHours: 165,
    modules: [
      {
        id: "blockchain-basics",
        title: "Blockchain Basics & Cryptography",
        hours: 20,
        resources: [
          { label: "Coursera Blockchain Basics", url: "https://www.coursera.org/learn/blockchain-basics" },
          { label: "Bitcoin Whitepaper", url: "https://bitcoin.org/bitcoin.pdf" }
        ]
      },
      {
        id: "solidity",
        title: "Solidity & Smart Contracts",
        hours: 30,
        resources: [
          { label: "Solidity Docs", url: "https://docs.soliditylang.org/" },
          { label: "CryptoZombies Game", url: "https://cryptozombies.io/" }
        ]
      } ,
      {
        id: "dapps",
        title: "DApp Frontend (ethers.js, web3.js)",
        hours: 25,
        resources: [
          { label: "Ethers.js Docs", url: "https://docs.ethers.io/" },
          { label: "web3.js Guide", url: "https://web3js.readthedocs.io/" }
        ]
      },
      {
        id: "security-audit",
        title: "Smart Contract Security Auditing",
        hours: 20,
        resources: [
          { label: "SWC Registry", url: "https://swcregistry.io/" },
          { label: "Trail of Bits Blog", url: "https://blog.trailofbits.com/" }
        ]
      },
      {
        id: "chainlink",
        title: "Oracles & Interoperability",
        hours: 15,
        resources: [
          { label: "Chainlink Docs", url: "https://docs.chain.link/" },
          { label: "The Graph Docs", url: "https://thegraph.com/docs/" }
        ]
      },
      {
        id: "blockchain-projects",
        title: "Capstone Blockchain Projects",
        hours: 55,
        resources: [
          { label: "Build a Token Sale", url: "#" },
          { label: "Contribute to OpenZeppelin", url: "https://github.com/OpenZeppelin" }
        ]
      }
    ]
  },

  /* ==================== Game Development ==================== */
  {
    field: "Game Development",
    totalHours: 170,
    modules: [
      {
        id: "game-design",
        title: "Game Design Principles",
        hours: 20,
        resources: [
          { label: "GDC Vault Talks", url: "https://gdcvault.com/" },
          { label: "Art of Game Design Book", url: "https://www.amazon.com/Art-Game-Design-lenses-second/dp/0123694965" }
        ]
      },
      {
        id: "programming-engine",
        title: "Programming & Engine (Unity/Unreal)",
        hours: 30,
        resources: [
          { label: "Unity Learn", url: "https://learn.unity.com/" },
          { label: "Unreal Engine Docs", url: "https://docs.unrealengine.com/" }
        ]
      },
      {
        id: "graphics-physics",
        title: "Graphics & Physics Basics",
        hours: 25,
        resources: [
          { label: "Brackeys Shaders", url: "https://www.youtube.com/playlist?list=PLPV2KyIb3jR4u5jX8PHM0TnXKQ5xaNf9p" },
          { label: "Nature of Code (Physics)", url: "https://natureofcode.com/" }
        ]
      },
      {
        id: "game-mechanics",
        title: "Game Mechanics & AI",
        hours: 20,
        resources: [
          { label: "Unity AITutorials", url: "https://github.com/Unity-Technologies/Unity-Examples" },
          { label: "AI for Games Book", url: "https://www.amazon.com/Artificial-Intelligence-Games-Second-Davis/dp/0123747317" }
        ]
      },
      {
        id: "assets-pipeline",
        title: "Assets & Pipeline (Art, Audio)",
        hours: 15,
        resources: [
          { label: "Blender Basics", url: "https://www.blender.org/support/tutorials/" },
          { label: "OpenGameArt", url: "https://opengameart.org/" }
        ]
      },
      {
        id: "multiplayer",
        title: "Multiplayer Networking",
        hours: 20,
        resources: [
          { label: "Mirror Networking (Unity)", url: "https://mirror-networking.gitbook.io/docs/" },
          { label: "Unreal Networking Guide", url: "https://docs.unrealengine.com/5.2/en-US/networking-in-unreal-engine/" }
        ]
      },
      {
        id: "game-projects",
        title: "Capstone Game Projects",
        hours: 40,
        resources: [
          { label: "Ludu Dare Jam", url: "https://ldjam.com/" },
          { label: "Publish to itch.io", url: "https://itch.io/developers" }
        ]
      }
    ]
  }
];

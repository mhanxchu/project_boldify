export interface InterviewQuestion {
  id: string;
  question: string;
  category: string;
  exampleResponse: string;
  starPrompts: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
}

export const interviewQuestions: InterviewQuestion[] = [
  {
    id: "tell-me-about-yourself",
    question: "Tell me about yourself",
    category: "Introduction",
    exampleResponse: "I'm a software engineer with 3 years of experience building web applications. In my previous role at TechCorp, I led a team of 4 developers to deliver a customer portal that increased user engagement by 40%. I'm passionate about creating user-friendly solutions and I'm excited about the opportunity to bring my skills to your team.",
    starPrompts: {
      situation: "What background or context should the interviewer know?",
      task: "What role or challenge were you facing?",
      action: "What specific steps did you take?",
      result: "What was the outcome or what did you learn?",
    },
  },
  {
    id: "why-this-role",
    question: "Why are you interested in this role?",
    category: "Motivation",
    exampleResponse: "I'm drawn to this role because it combines my passion for front-end development with the opportunity to work on products that directly impact users. Your company's focus on accessibility and user experience aligns with my values. Additionally, I'm excited about the growth opportunities and the chance to work with a team that values continuous learning.",
    starPrompts: {
      situation: "What attracted you to this company or role?",
      task: "What do you hope to accomplish in this position?",
      action: "What research or preparation have you done?",
      result: "How will this role help you grow or contribute?",
    },
  },
  {
    id: "greatest-strength",
    question: "What is your greatest strength?",
    category: "Self-Assessment",
    exampleResponse: "My greatest strength is my ability to break down complex problems into manageable steps. For example, when our team faced a critical bug affecting 30% of users, I systematically analyzed the issue, identified the root cause, and coordinated with the team to deploy a fix within 24 hours. This approach has helped me deliver reliable solutions consistently.",
    starPrompts: {
      situation: "What strength do you want to highlight?",
      task: "Why is this strength relevant to the role?",
      action: "Can you give a specific example?",
      result: "How has this strength helped you succeed?",
    },
  },
  {
    id: "greatest-weakness",
    question: "What is your greatest weakness?",
    category: "Self-Assessment",
    exampleResponse: "I used to struggle with saying 'no' to additional projects, which sometimes led to overcommitment. I've learned to better assess my capacity and communicate my bandwidth proactively. Now I use project management tools to track my workload and have honest conversations with my manager about priorities, which has improved both my work quality and work-life balance.",
    starPrompts: {
      situation: "What area are you working to improve?",
      task: "Why is this important to address?",
      action: "What steps are you taking to improve?",
      result: "What progress have you made?",
    },
  },
  {
    id: "challenge-overcome",
    question: "Tell me about a challenge you overcame",
    category: "Problem-Solving",
    exampleResponse: "In my last role, I was tasked with migrating our legacy codebase to a modern framework with zero downtime. The challenge was coordinating with multiple teams while maintaining service availability. I created a detailed migration plan, set up automated testing, and coordinated weekly sync meetings. We successfully completed the migration over 3 months with only 2 minor incidents, both resolved within minutes.",
    starPrompts: {
      situation: "What was the challenge or problem?",
      task: "What was your responsibility or goal?",
      action: "What specific actions did you take?",
      result: "What was the outcome? What did you learn?",
    },
  },
  {
    id: "team-conflict",
    question: "Tell me about a time you handled a conflict in a team",
    category: "Teamwork",
    exampleResponse: "Two team members had different approaches to implementing a feature, which was causing delays. I facilitated a meeting where each person presented their approach with pros and cons. We identified that both methods had merit and combined the best aspects of each. This not only resolved the conflict but resulted in a better solution than either original proposal.",
    starPrompts: {
      situation: "What was the conflict or disagreement?",
      task: "What was your role in resolving it?",
      action: "What steps did you take to address it?",
      result: "How was it resolved? What was the outcome?",
    },
  },
  {
    id: "why-leave",
    question: "Why are you leaving your current position?",
    category: "Career",
    exampleResponse: "I've learned a lot in my current role, but I'm looking for opportunities to work on larger-scale projects and take on more leadership responsibilities. This role offers exactly that - the chance to lead initiatives and work with cutting-edge technology. I'm excited about the growth potential and the impact I can make here.",
    starPrompts: {
      situation: "What is your current situation?",
      task: "What are you seeking in your next role?",
      action: "What have you learned or accomplished?",
      result: "How will this new role help you grow?",
    },
  },
  {
    id: "where-see-yourself",
    question: "Where do you see yourself in 5 years?",
    category: "Career",
    exampleResponse: "In 5 years, I see myself as a senior engineer leading technical initiatives and mentoring junior developers. I'm particularly interested in growing my expertise in system architecture and team leadership. I'd love to be in a position where I can influence product direction and help build a strong engineering culture, which aligns with the growth trajectory I see at this company.",
    starPrompts: {
      situation: "What are your career goals?",
      task: "What skills or roles do you want to develop?",
      action: "What steps are you taking to get there?",
      result: "How does this role fit into your plan?",
    },
  },
  {
    id: "handle-pressure",
    question: "How do you handle pressure or tight deadlines?",
    category: "Work Style",
    exampleResponse: "I handle pressure by breaking work into priorities and communicating proactively. When we had a critical client deadline approaching, I assessed what was essential versus nice-to-have, created a realistic timeline, and communicated early about potential risks. I also made sure to take short breaks to maintain focus. We delivered on time, and the client appreciated our transparency throughout the process.",
    starPrompts: {
      situation: "Describe a time you faced pressure or a tight deadline",
      task: "What needed to be accomplished?",
      action: "What strategies did you use?",
      result: "What was the outcome?",
    },
  },
  {
    id: "questions-for-us",
    question: "Do you have any questions for us?",
    category: "Closing",
    exampleResponse: "Yes, I have a few questions. First, what does success look like for someone in this role in the first 90 days? Second, how does the team typically collaborate on projects? And finally, what opportunities are there for professional development and growth? I'm also curious about the company culture and how you support work-life balance.",
    starPrompts: {
      situation: "What would you like to know about the role or company?",
      task: "What information will help you make a decision?",
      action: "What thoughtful questions can you ask?",
      result: "How will this help you understand if it's a good fit?",
    },
  },
];

export const categories = Array.from(
  new Set(interviewQuestions.map((q) => q.category))
);


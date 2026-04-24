export interface FAQ {
  question: string
  answer: string
}

export const faqData = {
  tagline: "FAQ",
  title: "Frequently Asked Questions",
  subtitle: "",
  items: [
    {
      question: "How long does it take to set up Smart.R?",
      answer:
        "Most teams are up and running within a few hours. Our onboarding team will guide you through the setup process, import your existing data, and train your team on best practices.",
    },
    {
      question: "Can I import data from my current ATS?",
      answer:
        "Yes! We support data migration from all major ATS platforms including Greenhouse, Lever, Workday, and more. Our team handles the entire migration process for you.",
    },
    {
      question: "Is Smart.R compliant with GDPR and other privacy regulations?",
      answer:
        "Absolutely. Smart.R is fully GDPR compliant and follows best practices for data privacy and security. We're also SOC 2 Type II certified.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer email support for all plans, with priority support and dedicated account managers available for Enterprise customers. Our average response time is under 2 hours.",
    },
    {
      question: "Can I try Smart.R before committing?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can also book a personalized demo with our team.",
    },
    {
      question: "How does the AI matching work?",
      answer:
        "Our AI analyzes job requirements and candidate profiles to identify the best matches based on skills, experience, and cultural fit. It learns from your hiring decisions to improve recommendations over time.",
    },
  ] as FAQ[],
}
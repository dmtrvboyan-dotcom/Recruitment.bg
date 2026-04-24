import { BenefitsSection } from "./benefits/benefits-section";
import { CTASection } from "./cta/cta-section";
import { FAQSection } from "./faq/faq-section";
import { FeaturesSection } from "./features/features-section";
import { HeroSection } from "./hero/hero-section";
import { IntegrationsSection } from "./integrations/integrations-section";
import { SecuritySection } from "./security/security-section";
import { ShowcaseSection } from "./showcase/showcase-section";


export default function Page() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <ShowcaseSection />
      <IntegrationsSection />
      <SecuritySection />
      <FAQSection />
      <CTASection />
    </>
  )
}
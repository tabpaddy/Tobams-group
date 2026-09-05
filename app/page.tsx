import { CallToAction } from "@/components/CallToAction";
import { CeoLearning } from "@/components/CeoLearning";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LearningManagement } from "@/components/LearningManagement";
import { ManagementDevelopment } from "@/components/ManagementDevelopment";
import { Testimonials } from "@/components/Testimonials";
import { TrainingConsultant } from "@/components/TrainingConsultant";
import { TrainingPrograms } from "@/components/TrainingPrograms";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LearningManagement />
        <TrainingPrograms />
        <ManagementDevelopment />
        <CeoLearning />
        <TrainingConsultant />
        <CallToAction />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import TrustBar from '../components/TrustBar.jsx';
import LearningSection from '../components/LearningSection.jsx';
import Benefits from '../components/Benefits.jsx';
import Curriculum from '../components/Curriculum.jsx';
import CourseProcess from '../components/CourseProcess.jsx';
import Instructor from '../components/Instructor.jsx';
import StudentGallery from '../components/StudentGallery.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CourseFeatures from '../components/CourseFeatures.jsx';
import Pricing from '../components/Pricing.jsx';
import TrustSection from '../components/TrustSection.jsx';
import FAQ from '../components/FAQ.jsx';
import FinalCTA from '../components/FinalCTA.jsx';
import Footer from '../components/Footer.jsx';
import EnrollModal from '../components/EnrollModal.jsx';

export default function BakeryCourse() {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: 'enroll',
  });
  useEffect(() => {
  setModalState({
    isOpen: true,
    mode: 'enroll',
  });
}, []);

  const handleOpenEnroll = () => {
    setModalState({ isOpen: true, mode: 'enroll' });
  };

  const handleOpenContact = () => {
    setModalState({ isOpen: true, mode: 'contact' });
  };

  const handleOpenPolicy = (policyType) => {
    setModalState({ isOpen: true, mode: policyType });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleViewCourse = () => {
    const courseEl = document.getElementById('course');
    if (courseEl) {
      courseEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectModuleFromCard = (moduleIdx) => {
    setActiveModuleIndex(moduleIdx);
    const curriculumEl = document.getElementById('curriculum');
    if (curriculumEl) {
      curriculumEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F0] text-[#241510] overflow-x-hidden">
      {/* Sticky Navigation Header */}
      <Navbar onEnrollClick={handleOpenEnroll} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 4. Hero Section */}
        <Hero
          onEnrollClick={handleOpenEnroll}
          onViewCourseClick={handleViewCourse}
        />

        {/* 5. Trust / Social Proof Bar */}
        <TrustBar />

        {/* 6. What You'll Learn Section */}
        <LearningSection onSelectModule={handleSelectModuleFromCard} />

        {/* 7. Why Choose This Course (Benefits) */}
        <Benefits />

        {/* 8. Course Curriculum Accordion */}
        { <Curriculum
          activeModuleIndex={activeModuleIndex}
          setActiveModuleIndex={setActiveModuleIndex}
          onEnrollClick={handleOpenEnroll}
        /> }

        {/* 9. Course Experience / Process */}
        <CourseProcess />

        {/* 10. Instructor Section */}
        <Instructor />

        {/* 11. Student Creations / Gallery */}
        <StudentGallery />

        {/* 12. Student Testimonials */}
        <Testimonials />

        {/* 13. Course Features */}
        <CourseFeatures />

        {/* 15. Trust Guarantee Section */}
        <TrustSection />

        {/* 16. FAQ Section */}
        <FAQ />

        {/* 14. Pricing Section */}
        <Pricing onEnrollClick={handleOpenEnroll} />
        {/* 17. Final CTA Section */}
        {/* <FinalCTA onEnrollClick={handleOpenEnroll} /> */}
      </main>

      {/* 18. Footer */}
      <Footer
        onOpenContact={handleOpenContact}
        onOpenPolicy={handleOpenPolicy}
      />

      {/* Interactive Enrollment / Support / Policy Modal */}
      <EnrollModal
        modalState={modalState}
        onClose={handleCloseModal}
      /> 
    </div>
  );
}

import React, { lazy, Suspense } from "react";

const HeroContent = lazy(() => import("../components/landing/Herocontent"));
const OutsourcePayment = lazy(() =>
  import("../components/landing/OutsourcePayment")
);
const TaskManager = lazy(() => import("../components/landing/TaskManager"));
const ContactForm = lazy(() => import("../components/landing/ContactForm"));

const ManageLanding = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section id="hero">
          <HeroContent />
        </section>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <section id="outsource">
          {" "}
          <OutsourcePayment />
        </section>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <section id="taskmanager">
          <TaskManager />
        </section>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <section id="contact">
          <ContactForm />
        </section>
      </Suspense>
    </div>
  );
};

export default ManageLanding;

import { useEffect, useState, useRef } from "react";

const Counts = () => {
  const [counts, setCounts] = useState({
    students: 0,
    courses: 0,
    events: 0,
    trainers: 0,
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000; // Animation duration in ms
          const stepTime = 50; // Interval time
          const steps = duration / stepTime;

          const finalCounts = {
            students: 416,
            courses: 8,
            events: 28,
            trainers: 32,
          };
          const increments = {
            students: finalCounts.students / steps,
            courses: finalCounts.courses / steps,
            events: finalCounts.events / steps,
            trainers: finalCounts.trainers / steps,
          };

          const interval = setInterval(() => {
            start++;
            setCounts((prev) => ({
              students: Math.min(
                finalCounts.students,
                prev.students + increments.students
              ),
              courses: Math.min(
                finalCounts.courses,
                prev.courses + increments.courses
              ),
              events: Math.min(
                finalCounts.events,
                prev.events + increments.events
              ),
              trainers: Math.min(
                finalCounts.trainers,
                prev.trainers + increments.trainers
              ),
            }));

            if (start >= steps) clearInterval(interval);
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="counts" className="counts section-bg" ref={sectionRef}>
      <div className="container">
        <div className="row counters">
          <div className="col-lg-3 col-6 text-center">
            <span>{Math.floor(counts.students)}</span>
            <p>Students</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span>{Math.floor(counts.courses)}</span>
            <p>Courses</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span>{Math.floor(counts.events)}</span>
            <p>Events</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span>{Math.floor(counts.trainers)}</span>
            <p>Trainers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counts;

import React from "react";
import CountUp from "react-countup";
import "../styles/homecircles.css";

const Circle = ({ start, end, name }) => {
  return (
    <div className="circle">
      <CountUp
        start={start}
        end={end}
        delay={1000}
        enableScrollSpy={true}
        scrollSpyDelay={500}
      >
        {({ countUpRef }) => (
          <div className="counter">
            <span ref={countUpRef} />+
          </div>
        )}
      </CountUp>
      <span className="circle-name">{name}</span>
    </div>
  );
};

const HomeCircles = () => {
  return (
    <section className="container circles">
      <Circle start={0} end={1000} name="Satisfied Patients" />
      <Circle start={0} end={250} name="Verified Doctors" />
      <Circle start={0} end={100} name="Specialist Doctors" />
    </section>
  );
};

export default HomeCircles;

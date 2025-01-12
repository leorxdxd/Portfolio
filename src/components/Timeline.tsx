import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history" className="timeline-container">
      <h1 className="timeline-title">Career History</h1>
      <VerticalTimeline>
        {/* Technology Consultant */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundImage: "url('/src/assets/images/mock01.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            borderRadius: '12px',
          }}
          contentArrowStyle={{ borderRight: '7px solid #242424' }}
          date="2022 - Present"
          iconStyle={{ background: '#6A4EFD', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Technology Consultant</h3>
          <h4 className="vertical-timeline-element-subtitle">Dallas, TX</h4>
          <p>Full-stack Web Development, GenAI/LLM, Project Management, Business Development</p>
        </VerticalTimelineElement>

        {/* Full Stack Engineer */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundImage: "url('/src/assets/images/mock02.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            borderRadius: '12px',
          }}
          contentArrowStyle={{ borderRight: '7px solid #242424' }}
          date="2020 - 2022"
          iconStyle={{ background: '#6A4EFD', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Full Stack Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
          <p>Frontend Development, Backend Development, User Experience, Team Leading</p>
        </VerticalTimelineElement>

        {/* Staff Engineer Intern */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundImage: "url('/src/assets/images/mock03.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            borderRadius: '12px',
          }}
          contentArrowStyle={{ borderRight: '7px solid #242424' }}
          date="2021 - 2021"
          iconStyle={{ background: '#6A4EFD', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Staff Engineer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
          <p>Full-stack Development, API Development, User Experience</p>
        </VerticalTimelineElement>

        {/* Data Analyst Intern */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundImage: "url('/src/assets/images/mock04.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            borderRadius: '12px',
          }}
          contentArrowStyle={{ borderRight: '7px solid #242424' }}
          date="2020 - 2020"
          iconStyle={{ background: '#6A4EFD', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
          <p>Automation, Data Governance, Statistical Analysis</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;

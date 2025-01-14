import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

// Import the background image
import careerBg from '../assets/images/background.png'; // Update with your image path

function Timeline() {
  return (
    <div id="history" className="timeline-container" style={{ backgroundImage: `url(${careerBg})` }}>
      <h1 className="timeline-title">Career History</h1>
      <VerticalTimeline>
        {/* Technology Consultant */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
            color: '#fff',
            borderRadius: '12px',
          }}
          contentArrowStyle={{ borderRight: '7px solid #242424' }}
          date="2022 - Present"
          iconStyle={{ background: '#6A4EFD', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Student Assistant | Office Trainee</h3>
          <h4 className="vertical-timeline-element-subtitle">SISFU | Lima, Las Pinas City</h4>
          <p>MIS | Technical Assistant, Canva Designer, Email Manager, Website Designer</p>
        </VerticalTimelineElement>

        {/* Full Stack Engineer */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
            color: '#fff',
            borderRadius: '12px',
          }}
          contentArrowStyle={{ borderRight: '7px solid #242424' }}
          date="2022 - 2022"
          iconStyle={{ background: '#6A4EFD', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Production Operator</h3>
          <h4 className="vertical-timeline-element-subtitle">Epson Philippines | Malvar Batangas</h4>
          <p>Machine Operation, Maintaining Machines, Quality Control</p>
        </VerticalTimelineElement>

        {/* Staff Engineer Intern */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
            color: '#fff',
            borderRadius: '12px',
          }}
          contentArrowStyle={{ borderRight: '7px solid #242424' }}
          date="2021 - 2022"
          iconStyle={{ background: '#6A4EFD', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">SHS Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Clamp Op Toolings and Fabrication | Carmona, Cavite</h4>
          <p>Quality Control, Operate Production Equipment, Assembling Products</p>
        </VerticalTimelineElement>

        {/* Data Analyst Intern */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
            color: '#fff',
            borderRadius: '12px',
          }}
          contentArrowStyle={{ borderRight: '7px solid #242424' }}
          date="2021 - 2021"
          iconStyle={{ background: '#6A4EFD', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">SOM | Cavite</h4>
          <p>Cleaning of Machines, Making Bolts and Nuts, Metal products</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
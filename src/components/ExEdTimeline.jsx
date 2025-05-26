import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

function ExEdTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.primary"
        >
          January – April 2025
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector
            style={{ background: "var(--accent-color-secondary)" }}
          />
          <TimelineDot style={{ background: "var(--accent-color-secondary)" }}>
            <img
              src="study.png"
              alt="study icon"
              className="timeline-separator-image"
            ></img>
          </TimelineDot>
          <TimelineConnector
            style={{ background: "var(--accent-color-secondary)" }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="timeline-content-card box-shadow">
            <h3>Software Development Trainee</h3>
            <h4>Northcoders, UK (remote)</h4>
            <p>
              Mastered the fundamentals of coding with JavaScript, studied
              common software engineering tools and techniques, explored APIs,
              relational databases, frontend and backend development, practised
              TDD and pair-programming, created full-stack projects
            </p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.primary"
        >
          March 2022 – January 2025
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector
            style={{ background: "var(--accent-color-secondary)" }}
          />
          <TimelineDot style={{ background: "var(--accent-color-secondary)" }}>
            <img
              src="work.png"
              alt="work icon"
              className="timeline-separator-image"
            ></img>
          </TimelineDot>
          <TimelineConnector
            style={{ background: "var(--accent-color-secondary)" }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="timeline-content-card box-shadow">
            <h3>Linguist</h3>
            <h4>TransPerfect Translations Limited, London (hybrid)</h4>
            <p>
              Worked on translations in a quality management team, used
              industry-standard automation tools to improve efficiency and
              customer satisfaction, audited independent contractors, reviewed
              tests and provided feedback, created and updated style guide
              templates
            </p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.primary"
        >
          February 2019 – June 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector
            style={{ background: "var(--accent-color-secondary)" }}
          />
          <TimelineDot style={{ background: "var(--accent-color-secondary)" }}>
            <img
              src="work.png"
              alt="work icon"
              className="timeline-separator-image"
            ></img>
          </TimelineDot>
          <TimelineConnector
            style={{ background: "var(--accent-color-secondary)" }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="timeline-content-card box-shadow">
            <h3>Translator</h3>
            <h4>Nimteko LLC, Minsk (on-site)</h4>
            <p>
              Translated technical documentation and correspondence, interpreted
              during phone calls and eye-to-eye meetings, drove integration of
              industry-standard automation tools to improve efficiency
            </p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.primary"
        >
          September 2014 – June 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector
            style={{ background: "var(--accent-color-secondary)" }}
          />
          <TimelineDot style={{ background: "var(--accent-color-secondary)" }}>
            <img
              src="study.png"
              alt="study icon"
              className="timeline-separator-image"
            ></img>
          </TimelineDot>
          <TimelineConnector
            style={{ background: "var(--accent-color-secondary)" }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <div className="timeline-content-card box-shadow">
            <h3>Student</h3>
            <h4>Minsk State Linguistic University, Minsk (on-site)</h4>
            <p>
              Completed a five-year full-time programme equivalent to the UK
              Bachelor's, developed both written translation and oral
              interpretation skills in Russian, English, German and Spanish,
              specialised in simultaneous interpretation
            </p>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default ExEdTimeline;

import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

function TimelineItemCard({ experienceData, windowWidth }) {
  return (
    <TimelineItem>
      {windowWidth > 1000 && (
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body1"
          color="text.primary"
        >
          {experienceData.dates}
        </TimelineOppositeContent>
      )}
      <TimelineSeparator>
        <TimelineConnector
          style={{ background: "var(--accent-color-secondary)" }}
        />
        <TimelineDot style={{ background: "var(--accent-color-secondary)" }}>
          <img
            src={experienceData.image}
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
          {windowWidth <= 1000 && (
            <p className="mobile-timeline-dates">{experienceData.dates}</p>
          )}
          <h3>{experienceData.position}</h3>
          <h4>{experienceData.organisation}</h4>

          <p className="timeline-description">{experienceData.description}</p>
        </div>
      </TimelineContent>
    </TimelineItem>
  );
}

export default TimelineItemCard;

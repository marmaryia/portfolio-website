import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";

function ExEdTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          January – April 2025
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Software Development Trainee
          </Typography>
          <Typography>Northcoders, UK (remote)</Typography>
          <Typography>
            - Dived into the fundamentals of coding with JavaScript, learnt
            about runtime environments, clean code development, functional,
            object-oriented and asynchronous programming paradigms <br />-
            Studied common software engineering tools and techniques, such as
            TDD with automated testing, pair programming, debugging, Git, CI/CD
            on GitHub
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          March 2022 – January 2025
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Linguist
          </Typography>
          <Typography>
            TransPerfect Translations Limited, London (hybrid)
          </Typography>
          <Typography>
            - Worked on translations (English into Russian) in a quality
            management team to comply with company and client-specific style
            guides, focusing on VIP accounts - Used industry-standard automation
            tools to improve efficiency and customer satisfaction
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          February 2019 – June 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Translator
          </Typography>
          <Typography>Nimteko LLC, Minsk (on-site)</Typography>
          <Typography>
            - Translated technical documentation and correspondence, interpreted
            during phone calls and eye-to-eye meetings
            <br />- Drove integration of industry-standard automation tools to
            improve efficiency
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          September 2014 – June 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Student
          </Typography>
          <Typography>
            Minsk State Linguistic University, Minsk (on-site)
          </Typography>
          <Typography>- Did stuff</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default ExEdTimeline;

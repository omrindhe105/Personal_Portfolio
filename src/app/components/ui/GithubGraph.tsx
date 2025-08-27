// GitHubCalendar.tsx
import { useEffect, useRef } from "react";

import GitHubCalendar from "github-calendar";

const GitHubCalendarComponent = () => {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (calendarRef.current) {
      GitHubCalendar(calendarRef.current, "omrindhe105", {
        responsive: true,
        global_stats: true,
        theme: {
          background: "#03040B",
          text: "#FAF9F6",
        },
      });
    }
  }, []);

  return <div ref={calendarRef}>Loading contributions…</div>;
};

export default GitHubCalendarComponent;

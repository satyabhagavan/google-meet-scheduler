import { getToken } from "next-auth/jwt";

const calendarUrl =
  "https://www.googleapis.com/calendar/v3/calendars/primary/events";

export default async function handler(req, res) {
  const token = await getToken({ req, secret });

  if (!token?.accessToken) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (!token || !token.accessToken) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { date, time } = req.body;
  const eventDateTime = new Date(`${date}T${time}:00`);

  const event = {
    summary: "Scheduled Meeting",
    description: "Created via Google Meet Scheduler MVP",
    start: {
      dateTime: eventDateTime.toISOString(),
      timeZone: "Asia/Kolkata",
    },
    end: {
      dateTime: new Date(
        eventDateTime.getTime() + 30 * 60 * 1000
      ).toISOString(), // 30 mins
      timeZone: "Asia/Kolkata",
    },
  };

  try {
    const response = await fetch(calendarUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ event: data });
    } else {
      return res.status(400).json({ error: data });
    }
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
}

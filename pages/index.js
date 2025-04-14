import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [instantMeetLink, setInstantMeetLink] = useState(null);
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [scheduledLink, setScheduledLink] = useState(null);

  const generateMeetLink = () =>
    `https://meet.google.com/${Array.from({ length: 3 }, () =>
      Math.random().toString(36).substring(2, 5)
    ).join("-")}`;

  const createInstantMeet = () => setInstantMeetLink(generateMeetLink());

  const scheduleMeeting = () => {
    if (!scheduledDate || !scheduledTime) {
      alert("Please select both date and time.");
      return;
    }
    setScheduledLink({
      link: generateMeetLink(),
      time: `${scheduledDate} at ${scheduledTime}`,
    });
  };

  // const scheduleMeeting = async () => {
  //   if (!scheduledDate || !scheduledTime) {
  //     alert("Please select both date and time.");
  //     return;
  //   }

  //   try {
  //     const res = await fetch("/api/create-event", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         date: scheduledDate,
  //         time: scheduledTime,
  //       }),
  //     });

  //     const data = await res.json();

  //     if (res.ok) {
  //       setScheduledLink({
  //         link: data.event.htmlLink,
  //         time: `${scheduledDate} at ${scheduledTime}`,
  //       });
  //     } else {
  //       alert("Failed to create event.");
  //       console.error(data.error);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert("Something went wrong.");
  //   }
  // };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-2xl p-8 space-y-8">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Google Meet Scheduler
        </h1>

        {session ? (
          <>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Welcome, {session.user.name}
              </p>
              <button
                onClick={() => signOut()}
                className="bg-red-500 text-white px-4 py-2 text-sm rounded hover:bg-red-600 transition"
              >
                Sign out
              </button>
            </div>

            {/* Instant Meeting Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                Instant Meeting
              </h2>
              <button
                onClick={createInstantMeet}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Create Now
              </button>
              {instantMeetLink && (
                <p className="mt-2 text-blue-700 text-sm break-all">
                  <a
                    href={instantMeetLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {instantMeetLink}
                  </a>
                </p>
              )}
            </div>

            {/* Scheduled Meeting Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2 mt-6">
                Schedule Meeting
              </h2>
              <div className="flex gap-2 mb-2">
                <input
                  type="date"
                  value={scheduledDate}
                  onChange={(e) => setScheduledDate(e.target.value)}
                  className="border rounded px-2 py-1 w-full"
                />
                <input
                  type="time"
                  value={scheduledTime}
                  onChange={(e) => setScheduledTime(e.target.value)}
                  className="border rounded px-2 py-1 w-full"
                />
              </div>
              <button
                onClick={scheduleMeeting}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Schedule
              </button>
              {scheduledLink && (
                <p className="mt-2 text-green-700 text-sm break-all">
                  Meeting on {scheduledLink.time}:{" "}
                  <a
                    href={scheduledLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {scheduledLink.link}
                  </a>
                </p>
              )}
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="mb-4 text-sm text-gray-600">
              Sign in to create meetings
            </p>
            <button
              onClick={() => signIn("google")}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Sign in with Google
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

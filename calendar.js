import "/components/calendar-door.js";

const surprises = [
  { title: "Surprise 1", link: "https://example.com" },
];

const calendar = document.getElementById("calendar");

for (let i = 1; i <= 24; i++) {
  const door = document.createElement("calendar-door");
  door.setAttribute("day", i);
  door.setAttribute("title", surprises[i - 1]?.title);
  door.setAttribute("link", surprises[i - 1]?.link);
  calendar.appendChild(door);
}

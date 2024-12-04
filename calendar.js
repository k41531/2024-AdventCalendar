const surprises = [
  { title: "LLM Agents can Autonomously Hack Websites", link: "https://kaisei.dev/posts/LLM_Agents_can_Autonomously_Hack_Websites.md" },
  { title: "An Attacker’s Dream? Exploring the Capabilities of ChatGPT for Developing Malware", link: "https://kaisei.dev/posts/An_Attacker's_Dream_Exploring_the_Capabilities_of_ChatGPT_for_Developing_Malware.md" },
  { title: "Missed!", link: "#" },
  { title: "When LLMs Meet Cybersecurity: A Systematic Literature Review", link: "https://kaisei.dev/posts/When_LLMs_Meet_Cybersecurity_A_Systematic_Literature_Review.md" },
];

const calendar = document.getElementById("calendar");

for (let i = 1; i <= 24; i++) {
  const door = document.createElement("calendar-door");
  door.setAttribute("day", i);
  door.setAttribute("title", surprises[i - 1]?.title);
  door.setAttribute("link", surprises[i - 1]?.link);
  calendar.appendChild(door);
}

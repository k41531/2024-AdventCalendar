const surprises = [
  { title: "LLM Agents can Autonomously Hack Websites", link: "https://kaisei.dev/posts/LLM_Agents_can_Autonomously_Hack_Websites.md" },
  { title: "An Attacker’s Dream? Exploring the Capabilities of ChatGPT for Developing Malware", link: "https://kaisei.dev/posts/An_Attacker's_Dream_Exploring_the_Capabilities_of_ChatGPT_for_Developing_Malware.md" },
  { title: "Missed!", link: "#" },
  { title: "When LLMs Meet Cybersecurity: A Systematic Literature Review", link: "https://kaisei.dev/posts/When_LLMs_Meet_Cybersecurity_A_Systematic_Literature_Review.md" },
  { title: "eyeballvul: a future-proof benchmark for vulnerability detection in the wild", link: "https://kaisei.dev/posts/eyeballvul_a_future-proof_benchmark_for_vulnerability_detection_in_the_wild.md" },
  { title: "Hacking, The Lazy Way: LLM Augmented Pentesting", link: "https://kaisei.dev/posts/Hacking_The_Lazy_Way_LLM_Augmented_Pentesting.md" },
  { title: "Fuzz4All: Universal Fuzzing with Large Language Models", link: "https://kaisei.dev/posts/Fuzz4All_Universal_Fuzzing_with_Large_Language_Models.md" },
  { title: "The Anonymity of the Dark Web: A Survey 01", link: "https://kaisei.dev/posts/The_Anonymity_of_the_Dark_Web_A_Survey_01.md" },
  { title: "The Anonymity of the Dark Web: A Survey 02", link: "https://kaisei.dev/posts/The_Anonymity_of_the_Dark_Web_A_Survey_02.md" },
  { title: "The Anonymity of the Dark Web: A Survey 03", link: "https://kaisei.dev/posts/The_Anonymity_of_the_Dark_Web_A_Survey_03.md" },
];


const calendar = document.getElementById("calendar");

for (let i = 1; i <= 24; i++) {
  const door = document.createElement("calendar-door");
  door.setAttribute("day", i);
  door.setAttribute("title", surprises[i - 1]?.title);
  door.setAttribute("link", surprises[i - 1]?.link);
  calendar.appendChild(door);
}

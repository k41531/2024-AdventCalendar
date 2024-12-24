const surprises = [
  { title: "LLM Agents can Autonomously Hack Websites", link: "https://kaisei.dev/posts/LLM_Agents_can_Autonomously_Hack_Websites.md" },
  { title: "An Attacker’s Dream? Exploring the Capabilities of ChatGPT for Developing Malware", link: "https://kaisei.dev/posts/An_Attacker's_Dream_Exploring_the_Capabilities_of_ChatGPT_for_Developing_Malware.md" },
  { title: "Missed!", link: "#" },
  { title: "When LLMs Meet Cybersecurity: A Systematic Literature Review", link: "https://kaisei.dev/posts/When_LLMs_Meet_Cybersecurity_A_Systematic_Literature_Review.md" },
  { title: "eyeballvul: a future-proof benchmark for vulnerability detection in the wild", link: "https://kaisei.dev/posts/eyeballvul_a_future-proof_benchmark_for_vulnerability_detection_in_the_wild.md" },
  { title: "Hacking, The Lazy Way: LLM Augmented Pentesting", link: "https://kaisei.dev/posts/Hacking_The_Lazy_Way_LLM_Augmented_Pentesting.md" },
  { title: "Fuzz4All: Universal Fuzzing with Large Language Models", link: "https://kaisei.dev/posts/Fuzz4All_Universal_Fuzzing_with_Large_Language_Models.md" },
  { title: "Is Generative AI the Next Tactical Cyber Weapon For Threat Actors? Unforeseen Implications of AI Generated Cyber Attack", link: "https://kaisei.dev/posts/Is_Generative_AI_the_Next_Tactical_Cyber_Weapon_For_Threat_Actors_Unforeseen_Implications_of_AI_Generated_Cyber_Attacks.md" },
  { title: "The Anonymity of the Dark Web: A Survey 01", link: "https://kaisei.dev/posts/The_Anonymity_of_the_Dark_Web_A_Survey_01.md" },
  { title: "The Anonymity of the Dark Web: A Survey 02", link: "https://kaisei.dev/posts/The_Anonymity_of_the_Dark_Web_A_Survey_02.md" },
  { title: "The Anonymity of the Dark Web: A Survey 03", link: "https://kaisei.dev/posts/The_Anonymity_of_the_Dark_Web_A_Survey_03.md" },
  { title: "The Anonymity of the Dark Web: A Survey 04", link: "https://kaisei.dev/posts/The_Anonymity_of_the_Dark_Web_A_Survey_04.md" },
  { title: "Missed!", link: "#" },
  { title: "Missed!", link: "#" },
  { title: "Missed!", link: "#" },
  { title: "The Anonymity of the Dark Web: A Survey 05", link: "https://kaisei.dev/posts/The_Anonymity_of_the_Dark_Web_A_Survey_05.md" },
  { title: "The Anonymity of the Dark Web: A Survey 06", link: "https://kaisei.dev/posts/The_Anonymity_of_the_Dark_Web_A_Survey_06.md" },
  { title: "The Anonymity of the Dark Web: A Survey 07", link: "https://kaisei.dev/posts/The_Anonymity_of_the_Dark_Web_A_Survey_07.md" },
  { title: "CVE-Driven Attack Technique Prediction with Semantic Information Extraction and a Domain-Specific Language Model", link: "https://kaisei.dev/posts/CVE_Driven_Attack_Technique_Prediction_with_Semantic_Information_Extraction_and_a_Domain_Specific_Language_Model.md" },
  { title: "Cross-Site Scripting Attacks and DefensiveTechniques: A Comprehensive Survey", link: "https://kaisei.dev/posts/Cross_Site_Scripting_Attacks_and_Defensive_Techniques_A_Comprehensive_Survey.md" },
  { title: "Conti Inc. : Understanding the Internal Discussions of a large Ransomware-as-a-Service Operator with Machine Learning", link: "https://kaisei.dev/posts/Conti_Inc_Understanding_the_Internal_Discussions_of_a_large_Ransomware_as_a_Service_Operator_with_Machine_Learning.md" },
  { title: "Cyber Threat Intelligence Model: An Evaluation of Taxonomies, Sharing Standards, and Ontologies within Cyber Threat Intelligence", link: "https://kaisei.dev/posts/Cyber_Threat_Intelligence_Model_An_Evaluation_of_Taxonomies_Sharing_Standards_and_Ontologies_within_Cyber_Threat_Intelligence.md" },
  { title: "Missed!", link: "#" },
  { title: "A Holistic Approach to Ransomware Classification: Leveraging Static and Dynamic Analysis with Visualizatio", link: "https://kaisei.dev/posts/A_Holistic_Approach_to_Ransomware_Classification_Leveraging_Static_and_Dynamic_Analysis_with_Visualization.md" },
];


const calendar = document.getElementById("calendar");

for (let i = 1; i <= 24; i++) {
  const door = document.createElement("calendar-door");
  door.setAttribute("day", i);
  door.setAttribute("title", surprises[i - 1]?.title);
  door.setAttribute("link", surprises[i - 1]?.link);
  calendar.appendChild(door);
}

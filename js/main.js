const tabs = document.querySelectorAll(".tab");
const projects = document.querySelectorAll("[data-topic]:not(.tab)");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedTopic = tab.dataset.topic;

    // Highlight active tab
    tabs.forEach((t) => {
      t.classList.remove("bg-blue-700", "text-white");
      t.classList.add("bg-white", "text-slate-800");
    });

    tab.classList.remove("bg-white", "text-slate-800");
    tab.classList.add("bg-blue-700", "text-white");

    // Show/hide projects
    projects.forEach((project) => {
      const projectTopic = project.dataset.topic;
      if (selectedTopic === "all" || projectTopic === selectedTopic) {
        project.classList.remove("hidden");
      } else {
        project.classList.add("hidden");
      }
    });
  });
});

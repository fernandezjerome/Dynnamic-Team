(() => {
  const name = document.querySelector(".teamInfo h2"); // name
  const contents = document.querySelector(".detail"); // members detail
  const position = document.querySelector(".teamInfo h3"); //members position
  const buttons = document.querySelectorAll(".bioSwitcher button"); //buttons
  const skillsIcon = document.querySelector("#skillsIcon"); //icons
  const des = document.querySelector("#profileJer"); //profile 1
  const dev = document.querySelector("#profilePwn"); //profile 2
  const dynaTeam = [
    [
      "Jerome Fernandez",
      `UX designer`,
      `I am aspiring graphic designer and brandeveloper based in London, Ontario, Canada.
		For me, designing is solving visual problems. I work with my team in Fanshawe College to help businesses' visualize their brand identity and reach out to their target audience in the smoothest way. To achieve these, I focus on working closely with teammates to find the best marketing strategy solutions.
		Aside from graphic design, I have expertise in illustration and motion graphic.
		Tools frequently used in my projects:`,
    ],

    [
      "Pawan Pandeya",
      `Developer`,
      `This is information of the developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    ],
  ];

  debugger;
  function showBioInfo() {
    arrayIndex = this.dataset.arrayref;
    name.innerText = dynaTeam[arrayIndex][0];
    position.innerText = dynaTeam[arrayIndex][1];
    contents.innerText = dynaTeam[arrayIndex][2];
  }

  function changeImageDes() {
    document.getElementById("defaultImg").src = "images/profile-pic-1.png";
    skillsIcon.style.visibility = "visible";
  }

  function changeImageDev() {
    document.getElementById("defaultImg").src = "images/profile-pic-2.png";
    skillsIcon.style.visibility = "hidden";
  }

  buttons.forEach((button) => button.addEventListener("click", showBioInfo));
  des.addEventListener("click", changeImageDes);
  dev.addEventListener("click", changeImageDev);
})();

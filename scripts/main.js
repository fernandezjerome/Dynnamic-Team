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
      `laksdflkasdfllasdkf lskdfla lasd lsad flsd jlsdkfj`,
    ],

    [
      "Pawan Pandeya",
      `Developer`,
      `Tsadf asdf as a as dsadfasf sdfasfasdf asdf.`,
    ],
  ];

  // debugger;
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

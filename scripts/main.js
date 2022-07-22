(() => {
  const name = document.querySelector(".teamInfo h2"); // name
  const contents = document.querySelector(".detail"); // members detail
  const position = document.querySelector(".teamInfo h3"); //members position
  const buttons = document.querySelectorAll(".bioSwitcher button"); //buttons
  const des = document.querySelector("#profileJer"); //profile 1
  const dev = document.querySelector("#profilePwn"); //profile 2
  const dynaTeam = [
    [
      "Jerome Fernandez",
      `UXUI Designer`,
      ` I always want to be a full stack UXUI Designer, I know in my mind that I can, I just need to unlock the tools that I need and I'll do the rest.
      `,
    ],

    [
      "Pawan Pandey",
      `Photographer`,
      `Photography has always been my passion now. I enjoy taking photos capturing moments and remembering the moments captured in the photo.`,
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
    document.getElementById("defaultImg").src = "images/bg2.jpg";

  }

  function changeImageDev() {
    document.getElementById("defaultImg").src = "images/bg1.jpg";

  }

  buttons.forEach((button) => button.addEventListener("click", showBioInfo));
  des.addEventListener("click", changeImageDes);
  dev.addEventListener("click", changeImageDev);
})();

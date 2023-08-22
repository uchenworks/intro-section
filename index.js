function menuIcon() {
  document.getElementById("navbar").style.display = "block";
  document.getElementById("menu_icon").style.display = "none";
  document.getElementById("close_menu_icon").style.display = " block";
}

function closeMenu() {
  document.getElementById("navbar").style.display = "none";
  document.getElementById("close_menu_icon").style.display = "none";
  document.getElementById("menu_icon").style.display = "flex";
  document.getElementById("dropdown_arrow1").style.rotate = "360deg";
  document.getElementById("dropdown_arrow2").style.rotate = "360deg";
  document.querySelector("#inner_feature_drop").style.display = "none";
  document.querySelector("#inner_company_drop").style.display = "none";
}

function firstDrop() {
  // Get references to the elements
  const dropdownArrow = document.getElementById("dropdown_arrow1");
  const innerFeatureDrop = document.getElementById("inner_feature_drop");

  if (innerFeatureDrop.style.display === "none") {
    innerFeatureDrop.style.display = "flex";

    dropdownArrow.style.transform = "rotate(180deg)";
  } else {
    innerFeatureDrop.style.display = "none";

    dropdownArrow.style.transform = "rotate(0deg)";
  }
}

function secondDrop() {
  const dropdownArrow2 = document.getElementById("dropdown_arrow2");
  const innerCompanyDrop = document.getElementById("inner_company_drop");

  if (innerCompanyDrop.style.display === "none") {
    innerCompanyDrop.style.display = "flex";
    dropdownArrow2.style.transform = "rotate(180deg)";
  } else {
    innerCompanyDrop.style.display = "none";
    dropdownArrow2.style.transform = "rotate(0deg)";
  }
}

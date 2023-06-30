const tabsContainer = document.querySelector(".tabs-container");
const tabsList = tabsContainer.querySelector("ul");
const tabButtons = tabsList.querySelectorAll("a");
const tabPanels = tabsContainer.querySelectorAll(".tabs__panels > div");

tabsList.setAttribute("role","tablist");
tabsList.querySelectorAll("li").forEach((listitem)=> {
    listitem.setAttribute("role", "presentation");
});

tabButtons.forEach((tab, index) => {
    tab.setAttribute("role", "tab");
    if (index === 0) {
      tab.setAttribute("aria-selected", "true");
      // we'll add something here
    } else {
      tab.setAttribute("tabindex", "-1");
      tabPanels[index].setAttribute("hidden", "");
    }
  });

  //Set Tab index
  tabPanels.forEach((panel)=> {
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("tabindex","0");
  });
  

  // Adding Event Listener
tabsContainer.addEventListener("click",(e)=> {
    const clickedTab = e.target.closest("a");
    if(!clickedTab) return;
    e.preventDefault();

     switchTab(clickedTab);
});


tabsContainer.addEventListener("keydown", (e)=> {
//    console.log(e);
    switch(e.key){
        case "ArrowLeft":
            moveLeft();
            break;
        case "ArrowRight":
            moveRight();
            break;
        case "Home":
            switchTab(tabButtons[0]);
            break;
        case "End":
            switchTab(tabButtons[tabButtons.length - 1]);
            break;
    }
})






// Functions

function moveLeft(){
    const currentTab = document.activeElement;
    if(!currentTab.parentElement.previousElementSibling){
        switchTab(tabButtons[tabButtons.length - 1]);
    }else{
        switchTab(currentTab.parentElement.previousElementSibling.querySelector("a"));
    }
    
}

function moveRight(){
    const currentTab = document.activeElement;
    if(!currentTab.parentElement.nextElementSibling){
        switchTab(tabButtons[0]);
    }else{
        switchTab(currentTab.parentElement.nextElementSibling.querySelector("a"))
    }
}


function switchTab(newTab){
    const activePanelId = newTab.getAttribute("href");
    const activePanel = tabsContainer.querySelector(activePanelId);

    tabButtons.forEach((button)=>{
        button.setAttribute("aria-selected", false);
        button.setAttribute("tabindex", "-1");
    })

    tabPanels.forEach((panel)=> {

        panel.setAttribute("hidden",true);
    });
    activePanel.removeAttribute("hidden");

    newTab.setAttribute("aria-selected", true);
    newTab.setAttribute("tabindex", "0");
    newTab.focus();
}
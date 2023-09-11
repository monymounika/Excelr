function changeTitleRepeatedly(titles, targetElementId) {
    let currentIndex = 0;
    setInterval(() => {
        const targetElement = document.getElementById(targetElementId);
        if (targetElement) {
            targetElement.innerText = titles[currentIndex];
            currentIndex = (currentIndex + 1) % titles.length;
        }
    }, 1000);
}

// Call the function with the appropriate titles and target element ID for each page
const indexTitles = ["Mounika Rayudu", "ExcelR FullStack Development", "Mony Rayudu"];
changeTitleRepeatedly(indexTitles, 'indexPageTitle');

const htmlCssTitles = ["Mounika Rayudu", "HTML & CSS Topics", "Mony Rayudu"];
changeTitleRepeatedly(htmlCssTitles, 'htmlCssPageTitle');

const BootStrapTitles = ["Mounika Rayudu", "Bootstrap Topics", "Mony Rayudu"];
changeTitleRepeatedly(BootStrapTitles, 'bootStrapPageTitle');

const javaScriptTitles = ["Mounika Rayudu", "JavaScript Topics", "Mony Rayudu"];
changeTitleRepeatedly(javaScriptTitles, 'javaScriptPageTitle');

const tasksTitles = ["Mounika Rayudu", "ExcelR Challenges", "Mony Rayudu"];
changeTitleRepeatedly(tasksTitles, 'taskPageTitle');




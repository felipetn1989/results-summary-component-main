//variable containing the JSON file data

const data = [
  {
    category: "Reaction",
    score: 80,
    icon: "../assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "../assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "../assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "../assets/images/icon-visual.svg",
  },
];

//adding the score values to the page

const scores = document.querySelectorAll(".score")

scores.forEach((score,index) => {
    score.innerHTML = `${data[index].score} /`
})

//adding the total score to the page

const scoresArray = []

data.forEach(object => {
    scoresArray.push(object.score)
})

totalScore.innerHTML = Math.round(scoresArray.reduce((sum,score) => (sum + score)) / scores.length)

//adding the icons and categories to the page, first creating a new element (img and span) and then assigning the appropriate attributes to them

const iconCategory = document.querySelectorAll(".icon_category")

function createElements(index) {
    let image = document.createElement("img")
    image.setAttribute("src", data[index].icon)
    iconCategory[index].appendChild(image)
    let category = document.createElement("span")
    category.innerHTML = data[index].category
    iconCategory[index].appendChild(category)
}

for (let i = 0; i < iconCategory.length; i ++) {
    createElements(i)
}


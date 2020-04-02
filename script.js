let backButton = document.querySelector("#back");
let nextButton = document.querySelector("#next");

let students = [
  {
    profileImage:
      "https://cdn.glitch.com/84d4b105-98d6-4bed-8bff-321cc1ef9fd8%2FIMG-6774.jpg?v=1585196292233",
    name: "Brandon Rivera",
    quote: "top?",
    superlative: "The Cute One"
  },
  {
    profileImage:
      "https://cdn.glitch.com/84d4b105-98d6-4bed-8bff-321cc1ef9fd8%2Fthumbnails%2FIMG-6771.jpg?1585196313410",
    name: "Mahel Napo",
    quote: "You think you caught time, but time had you in its grasp",
    superlative: "The chill one"
  },
  {
    profileImage:
      "https://cdn.glitch.com/84d4b105-98d6-4bed-8bff-321cc1ef9fd8%2Fthumbnails%2FIMG-6772.jpg?1585196278949",
    name: "Anthony Bello",
    quote: "Im around here and there",
    superlative: "The Animal Expert"
  },
  {
    profileImage:
      "https://cdn.glitch.com/84d4b105-98d6-4bed-8bff-321cc1ef9fd8%2Fthumbnails%2FIMG-6770.jpg?1585196011094",
    name: "Ronel Franco",
    quote: "Smile because i am here",
    superlative: "The Weird one"
  },
  {
    profileImage:
      "https://cdn.glitch.com/84d4b105-98d6-4bed-8bff-321cc1ef9fd8%2Fthumbnails%2FIMG-6768.jpg?1585196271418",
    name: "Farid Oumorou",
    quote: "Evert dissapointment is a blessing, MY FAULT",
    superlative: "The Built one"
  },
  {
    profileImage:
      "https://cdn.glitch.com/84d4b105-98d6-4bed-8bff-321cc1ef9fd8%2FIMG-6775.jpg?v=1585196288071",
    name: "Nicholas Hylton",
    quote: "It is what it is",
    superlative: "The Tall One"
  },
  {
    profileImage:
      "https://cdn.glitch.com/84d4b105-98d6-4bed-8bff-321cc1ef9fd8%2Fthumbnails%2FIMG-6769.jpg?1585196274762",
    name: "Jeordy Abreu",
    quote: "Im just boolin",
    superlative: "The Artist one"
  },
  {
    profileImage:
      "https://cdn.glitch.com/84d4b105-98d6-4bed-8bff-321cc1ef9fd8%2Fthumbnails%2FIMG-6773.jpg?1585196299848",
    name: "Thierno Diallo",
    quote: "A tiny step is still a step",
    superlative: "The Real one"
  }
];

let count = 0;

document.querySelector("#pic").src = students[count].profileImage;
document.querySelector("#name").innerHTML = students[count].name;

nextButton.addEventListener("click", () => {
  console.log("next");
  count++;
  console.log(count);
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML =
    students[count].superlative;
});

backButton.addEventListener("click", () => {
  console.log("back");
  count--;
  console.log(count);
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML =
    students[count].superlative;
});

                    

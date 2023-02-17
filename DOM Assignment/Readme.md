# **DOM Assignment-1**

---

## **Task 1**

The user has to append a New Elemet in the Navbar Menu named **"Hire Me"** and after the **Projects**.

### **After Update**

![Output Image](./firstAssignmentImage/task1Output.png)

### **Project Solution**

```js
let lis = document.createElement("li");
lis.innerHTML = "<a>Hire Me</a>";
<!-- console.log(lis); -->
let addlistelement = document.querySelector("ul");
addlistelement.appendChild(lis);
```

---

## **Task 2**

The user neeeds to change the placeholder message to **Search My Project** from "Search".

### **After Update**

![Output Image](./firstAssignmentImage/task2Output.png)

### **Project Solution**

```js
let name = document.querySelector(".search-field input");
<!-- console.log(name); -->
name.placeholder = "Search My Project"
```

---

## **Task 3**

The user has to change the"a Freelancer" to **an Employee** and "National and International Client" to **iNeuron intelligence pvt Ltd**

### **After Update**

![Output Image](./firstAssignmentImage/task3Output.png)

### **Project Solution**

```js
let para = document.querySelectorAll(".hero-left-section p span");
<!-- console.log(para); -->
para[1].innerText ="an Employee"
para[2].innerText ="iNeuron intelligence pvt Ltd"
```

---

## **Task 4**

The user needs to change the "Avtar" images with the image of "Hitesh Sir".

### **After Update**

![Output Image](./firstAssignmentImage/task4Output.png)

### **Project Solution**

```js
let changeimg = document.querySelector(".hero-right-section img");
changeimg.src =
  "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";
```

---

## **Task 5**

The user has to create one more button named"Support ME" and needs to add it,next to the "Chat With Me" button below the avtar.

### **After Update**

![Output Image](./firstAssignmentImage/task5Output.png)

### **Project Solution**

```js
let btn = document.querySelector(".hero-right-section-btns");
<!-- console.log(btn) -->
let element = document.createElement("button");
element.innerText="Support Me";
btn.appendChild(element);
```

---

# **DOM Assignment-2**

## **Task 1**

The user neeeds to change the color of heading and paragraph of the accordian with the given color codes.
for Heading:#dadaf8
for Paragraph:#eeeeff

### **After Update**

![Output Image](./secondAssignmentImage/task1Output.png)

### **Project Solution**

```js
let h = document.querySelectorAll(".accordian h3");
let para = document.querySelectorAll(".accordian p");
// console.log(h);
// console.log(para);
h.forEach((e) => {
  e.style.backgroundColor = "#dadaf8";
});
para.forEach((e) => {
  e.style.backgroundColor = "#eeeeff";
});
```

---

## **Task 2**

In this task the user has to add a new accordian at the bottom,similar to the output image.The user will also have to write javascript code for the added accordian,so that the card can be shown or being hide by the user click After which he also needs to change the heading and paragraph color .

### **After Update**

![Output Image](./secondAssignmentImage/task2Output.png)

### **Project Solution**

```js
let parent = document.querySelector(".accordian-wrapper");
let element = document.createElement("div");
element.classList.add("accordian");
let heading = document.createElement("h3");
let paragraph = document.createElement("p");
heading.innerText = "Skills";
paragraph.innerText =
  "I posses a very good command over the full stack Development technologies like MERN which can be seen in my work over the Github.";
paragraph.style.display = "none";
element.appendChild(heading);
element.appendChild(paragraph);
parent.appendChild(element);
// console.log(parent);

let newList = document.querySelectorAll(".accordian h3");
newList[newList.length - 1].addEventListener("click", (event) => {
  let element = event.target.nextElementSibling;
  if (element.style.display == "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
});

let headings = document.querySelectorAll(".accordian h3");
let paragraphs = document.querySelectorAll(".accordian p");
// console.log(heading);
// console.log(paragraph);
headings.forEach((element) => {
  element.style.backgroundColor = "#dadaf8";
});
paragraphs.forEach((element) => {
  element.style.backgroundColor = "#eeeeff";
});
```
# **DOM Assignment-3**

## **Task 1**

The user needs to add event listner over the **secont form**.so that he can collect all the data of second form when the user submit it.after collecting the data from the second form, the user have to display that data on the **first form** through the console.

### **After Update**

![Output Image](./thirdAssignmentImage/task1Output.png)

### **Project Solution**

```js
let Forms = document.querySelectorAll("form");
Forms[1].addEventListener("submit", (event) => {
  event.preventDefault();
  let name = document.querySelector(".userName");
  let email = document.querySelector(".userEmail");
  let message = document.querySelector(".userMessage");

  let EnterName = document.querySelector(".enterName");
  let EnterEmail = document.querySelector(".enterMail");
  let EnterMessage = document.querySelector(".enterMessage");

  EnterName.value = name.value;
  EnterEmail.value = email.value;
  EnterMessage.value = message.value;
});
```

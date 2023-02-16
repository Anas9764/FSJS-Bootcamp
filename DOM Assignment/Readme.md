# **DOM Assignment-1***

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
let changeimg= document.querySelector(".hero-right-section img");
changeimg.src ="https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";
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

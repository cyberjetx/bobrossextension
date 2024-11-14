console.clear();
console.log('Bob Ross...');

const anchors = document.getElementsByTagName("a");

// Apply style to the 4th parent of anchors with 'w3schools.com' in href
for (let anchor of anchors) {
  if (anchor.href.includes("w3schools.com")) {
    let parent = anchor;
    for (let i = 0; i < 4; i++) {
      if (parent.parentElement) {
        parent = parent.parentElement;
      } else {
        break;
      }
    }
    if (parent) {
      parent.style.border = "1px solid red";
      parent.style.display = "none";
    }
  }
}

// Find the div with role="heading" and text "Discussions and forums"
const divs = document.querySelectorAll('div[role="heading"]');
for (let div of divs) {
  if (div.textContent.trim() === "Discussions and forums") {
    let parent = div;
    for (let i = 0; i < 4; i++) {
      if (parent.parentElement) {
        parent = parent.parentElement;
      } else {
        break;
      }
    }
    if (parent) {
      parent.style.border = "1px solid red";
      parent.style.display = "none";
    }
  }
}

// Find the span with text "W3schools" and apply style to its 4th parent
const spans = document.getElementsByTagName("span");
for (let span of spans) {
  if (span.textContent.trim() === "W3schools") {
    let parent = span;
    for (let i = 0; i < 3; i++) {
      if (parent.parentElement) {
        parent = parent.parentElement;
      } else {
        break;
      }
    }
    if (parent) {
      parent.style.border = "1px solid red";
      parent.style.display = "none";
    }
  }
}

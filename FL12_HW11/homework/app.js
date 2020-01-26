const structure = [
  {
    folder: true,
    title: `Films`,
    children: [
      {
        title: `Iron Man.avi`
      },
      {
        folder: true,
        title: `Fantasy`,
        children: [
          {
            title: `The Lord of the Rings.avi`
          },
          {
            folder: true,
            title: `New folder 1`,
            children: false
          }
        ]
      }
    ]
  },
  {
    folder: true,
    title: `Documents`,
    children: [
      {
        folder: true,
        title: `EPAM Homework answers`,
        children: null
      }
    ]
  }
];
const rootNode = document.getElementById(`root`);
let openFolder = '<i class=`material-icons open`>folder_open</i>';
function compile(cont, arr) {
  cont.append(compileDom(arr));
}
function compileDom(arr) {
  if (!arr) {
    return;
  }
  let headUl = document.createElement(`ul`);
  headUl.classList.add(`animate_hide`);
  for (let i = 0; i < arr.length; i++) {
    let headerLi = document.createElement(`li`);
    if (arr[i].folder) {
    headerLi.innerHTML=`<div class='folder'><i class="material-icons animate_close">folder</i>${arr[i].title}</div>`;
    } else if (!arr[i].folder && arr[i].title) {
    headerLi.innerHTML = `<div><i class="material-icons file">insert_drive_file</i>${arr[i].title}<div>`;
    }
    let childrenUl = compileDom(arr[i].children);
    if (childrenUl) {
      headerLi.append(childrenUl);
    }
    headUl.append(headerLi);
  }
  return headUl;
}
compile(rootNode, structure);
let firstUl = document.getElementsByTagName(`ul`)[0];
firstUl.classList.add(`show`);
let div = rootNode.querySelectorAll(`.folder`);
for (let i = 0; i < div.length; i++) {
  div[i].addEventListener(`click`, function(e) {
    e.stopPropagation();
    if (this.querySelector(`i`).textContent === `folder`) {
      this.parentElement.querySelector(`i`).innerHTML = `folder_open`;
    } else if (this.querySelector(`i`).textContent === `folder_open`) {
      this.parentElement.querySelector(`i`).innerHTML = `folder`;
    }
    if (!this.parentElement.querySelector(`ul`)) {
      let headerLi = document.createElement(`li`);
      if (!this.parentElement.querySelector(`li`)) {
        headerLi.insertAdjacentHTML(
          `beforeend`,
          `<p>Folder is empty</p>`
        );
        headerLi.classList.toggle(`empty`);
        this.parentElement.append(headerLi);
      } else {
        this.parentElement.querySelector(`li`).classList.toggle(`animate_hide`);
      }
    } else if (this.parentElement.querySelector(`ul`)) {
      this.parentElement.querySelector(`ul`).classList.toggle(`animate_hide`);
    }
  });
}

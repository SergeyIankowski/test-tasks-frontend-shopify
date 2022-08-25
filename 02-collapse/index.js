const COLLAPSIBLE_BUTTON = document.querySelector('.collapsible__button');
const COLLAPSIBLE_CONTENT = document.querySelector('.collapsible__content');
const COLLAPSIBLE_ACTONS = document.querySelectorAll('.collapsible__action');

const changeButtonValue = (show) => {
  COLLAPSIBLE_ACTONS[0].hidden = show;
  COLLAPSIBLE_ACTONS[1].hidden = !show;
}
changeButtonValue(true);

const showContent = (showContent) => {
  COLLAPSIBLE_CONTENT.hidden = !showContent;
}
showContent(false);

let isShow = false;
COLLAPSIBLE_BUTTON.addEventListener('click', () => {
  isShow ? changeButtonValue(true) : changeButtonValue(false);
  isShow ? showContent(false) : showContent(true);
  isShow = !isShow;
})
export const createMarkup = function(data) {
  return {__html: data};
}

export const toTop = function() {
  window.scrollTo(0, 0);
}

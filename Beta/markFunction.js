let marks = [];

function mark(tag) {
  marks.push(tag);
}

function markEnd() {
  if (marks.length === 0) {
    return null;
  } else {
    return marks.pop();
  }
}
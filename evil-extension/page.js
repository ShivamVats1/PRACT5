const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformTextNodes(node) {
  // TODO(you): Implement this function! See lab spec for details.
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');

//changes made mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
// Evil extension to swap 'there', 'their', 'they're' incorrectly

// Function to replace words
function replaceWords(text) {
  return text.replace(/\bthere\b/g, 'their')
             .replace(/\btheir\b/g, 'they\'re')
             .replace(/\bthey\'re\b/g, 'there');
}

// Recursive function to go through all text nodes on the page
function walk(node) {
  let child, next;

  switch (node.nodeType) {
      case 1: // Element node
      case 9: // Document node
      case 11: // Document fragment node
          child = node.firstChild;
          while (child) {
              next = child.nextSibling;
              walk(child);
              child = next;
          }
          break;

      case 3: // Text node
          node.nodeValue = replaceWords(node.nodeValue);
          break;
  }
}

// Start the evil word swap
walk(document.body);


# JavaScript HTML DOM Document

**Finding HTML Elements**

| Method                                |                 Description |
| :------------------------------------ | --------------------------: |
| document.getElementById(id)           |  Find an element element id |
| document.getElementsByTagName(name)   |       Find elements tagName |
| document.getElementsByClassName(name) | Find elements by class name |

**Changing HTML Elements**

1. element.innerHTML = new html content
   Change the inner HTML of an element

2. element.attribute = new value
   Change the attribute value of an HTML element

3. element.style.property = new style
   Change the style of an HTML element

4. element.setAttribute(attribute, value)
   Change the attribute value of an HTML element

5. element.setAttribute(attribute, value)
   Change the attribute value of an HTML element

**Adding and Deleting Elements**

| Method                          |                       Description |
| :------------------------------ | --------------------------------: |
| document.createElement(element) |            Create an HTML element |
| document.removeChild(element)   |            Remove an HTML element |
| document.appendChild(element)   |               Add an HTML element |
| document.replaceChild(new, old) |           Replace an HTML element |
| document.write(text)            | Write into the HTML output stream |

**Adding Events Handlers**

1. document.getElementById(id).onclick = function(){code}
   Adding event handler code to an onclick event

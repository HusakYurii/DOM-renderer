export default class Render {
  static render(elements) {
    return elements.map(({type = "div", children = [], attrebutes = [], text = ""}) => {
    		const htmlEl = document.createElement(type);
    		
    		attrebutes.forEach(({name, value}) => {
    			htmlEl.setAttribute(name, value);
    		});

    		text && htmlEl.append(document.createTextNode(text));
    		children && htmlEl.append(...Render.render(children));

    		return htmlEl;
    	})
  }
}

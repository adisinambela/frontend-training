# JavaScript DOM 2

---

## DOM events

An _event_ is a signal that something has happened.

All DOM nodes generate such signals. But events are not limited to just DOM.

Here's a list of the most useful DOM events, just to take a look at:

**Mouse events:**

* `click`: when the mouse clicks on an element (touchscreen devices generate it on a tap).
* `contextmenu`: when the mouse right-clicks on an element.
* `mouseover` / `mouseout`: when the mouse cursor comes over / leaves an element.
* `mousedown` / `mouseup`: when the mouse button is pressed / released over an element.
* `mousemove`: when the mouse is moved.

**Form element events:**

* `submit`: when the visitor submits a `<form>`.
* `focus`: when the visitor focuses on an element, e.g. on an `<input>`.

**Keyboard events:**

* `keydown` and `keyup`: when the visitor presses and then releases the button.

**Document events**

* `DOMContentLoaded`: when the HTML is loaded and processed, DOM is fully built.

**CSS events:**

* `transitioned`: when a CSS-animation finishes.

---

## Event handlers

To react on events we can assign a _handler_, a function that runs in case of an event.

Handlers is a way to run JavaScript code in case of user actions.

There are several ways to assign a handler.

### via HTML attribue

```html
<input value="Click me" onclick="alert('Click!')" type="button">
```

That `onclick` attribute will call the `alert` function, when a `click` event is triggered on the `input` element.

When things get more complex, it's best to use a function.

```html
<input value="Click me" onclick="callMeMaybe()" type="button">
```

We can also use DOM property to make a handler.

```html
<input id="elem" type="button" value="Click me">

<script>
const element = document.getElementById("elem")

element.onclick = function() {
  console.log('Thank you');
};
</script>
```

Or assign to a defined function.

```js
element.onclick = callMeMaybe;
```

But without the brackets, because we don't want to call the function immediately.

`callMeMaybe` is different with `callMeMaybe()`.

To remove a handler, assign a `null` value to the handler.

```js
element.onclick = null;
```

---

## DOM Events Listening

The problem of the previous way is, we can’t assign multiple handlers to one event.

There's an alternative and better way of managing handlers using special methods `addEventListener` and `removeEventListener`.

To use `addEventListener` with provided element:

```js
element.addEventListener(event, handlerFunction);

// event: event name, like "click"
// handler: function to call later
```

To remove the listener with `removeEventListener`:

```js
element.removeEventListener(event, handlerFunction);
```

Notice that we must pass exactly the same function as was assigned.

---

## `event` Object

To properly handle an event we’d want to know more about what’s happened. Not just a "click" or a "keypress", but what were the details?

When an event happens, the browser creates an `event` object, puts details into it and passes it as an argument to the handler.

```html
<input type="button" value="Click me" id="elem">

<script>
const element = document.getElementById("elem")

elem.onclick = function(event) {
  // show event type, element and coordinates of the click
  console.log(`${event.type} at ${event.currentTarget}`);
  console.log(`Coordinates: ${event.clientX}:${event.clientY}`);
};
</script>
```

Then to actually get the exact element where the `event` is happening, we can use `event.target` property.

Keep in mind that `event` can cause [bubbling](https://javascript.info/bubbling-and-capturing), where the DOM elements inside the handled DOM also affected.

The capturing and bubbling events allow to implement one of most powerful event handling patterns called [event delegation](https://javascript.info/event-delegation), where we just use one event handler for any matched element.

### Default Browser Actions

Many events automatically lead to browser actions.

For instance:

* A click on a link – initiates going to its URL (`href`).
* A click on submit button inside a form – initiates its submission to the server (`action`).
* Pressing a mouse button over a text and moving it – selects the text.

Like so:

* `mousedown` – starts the selection (move the mouse to select).
* `click` on `<input type="checkbox">` – checks/unchecks the `input`.
* `submit` – clicking an `<input type="submit">` or hitting `Enter` inside a form field causes this event to happen, and the browser submits the form after it.
* `wheel` – rolling a mouse wheel event has scrolling as the default action.
* `keydown` – pressing a key may lead to adding a character into a field, or other actions.
* `contextmenu` – the event happens on a right-click, the action is to show the browser context menu.

If we handle an event in JavaScript, often we don’t want browser actions. So we want to prevent it.

```html
<a href="/" onclick="event.preventDefault()">here</a>
```

By using `preventDefault`, we can prevent the `a`'s `href` link redirection.

Or prevent form default action.

```html
<form action="index.html" method="post">
  <input type="text" name="Full Name" value="">
  <input type="button" name="Submit" value="Submit">
</form>
```

```js
document.onsubmit = event => {
  if (event.defaultPrevented) return;
  event.preventDefault();
  console.log("Just a form event without reload or redirection");
};
```

If needed, we can also [create our own custom events](https://javascript.info/dispatch-events).

Or more, act when [more events are occurring](https://javascript.info/event-details), like when using mouse, drag and drop, touch, keyboard (`keydown`, `keyup`), scroll, page lifecycle (`DOMContentLoaded`, `load`, `beforeunload`, `unload`), also resource loading (`onLoad`, `onDOMReady`).

---

## References

* Documentation
  * http://devdocs.io/dom_events

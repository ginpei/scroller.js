# About scroller.js

The unique ovserver for scroll event.

# Referencese

## scroller.on(type, listener, [context])

Add event listener. You should use `scroller.start()` to listen.

* `type` … {String} Event type. See "Events" chapter.
* `listener` … {Function} Callback function.
* `context` … {Object} The context to run listener.

## scroller.off([type [, listener [, context]]])

Remove listener(s).

* `type` … {String} Event type. See description. Default = `null`.
* `listener` … {Function} Callback function. Default = `null`.
* `context` … {Object} The context to run listener. Default = `null`.

If `context` is `null`, the `listener` of `type` with any contexts are removed.

If `context` and `listener` are `null`, all listeners of `type` are removed.

If `context`, `listener` and `type` are `null`, all listeners are removed.

## scroller.start([interval])

Start listening.

* `interval` … {Number} The interval to listen by throttling. `0` will set no intervals. Default = 0.

## scroller.stop()

Stop listening.

Listeners are not removed. You can re-start.

## scroller.getTop()

Returns current `scrollTop`.

## scroller.setTop(top, [duration])

Scroll to `top`.

* `top` … {Number} Scroll top.
* `duration` … {Number} How long the animation will run. (unit:ms) If it is `0`, scroll immediately. Default = `0`.

If `duration` is specified and jQuery exists as `window.$`, screen will be scrolled with animation.

## Events

`type` is allowed below:

* `"scroll"`
* `"scrolltoend"` (scroll to end)


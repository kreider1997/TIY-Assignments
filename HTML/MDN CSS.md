#CSS reference on MDN

###**Styles that affect the color of things:**

**background-color**
The background-color CSS property sets the background color of an element, either through a color value or the keyword transparent.
Value(s) -
<color>
Is a CSS <color> that describes the uniform color of the background. Even if one or several background-image are defined, this color can be affect the rendering, by transparency if the images aren't opaque.

**box-shadow**
The box-shadow CSS property describes one or more shadow effects as a comma-separated list. It allows casting a drop shadow from the frame of almost any element. If a border-radius is specified on the element with a box shadow, the box shadow takes on the same rounded corners. The z-ordering of multiple box shadows is the same as multiple text shadows (the first specified shadow is on top).
Value(s) -
inset
If not specified (default), the shadow is assumed to be a drop shadow (as if the box were raised above the content).
The presence of the inset keyword changes the shadow to one inside the frame (as if the content was depressed inside the box). Inset shadows are drawn inside the border (even transparent ones), above the background, but below content.
<offset-x> <offset-y>
These are two <length> values to set the shadow offset. <offset-x> specifies the horizontal distance. Negative values place the shadow to the left of the element. <offset-y> specifies the vertical distance. Negative values place the shadow above the element. See <length> for possible units.
If both values are 0, the shadow is placed behind the element (and may generate a blur effect if <blur-radius> and/or <spread-radius> is set).
<blur-radius>
This is a third <length> value. The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. Negative values are not allowed. If not specified, it will be 0 (the shadow's edge is sharp).
<spread-radius>
This is a fourth <length> value. Positive values will cause the shadow to expand and grow bigger, negative values will cause the shadow to shrink. If not specified, it will be 0 (the shadow will be the same size as the element).
<color>
See <color> values for possible keywords and notations.
If not specified, the color used depends on the browser - it is usually the value of the color property, but note that Safari currently paints a transparent shadow in this case.

**border-bottom-color**
The border-bottom-color CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties border-color or border-bottom are more convenient and preferable.
Values -
<color>
Is a <color> CSS value describing the color of the bottom border.
inherit
Is a keyword denoting the color of the bottom border of the parent's element (which may be different from the border-bottom-color default value)

**border-left-color**
The border-left-color CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties border-color or border-left are more convenient and preferable.
Values -
<color>
Is a <color> CSS value describing the color of the left border.
inherit
Is a keyword denoting the color of the bottom border of the parent's element (which may be different from the border-left-color default value)

**border-right-color**
The border-right-color CSS property sets the color of the right border of an element. Note that in many cases the shorthand CSS properties  border-color or border-right are more convenient and preferable.
Values -
<color>
Is a <color> CSS value describing the color of the right border.
inherit
Is a keyword denoting the color of the bottom border of the parent's element (which may be different from the border-right-color default value)

**border-top-color**
The border-top-color CSS property sets the color of the top border of an element. Note that in many cases the shorthand CSS properties border-color or border-top are more convenient and preferable.
Values -
<color>
Is a <color> CSS value describing the color of the top border.
inherit
Is a keyword denoting the color of the top border of the parent's element (which may be different from the border-top-color default value)

**color**
The CSS color property sets the foreground color of an element's text content, and its decorations. It doesn't affect any other characteristic of the element; it should really be called text-color and would have been named so, save for historical reasons and its appearance in CSS Level 1.

Note that the color value must be a uniform color, which may include a transparency value from CSS3 onwards. It can't be a <gradient> which is an <image> in CSS.
Values -
<color>
Is a <color> value giving the color of the textual elements of the element.

**column-rule-color**
The column-rule-color CSS property lets you set the color of the rule drawn between columns in multi-column layouts.
Values -
<color>
Is a <color> value representing the color of the rule separating columns.

**filter**
**EXPERIMENTAL**
The CSS filter property provides for effects like blurring or color shifting on an element’s rendering before the element is displayed. Filters are commonly used to adjust the rendering of an image, a background, or a border.

Included in the CSS standard are several functions that achieve predefined effects. You can also reference a filter specified in SVG with a URL to an SVG filter element.

**list-style-image**
The list-style-image CSS property sets the image that will be used as the list item marker.

It is often more convenient to use the shorthand list-style.
Values -
<uri>
Location of image to use as the marker.
none
Specifies that no image is used as the marker. If this value is set, the marker defined in list-style-type will be used instead.

**outline-color**
The outline-color CSS property sets the color of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out.
Values -
<color>
See <color> for the various color keywords and notations.
invert
To ensure the outline is visible, performs a color inversion of the background. This makes the focus border more salient, regardless of the color in the background. Note that browsers are not required to support it. If not, they just consider the statement as invalid

**text-decoration-color**
The text-decoration-color CSS property sets the color used when drawing underlines, overlines, or strike-throughs specified by text-decoration-line. This is the preferred way to color these text decorations, rather than using combinations of other HTML elements.
Values -

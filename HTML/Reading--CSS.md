#CSS reference on MDN

###**Styles  with 'font' and 'text' affecting rules, with examples!**

----
####1
**font**
The font CSS property is either a shorthand property for setting font-style, font-variant, font-weight, font-size, line-height and font-family, or a way to set the element's font to a system font, using specific keywords.

As with any shorthand CSS properties, the values which are not set in it are set to their individual initial values, eventually overriding values previously set using non-shorthand properties.

Values -
<'font-style'>
<'font-variant'>
<'font-weight'>
<'font-size'>
<'line-height'>
<'font-family'>
Examples:
```css
p { font: 12px/14px sans-serif }
```
```css
p { font: 80% sans-serif }
```
```css
p { font: bold italic large serif }
```

----
####2
**font-family**
The font-family CSS property allows for a prioritized list of font family names and/or generic family names to be specified for the selected element. Unlike most other CSS properties, values are separated by a comma to indicate that they are alternatives. The browser will select the first font on the list that is installed on the computer, or that can be downloaded using the information provided by a @font-face at-rule.

Web authors should always add at least one generic family in a font-family list, since there's no guarantee that a specific font is installed on the computer or can be downloaded using a @font-face at-rule. The generic family lets the browser select an acceptable fallback font when needed.

It is often convenient to use the shorthand property font to set font-size and other font related properties all at once.
Values -

`<family-name>`
The name of a font family. For example, "Times" and "Helvetica" are font families. Font family names containing whitespace should be quoted.

`<generic-name>`
Generic font families are a fallback mechanism, a means of preserving some of the style sheet author's intent in case when none of the specified fonts are available. Generic family names are keywords and must not be quoted. A generic font family should be the a last alternative in the list of font family names.

`serif`
Glyphs have finishing strokes, flared or tapering ends, or have actual serifed endings.
E.g.  Palatino, "Palatino Linotype", Palladio, "URW Palladio", serif
`sans-serif`
Glyphs have stroke endings that are plain.
E.g. 'Trebuchet MS', 'Liberation Sans', 'Nimbus Sans L', sans-serif
`monospace`
All glyphs have the same fixed width.
E.g. "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace
`cursive`
Glyphs in cursive fonts generally have either joining strokes or other cursive characteristics beyond those of italic typefaces. The glyphs are partially or completely connected, and the result looks more like handwritten pen or brush writing than printed letterwork.
`fantasy`
Fantasy fonts are primarily decorative fonts that contain playful representations of characters.
Examples:
```css
{ font-family: "Gill Sans Extrabold", Helvetica, sans-serif }
```
```css
{ font-family: Courier, "Lucida Console", monospace }
```
```css
{   font-family: fantasy; }
```

----
####3
**font-size**
The font-size CSS property specifies the size of the font – specifically the desired height of glyphs from the font. Setting the font size may, in turn, change the size of other items, since it is used to compute the value of em and ex length units.
Values-
xx-small, x-small, small, medium, large, x-large, xx-large
A set of absolute size keywords based on the user's default font size (which is medium). Similar to presentational HTML's `<font size="1">` through `<font size="7">` where the user's default font size is `<font size="3">`.
larger, smaller
Larger or smaller than the parent element's font size, by roughly the ratio used to separate the absolute size keywords above.
`<length>`
A positive `<length>`. When the units are specified in em or ex, the size is defined relative to the size of the font on the parent element of the element in question. For example, 0.5em is half the font size of the parent of the current element.
`<percentage>`
A positive `<percentage>` of the parent element's font size.
It is best to use values that are relative to the user's default font size, and avoid absolute values such as lengths with units other than em or ex. However, if such absolute values must be used, px are preferred over other units because their meaning does not vary depending on what the operating system thinks (generally incorrectly) the resolution of the monitor is.
Examples:
```css

```

----
####4


----
####5


----
####6


----
####7


----
####8


----
####9


----
####10



----
###**Styles that affect the color of things:**

----
####12
**background-color**
The background-color CSS property sets the background color of an element, either through a color value or the keyword transparent.
Value(s) -
`<color>`
Is a CSS `<color>` that describes the uniform color of the background. Even if one or several background-image are defined, this color can be affect the rendering, by transparency if the images aren't opaque.

----
####11
**box-shadow**
The box-shadow CSS property describes one or more shadow effects as a comma-separated list. It allows casting a drop shadow from the frame of almost any element. If a border-radius is specified on the element with a box shadow, the box shadow takes on the same rounded corners. The z-ordering of multiple box shadows is the same as multiple text shadows (the first specified shadow is on top).
Value(s) -
inset
If not specified (default), the shadow is assumed to be a drop shadow (as if the box were raised above the content).
The presence of the inset keyword changes the shadow to one inside the frame (as if the content was depressed inside the box). Inset shadows are drawn inside the border (even transparent ones), above the background, but below content.
`<offset-x> <offset-y>`
These are two `<length>` values to set the shadow offset. `<offset-x>` specifies the horizontal distance. Negative values place the shadow to the left of the element. `<offset-y>` specifies the vertical distance. Negative values place the shadow above the element. See `<length>` for possible units.
If both values are 0, the shadow is placed behind the element (and may generate a blur effect if `<blur-radius>` and/or `<spread-radius>` is set).
`<blur-radius>`
This is a third `<length>` value. The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. Negative values are not allowed. If not specified, it will be 0 (the shadow's edge is sharp).
`<spread-radius>`
This is a fourth `<length>` value. Positive values will cause the shadow to expand and grow bigger, negative values will cause the shadow to shrink. If not specified, it will be 0 (the shadow will be the same size as the element).
`<color>`
See <color> values for possible keywords and notations.
If not specified, the color used depends on the browser - it is usually the value of the color property, but note that Safari currently paints a transparent shadow in this case.

----
####10
**border-bottom-color**
The border-bottom-color CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties border-color or border-bottom are more convenient and preferable.
Values -
`<color>`
Is a `<color>` CSS value describing the color of the bottom border.
inherit
Is a keyword denoting the color of the bottom border of the parent's element (which may be different from the border-bottom-color default value)

----
####9
**border-left-color**
The border-left-color CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties border-color or border-left are more convenient and preferable.
Values -
`<color>`
Is a `<color>` CSS value describing the color of the left border.
inherit
Is a keyword denoting the color of the bottom border of the parent's element (which may be different from the border-left-color default value)

----
####8
**border-right-color**
The border-right-color CSS property sets the color of the right border of an element. Note that in many cases the shorthand CSS properties  border-color or border-right are more convenient and preferable.
Values -
`<color>`
Is a `<color>` CSS value describing the color of the right border.
inherit
Is a keyword denoting the color of the bottom border of the parent's element (which may be different from the border-right-color default value)

----
####7
**border-top-color**
The border-top-color CSS property sets the color of the top border of an element. Note that in many cases the shorthand CSS properties border-color or border-top are more convenient and preferable.
Values -
`<color>`
Is a `<color>` CSS value describing the color of the top border.
inherit
Is a keyword denoting the color of the top border of the parent's element (which may be different from the border-top-color default value)

----
####6
**color**
The CSS color property sets the foreground color of an element's text content, and its decorations. It doesn't affect any other characteristic of the element; it should really be called text-color and would have been named so, save for historical reasons and its appearance in CSS Level 1.

Note that the color value must be a uniform color, which may include a transparency value from CSS3 onwards. It can't be a `<gradient>` which is an `<image>` in CSS.
Values -
`<color>`
Is a `<color>` value giving the color of the textual elements of the element.

----
####5
**column-rule-color**
The column-rule-color CSS property lets you set the color of the rule drawn between columns in multi-column layouts.
Values -
`<color>`
Is a `<color>` value representing the color of the rule separating columns.

----
####4
**filter**
**EXPERIMENTAL**
The CSS filter property provides for effects like blurring or color shifting on an element’s rendering before the element is displayed. Filters are commonly used to adjust the rendering of an image, a background, or a border.

Included in the CSS standard are several functions that achieve predefined effects. You can also reference a filter specified in SVG with a URL to an SVG filter element.

----
####3
**list-style-image**
The list-style-image CSS property sets the image that will be used as the list item marker.

It is often more convenient to use the shorthand list-style.
Values -
`<uri>`
Location of image to use as the marker.
none
Specifies that no image is used as the marker. If this value is set, the marker defined in list-style-type will be used instead.

----
####2
**outline-color**
The outline-color CSS property sets the color of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out.
Values -
`<color>`
See `<color>` for the various color keywords and notations.
invert
To ensure the outline is visible, performs a color inversion of the background. This makes the focus border more salient, regardless of the color in the background. Note that browsers are not required to support it. If not, they just consider the statement as invalid

----
####1
**text-decoration-color**
The text-decoration-color CSS property sets the color used when drawing underlines, overlines, or strike-throughs specified by text-decoration-line. This is the preferred way to color these text decorations, rather than using combinations of other HTML elements.
Values -

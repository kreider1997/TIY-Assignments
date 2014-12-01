##HTML reference on MDN
----
####assignment 19 additions:
----
####25
**form**
The HTML <form> element represents a document section that contains interactive controls to submit information to a web server.
It is possible to use the :valid and :invalid CSS pseudo-classes to style a <form> element.
Attributes -
This element includes the global attributes.

`accept HTML 4`
A comma-separated list of content types that the server accepts.
Usage note: This attribute has been removed in HTML5 and should no longer be used. Instead, use the accept attribute of the specific `<input>` element.
`accept-charset`
A space- or comma-delimited list of character encodings that the server accepts. The browser uses them in the order in which they are listed. The default value, the reserved string "UNKNOWN", indicates the same encoding as that of the document containing the form element.
In previous versions of HTML, the different character encodings could be delimited by spaces or commas. In HTML5, only spaces are allowed as delimiters.
`action`
The URI of a program that processes the form information. This value can be overridden by a formaction attribute on a `<button>` or `<input>` element.
`autocapitalize`
This is a nonstandard attribute used by iOS Safari Mobile which controls whether and how the text value for textual form control descendants should be automatically capitalized as it is entered/edited by the user. If the autocapitalize attribute is specified on an individual form control descendant, it trumps the form-wide autocapitalize setting. The non-deprecated values are available in iOS 5 and later. The default value is sentences. Possible values are:
  * none: Completely disables automatic capitalization
  * sentences: Automatically capitalize the first letter of sentences.
  * words: Automatically capitalize the first letter of words.
  * characters: Automatically capitalize all characters.
  * on:  Deprecated since iOS 5.
  * off:  Deprecated since iOS 5.
`autocomplete HTML5`
Indicates whether input elements can by default have their values automatically completed by the browser. This setting can be overridden by an autocomplete attribute on an element belonging to the form. Possible values are:
  * off: The user must explicitly enter a value into each field for every use, or the document provides its own auto-completion method; the browser does not automatically complete entries.
  * on: The browser can automatically complete values based on values that the user has previously entered in the form.
Note: If you set autocomplete to off in a form because the document provides its own auto-completion, then you should also set autocomplete to off for each of the form's input elements that the document can auto-complete. For details, see Google Chrome notes.
`enctype`
When the value of the method attribute is post, enctype is the MIME type of content that is used to submit the form to the server. Possible values are:
  * application/x-www-form-urlencoded: The default value if the attribute is not specified.
  * multipart/form-data: The value used for an `<input>` element with the type attribute set to "file".
  * text/plain (HTML5)
This value can be overridden by a formenctype attribute on a `<button>` or `<input>` element.

`method`
The HTTP method that the browser uses to submit the form. Possible values are:
  * post: Corresponds to the HTTP POST method ; form data are included in the body of the form and sent to the server.
  * get: Corresponds to the HTTP GET method; form data are appended to the action attribute URI with a '?' as separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.
This value can be overridden by a formmethod attribute on a `<button>` or `<input>` element.

`name`
The name of the form. In HTML 4,its use is deprecated (id should be used instead). It must be unique among the forms in a document and not just an empty string in HTML 5.
novalidate HTML5
This Boolean attribute indicates that the form is not to be validated when submitted. If this attribute is not specified (and therefore the form is validated), this default setting can be overridden by a formnovalidate attribute on a `<button>` or `<input>` element belonging to the form.
`target`
A name or keyword indicating where to display the response that is received after submitting the form. In HTML 4, this is the name/keyword for a frame. In HTML5, it is a name/keyword for a browsing context (for example, tab, window, or inline frame). The following keywords have special meanings:
  * _self: Load the response into the same HTML 4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified.
  * _blank: Load the response into a new unnamed HTML 4 window or HTML5 browsing context.
  * _parent: Load the response into the HTML 4 frameset parent of the current frame, or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as _self.
  * _top: HTML 4: Load the response into the full original window, and cancel all other frames. HTML5: Load the response into the top-level browsing context (i.e., the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self.
  * iframename: The response is displayed in a named <iframe>.
HTML5: This value can be overridden by a formtarget attribute on a <button> or <input> element.

----
####24
**input**
The HTML '<input>' element is used to create interactive controls for web-based forms in order to accept data from the user. The semantics of an '<input>' varies considerably depending on the value of its type attribute.
Attributs (there are a shit tone)-
`type`
The type of control to display. The default type is text, if this attribute is not specified. Possible values are:
  * button: A push button with no default behavior.
  * checkbox: A check box. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected. You can also use the indeterminate attribute to indicate that the checkbox is in an indeterminate state (on most platforms, this draws a horizontal line across the checkbox).
  * color: HTML5 A control for specifying a color. A color picker's UI has no required features other than accepting simple colors as text (more info).
  * date: HTML5 A control for entering a date (year, month, and day, with no time).
  * datetime: HTML5 A control for entering a date and time (hour, minute, second, and fraction of a second) based on UTC time zone.
  * datetime-local: HTML5 A control for entering a date and time, with no time zone.
  * email: HTML5 A field for editing an e-mail address. The input value is validated to contain either the empty string or a single valid e-mail address before submitting. The :valid and :invalid CSS pseudo-classes are applied as appropriate.
  * file: A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select.
  * hidden: A control that is not displayed, but whose value is submitted to the server.
image: A graphical submit button. You must use the src attribute to define the source of the image and the alt attribute to define alternative text. You can use the height and width attributes to define the size of the image in pixels.
  * month: HTML5 A control for entering a month and year, with no time zone.
  * number: HTML5 A control for entering a floating point number.
  * password: A single-line text field whose value is obscured. Use the maxlength attribute to specify the maximum length of the value that can be entered.
  * radio: A radio button. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected by default. Radio buttons that have the same value for the name attribute are in the same "radio button group"; only one radio button in a group can be selected at one time.
  * range: HTML5 A control for entering a number whose exact value is not important. This type control uses the following default values if the corresponding attributes are not specified:
    * min: 0
    * max: 100
    * value: min + (max-min)/2, or min if max is less than min
    * step: 1
  * reset: A button that resets the contents of the form to default values.
  * search: HTML5 A single-line text field for entering search strings; line-breaks are automatically removed from the input value.
  * submit: A button that submits the form.
  * tel: HTML5 A control for entering a telephone number; line-breaks are automatically removed from the input value, but no other syntax is enforced. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate.
  * text: A single-line text field; line-breaks are automatically removed from the input value.
time: HTML5 A control for entering a time value with no time zone.
  * url: HTML5 A field for editing a URL. The input value is validated to contain either the empty string or a valid absolute URL before submitting. Line-breaks and leading or trailing whitespace are automatically removed from the input value. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate.
  * week: HTML5 A control for entering a date consisting of a week-year number and a week number with no time zone.
`accept`
If the value of the type attribute is file, this attribute indicates the types of files that the server accepts; otherwise it is ignored. The value must be a comma-separated list of unique content type specifiers:
  * A file extension starting with the STOP character (U+002E). (E.g.: ".jpg,.png,.doc")
  * A valid MIME type with no extensions
  * audio/* representing sound files HTML5
  * video/* representing video files HTML5
  * image/* representing image files HTML5
`accesskey` HTML 4 only, Obsolete since HTML5
A single-character that the user can press to switch input focus to the control. This attribute is global in HTML5.
`mozactionhint`
Specifies an "action hint" used to determine how to label the enter key on mobile devices with virtual keyboards. Supported values are go, done, next, search, and send; these automatically get mapped to the appropriate string (and are case-insensitive).
`autocapitalize`
This is a nonstandard attribute used by iOS Safari Mobile which controls whether and how the text value should be automatically capitalized as it is entered/edited by the user. The non-deprecated values are available in iOS 5 and later. Possible values are:
  * none: Completely disables automatic capitalization
  * sentences: Automatically capitalize the first letter of sentences.
  * words: Automatically capitalize the first letter of words.
  * characters: Automatically capitalize all characters.
  * on:  Deprecated since iOS 5.
  * off:  Deprecated since iOS 5.
`autocomplete` HTML5
This attribute indicates whether the value of the control can be automatically completed by the browser. This attribute is ignored if the value of the type attribute is hidden, password, checkbox, radio, file, or a button type (button, submit, reset, image). Possible values are:
  * off: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry.
  * on: The browser can automatically complete the value based on values that the user has entered during previous uses.
If the autocomplete attribute is not specified on an input element, then the browser uses the autocomplete attribute value of the <input> element's form owner. The form owner is either the form element that this <input> element is a descendant of or the form element whose id is specified by the form attribute of the input element. For more information, see the autocomplete attribute in <form>.

The autocomplete attribute also controls whether Firefox will, unlike other browsers, persist the dynamic disabled state and (if applicable) dynamic checkedness of an <input> across page loads. The persistence feature is enabled by default. Setting the value of the autocomplete attribute to off disables this feature; this works even when the autocomplete attribute would normally not apply to the <input> by virtue of its type. See bug 654072.

`autocorrect`
This is a nonstandard attribute supported by Safari that is used to control whether autocorrection should be enabled when the user is entering/editing the text value of the <input>. Possible attribute values are:
  * on: Enable autocorrection
  * offf: Disable autocorrection
`autofocus` HTML5
This Boolean attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute, which is a Boolean. It cannot be applied if the type attribute is set to hidden (that is, you cannot automatically set focus to a hidden control).
`autosave` HTML5
This attribute should be defined as a unique value. If the value of the type attribute is search, previous search term values will persist in the dropdown across page load.
`checked`
When the value of the type attribute is radio or checkbox, the presence of this Boolean attribute indicates that the control is selected by default; otherwise it is ignored.

Firefox will, unlike other browsers, by default, persist the dynamic checked state of an <input> across page loads. Use the autocomplete attribute to control this feature.

`disabled`
This Boolean attribute indicates that the form control is not available for interaction. In particular, the click event will not be dispatched on disabled controls. Also, a disabled control's value isn't submitted with the form.

Firefox will, unlike other browsers, by default, persist the dynamic disabled state of an <input> across page loads. Use the autocomplete attribute to control this feature.

`form` HTML5
The form element that the input element is associated with (its form owner). The value of the attribute must be an id of a <form> element in the same document. If this attribute is not specified, this <input> element must be a descendant of a <form> element. This attribute enables you to place <input> elements anywhere within a document, not just as descendants of their form elements. An input can only be associated with one form.
`formaction` HTML5
The URI of a program that processes the information submitted by the input element, if it is a submit button or image. If specified, it overrides the action attribute of the element's form owner.
`formenctype` HTML5
If the input element is a submit button or image, this attribute specifies the type of content that is used to submit the form to the server. Possible values are:
  * application/x-www-form-urlencoded: The default value if the attribute is not specified.
  * multipart/form-data: Use this value if you are using an <input> element with the type attribute set to file.
  * text/plain
If this attribute is specified, it overrides the enctype attribute of the element's form owner.

`formmethod` HTML5
If the input element is a submit button or image, this attribute specifies the HTTP method that the browser uses to submit the form. Possible values are:
  * post: The data from the form is included in the body of the form and is sent to the server.
  * get: The data from the form are appended to the form attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.
If specified, this attribute overrides the method attribute of the element's form owner.

`formnovalidate` HTML5
If the input element is a submit button or image, this Boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the novalidate attribute of the element's form owner.
`formtarget` HTML5
If the input element is a submit button or image, this attribute is a name or keyword indicating where to display the response that is received after submitting the form. This is a name of, or keyword for, a browsing context (for example, tab, window, or inline frame). If this attribute is specified, it overrides the target attribute of the elements's form owner. The following keywords have special meanings:
  * _self: Load the response into the same browsing context as the current one. This value is the default if the attribute is not specified.
  * _blank: Load the response into a new unnamed browsing context.
  * _parent: Load the response into the parent browsing context of the current one. If there is no parent, this option behaves the same way as _self.
  * _top: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self.
`height` HTML5
If the value of the type attribute is image, this attribute defines the height of the image displayed for the button.
`incremental`
This is a nonstandard attribute supported by Safari that only applies when the type is search. If the attribute is present, regardless of what its value is, the <input> fires search events as the user edits the text value. The event is only fired after an implementation-defined timeout has elapsed since the most recent keystroke; new keystrokes reset the timeout. In other words, the event firing is debounced. If the attribute is absent, the search event is only fired when the user explicitly initiates a search (e.g. by pressing the Enter key while within field).
`inputmode` HTML5
A hint to the browser for which keyboard to display. This attribute applies when the value of the type attribute is text, password, email, or url. Possible values are:
  * verbatim: Alphanumeric, non-prose content such as usernames and passwords.
  * latin: Latin-script input in the user's preferred language with typing aids such as text prediction enabled. For human-to-computer communication such as search boxes.
  * latin-name: As latin, but for human names.
  * latin-prose: As latin, but with more aggressive typing aids. For human-to-human communication such as instant messaging for email.
  * full-width-latin: As latin-prose, but for the user's secondary languages.
  * kana: Kana or romaji input, typically hiragana input, using full-width characters, with support for converting to kanji. Intended for Japanese text input.
  * katakana: Katakana input, using full-width characters, with support for converting to kanji. Intended for Japanese text input.
  * numeric: Numeric input, including keys for the digits 0 to 9, the user's preferred thousands separator character, and the character for indicating negative numbers. Intended for numeric codes, e.g. credit card numbers. For actual numbers, prefer using <input type="number">
  * tel: Telephone input, including asterisk and pound key. Use <input type="tel"> if possible instead.
email: Email input. Use <input type="email"> if possible instead.
  * url: URL input. Use <input type="url"> if possible instead.
`list` HTML5
Identifies a list of pre-defined options to suggest to the user. The value must be the id of a <datalist> element in the same document. The browser displays only options that are valid values for this input element. This attribute is ignored when the type attribute's value is hidden, checkbox, radio, file, or a button type.
`max` HTML5
The maximum (numeric or date-time) value for this item, which must not be less than its minimum (min attribute) value.
`maxlength`
If the value of the type attribute is text, email, search, password, tel, or url, this attribute specifies the maximum number of characters (in Unicode code points) that the user can enter; for other control types, it is ignored. It can exceed the value of the size attribute. If it is not specified, the user can enter an unlimited number of characters. Specifying a negative number results in the default behavior; that is, the user can enter an unlimited number of characters. The constraint is evaluated only when the value of the attribute has been changed.
`min` HTML5
The minimum (numeric or date-time) value for this item, which must not be greater than its maximum (max attribute) value.
`minlength` HTML5
If the value of the type attribute is text, email, search, password, tel, or url, this attribute specifies the minimum number of characters (in Unicode code points) that the user can enter; for other control types, it is ignored.
`multiple` HTML5
This Boolean attribute indicates whether the user can enter more than one value. This attribute applies when the type attribute is set to email or file; otherwise it is ignored.
`name`
The name of the control, which is submitted with the form data.
`pattern` HTML5
A regular expression that the control's value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is text, search, tel, url or email; otherwise it is ignored. The regular expression language is the same as JavaScript's. The pattern is not surrounded by forward slashes.
`placeholder` HTML5
A hint to the user of what can be entered in the control . The placeholder text must not contain carriage returns or line-feeds. This attribute applies when the value of the type attribute is text, search, tel, url or email; otherwise it is ignored.
Note: Do not use the placeholder attribute instead of a <label> element. Their purposes are different: the <label> attribute describes the role of the form element; that is, it indicates what kind of information is expected, the placeholder attribute is a hint about the format the content should take. There are cases in which the placeholder attribute is never displayed to the user, so the form must be understandable without it.
`readonly`
This Boolean attribute indicates that the user cannot modify the value of the control.
HTML5 This attribute is ignored if the value of the type attribute is hidden, range, color, checkbox, radio, file, or a button type.

`required` HTML5
This attribute specifies that the user must fill in a value before submitting a form. It cannot be used when the type attribute is hidden, image, or a button type (submit, reset, or button). The :optional and :required CSS pseudo-classes will be applied to the field as appropriate.
`selectionDirection` HTML5
The direction in which selection occurred. This is "forward" if the selection was made from left-to-right in an LTR locale or right-to-left in an RTL locale, or "backward" if the selection was made in the opposite direction. This can be "none" if the selection direction is unknown.
`size`
The initial size of the control. This value is in pixels unless the value of the type attribute is text or password, in which case, it is an integer number of characters. Starting in HTML5, this attribute applies only when the type attribute is set to text, search, tel, url, email, or password; otherwise it is ignored. In addition, the size must be greater than zero. If you don't specify a size, a default value of 20 is used.
`spellcheck` HTML5
Setting the value of this attribute to true indicates that the element needs to have its spelling and grammar checked. The value default indicates that the element is to act according to a default behavior, possibly based on the parent element's own spellcheck value. The value false indicates that the element should not be checked.
`src`
If the value of the type attribute is image, this attribute specifies a URI for the location of an image to display on the graphical submit button; otherwise it is ignored.
`step` HTML5
Works with the min and max attributes to limit the increments at which a numeric or date-time value can be set. It can be the string any or a positive floating point number. If this attribute is not set to any, the control accepts only values at multiples of the step value greater than the minimum.
`tabindex element-specific` in HTML 4, global in HTML5
The position of the element in the tabbing navigation order for the current document.
`usemap` HTML 4 only, Obsolete since HTML5
The name of a <map> element to as an image map.
`value`
The initial value of the control. This attribute is optional except when the value of the type attribute is radio or checkbox.
Note that when reloading the page, Gecko and IE will ignore the value specified in the HTML source, if the value was changed before the reload.
`width` HTML5
If the value of the type attribute is image, this attribute defines the width of the image displayed for the button.
`x-moz-errormessage`
This Mozilla extension allows you to specify the error message to display when a field doesn't successfully validate.

----
####23
**legend**
The HTML `<legend>` Element (or HTML Legend Field Element) represents a caption for the content of its parent `<fieldset>`.
Attributes -
This element only includes the global attributes.

----
####22
**label**
The HTML `<label>` Element represents a caption for an item in a user interface. It can be associated with a control either by placing the control element inside the label element, or by using the for attribute. Such a control is called the labeled control of the label element.
Attributes-
`accesskey` HTML 4 HTML5
A shortcut key to access this element from the keyboard.
`for`
The ID of a labelable form-related element in the same document as the label element. The first such element in the document with an ID matching the value of the for attribute is the labeled control for this label element.
Note: A label element can have both a for attribute and a contained control element, as long as the for attribute points to the contained control element.
`form` HTML5
The form element that the label element is associated with (its form owner). The value of the attribute must be an ID of a <form> element in the same document. If this attribute is not specified, this <label> element must be a descendant of a <form> element. This attribute enables you to place label elements anywhere within a document, not just as descendants of their form elements.

----
####21
**option**
In a Web form, the HTML `<option>` element is used to create a control representing an item within a `<select>`, an `<optgroup>` or a `<datalist>` HTML5 element.
This element includes the global attributes.
Attributes-
`disabled`
If this Boolean attribute is set, this option is not checkable. Often browsers grey out such control and it won't receive any browsing event, like mouse clicks or focus-related ones. If this attribute is not set, the element can still be disabled if one its ancestors is a disabled `<optgroup>` element.
`label`
This attribute is text for the label indicating the meaning of the option. If the label attribute isn't defined, its value is that of the element text content.
Usage note: the label attribute is designed to contain a short label typically used in a hierarchical menu. The value attribute describes a longer label designed to be used near a radio button, for example.
`selected`
If present, this Boolean attribute indicates that the option is initially selected. If the `<option>` element is the descendant of a`<select>` element whose multiple attribute is not set, only one single `<option>` of this `<select>` element may have the selected attribute.
`value`
The textual content of this attribute represents the label explaining the option. If it is not defined, its default value is the text content of the element.
Usage note: the label attribute is designed to contain a short label typically used in a hierarchical menu. The value attribute describes a longer label designed to be used near a radio button, for example.


----
####assignment 18 additions:

----
####20
`<head>`
Represents a collection of metadata about the document, including links to, or definitions of, scripts and style sheets.
* The HTML Head Element (`<head>`) provides general information (metadata) about the document, including its title and links to or definitions of scripts and style sheets
* examples:
  * url:  http://www.w3schools.com/js/js_comparisons.asp
```html
<head>
<title>JavaScript Comparison and Logical Operators</title>
<style>a.menu_js_comparisons{font-weight:bold;}</style>
<style>
</head>
```

* url: http://javascript.info/tutorial/objects
```html
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```

* url:  http://javascript.info/tutorial/objects
```html
<head>
<meta name="robots" content="index,follow" />
```

----
####19
`<title>`
Defines the title of the document, shown in a browser's title bar or on the page's tab. It can only contain text and any contained tags are not interpreted.
* The HTML `<title>` element (HTML Title Element) defines the title of the document, shown in a browser's title bar or on the page's tab. It can only contain text and any contained tags are not interpreted.
* examples:
  * url: http://www.w3schools.com/js/js_comparisons.asp
```html
<title>JavaScript Comparison and Logical Operators</title>
```
  * url:  http://javascript.info/tutorial/objects
```html
<title>Objects | JavaScript Tutorial</title>
```
  * url:  http://pirateipsum.me/
```html
<title>Arr! It's Pirate Ipsum Generator</title>
```

----
####18
`<base>`
Defines the base URL for relative URLs in the page.
* The HTML Base Element (`<base>`) specifies the base URL to use for all relative URLs contained within a document.There is maximum one `<base>` element in a document.
* examples:
  * url: http://www.w3schools.com/tags/tag_base.asp
```html
<base href="http://www.w3schools.com/images/" target="_blank">
```
  * url:  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
```html
<base href="http://www.example.com/">
<base target="_blank" href="http://www.example.com/">
```

----
####17
`<link>`
Used to link JavaScript and external CSS with the current HTML document.
* The HTML Link Element (`<link>`) specifies relationships between the current document and an external resource. Possible uses for this element include defining a relational framework for navigation. This Element is most used to link to style sheets.
* examples:
  * url:  http://www.w3schools.com/js/js_comparisons.asp
```html
<link rel="icon" href="/favicon.ico" type="image/x-icon">
<link rel="stylesheet" type="text/css" href="/stdtheme.css" />
```
  * url:  http://javascript.info/tutorial/objects
```html
<link rel="next" href="/tutorial/array" />
```

----
####16
`<style>`
Used to write inline CSS.
* The HTML `<style>` element contains style information for a document, or a part of document. The specific style information is contained inside of this element, usually in the CSS.
* examples:
  * url: http://www.w3schools.com/js/js_comparisons.asp
```html
<style>a.menu_js_comparisons{font-weight:bold;}</style>
<style>
#smallnavContainer {display:none;}
</style>
```
  * url:  http://javascript.info/tutorial/objects
```html
<div style="clear:both"></div>
```
* url:  http://pirateipsum.me/
```html
<style type="text/css">
```

----
####15
`<script>`
Defines either an internal script or a link to an external script. The script language is JavaScript.
* The HTML `<script>` element is used to embed or reference an executable script within an HTML or XHTML document.

Scripts without async or defer attributes, as well as inline scripts, are fetched and executed immediately, before the browser continues to parse the page.
* examples:
  * url: http://www.w3schools.com/js/js_comparisons.asp
```html
<script type='text/javascript'>
<script>
			if (Math.random()<0.5)
				{
				x=document.getElementById("altovatext");
				x.innerHTML="XML Editor - Free Trial!";
				x.href="http://www.altova.com/ref/?s=w3s_text2&q=xmlspy";
				}
			</script>
<script src="/w3schools.js"></script>
```
  * url:  http://javascript.info/tutorial/objects
```html
<script type="text/javascript" src="/misc/jquery.js?l"></script>
```

----
####14
`<noscript>`
Defines alternative content to display when the browser doesn't support scripting.
*The HTML `<noscript>` Element defines a section of html to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.
* examples:
  * url: http://www.usatoday.com/
```html
<noscript class="MOAT-gannettdigital989586921?
```
  * url: http://www.w3schools.com/tags/tag_noscript.asp
```html
<noscript>Your browser does not support JavaScript!</noscript>
```
  *url: http://reference.sitepoint.com/html/noscript
```html
<noscript>
  <h1>Houston, we have a problem</h1>
  <p>It appears that your web browser does not support JavaScript,
      or you have temporarily disabled scripting. Either way, this site
      won't work without it. Please take a look at our
      <a href="/support/browsers/">browser support page</a> for more help.
</noscript>
```

----
####13
`<template>`
Container for client-side content instantiated during runtime using JavaScript.
*The HTML template element `<template>` is a mechanism for holding client-side content that is not to be rendered when a page is loaded but may subsequently be instantiated during runtime using JavaScript. Think of a template as a content fragment that is being stored for subsequent use in the document. The parser does process the content of the `<template>` element during the page load to ensure that it is valid, however.
* examples:
  * url: http://www.html5rocks.com/en/tutorials/webcomponents/template/
```html
<template id="mytemplate">
  <img src="" alt="great image">
  <div class="comment"></div>
</template>
<template>
  <div>Template used: <span>0</span></div>
  <script>alert('Thanks!')</script>
</template>
```
  * url: http://www.sitepoint.com/html5-template-tag/
```html
<template id="mytablerow">
<tr>
<td class="record"></td>
<td></td>
<td></td>
</tr>
</template>
```  

----
####12
`<body>`
Represents the content of an HTML document. There is only one `<body>` element in a document.
* The HTML `<body>` element represents the content of an HTML document. There is only one `<body>` element in a document.
* examples:
  * url: http://www.w3schools.com/js/js_comparisons.asp
```html
<body>
<div id='smallnavContainer'>
```
  * url:  http://javascript.info/tutorial/objects
```html
<body class="body-main arial">
```
  * url:  http://pirateipsum.me/
```html
<body onload="init();">
```

----
####11
`<nav>`
Defines a section that contains only navigation links.
* The HTML Navigation Element (<nav>) represents a section of a page that links to other pages or to parts within the page: a section with navigation links.
* examples:
  * url: http://www.usatoday.com/
```html
<nav class="site-nav">
<nav><div class="fronts">
```

----

####Block-level elements

----
####10
`<div>`
Document division
* The HTML `<div>` element (or HTML Document Division Element) is the generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as `<article>` or `<nav>`) is appropriate.
* examples:
  * url: http://orlando.theironyard.com/
```html
    <div class="has-avatar content" id="posts">
    <div class="posts-wrap">
    <article class="post type-text" id="100189034319"><div class="clearfix rte">
```

----
####9
`<footer>`
* Section of page footer
The HTML `<footer>` Element represents a footer for its nearest sectioning content or sectioning root element (i.e, its nearest parent `<article>, <aside>, <nav>, <section>, <blockquote>, <body>, <details>, <fieldset>, <figure>, <td>`). A footer typically contains information about the author of the section, copyright data or links to related documents.
  * examples:
    * url: http://orlando.theironyard.com/
```html
      <footer>
    <div class="footer-wrap content-wrap clearfix">
      <aside class="sidebar">
        <div class="avatar-wrap">
          <a href="/"><img alt="The Iron Yard | Orlando" src="http://33.media.tumblr.com/avatar_31b8d8bf579d_64.png" /></a>
        </div>
      </aside>
      <div class="content">
        <h2 class="secondary-title">The Iron Yard | Orlando</h2>
        <div class="blog-description">Happenings and updates from The Iron Yard in Orlando, FL.</div><div class="social-icons module clearfix">
          <h2>Elsewhere</h2>
          <div class="wrap"></div>
        </div><div class="attribution">
          <a href="http://www.pixelunion.net/themes/longform">Longform Theme</a>&nbsp;by&nbsp;<a href="http://www.pixelunion.net">Pixel Union</a>. Powered by&nbsp;<a href="http://www.tumblr.com">Tumblr</a>.</div>
      </div>
    </div>
  </footer><script src="http://static.tumblr.com/ymcvd4r/Raan0lekb/script.js" type="text/javascript"></script>
```

    * url:  http://blog.theironyard.com/
```html
    <footer>
    <div class="footer-wrap content-wrap clearfix">
```

    * url:  http://www.usatoday.com/
```html
    <footer class="site-footer clearfix">
```

----
####8
`<form>`
* Input form
The HTML `<form>` element represents a document section that contains interactive controls to submit information to a web server.
  * examples:
    * url: http://orlando.theironyard.com/
```html
      </div><form action="/search" class="module search-form" method="get">
        <h2>Search</h2>
        <div class="input-wrap">
      <form>
              <input type="text" id="st-search-input" class="search-field" />
            </form>
```

    * url: http://blog.theironyard.com/
```html
      <form>
              <input type="text" id="st-search-input" class="search-field" />
            </form>
```

----
####7
`<h1>` through `<h6>`
* Heading levels 1-6
Heading elements implement six levels of document headings, `<h1>` is the most important and `<h6>` is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically.
* examples:
  * url: http://orlando.theironyard.com/
```html
    * h1 a,
      h2 a,
      h3 a,
      h4 a,
      h5 a,
      h6 a {
        color: #39474e;
      }
    * h1 a:hover,
      h2 a:hover,
      h3 a:hover,
      h4 a:hover,
      h5 a:hover,
      h6 a:hover,
    * </div><h1>
        <a href="/">The Iron Yard | Orlando</a>
      </h1>
```

----
####6
`<header>`
* Section or page header
The HTML `<header>` Element represents a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, wrapped section's header, a search form, and so on.
* examples:
  * url: http://orlando.theironyard.com/
```html
    <header style="background-image:url(http://static.tumblr.com/3c7cd96cde56779343d2e9a22afec085/w5gxxfv/oCrn8vkw8/tumblr_static_9cxjqqnfamsccsg4ow84sg8kg.jpg);"></header>
```

  * url: http://blog.theironyard.com/
```html
    <header style="background-image:url(http://static.tumblr.com/6ead77da4bf66eddf3998acad57b975e/w5gxxfv/w3Sn9hotu/tumblr_static_1nxex1e3d5y8cc40o4cccoc0w.jpg);"></header>
```

  * url:  http://www.usatoday.com/
```html
    <header data-default-fixed="false" data-default-open="true" class=" site-header ">
```

----
####5
`<p>`
* Paragraph
The HTML `<p>` element (or HTML Paragraph Element) represents a paragraph of text. Paragraphs are block-level elements.
* examples:
  * url: http://orlando.theironyard.com/
```html
  <p>You can find more information on our Meetup page: </p>
  <p><a href="http://www.meetup.com/The-Iron-Yard-Orlando/">http://www.meetup.com/The-Iron-Yard-Orlando/</a></p>
  <p>See you then!</p>
```

----
####4
`<section>`
* Section of a web page
The HTML Section Element (`<section>`) represents a generic section of a document, i.e., a thematic grouping of content, typically with a heading. Each `<section>` should be identified, typically by including a heading (h1-h6 element) as a child of the `<section>` element.
* examples:
  * url:  http://www.usatoday.com/
```html
    <section id="module-position-7" class="section-highlights-module primary-module-last section-highlights-card-module section-highlights-primary section-highlights-primary-module primary-module primary-module-primary-flex-sidebar-page primary-module-primary-flex-sidebar-page-last card-primary"
    data-layout-type="primary"
    >
    <section class="shpm-section shpm-section-odd">
    <section id="section_home" class="home card card-primary-flex-sidebar-page  " data-section-id="home" data-subsection-id="" >
```

----
####3
`<ul>`
* Unordered list
The HTML unordered list element (`<ul>`) represents an unordered list of items, namely a collection of items that do not have a numerical ordering, and their order in the list is meaningless. Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a circle or a squared. The bullet style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property.

There is no limitation to the depth and imbrication of lists defined with the `<ol>` and `<ul>` elements.
* examples:
  * url: http://orlando.theironyard.com/
```html
  <ul class="meta-tools clearfix">
  <ul class="share-items">
  <ul class="links module"></ul>
```

----
####2
`<table>`
* Table
The HTML Table Element (`<table>`) represents data in two dimensions or more.
In this order:
* an optional `<caption>` element,
* zero or more `<colgroup>` elements,
* an optional `<thead>` element,
* one of the two alternatives:
  * one `<tfoot>` element, followed by:
    * zero or more `<tbody>` elements,
    * or one or more `<tr>` elements,
  * a second alternative followed by an optional `<tfoot>` element:
    * either zero or more `<tbody>` elements,
    * or one or more `<tr>` elements
* examples:
  * url: http://www.intellicast.com/Local/Weather.aspx?location=USFL0372
```html
    <table style="width:100%;">
    <table id="pwsTable">
    <table cellspacing="0" border="0" id="ctl00_ctl00_master_body_ctl00_SingleStorm" style="width:100%;border-collapse:collapse;">
```

----
####1
`<article>`
* Article content
The HTML `<article>` Element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable, e.g., in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. Each `<article>` should be identified, typically by including a heading (h1-h6 element) as a child of the `<article>` element.
* examples:
  * url: http://orlando.theironyard.com/
```html
    <article class="post type-text" id="100189034319">
    <article class="post type-text" id="100079465824">
    <article class="post type-text" id="97086023659">
```

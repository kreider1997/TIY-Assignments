##HTML reference on MDN
####Block-level elements

`<div>`
Document division
* The HTML <div> element (or HTML Document Division Element) is the generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as <article> or <nav>) is appropriate.
* examples:
  * url: http://orlando.theironyard.com/
```
    * <div class="has-avatar content" id="posts">
    * <div class="posts-wrap">
    * <article class="post type-text" id="100189034319"><div class="clearfix rte">
```

`<footer>`
* Section of page footer
The HTML <footer> Element represents a footer for its nearest sectioning content or sectioning root element (i.e, its nearest parent `<article>, <aside>, <nav>, <section>, <blockquote>, <body>, <details>, <fieldset>, <figure>, <td>`). A footer typically contains information about the author of the section, copyright data or links to related documents.
  * examples:
    * url: http://orlando.theironyard.com/
```
      * <footer>
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
    * url:http://blog.theironyard.com/
```
      * <footer>
    <div class="footer-wrap content-wrap clearfix">
```

    * url:  http://www.usatoday.com/
```
      * <footer class="site-footer clearfix">
```

`<form>`
* Input form
The HTML <form> element represents a document section that contains interactive controls to submit information to a web server.
  * examples:
    * url: http://orlando.theironyard.com/
```
      * </div><form action="/search" class="module search-form" method="get">
        <h2>Search</h2>
        <div class="input-wrap">
      * <form>
              <input type="text" id="st-search-input" class="search-field" />
            </form>
```
    * url: http://blog.theironyard.com/
```
      * <form>
              <input type="text" id="st-search-input" class="search-field" />
            </form>
```

`<h1>` through `<h6>`
* Heading levels 1-6
Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically.
* examples:
  * url: http://orlando.theironyard.com/
```
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

`<header>`
* Section or page header
The HTML <header> Element represents a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, wrapped section's header, a search form, and so on.
* examples:
  * url: http://orlando.theironyard.com/
```
    * <header style="background-image:url(http://static.tumblr.com/3c7cd96cde56779343d2e9a22afec085/w5gxxfv/oCrn8vkw8/tumblr_static_9cxjqqnfamsccsg4ow84sg8kg.jpg);"></header>
```
  * url:  http://blog.theironyard.com/
```
    * <header style="background-image:url(http://static.tumblr.com/6ead77da4bf66eddf3998acad57b975e/w5gxxfv/w3Sn9hotu/tumblr_static_1nxex1e3d5y8cc40o4cccoc0w.jpg);"></header>
```
  * url:  http://www.usatoday.com/
```
    * <header data-default-fixed="false" data-default-open="true" class=" site-header ">
```

`<p>`
* Paragraph
The HTML <p> element (or HTML Paragraph Element) represents a paragraph of text. Paragraphs are block-level elements.
* examples:
  * url: http://orlando.theironyard.com/
```
  * <p>You can find more information on our Meetup page: </p>
  * <p><a href="http://www.meetup.com/The-Iron-Yard-Orlando/">http://www.meetup.com/The-Iron-Yard-Orlando/</a></p>
  * <p>See you then!</p>
```

`<section>`
* Section of a web page
The HTML Section Element (<section>) represents a generic section of a document, i.e., a thematic grouping of content, typically with a heading. Each <section> should be identified, typically by including a heading (h1-h6 element) as a child of the <section> element.
* examples:
  * url:  http://www.usatoday.com/
```
    * <section id="module-position-7" class="section-highlights-module primary-module-last section-highlights-card-module section-highlights-primary section-highlights-primary-module primary-module primary-module-primary-flex-sidebar-page primary-module-primary-flex-sidebar-page-last card-primary"
    data-layout-type="primary"
    >
    * <section class="shpm-section shpm-section-odd">
    * <section id="section_home" class="home card card-primary-flex-sidebar-page  " data-section-id="home" data-subsection-id="" >
```

`<ul>`
* Unordered list
The HTML unordered list element (<ul>) represents an unordered list of items, namely a collection of items that do not have a numerical ordering, and their order in the list is meaningless. Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a circle or a squared. The bullet style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property.

There is no limitation to the depth and imbrication of lists defined with the <ol> and <ul> elements.
* examples:
  * url: http://orlando.theironyard.com/
```
  * <ul class="meta-tools clearfix">
  * <ul class="share-items">
  * <ul class="links module"></ul>
```

`<table>`
* Table
The HTML Table Element (<table>) represents data in two dimensions or more.
In this order:
* an optional <caption> element,
* zero or more <colgroup> elements,
* an optional <thead> element,
* one of the two alternatives:
  * one <tfoot> element, followed by:
    * zero or more <tbody> elements,
    * or one or more <tr> elements,
  * a second alternative followed by an optional <tfoot> element:
    * either zero or more <tbody> elements,
    * or one or more <tr> elements
* examples:
  * url: http://www.intellicast.com/Local/Weather.aspx?location=USFL0372
```
    * <table style="width:100%;">
    * <table id="pwsTable">
    * <table cellspacing="0" border="0" id="ctl00_ctl00_master_body_ctl00_SingleStorm" style="width:100%;border-collapse:collapse;">
```

`<article>`
* Article content
The HTML <article> Element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable, e.g., in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. Each <article> should be identified, typically by including a heading (h1-h6 element) as a child of the <article> element.
* examples:
  * url: http://orlando.theironyard.com/
```
    * <article class="post type-text" id="100189034319">
    * <article class="post type-text" id="100079465824">
    * <article class="post type-text" id="97086023659">
```

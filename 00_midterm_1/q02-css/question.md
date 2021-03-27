### Question 2: 

What do the following CSS selectors select? Please provide short examples

1.    div + p
2.    div p
3.    div, p
4.    div > p
5.    div ~ p

### Please place your answer here:

1.)	"div + p" selects the first <p> element that is placed immediately after <div> elements.  

<!-- HTML file:
 -->
<h1>Welcome to My Homepage</h1>

<div>
  <h2>My name is Donald</h2>
  <p>I live in Duckburg.</p>
</div>

<p>My best friend is Mickey.</p>

<p>I will not be styled.</p>

<!-- CSS file:
 -->
	div + p {
		background-color: yellow;
	}

2.) "div p" selects all <p> elements inside <div> elements.

<!-- HTML file:
 -->
<h1>Welcome to My Homepage</h1>

<div>
  <h2>My name is Donald</h2>
  <p>I live in Duckburg.</p>
</div>

<p>My best friend is Mickey.</p>

<!-- CSS file: 
 -->	div p {
		background-color: green;
	}

3.) "div, p" selects all <div> elements and all <p> elements.

<!-- HTML file: -->

<h1>Welcome to My Homepage</h1>

<div>
  <p>My name is Donald.</p>
  <p>I live in Duckburg.</p>
</div>

<p>My best friend is Mickey.</p>

<!-- CSS file: 
 -->
	div, p {
		background-color: red;
	}

4.) "div > p" selects all <p> elements where the parent is a <div> element.

<!-- HTML file: -->

<h1>Welcome to My Homepage</h1>

<div>
  <h2>My name is Donald</h2>
  <p>I live in Duckburg.</p>
</div>

<div>
  <span><p>I will not be styled.</p></span>
</div>

<p>My best friend is Mickey.</p>

<!-- css file: -->

	div > p {
		background-color: yellow;
	}

5.) "div ~ p" selects every <p> element that is preceded by a <div> element.  

<!-- HTML file:
 -->
<div>A div element.</div>
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

<p>The first paragraph.</p>
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

<h2>Another list</h2>
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

<!-- CSS file:
 -->
	div ~ p {
		background: blue;
	}
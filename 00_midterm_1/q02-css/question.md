### Question 2: 

What do the following CSS selectors select? Please provide short examples

1.    div + p
2.    div p
3.    div, p
4.    div > p
5.    div ~ p

### Please place your answer here:

1.)	"div + p" selects the first <p> element that is placed immediately after <div> elements.  

	div + p {
		background-color: yellow;
	}

2.) "div p" selects all <p> elements inside <div> elements.

	div p {
		background-color: green;
	}

3.) "div, p" selects all <div> elements and all <p> elements.

	div, p {
		background-color: red;
	}

4.) "div > p" selects all <p> elements where the parent is a <div> element.

	div > p {
		background-color: yellow;
	}

5.) "div ~ p" selects every <p> element that is preceded by a <div> element.  

	div ~ p {
		background: blue;
	}
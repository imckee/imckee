### Question:

Please use your own simple words to describe what are cascading rules in CSS. Please keep it under 150 words. Full credit given to simple explanation in own words and not a copy and paste from the documentation ;-)

### Answer:

The order of the stylesheet matters, in other words the way a stylesheet cascades matters in a CSS file.  If you have two different rules that apply to the same selector, then that could cause an issue into how you want your website to appear.  For example, if you have the following code in your CSS file:

`h3 {
	color: black;
}`

`h3 {
	color: red;     
}`

The h3 on the browser will appear red because the last one in the CSS order wins.  

Specificity also matters in CSS because when you are using a CSS file, you are targeting elements in your HTML file.  In your HTML file, if you have the following code:

<h1 class= “top-heading”>Hello World!</h1>

And you have the following in your CSS file:

`.top-heading {
	color: green;
}`

`h1 {
	Color: blue;
}`

Your heading will appear green because it is more specific.  


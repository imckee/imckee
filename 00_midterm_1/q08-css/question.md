## Question A:

What color would you expect the item Sweet Halwa to show as and why?

<img src="images/1.png" width=45%>
<img src="images/2.png" width=45% style="padding-left:10px;">

## Question B:

What color would you expect the item "Sausage" to show as and why?

<div>
   <img src="images/a.png" width=90%>
</div>
<div style="padding: 10px 0 10px 0;">
    <img src="images/b.png" width=90%>
</div>

Hint: You need to view these images. To view them use one of the following techniques. These questions test your understanding of which of the competing CSS directives are used by the browser (cascading rules). You may read about these rules if you need a refresher.

- click on the preview button within VSCode (second icon from top right in VSCode; if you don't locate it, no sweat).
- view this question within github.com in the reviews repository shared with you.

### Answer A:

I would expect the Sweet Halwa to be shown as red because in the CSS file, it lists `ul.shopping-list li .highlight` to be the color red.  The words "Sweet Halwa" are included in the span class "highlight" and not "highlight:nth-of-type".
### Answer B:

I would expect the item "Sausage" to be shown as blue because the word "Sausage" is included in an `li class` of "must-buy".  In the CSS file, it targets the "must-buy" class to display the color blue.
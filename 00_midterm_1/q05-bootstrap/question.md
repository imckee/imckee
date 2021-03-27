What screen sizes in name and size are supported by bootstrap?

Please describe what would be the output of the following code snippet on mobile phone and on desktop computer, when using Twitter Bootstrap?  What would you expect to see?

```
    <div class="row">
        <div class="col-xs-12 col-md-3">Ruby Red</div>
        <div class="col-xs-12 col-md-3">Navy Blue</div>
        <div class="col-xs-12 col-md-3">Lime Green</div>
        <div class="col-xs-12 col-md-3">Egg Nog</div>
    </div>
```
### Answer:

There are six screen sizes supported by bootstrap:

-Extra small (xs) <576px
-Small (sm) ≥576px
-Medium (md) ≥768px
-Large (lg) ≥992px
-Extra large (xl) ≥1200px
-Extra extra large (xxl) ≥1400px

For the code provided, on a desktop browser, you should see the columns spread out at the top with equal space in between.  "Ruby Red" would be on the far left, then followed by "navy blue", "lime green" and then "egg nog" displayed at the far right.  On a mobile phone, the title of the columns would be stacked on top of each other.  With "Ruby red" being the first column listed, then followed by "navy blue", "lime green" and "egg nog" respectively.  
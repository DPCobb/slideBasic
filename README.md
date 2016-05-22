# slideBasic

An easy and basic jQuery slider. Just place your images in a ```<ul>``` in the ```.imgSlider``` wrapper and give an image the ```.activeImg``` class.

```
<div class="imgSlider">
      <ul class="imgList">
        <li><img src="images/coffe1.jpeg" class="activeImg" alt="coffee image"></li>
        <li><img src="images/coffee2.jpg" alt="coffee image"></li>
        <li><img src="images/coffee3.jpg" alt="coffee image"></li>
      </ul>
      <span class="prev"> &#10216; </span>
      <span class="next"> &#10217; </span>
</div>
```

The ```<span>``` for the previous and next arrows is optional, the slider will work without them allowing users to click on the image to change image.

Included in this repo is an HTML file demo, a CSS file, and the minified and unminified JavaScript file. You can use the CSS if you want,
or create your own.

[View Demo](http://dpcobb.github.io/slideBasic/)

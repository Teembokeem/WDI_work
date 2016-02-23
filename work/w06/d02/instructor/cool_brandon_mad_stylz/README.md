# Mad Stylz
![cool brandon](./app/assets/images/boy_rap.png)
## Manipulating the Front End with Rails

#### Road Map
1. Adding Fonts
2. Adding View-Specific Style Pages the Rails Way
3. Adding View-Specific Scripts

## I Turned My Kid Cousin into a Juggalo

I mistakenly left an ICP album in my kid cousin's room 3 years ago and ever
since he's told my Aunt he wants to be a rapper.

He hasn't outgrown it and I'm never getting invited back.

## Help Cool Brandon with his Site

Brandon wants to make a website for his rap career, but can't get view specific
styling onto his page. This is your chance to help me patch things up with my
Aunt.

### Adding Fonts: Url's with Rails

1. Add a `fonts/` directory to the `assets/` directory.

2. Add your custom `.tff` to `fonts/`

3. In your `static_pages.scss` file, add:

```scss
@font-face {
  font-family: 'abite';
  src: font-url('ABITE.ttf');
  src: font-url('ABITE.ttf') format('truetype');
}

h1 {
  font-family: 'abite', Fallback, sans-serif;
  font-spacing: .3rem;
  font-size: 5rem;
}
```

__PS: My .tff is called ABITE__

### Adding View-Specific Stylesheets the Rails Way

1. Remove `*= require_tree .` from `application.css` and replace
   with `*= require static_pages`

2. Add css page `about.scss` to the `assets/stylesheets/` directory

3. Add style tag: `<%= stylesheet_link_tag 'about' %>` at the top of
   the `about.html.erb` file.

4. Then add to the `assets.rb` in `/config/initializers/`:

	`Rails.application.config.assets.precompile += %w( about.css )`

### Adding View-Specific Scripts the Rails Way

There's a similar order to things with scripts.

1. Add `contact.js` in your `assets/javascripts` directory

2. Add the script tag to the page:
	`<%= javascript_include_tag 'contact' %>`

3. Add to `contact.js`:

	```javascript
	console.log('linked!');

	(document.getElementById('take').onkeyup = function(){
	    $('#place').text($('#take').val());
	})();
	```
4. Then add to the `assets.rb` in `/config/initializers/`:

	`Rails.application.config.assets.precompile += %w( contact.js )`

5. Finally, don't forget to bring up `app/assets/javascripts/application.js` and
replace:

	`//= require_tree .`

	with

	`//= require static_pages`

#### Working with the Asset Pipeline: Precompile

Precompile your assets - this is calling what's set in
`config/initializers/assets.rb`:

	`rake assets:precompile`

Before production, clear the precompile (since Heroku runs it when
deployed):

	`rake assets:clobber`

See all the options:

	`rake -T`

#### References

[Controller Specific Assets](http://theflyingdeveloper.com/controller-specific-assets-with-rails-4/)
[The Asset Pipeline](http://guides.rubyonrails.org/asset_pipeline.html)

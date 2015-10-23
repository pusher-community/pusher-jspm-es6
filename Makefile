build:
	- rm -r dist
	mkdir -p dist
	./node_modules/.bin/jspm bundle-sfx app/main dist/app.min.js --minify
	./node_modules/.bin/html-dist index.html --remove-all --minify --insert app.min.js -o dist/index.html

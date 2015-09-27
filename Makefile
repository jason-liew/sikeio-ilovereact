# Makefile
.PHONY:css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --user postcss-import css/app.css --output bundle/app.css
.PHONY:server
server:
	browser-sync start --server --files="index.html,bundle/app.css"
.PHONY:clean
clean:
	rm -rf bundle

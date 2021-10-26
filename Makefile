all:
	docker build --tag stock-app-ui .
	docker tag stock-app-ui:latest stock-app-ui:v1.0.0

build:
	npm run build
	sudo nginx -s stop || true
	sudo nginx 
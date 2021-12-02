all:
	docker build --tag stock-app-ui .
	docker tag stock-app-ui:latest clakeyman/stock-app-ui:v1.0.0
	docker push clakeyman/stock-app-ui:v1.0.0

build:
	npm run-script build
# sudo nginx -s stop || true
# sudo nginx 
all:
	eval $(minikube docker-env)
	docker build --tag stock-app-ui .
	docker tag stock-app-ui:latest stock-app-ui:v1.0.0

build:
	npm run-script build
# sudo nginx -s stop || true
# sudo nginx 
up:
	npm install --prefix frontend
	npm install --prefix backend
	docker-compose up --build 

restart:
	docker-compose down --rmi all && docker-compose up --build -d

down:
	docker-compose down 
	# --rmi all --volumes
	# rm -rf backend/node_modules frontend/node_modules　

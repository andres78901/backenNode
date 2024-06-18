# Importante
## Usar version de node
``` 
node -v 20.11.0
## Docker
docker run -d --rm --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -v mysql_data:/var/lib/mysql mysql/mysql-server:latest

git pull

docker build -t brew-dashboard .

docker stop "$(docker ps -q --filter "ancestor=brew-dashboard")"

docker run -d -p 8080:3000 brew-dashboard
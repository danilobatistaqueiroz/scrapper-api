#echo '{"version":"'$1'","status":"stopped","uuid":""}'
curl -X PATCH -H "Content-Type: application/json" -d '{"version":"'$1'","status":"stopped","uuid":""}' http://127.0.0.1:3000/scrapper-status/$1;
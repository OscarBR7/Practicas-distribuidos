# Instrucciones de Ejecución para la práctica 11

# Comando para ejecutar el contenedor servicio-productos
docker run -d --network app-network --network-alias servicio-productos -p 3000:3000 miusuario/servicio-productos:v1

# Comando para ejecutar el contenedor servicio-pedidos
docker run -d --network app-network -p 4000:4000 miusuario/servicio-pedidos:v1

import socket

SERVER_HOST = '0.0.0.0'
SERVER_PORT = 8000

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR,1)
server_socket.bind((SERVER_HOST,SERVER_PORT))
server_socket.listen(1)
print('Listening on port %s ...' % SERVER_PORT)

while True:
    client_connection, clientaddress = server_socket.accept()

    request = client_connection.recv(1024).decode()
    
    headers = request.split('\n')
    print(headers)
    
    filename = headers[0].split()[1]
    print(filename)
    
    if filename == '/':
        filename = '/index.html'

    fin = open("htdocs" + filename)
    content = fin.read()
    fin.close()


    content_bytes = content.encode('utf-8')
    content_length = len(content_bytes)

    response = (
    "HTTP/1.1 200 OK\r\n"
    f"Content-Length: {content_length}\r\n"
    "Connection: close\r\n"
    "\r\n"
    + content 
    )

    client_connection.sendall(response.encode())
    client_connection.close()

server_socket.close()


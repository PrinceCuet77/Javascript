# Table Of Contents

- [Table Of Contents](#table-of-contents)
- [Socket.IO](#socketio)
  - [What is Web Socket \& how it works?](#what-is-web-socket--how-it-works)
    - [Normal Case:](#normal-case)
    - [By Using Socket:](#by-using-socket)
  - [A](#a)


# Socket.IO

## What is Web Socket & how it works?

- Use case
  - Real-time communication
  - Bidirectional Communication
  - Between browser-server communication

### Normal Case:

- In HTTP, HTTPS protocol:
- Browser sends a request (GET, POST, PUT, DELETE) to the server
- Server returns a response based on received request
- _Condition:_ Only after receiving request, return a response. Otherwise do nothing
- New connection is established while sending request
- Connection lost/close after receiving a response from the server
- So, every new request creates a new connection
- So, real time communication is not possible

![Normal Case](photo/normal-case.png)

### By Using Socket:

- In `ws` (Web Socket) protocol:
- Establish a bidirectional/continuous connection between browser & server
- Data transmission is not depended on request-response modal

![By Using Socket](photo/socket-connection.png)

## A

- 
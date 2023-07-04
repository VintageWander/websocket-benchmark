# Websocket libraries in Golang, Rust and TypeScript

<br>

# I. Libraries

### 1. Golang
- [gorilla/websocket](https://github.com/gorilla/websocket) (Public archived since Dec 9 2022):  <br>
  Stars: 19.2k <br>
  Issues: 28 open / 559 closed <br>
  Last commit: Dec 2 2022 <br>
- [ws](https://github.com/gobwas/ws): <br>
  Stars: 5.6k <br>
  Issues: 10 open / 99 closed <br>
  Last commit: June 1 2023

### 2. Rust
Rust is a bit different since they do have low-level websocket libraries, and high-level websocket implementations in difference backend frameworks <br>

- [tunstenite](https://github.com/snapview/tungstenite-rs) (Low-level library): <br>
  Stars: 1.6k <br>
  Issues: 18 open / 179 closed <br>
  Last commit: June 18 2023
- [axum](https://github.com/tokio-rs/axum) (Full-featured backend framework includes high level websocket implementation): <br>
  Stars: 10.7k <br>
  Issues: 23 open / 512 closed <br>
  Last commit: June 8 2023 <br>
- [actix-web](https://github.com/actix/actix-web) (Like axum, more difficult to use, fast like [drogon-cpp](https://github.com/drogonframework/drogon), also has websocket implementation): <br>
  Stars: 17.8k <br>
  Issues: 127 open / 1.347 closed <br>
  Last commit: June 8 2023 <br>
- [soketto](https://github.com/paritytech/soketto) (Very new library, supports all features including WebSocket compression): <br>
  Stars: 75 <br>
  Issues: 3 Open / 17 Closed <br>
  Last commit: May 23 2023 <br>

### 3. Typescript
- [ws](https://github.com/websockets/ws): <br>
  Stars: 20k <br>
  Issues: 5 Open / 1.4k Closed <br>
  Last commit: April 6 2023 <br>

<br>

# II. Community support

### 1. Stack Overflow questions:
1. Typescript: `217,523` active answered questions
2. Golang: `69,573` active answered questions 
3. Rust: `37,181` active answered questions

### 2. Reddit:
1. Rust - r/rust: `238k` rustaceans
2. Golang - r/go: `207k` gophers
3. Typescript - r/typescript: `106k` members
   
### 3. Discord:
1. Rust Programming Language Community Server: `46,3` members
2. Typescript Community: `44.8k` members
3. DiscordGophers (Golang): `31.6k` members

<br>

# III. Benchmarks

## Feature coverage:
- Rust (`tokio-tungstenite`): <br>
  Coverage list: [`index.html`](./rust-ws/reports/server/index.html) <br>
  Supports: `RFC6455`

- Rust2 (`soketto`): <br>
  Coverage list: [`index.html`](./rust2-ws/reports/server/index.html) <br>
  Supports: `RFC6455`, `RFC7692` (Supports Websocket compression, covers all Autobahn test suite)

- Go (`Gorilla Websocket`): <br> 
  Coverage list: [`index.html`](./go-ws/reports/index.html) <br>
  Supports: `RFC6455`, `RFC7692` (Supports Websocket compression, covers all Autobahn test suite)
- TS (`ws`): <br> 
  Coverage list: [`index.html`](./go-ws/reports/index.html) <br>
  Supports: `RFC6455`

## Resource usage (real memory):
### 1. Rust (`tokio-tungstenite`):
- CPU Usage (%) : `21%` (average), `34%` (highest)
- Memory Usage  : `177.5MB`
- Threads       : `11`
- Time taken    : `19s`

### 2. Rust (`soketto`):
- CPU Usage (%) : `33%` (average), `50%` (highest)
- Memory Usage  : `86.6MB`
- Threads       : `11`
- Time taken    : `12m`

### 3. Golang (`gorilla/websocket`):
- CPU Usage (%) : `29%` (average), `55%` (highest)
- Memory Usage  : `90MB`
- Threads       : `11`
- Time taken    : `18m`

### 4. Typescript (`ws`):
- CPU Usage (%) : `32%` (average), `49%` (highest)
- Memory Usage  : `70MB`(ws server) + `195MB`(app code)
- Threads       : `12`(ws server) + `7`(app code)
- Time taken    : `22s`
  


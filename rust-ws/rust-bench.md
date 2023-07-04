## First, starts the rust server
```zsh
cargo run --release
```

## Then open another terminal tab and run the benchmark
```zsh
while true; do \
    ps -p 66583 -o %cpu | sed 1d | tail -n 1 >> ~/Desktop/rust-cpu.xlsx; \
    sleep 1; \
done
```

```zsh
time docker run --rm \
    -v "./config:/config" \
    -v "./reports:/reports" \
    --network host \
    crossbario/autobahn-testsuite \
    wstest -m fuzzingclient -s 'config/rust.fuzzingclient.json'
```
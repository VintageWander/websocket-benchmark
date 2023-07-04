## First run the go server
```zsh
go build -o go-ws && ./go-ws
```

## Then open another terminal and run the benchmark
```zsh
while true; do \
    ps -p 76978 -o %cpu | sed 1d | tail -n 1 >> ~/Desktop/go-cpu.txt; \
    sleep 1; \
done
```

```zsh
time docker run --rm \
    -v "./config:/config" \
    -v "./reports:/reports" \
    --network host \
    crossbario/autobahn-testsuite \
    wstest -m fuzzingclient -s 'config/go.fuzzingclient_.json'
```
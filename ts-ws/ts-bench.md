## First run the Typescript server
```zsh
yarn install && yarn start
```

## Then open another terminal tab and run the benchmark
```zsh
while true; do \
    ps -p 82243 -o %cpu | sed 1d | tail -n 1 >> ~/Desktop/ts-cpu.txt; \
    sleep 1; \
done
```

```zsh
time docker run --rm \
    -v "./config:/config" \
    -v "./reports:/reports" \
    --network host \
    crossbario/autobahn-testsuite \
    wstest -m fuzzingclient -s 'config/ts.fuzzingclient.json'
```
# Install
```
tns plugin add tns-conchecker
```

## Params

`lang`: object containing:
- `error`: error alert title || default: 'Error'
- `noInternet`: error alert message || default: 'There is no internet connection'
- `ok`: ok alert button text || default: 'OK'

## API

`ifInternet(fn,ifNot)`: if there is internet run fn() else run ifNot()

`onlyWithInternet(fn)`: run fn() only if there is internet

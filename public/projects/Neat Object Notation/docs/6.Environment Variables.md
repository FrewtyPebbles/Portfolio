## Environment Variables

Environment variables can be used in strings and section keys.

```
| For this example lets say ENVIRONMENT_VARIABLE_NAME = "3"

[:{ENVIRONMENT_VARIABLE_NAME}:]
	":{ENVIRONMENT_VARIABLE_NAME}:" : "this is ENVIRONMENT_VARIABLE_NAME's value -> :{ENVIRONMENT_VARIABLE_NAME}:"
[-]

| output:
| {'3': {'3': 'This is ENVIRONMENT_VARIABLE_NAME's value -> 3'}}
```

To denote an environment variable wrap the variable name in `:{` and `}:` it works the same way as an f-string in python.


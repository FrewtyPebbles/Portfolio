## Auto-Increment

When inside a dictionary you can prefix values with `- value` to autoincrement their key as an integer from the last integer key you set. For example:

```
[section]
	- "foo"
	- "bar"
	- 123
	7: true
	- 0.1
	- -22.2
	- -12
[-]

| output:
| {"section":{0: "foo", 1: "bar", 2: 123, 7: True, 8: 0.1, 9: -22.2, 10: -12}}
```
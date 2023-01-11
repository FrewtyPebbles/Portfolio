## Alias

Aliases can be used to add items to sections outside of that section and its parent.
The left hand side of the : is the alias name.  The right hand side of the : is the alias path.

```
<section name>
	{
		[inner section name]
			"some key": True
		[-]
		"another key": "abc"
	}
<->

| this is the alias declaration
alias alias_name : [section name] 0 [inner section name]

| the name of the alias, in this case alias_name, marks the start of an alias section.
alias_name
	"some other key": false
| The /-/ token marks the end of an alias section
/-/

| Result:
| {"section name":[{"inner section name":{"some key":True,"some other key":False},"another key":"abc"}]}
```

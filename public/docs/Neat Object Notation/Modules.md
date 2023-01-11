## Modules

Importing only specific sections of a module:

```
| This file is called filename.neat
<section name>
	{
		[inner section name]
			"some key": True
		[-]
		"another key": "abc"
	}
<->
```

```
|this is where we are importing the module
mod filename : 'section name'.0.'inner section name'

| Alternate syntax

* foldername.filename : 'section name'.0.'inner section name'
```

Importing a whole module:

```
|this file is called module.neat
[section]
	1:"abc"
[-]
```

```
| This is where we import module.neat
mod module

[another section]
	"def":2
[-]

| Result:
| {"module":{"section":{"1":"abc"}},"another section":{"def":2}}
```
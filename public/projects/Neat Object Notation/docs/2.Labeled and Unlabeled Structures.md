## Labeled Structures

```
[This is where you write the key associated with your dictionary]

	"This is a key to an inline dictionary":{"This is the key to an inline list":()}

| This [-] token denotes the end of a dictionary.
[-]

<This is where you write the key associated with your list>

|	The line below is the 0th index of this labeled list and is a list with a single item,
|	That single item is an empty dictionary
	({})

| This <-> token denotes the end of a list.
<->
```

## Unlabeled Structures

If you wish to create an unlabeled structure vertically you can do so like this:

```
~list

{
	"Some key":29873198273
}

```

Another example:

```
<section name>
	{
		[inner section name]
			"some key": True
		[-]
		"another key": "abc"
	}
<->
```

# Neat Object Notation 0.6.16

```
pip install neat-notation
```

 To load your .neat file into python, call `neat_notation.load(filename:str)`.  It will return a dictionary/list containing the content of your file.

 A smart, modular and readable configuration file format for complex multifile solutions.

## Comments

```
| Any lines which are to be commented out must start with a pipe character.
| The pipe must ALWAYS be at the beginning of the line for comments.
```

## Global Scope

 By default the global scope of a Neat config file is a dictionary, if you wish to specify otherwise you must put this somewhere in your .neat file on its own line

```
~list
```

## Escape Character

Escape characters can be used to use syntax characters inside of their syntaxes or to use the combination of characters that creates a token such as the environment variable wrapping token as their literal characters, like so:

```
[section\] key\]]
	"\:{this is my key\}:" : 123
[-]
| output:
| {'section] key]': {':{this is my key}:': 123}}
```


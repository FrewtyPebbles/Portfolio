## Earwig HTML Renderer

```python3
print(
 eh("header", {}, [
   eh("title", {}, [
    "This is a test site."
   ])
  ])+
  eh("body", {}, [
   eh("p",{},[
    f"{z}"
   ], ind=z) for z in range(1, 6)
  ]
  ).push([
   eh("script",{},[
    """alert("Hello.")"""
   ],singleAttributes=["defer"])
  ])
)
```

The Earwig HTML Renderer allows you to easier tokenize certain elements and apply indexes to them with the _ind_ attribute.  This allows for easier server side procedural element generation, element sorting, and other useful features that are implemented into the _eh_ class. The above code will render the following HTML:

```html
<header>
 <title>This is a test site.</title>
</header>
<body>
 <p>1</p>
 <p>2</p>
 <p>3</p>
 <p>4</p>
 <p>5</p>
 <script defer>
  alert("Hello.")
 </script>
</body>
```

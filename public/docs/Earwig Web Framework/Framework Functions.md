
## Framework Functions

These functions can be executed in any _.py_ or _.ear_ page file as declared in the routes of your _settings.EWS_ file.

---

`mime_type(mime:str):`

Change the response mime type.  Returns the mime type.

---

`set_headers(headerDict:dict = {})`

Set/add the headers for the response.  Returns the dictionary of all the headers.

---

`set_setting(_setting:str, _newvalue)`

Change/set a setting. returns the setting's new value.

---

`delete_setting(_setting:str) -> bool`

Deletes a setting. Returns true on success, False on failure.

---

`set_route(_route:str, _path:str)`

Sets a new or existing route dynamically.  Returns a tuple of ( **_route**, **_path** ).

---

`delete_route(_routeOrPath:str, _isRoute: bool = True) -> bool`

Deletes an existing route.  Returns true on success, fail on failure.

---

`append_setting(_setting:str, _appendvalue)`

Appends the *_appendvalue* to the value of the setting provided.  On failure returns false. On success returns the setting's new value.

---

`pop_setting(_setting, num:int = False)`

Performs a _.pop()_ on the value of the setting provided.

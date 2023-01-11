
## Framework Globals and Accessables

These globals can be accessed in any _.py_ or _.ear_ page file as declared in the routes of your _settings.EWS_ file.

---

`R_get["requestAttribute"]`

R_get is a dictionary containing all parameters/attributes of the incoming GET request.

---

`R_post["requestAttribute"]`

R_post is a dictionary containing all parameters/attributes of the incoming POST request.

---

`_BASE_URL`

Provides the Root of the http URL.  Example _http://yourdns.com/_

---

`_FULL_URL`

Provides the full http URL with route.  Example _http://yourdns.com/pages/about_

---

`_PATH_URL`

Provides the path after the base of the page URL. Example _/pages/about_

---

`_ORIGIN`

Provides the address of the origin of the request (ie: the request client's ip).  Can be used to create blacklists dynamically.

---

`_COOKIES`

Provides a dictionary of all of the cookies from the incoming request.

---

`_MIME_TYPE`

The current mime type for the requested page.

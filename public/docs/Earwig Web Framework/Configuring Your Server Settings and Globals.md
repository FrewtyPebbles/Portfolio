## Configuring Your Server Settings and Globals

Earwig server settings are configured in your _settings.EWS_ file.  A bare bones settings.EWS file might look like this:

```lua
/!/ Server Settings:

port=8000
ip=localhost
devmode=false

/!/ Json User Defined Settings:

hashedAuthParameters~["password", "securityQuestion"]
exampleDict~{"setting":"abc"}
startupMessage~"SERVER STARTED"
exampleNumber~-9.99
exampleBool~false

/!/ Init File:

@_boot_.py

/!/ Forbidden File Extensions:

!ear
!py
!db
!EWS

/!/ Startup Routes:

~=root.py
```

---

__NOTE__: The order in which you add settings to your _settings.EWS_ file does not matter.

### IP AND PORT

your server IP and Port can be defined by adding the following to your settings file:

```lua
port=8000
ip=localhost
```

localhost is the ip for a localy hosted server.

### DEVMODE

```lua
devmode=false
```

__IMPORTANT__: It is important that when you are deploying your server that _devmode_ is set to _false_.  _devmode_ can cause slowdowns (and potentialy security issues in future versions of earwig) if enabled in your deployed server.

_devmode_ allows for better python error checking when dealing with _.py_ and _.ear_ pages along with other debug features that arent fully implemented yet.  Dev mode also ensures a full recompile of your _.py_ and _.ear_ pages with every request.

### COMMENTS

`/!/` is the prefix for commented lines

### USER DEFINED SETTINGS/GLOBALS

```lua
settingName~["SomeJson":{"AlsoJson":0,"StillJson"}, "NotNotJson":-123.456]
AnotherSetting~"A string."
AThirdSetting~-3333.3333
AFourthSetting~123
AFithSetting~false
```

_~_ is used as the operator to assign custom settings.  Custom settings can be assigned to any valid json, float, string, integer, or boolean.

### BOOT FILE PATH

The boot file is a _.py_ script that is executed at the startup of your server.  To define the path to a boot file, use the _@_ prefix before your boot file path in your settings file.

Example:

```lua
@src/startup/boot.py
```

### FORBIDDEN EXTENSIONS

Forbidden extensions are defined with the prefix _!_.

Example:

```lua
!db
!py
!ear
```

Declaring extensions as forbidden will make it impossible for http clients to recieve the raw data from requested files with that extension.

### ROUTING

Routing is how you declare the url routes and their corresponding _.ear_ or _.py_ page file.  Its as easy as `urlroute/urlroute=filepath/file.py` or `urlroute/urlroute=filepath/file.ear`.

Example:

```lua
~=pages/root.py
about=pages/about.py
contact=pages/contact.ear
```

_~_ is used to declare the URL's root route.

`~=pages/root.py` means that `pages/root.py` will handle requests sent to `http://yourdns.com/`

`about=pages/about.py` means that `pages/about.py` will handle requests sent to `http://yourdns.com/about`

`contact=pages/contact.ear` means that `pages/contact.py` will handle requests sent to `http://yourdns.com/contact`

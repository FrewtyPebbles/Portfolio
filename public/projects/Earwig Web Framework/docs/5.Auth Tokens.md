
## Auth Tokens

_WARNING: The current standard library auth tokens utilizes SQLite.  Only use this if you wish to use SQLite as your database._

### SYMETRIC AUTH TOKENS

Earwig provides an easy system to set up login tokens and credentials with just a class and a few functions.  With this system you can decide which login parameters are sensitive/hashed.  Auth tokens are both hashed then excrypted.

---

**_CONSTRUCTOR_**

`SymmetricAuthTokens(identifier:str, dbName:str="Accounts", accountTableName:str="Accounts", authTableName:str="symetricAuthTokens")`

The _SymmetricAuthTokens_ class is used as the main handler for your auth system.  You can initialize the class either in a _with_ statement, or call _.close()_ when no longer in use.  This will initialize the auth token table if not already existing.  Each of its constructor's parameters provide a level of control over your auth system:

 - __identifier__ : This is the column name/account parameter in the database that will act as the association between each account and tokens made by those accounts.  The best practice is to make this an account parameter that is not sensitive.
 
 - __dbName__ : This is the name of the _.db_ file that your auth system will connect to.
 
 - __accountTableName__ : This is the name of the table in your auth database that will hold all user accounts.
 
 - __authTableName__ : This is the name of the table in your auth database that will hold all created auth tokens.

---

**_INITIALIZING THE ACCOUNT SYSTEM_**

`.initAccountSystem(requiredParameters:tuple | list = [], authParameters:tuple | list = [], **kwargs:str) -> bool`

The _.initAccountSystem_ member function is used to initialize the account system.  To maximize performance, this should only be called in a _boot.py_ file.  This function will return true on success and false on failure.  The parameters you provide will determine how your account system will function:

 - __requiredParameters__ : The account parameters/database columns that you want to make required in order to successfully make an account.  On success, this will return _true_ and on failure this will return _false_.
 - __authParameters__ : All account parameters/database columns that you would like users to use to login to their account/recive an auth token.
 - __kwargs__ : All and every account parameter that you wish to store in the database/account table should be named as a key and their SQL type should be its value as a string.

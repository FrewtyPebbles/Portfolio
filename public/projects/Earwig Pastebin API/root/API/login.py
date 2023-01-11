import json

#/login

mime_type("json")

if "username" in R_post.keys() and "password" in R_post.keys():
	username = R_post["username"]
	password = R_post["password"]

	with SymmetricAuthTokens("username", dbName='data/data') as accountManager:
		accountManager.configAccountSystem(setting["hashedAuthParameters"])
		print(json.dumps(accountManager.login(username, "Failed to login.", hashAuthID = False , username = username, password = password)))
else:
	print(json.dumps({"error":"Username and/or password missing from request."}))

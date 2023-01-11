import json

#/signup

mime_type("json")

if "username" in R_post.keys() and "password" in R_post.keys() and "useremail" in R_post.keys():
	username = R_post["username"]
	password = R_post["password"]
	useremail = R_post["useremail"]

	with SymmetricAuthTokens("username", dbName='data/data') as accountManager:
		accountManager.configAccountSystem(setting["hashedAuthParameters"])
		accountManager.addAccount(username = username, password = password, email = useremail)
	print(json.dumps({"username":username, "password":password, "useremail":useremail}))
else:
	print(json.dumps({"error":"Username and/or password missing from request."}))

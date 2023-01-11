import hashlib as HL
import json
import sqlite3 as SL

#/make

mime_type("json")
loggedIn = False
if "authToken" in R_post.keys() and "authID" in R_post.keys():
	with SymmetricAuthTokens("username", dbName='data/data') as accountManager:
		accountManager.configAccountSystem(setting["hashedAuthParameters"])
		loggedIn = accountManager.checkLogin(R_post["authToken"], R_post["authID"])
		Log_Terminal(f"Account : {loggedIn}")

paste = R_post["paste"]
image1URL = R_post["image1URL"] if "image1URL" in R_post.keys() else ""
image2URL = R_post["image2URL"] if "image2URL" in R_post.keys() else ""
image3URL = R_post["image3URL"] if "image3URL" in R_post.keys() else ""
image1 = R_post["image1"] if "image1" in R_post.keys() else ""
image2 = R_post["image2"] if "image2" in R_post.keys() else ""
image3 = R_post["image3"] if "image3" in R_post.keys() else ""
identifier = HL.sha1(R_post["authID"].encode("ascii")).hexdigest() if loggedIn else HL.sha1(_ORIGIN.encode("ascii")).hexdigest()
with SL.connect("data/data.db") as con:
	SQLquery = f'''SELECT premium FROM Accounts WHERE username=?'''
	cur = con.cursor()
	cur.execute(SQLquery, (R_post["authID"],))
	premium = bool(cur.fetchone()[0])

with SL.connect("data/data.db") as con:
	SQLquery = f'''SELECT MAX(pasteid) FROM Pastes WHERE identifier=?'''
	cur = con.cursor()
	cur.execute(SQLquery, (identifier,))
	maximumPasteID = cur.fetchone()
	pasteID = 0
	if maximumPasteID[0] is None:
		pasteID = 1
	else:
		pasteID = maximumPasteID[0] + 1

	SQLquery = f'''INSERT INTO Pastes (pasteId, identifier, slug, paste, imagepathone{", imagepathtwo, imagepaththree" if premium else ""})
		VALUES(?, ?, ?, ?, ?{", ?, ?" if premium else ""})'''

	slug = HL.sha1(f"{identifier}-{pasteID}".encode("ascii")).hexdigest()

	parameters = (pasteID, identifier, slug, paste, image1URL, image2URL, image3URL,) if premium else (pasteID, identifier, slug, paste, image1URL,)
	
	cur.execute(SQLquery, parameters)
	set_route(slug, "API/getPaste.py")
	if image1 != "":
		image1.save(f'data/userImages/{HL.sha1(f"{identifier}-{pasteID}-1".encode("ascii")).hexdigest().decode()}.png')
		image2.save(f'data/userImages/{HL.sha1(f"{identifier}-{pasteID}-2".encode("ascii")).hexdigest().decode()}.png')
		image3.save(f'data/userImages/{HL.sha1(f"{identifier}-{pasteID}-3".encode("ascii")).hexdigest().decode()}.png')
	con.commit()
print(json.dumps({"slug":slug}))
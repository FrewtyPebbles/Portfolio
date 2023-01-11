import sqlite3 as SL

VER = "0.1.0"

with SL.connect("data/data.db") as con:
	SQLquery = f'''CREATE TABLE IF NOT EXISTS Pastes
		(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, pasteId INTEGER NOT NULL, slug VARCHAR(40) , identifier VARCHAR(40), paste TEXT, imagepathone varchar(100), imagepathtwo varchar(100), imagepaththree varchar(100))'''
	cur = con.cursor()
	cur.execute(SQLquery)
	con.commit()

with SymmetricAuthTokens("username", dbName='data/data') as accountManager:
	accountManager.initAccountSystem(
		requiredParameters=("username", "password", "email"),
		authParameters=setting["hashedAuthParameters"],
		parameterDefaults = {
			"premium":0
		},
		username = "varchar(30)",
		password = "varchar(30)",
		premium = "INT",
		email = "varchar(45)")
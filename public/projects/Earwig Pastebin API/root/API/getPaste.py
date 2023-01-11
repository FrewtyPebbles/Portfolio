import hashlib as HL
import json
import sqlite3 as SL

#/<SHA-1Hash>

mime_type("json")

slug = _PATH_URL.split("/")[1]

# id, pasteId, slug, identifier, paste, imagepathone, imagepathtwo, imagepaththree

with SL.connect("data/data.db") as con:
	SQLquery = f'''SELECT * FROM Pastes WHERE slug=?'''
	cur = con.cursor()
	cur.execute(SQLquery, (slug,))
	paste = cur.fetchone()
	id, pasteId, slug, identifier, paste, imagepathone, imagepathtwo, imagepaththree = paste[0], paste[1], paste[2], paste[3], paste[4], paste[5], paste[6], paste[7]
	print(json.dumps({
		"paste":paste,
		"imagepathone":imagepathone,
		"imagepathtwo":imagepathtwo,
		"imagepaththree":imagepaththree,
	}))

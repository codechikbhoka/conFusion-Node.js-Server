#start mongo shell:

mongo




#change to collection

use conFusion





#see all collections

db.getCollectionNames()





#see all entries for collection "users"

db.users.find().pretty()




#remove some entry

db.users.remove({"username":"vivek"})


#make a user admin using update

db.users.update({username:"admin"},{$set:{admin:true}})




# to import in remote mongo db like Modulus
# Verify that mongodb version are same or the one which is initiating connection is newer

mongoimport --host olympia.modulusmongo.net --port 27017 --db Z8ejeguj  -u 'root' -p 'root' --collection promotions < 'promotions.json'



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





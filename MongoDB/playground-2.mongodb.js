/*
MongoDB Example CodeBase:

const database = "college";
const collection = "cse";
use(database);

1. Show the database:  show dbs

2. Create a new database: 
syntax: use(dbName)
    eg: use(database)

3.1 Create a new collection in db: 
syntax: db.createCollection(collectionName)
    eg: db.createCollection(collection)
    
3.2 To show collections: show collections

3.3 To drop collections: 
syntax: db.collectionName.drop()
    eg: db.collection.drop()

4. Delete the Database : db.dropDatabase()

5.1 To store single data in collections(insertOne): 
syntax: db.collectionName.insertOne({key:"value"})
    eg: db.collection.insertOne({ name: "sanga", gpa: 7.8 });

5.2  To store multiple data in collections(insertMany):
syntax: db.collectionName.insertMany([{key:"value"}, {key:"value"}])  //arrayOfObjects
    eg: db.collection.insertMany([
        {
            name: "sanga",
            gpa: 7.8,
            placedCompany: "xyz",
        },
        {
            name: "santha",
            gpa: 8.2,
            placedCompany: "azf",
        },
        {
            name: "santhi",
            gpa: 8.5,
            placedCompany: "fgh",
        },
    ]);

6. To show all the data's in the collection:
syntax: db.collectionName.find()
    eg: db.collection.find();

7.1 To sort Ascending:
syntax: db.collectionName.find().sort({key:1}) //ascending(key:1)
 eg: 1: db.collection.find().sort({ name: 1 }) //ascending(alphabetical(a-z))
 eg: 2: db.collection.find().sort({ gpa: 1 }) //ascendingOrder

7.2 To sort Descending:  
syntax: db.collectionName.find().sort({key:-1}) //descending(key:-1)
 eg: 1: db.collection.find().sort({ name: -1 }) //descending(alphabetical(z-a))
 eg: 2: db.collection.find().sort({ gpa: -1 }) //descendingOrder

8. To limit the displaying, how many data's in collection:  
syntax: db.collectionName.find().limit(n) // it displays 'n' number of available data in collections
    eg: db.collection.find().limit(1)   // displays only 1 student(since limit is set as "1")

9.To find the particular data's in collection: 
{filter} - selects all the data if it is blank or else it selects the field given inside that {name:"sanga"}
{projection} - it specifies which field we want to display , if we keep {name:true, _id:false} - it displays only "name" field and omits ID
syntax: db.collectionName.find({query},{projection})
 eg: 1: db.collection.find({name: "virat"}); //querys only the name with "virat"
 eg: 2: db.collection.find({}, { _id: false, name: true }); //shows only name field

10.1 To update single data in the collection : 
($set) - to update a field
($unset) - to delete the already existing field
($exists) - checks whether the data is there to filter it out

syntax: db.collectionName.updateOne({filter}, {update})
 eg: 1: db.collection.updateOne(
        { name: "sanga" },
        { $set: { quote: "Kandipa sathikanum da!!!" } }
    );
 eg: 2: db.collection.updateOne({ name: "sanga" }, { $unset: { quote: "" } });   

10.2 To update multiple data in the collection :
syntax: db.collectionName.updateMany({filter}, {update})
 eg: db.collection.updateMany(
        { quote: { $exists: true } },
        { $set: { quote: "Kandipa sathikanum da Macha!!!" } }
    );

11.To delete the document in collection : 
syntax : db.collectionName.deleteOne({query})
  eg: 1: db.collection.deleteOne({name:"sanga"})
  eg: 2: db.collection.deleteMany({quote:{$exists:false}})

12.comparison operators: 
    $e -> equals
	$ne -> not equal
	$lt -> less than
	$lte -> less than equals to
	$gt -> greater than
	$gte -> greater than equals to
    $in -> in
    $nin -> nin

eg: 1: db.collection.find({gpa:{$gte:5, $lte:7}})
//to find all the documents whose gpa attribute's value is between 5 and 7
	
eg: 2: db.collection.find({name:{$in:['value 1', 'value 2', 'value n']}})
//to find all the documents whose name attribute's value is mentioned "in" array
	
13.Logical operator:
	$and
	$or
	$nor - both false, then only true
	$not 
	 
eg: db.collection.find({$and: [{name:{$exists:true}}, {quote:{$exists:true}}]})
// if both name & quote field exists only it will display

14.Indexes - (B-Tree) Approach

db.collection.find({name:'value'}).explain('executionStats')
// to get info about the execution of the query
	
db.collection.createIndex({name : 1}) //ascending
// Index will be created on the 'name' field(eg: "name_1")
	
db.collection.getIndexes()
// will return all the indexes created for the collection
	
db.collection.dropIndex("name_of_index")
// to drop the index

15. Extras
-> $inc - Increment the value of the field by the amount given
eg: db.users.updateOne({ age: 12 }, { $inc: { age: 2 } })

-> $rename - Rename a field
eg: db.users.updateMany({}, { $rename: { age: “years” } })

-> $push - Add a value to an array field
eg: db.users.updateMany({}, { $push: { friends: “John” } })

-> $pull - Remove a value from an array field
eg: db.users.updateMany({}, { $pull: { friends: “Mike” } })

-> skip - Skip a set number of documents from the beginning
eg: db.users.find().skip(4)
// Skip the first 4 users when returning results. This is great for pagination when 
combined with limit

-> findOne - The same as find, but only return the first document that 
matches the filter object
eg: db.users.findOne({ name: “Kyle” })
// Get the first user with the name Kyle

-> countDocuments - Return the count of the documents that match the filter object passed to it.
eg: db.users.countDocuments({ name: “Kyle” })
// Get the number of users with the name Kyle

-> replaceOne - Replace the first document that matches the filter object with the exact object passed as the second parameter. This will completely overwrite the entire object and not just update individual fields.
eg: db.users.replaceOne({ age: 12 }, { age: 13 })
// Replace the first user with an age of 12 with an object that has the age of 13 as 
its only field

*/

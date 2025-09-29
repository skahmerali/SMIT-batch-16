Stps to create a Node js Server
download Node js server from:
https://nodejs.org/en/download
then install it 
to check server is downloaded and install so need to check though terminal : node -v


npm init

.gitignore is responsible to avoid files push into the github,
when you clone or pull the code on other pc so you need to run first npm i || npm install


15/5/2025
create an array, in the array there is an object which holds users email and password data
make sure atleast add 10 users data randomly but this is nacessary to check weather user emails are different with each other 
then need to create /login API and check user is valid or not if user is valid so show "Login is successfully" other wise login is failed 


29/09/2025
    MongoDb :
        No SQL vs SQL difference
        Create Mongodb account 
        create cluster 
        create database 
        install mongoose 
        For connection:
        mongoose.connect('link apna wala lgaogy', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
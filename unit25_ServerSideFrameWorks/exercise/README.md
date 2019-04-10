# Express Basics Assignment

1. Create a brand new Express app from scratch
2. create a package.json using `npm init`
3. add an express dependency
4. add the following routes
    1. visiting '/' should print "Hi there, welcome to my assignment".
    2. visiting '/speak/:animal' should return:
        1. pig => the pig says oink
        2. cow => the cow says moo
        3. dog => the dog says woof woof
    3.  visiting '/repeat/:word/:times' should return the word that number of times
    4.  any other route should return "sorry, page not found...What are you doing with your life?"
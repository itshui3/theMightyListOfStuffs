#Mighty List
<br /><ins>First Release MvP as of 1.24.21. More to come maybe.</ins>
<br /><ins>API Repo: https://github.com/mighty-list-API/mighty-list-API</ins>

Mighty list is an idea I had from finding Notion.so's nested page system really useful for organizing my own tasks. Instead of holding documents though, I thought it would be cool if Trello-esque Tasks were held instead. I like trello boards for organizing implementation details but I didn't like how you had to back out to open other boards. Mighty List is my solution to this. 

#What I learned

I taught myself mongodb(with the mongoose ODM) and graphql(implemented on the API with express-graphql, and on the react client with apollo-client) with this project. There's still so much to learn about these technologies and I'm by no means an expert but I'm grateful that I can pick these things up on my own now and build out cool ideas with tools I haven't used before. 

The data in this app is really nested, managing that complexity was a fun exercise in ReactJS as well! Normally I just hold state in useState, but during this project really fell for useReducer. 

This project was the first time I played around with drag & drop. I don't use the default functionality because I'm using it to resort items. Instead the id of dragged item is passed through an algorithm that determines how to shift the array according to what I wanted as expected behavior. 

There's a cool effect I came up with(probably reinventing the wheel in not the best practice, but I'm proud of it!) to unmount components that I'm referring to as ComponentBlur. The problem this solves is when blurring from one dom node to another within the same component, onBlur listener can't tell that user is clicking within the same component because blur occurs on node. There's nothing natively telling the listener that user's click is still within the same component so unmount occurs unexpectedly. I found two ways to solve this but ended up settling on the async method where clicking on a node within the same component 'locks' the ability to unmount and then asynchronously unlocks. It took less code than the other method(which I can't remember anymore tbh). 

#Technologies Used
API: <br/>
    "express": "^4.17.1",<br/>
    "express-graphql": "^0.12.0",<br/>
    "graphql": "^15.4.0",<br/>
    "mongoose": "^5.11.11"<br/>
Client:<br/>
    "@apollo/client": "^3.3.6",<br/>
    "graphql": "^15.4.0",<br/>
    "react": "^17.0.1",<br/>
    
##Docs
Local Boot-Up: 

yarn install<br />
yarn start

Current Progression Towards MvP: 

UI:

Users can add embedded pages

- [x]  Crudbox hover propagates to parent(undesired behavior)
- [x]  onComponentBlur not working
- [x]  Crudbox onClick should pop-up an addPage modal
- [ ]  Fix componentBlur contradicting mountCrudBox(doesn't really affect user experience, neglect for the time being)

Users can add boards/embedded boards

- [x]  Input Board compo at root level(and associated UI flow)
- [x]  Input Board compo in nested pages(and associated UI flow)

Logic:

Users can add embedded pages

- [x]  User can persist nested pages
- can't seem to fetch page root from _id args.rootID
- will require flattening recursively embedded pages in API
- [x]  Write separate queries within Pages to fetch by reference when user requires, rather than the entire embedded doc

Users can add boards/embedded boards

- [x]  Root level Input Board compo can send queries/mutations
- [x]  Nested Input Board compo can send queries/mutations

User can make/modify boards

- [x]  Root Board can update
- [x]  Nested Board can update

Major Features in Next Release(To be continued after portfolio): 

- [ ]  additional CRUD for pages(edit title/delete)
- [ ]  additional CRUD for boards(edit title/delete)
- [ ]  drag & drop todos between tasks

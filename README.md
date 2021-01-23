
Local Boot-Up: 
yarn install
yarn start

Note: requires API/mongodb connection to work. API: https://github.com/mighty-list-API/mighty-list-API
Another Note: Deploy probably broken, changes being made daily

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

- [ ]  Root Board can update
- [ ]  Nested Board can update

Major Features in Next Release(To be continued after portfolio): 

- [ ]  additional CRUD for pages(edit title/delete)
- [ ]  additional CRUD for boards(edit title/delete)
- [ ]  drag & drop todos between tasks

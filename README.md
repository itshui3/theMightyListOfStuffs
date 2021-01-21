
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
- [ ]  Fix componentBlur contradicting mountCrudBox

Users can add boards/embedded boards
- [ ]  Input Board compo at root level(and associated UI flow)
- [ ]  Input Board compo in nested pages(and associated UI flow)

Logic:

Users can add embedded pages
- [ ]  User can persist nested pages
- can't seem to fetch page root from _id args.rootID(looks like recursive embedding w/ mongodb was a bad idea, no wonder notion does separate fetches upon expand lel)
- will require flattening pages schema on the API side
- [ ]  Write separate queries within Pages to fetch by reference when user requires, rather than the entire embedded doc

Users can add boards/embedded boards
- [ ]  Root level Input Board compo can send queries/mutations
- [ ]  Nested Input Board compo can send queries/mutations

Research Needed: 

- [x]  stopPropagation, bubbling
- [x]  MongoDB fetching nested model data

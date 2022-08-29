# Track My Project

Track my project is simple project management and tracking tool with following features:

- Manage projects.
- Track Project: Maintain **5** Stages of the project.
- Dashboards.

## Running App
- Make sure you have *docker* installed and running and you also need latest version of *node*.
- Run following commands After a while, a new browser tab will open, and you can start exploring the application. If no tab is open, navigate to http://localhost:3000.
```js
npm install && npm start
```
## Features

### Manage project

- Managing project includes changining the project *Stages* or performing a CRUD create, read, update, delete operation on the project.

### Track Project

- Tracking project includes **5** key stages.
  - **New**: _Default_ status when project is created.
  - **In Progress**: Work in progress.
  - **Completed**: Project finished successfully.
  - **Cancelled**: Project cancelled.
  - **Archived**: Project marked as archived.

### Dashboards

- Home screen displays the dashboard stats with visual charts.
  - Number of project for each *Stage*.
  - Top 5 most expensive projects.

## Track my project workings
- Rows define actions, E.g., Delete a project.
- Columns represent the *Stages* of the project.
- 3rd row, 5th columns state: A project can be *Deleted* in *Archived* stage.


|           	| New 	| In Progress 	| Completed 	| Cancelled 	| Archived 	|
|-----------	|-----	|-------------	|-----------	|-----------	|----------	|
| Create    	| Yes 	| No          	| No        	| No        	| No       	|
| Update    	| Yes 	| Yes         	| No        	| No        	| No       	|
| Delete    	| No  	| No          	| NO        	| No        	| Yes      	|
| Cancel    	| No  	| Yes         	| No        	| No        	| No       	|
| Archive   	| Yes 	| Yes         	| Yes       	| Yes       	| No       	|
| Unarchive 	| No  	| No          	| No        	| No        	| Yes      	|

## Tech Stack
- NextJS, WunderGraph, TypeScript, PostgreSQL, react-chartjs-2, Chakra UI

## Any Questions or Suggestions?
- Feel free to open an issue.


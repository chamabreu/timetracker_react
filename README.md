# How To

- Clone this Repo and the API of timetracker - you can find it [here](https://github.com/chamabreu/timetracker_node)
- cd to both Projects and do the "npm install" to install all node_modules
- To get connection to the MongoDB you need a valid URI.
- Place a .env file in the root of the "timetracker_node" Project and add your URI to a variable like this:
  - MONGODB_URI=YOUR_URI_GOES_HERE
- A bit of dummy Data should exist.
- run in both projects "npm start" to start them
- The frontend runs on "localhost:3000" and the backend on "localhost:5000"
- Open your browser and go to "localhost:3000"


# Timetracker Daylog

09:00 - 09:30: Understanding and Set Up for Project (Picture #1)

---

09:30 - Start Coding

09:30 - 10:17: Setup React App and working on Task 1 -> Counter (Renamed from TimeTracker)

---

 10:17 - 12:15: Task 2 -> Coding

10:17 - 10:22: Task 2 -> Whiteboard Layout (Picture #2)

10:22 - 10:54: Fighting with JS Date and formatting - bypassing it now and just save the seconds from Date.now()

10:54 - 11:41: Order Components for Task 2 - maybe using useContext or useReducer to update child components from Parent?!

Struggling on Reset Counter from Top

Pausing this and going to Backend

11:41 - 11:55: Node Backend Init and basic Routes working. Mongoose Connection established

11:55 - 12:15: Setting axios and Routes - 12:15 first Task is saved.

---
 12:15 - 13:00: Break

---
 13:00 - 14:11: Task 3 - Recordings

13:00 - 13:12: Whiteboard Layout (Picture #3)

13:12 - 13:43: API Call for all Tasks and List them

13:43 - 14:06: Implemented search for descriptions

14:06 - 14:11: Pagination - never done something like this, going for research to check if i should first optimize the application or continue this task.

Discovered that Bootstrap has a Pagination Component.

Skipping this step and go optimizing the App.
---
 14:11 - 16:40: Optimizing Process

Tasks:

- 14:11 - 15:00: better and cleaner UI
- 15:00 - 15:30: Counter logic now depends on Date.now() to ensure a stable time measurement
- 15:30 - 15:50: Shifted TaskCounter up to be able to reset Counter on Tasktracker
- 15:50 - 16:20: Updated Timeview in Tasktracker and Recordings. Now the Time and Date is good to read. User Feedback for Saving implemented.
- 16:20 - 16:40: Implementing Table in Recordings. First Time I used a table from Bootstrap. Worked fine.
---
 16:40 - 18:00 Finishing up for Distribution

---

# Summary

This was fun. It's a bit sad that I could not complete the last Task with the Pagination. But I am happy with the Result so far.

I had a bit struggle with UI Design. Thats not my favorite thing.

What I "learned on the go" was the handling with Dates and the Table.

---

# And now?

## What I would implement, if I had more Time:

- Docker for easier distribution
- Better statemanagement on TaskTracker. Would use useContext() and/or useReducer() or maybe Redux. This I did not so often, so I decided to stick to the "simple" useState and props.
- Delete option to delete Tasks from Database
- Local MongoDB-usage for better sharing
- Pagination, of course. I had somthing like Datatables in mind, while I worked on the Recordings-Page. There would be an Pagination option integrated. But never implemented it in React so I decided to go with the "simple form" of a table.
- The Backend is to "simple". I would implement better errorhandling, userfeedback etc...
- And then, maybe the most important, better documentation. On the Counter.js I started with documentation, but at the end it got a bit lost. I think with more Routine and daily business this will be a high priority task in future.
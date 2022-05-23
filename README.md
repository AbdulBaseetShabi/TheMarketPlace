# The Market Place
## Table of Content 
 - [About](#about)
 - [Inspiration](#inspiration)
 - [Technologies](#technologies)
 - [Client Pages](#client-pages)
 - [Server Routes](#server-routes) 
 - [Usage](#usage)

### About
---
The Market Place is a web application that allows students to buy and sell used textbooks amongst themselves, with the growth potential to sell other used items, such as, furnitures and appliances.

### Inspiration 
---
Students generally take about 10 - 15 courses per year and require textbooks and other reading resources for each course. Most textbooks cost in the 3 figure range which contributes to the “bills” students pay (considering most students have low disposable income). Some student work part-time and sometimes delay graduating to earn enough to be able to afford the other expenses of an academic term. Others opt for illegal methods to acquire the textbooks they need. Education should not be expensive, this is why The Market Place provides a better alternative of a low cost, legal way to acquire textbooks.

### Technologies 
---
- **The Client side** was built on ***Reactjs*** for the view, ***Firebase Api*** to handle user's authentication and ***Twilio*** for notification messages.
- **The Server side** was built on ***Nodejs*** 

### Client Pages 
--- 
- ### *Login* 
  ![login](https://user-images.githubusercontent.com/44884500/169718376-9d69be77-50c0-4eea-b387-180741d86365.jpg)
- ### *Sign Up*
  ![signup](https://user-images.githubusercontent.com/44884500/169718462-f282ca39-c204-4b95-88b5-7f821f27f210.jpg)
- ### *Market*
  ![market](https://user-images.githubusercontent.com/44884500/169718865-df033b68-58b2-44e3-8030-1fff501f32c8.jpg)
- ### *Add a New Book*
  ![anbts](https://user-images.githubusercontent.com/44884500/169718987-a216b0ac-8706-48b3-812f-4120e60fd911.jpg)
- ### *Published Books*
  ![publishbook](https://user-images.githubusercontent.com/44884500/169718977-834b15fb-33cd-4806-8568-165815cde33e.jpg)
- ### *Unpublished Books*
  ![unpublishedbooks](https://user-images.githubusercontent.com/44884500/169719017-fe2c8c12-4bb6-4857-9baa-a4a90562bb0a.jpg)
- ### *Sold Books*
  ![sold](https://user-images.githubusercontent.com/44884500/169719032-dd43ca9d-2b54-4e88-8715-918531053d13.jpg)
- ### *Account Details* 
  ![account](https://user-images.githubusercontent.com/44884500/169719044-efe89dd4-6cc0-419a-aad1-1a588970b0ac.jpg)
- ### *Payment Information*
  ![payment](https://user-images.githubusercontent.com/44884500/169719055-8467d82f-f866-4f08-857a-28edfca93526.jpg)

### Server Routes
--- 
- ### *GET* /
	- Returns a string (Server is running...)  

- ### *POST* /addData
	- ***Query***
		- *db*: The database to which the new data should be added to
	- ***Body*** 
		- *any*: The information to be added to the database

- ### *POST* /removeData
	- ***Query***
		- *db*: The database to which the data should be deleted from
	- ***Body*** 
		- *_id*: The unique identifier to identify the data to be deleted 

- ### *POST* /updateData
	- ***Query***
		- *db*: The database to which the data should be updated
	- ***Body*** 
		- *any + _id*: The information to be used in the database (replaces previous entry that has thissame _id)
		
- ### *POST* /sendMessage
	- ***Body*** 
		- *to*: The number to send the message to
		- *message*: The message to send to the *to* field

### Usage
---
   - ### General
      ```sh
      git clone https://github.com/AbdulBaseetShabi/TheMarketPlace
      ```
   - ### Client 
     ```sh
     cd Client
     npm start
     ```
   - ### Server 
     ```sh
     cd Server
     npm start
     ```

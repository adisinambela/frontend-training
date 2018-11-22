# JavaScript DOM 3

---

## Form Processing

* Validation
* Save data

---

## Web storage

You can store data locally inside user's browser with web storage

|                        	| Cookie             	| Local Storage 	| Session Storage 	|
|------------------------	|--------------------	|---------------	|-----------------	|
| **Capacity**           	| 4kb                	| 10mb          	| 5mb             	|
| **Browsers**           	| HTML4 / HTML5      	| HTML5         	| HTML5           	|
| **Accessible From**    	| Any Window         	| Any Window    	| Same Tab        	|
| **Expires**            	| Manually set       	| Never         	| On Tab Close    	|
| **Storage Location**   	| Browser and Server 	| Browser       	| Browser         	|
| **Sent with Requests** 	| Yes                	| No            	| No              	|

### Web storage methods

1.  window.localStorage : store data locally without expiration date
1.  window.sessionStorage : stores data for one session (data is lost when the browser tab is closed)

### Local storage

You can use `setItem`, `getItem`, `removeItem` or `clear` method to manage local/session storage data.

```js
//store to local storage
localStorage.setItem("coding_bootcamp", "Impact Byte");
localStorage.coding_bootcamp = "Impact Byte";

//get data from local storage
var result = localStorage.getItem("coding_bootcamp"); //result:Impact Byte

//remove data from local storage
localStorage.removeItem("coding_bootcamp");
var result = localStorage.getItem("coding_bootcamp"); //result:null

//clear all local storage
localStorage.clear();
```

### Session storage

```js
//store to session storage
sessionStorage.setItem("coding_bootcamp", "Impact Byte");
sessionStorage.coding_bootcamp = "Impact Byte";

//get data from session storage
var result = sessionStorage.getItem("coding_bootcamp"); //result:Impact Byte

//remove data from session storage
sessionStorage.removeItem("coding_bootcamp");
var result = sessionStorage.getItem("coding_bootcamp"); //result:null

//clear all session storage
sessionStorage.clear();
```

---

### Javascript Cookies

Cookies is small text that stored locally inside user's browser.

## Initialize and retrieve cookies

JavaScript can create, read, and delete cookies with the document.cookie property.

```js
//initialize cookies
document.cookie = "first_name=Haidar";
document.cookie = "last_name=Hanif";

//delete cookies
document.cookie = "first_name=";
document.cookie = "last_name=";

//update cookies
document.cookie = "first_name=Hanif";
document.cookie = "last_name=Haidar";

//retreive all cookie
var result = document.cookie;
```

## Read specific cookies

There are many methods to retrieve a specific cookie. We will see an example of how we retrieve specific cookie using regex.

```js
document.cookie = "first_name=Haidar";
var cookieValue = document.cookie.replace(
  /(?:(?:^|.*;\s*)first_name\s*\=\s*([^;]*).*$)|^.*$/,
  "$1"
); //cookieValue: Haidar
```

## Set cookie expiration date

You can specify cookies expiration date in `expires=` with date in GMTString format.

```js
var d = new Date();
var exdays = 8;
d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);

document.cookie = "expires=" + d.toGMTString();
//"expires=Tue, 10 Apr 2018 16:58:30 GMT"
```

You can delete a cookie by simply updating its expiration time to zero.

## IndexedDB

IndexedDB is a transactional database system, like an SQL-based RDBMS. However, unlike SQL-based RDBMSes, which use fixed-column tables, IndexedDB is a JavaScript-based object-oriented database. 

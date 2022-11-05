The code in this repository has add/remove/view operations implemented for the browser HIstory
I am using a doubly linked list which maintains the order of the urls that are added so far and a hashmap which looks for duplicate urls in O(1) time
If the newly added url matches the url that has already been added to the linked list, then it removes the previous occurrence of it in the linked list and it as the most recent url visited
View operation displays the urls in the order of most recently visited to least recently visited

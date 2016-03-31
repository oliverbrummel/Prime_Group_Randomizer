# Prime Week 2 - Group jQuery Challenge

In this challenge you will be creating a team randomizer. This challenge has two major goals:

*  Using JavaScript and jQuery to process a group of individuals and randomly place them onto teams.
*  Animate their appearance when adding them to your page.

####MVP####

The Minimum Viable Product of this challenge should meet the following criteria:

*  Include all 19 members of the class
*  Create a basic interface that includes;
  *  A way for users to select the number of groups they would like to create.
  *  A way to randomize the members of each group.
  *  An alert that will notify the user if they have failed to set the number of groups they'd like.
*  The name of each group should be displayed on-screen.

####Stretch####

The stretch goals for this challenge could include the following:

*  Each group name and their members should animate onto the screen
*  Allow the user to select the number of team members and the number of groups they would like to use.

####Hints####

You may need to do a little research on how to shuffle the information.
Additionally, you may need to play with the `.delay()` jQuery method to time out the animations.

__This particular shuffle function was sourced from [Frank Mitchell](https://www.frankmitchell.org/2015/01/fisher-yates/).  It's a JavaScript implementation of the [Fischer-Yates Shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).__

```javascript
function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}
```

Here are two additional links that discuss the same algorithm in more detail.

*  The first from [Mike Bostock](https://bost.ocks.org/mike/shuffle/).
*  The second from [Jeff Atwood](http://blog.codinghorror.com/the-danger-of-naivete/).
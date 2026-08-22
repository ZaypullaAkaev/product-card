import {commentsLatinChat} from './comments.js';

// №2 created an array of numbers and filtered it
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const halfNumbers = numbers.filter((number) => number >= 5);

console.log(halfNumbers);

// №3 created an array of strings and checked for the presence/absence of something
const mostPopularLanguages = ['English', 'Chinese', 'Hindi', 'Spanish', 'Arabic'];
const findLanguage = mostPopularLanguages.includes('Hindi');
const findMyLanguage = mostPopularLanguages.includes('Russian');

console.log(findLanguage);
console.log(findMyLanguage);

// №4 wrote a function using the "reverse" method
function reverseArray(array) {
  return array.reverse();
}

numbers.reverse();
mostPopularLanguages.reverse();

console.log(numbers);
console.log(mostPopularLanguages);

// №6 imported constant
commentsLatinChat;

// №7 display user emails from ".com"
const checkMail = commentsLatinChat.filter((mail) => mail.email.includes('.com'));

console.log(checkMail);

// №8 reprocessed the array
const sortedByID = commentsLatinChat.map((showObject) => {
  return {
    ...showObject,
    postId: showObject.id <= 5 ? 2 : 1,
  };
});

console.log(sortedByID);

// №9 created an array where the objects consisted only of an ID and a name
const shortArray = commentsLatinChat.map((object) => ({name: object.name, id: object.id}));

console.log(shortArray);

// №10 add the isInvalid property to objects
const newProperty = commentsLatinChat.map(function isInvalid(commentsLatinChat) {
  return {
    ...commentsLatinChat,
    isInvalid: commentsLatinChat.body.length > 180 ? true : false,
  };
});

console.log(newProperty);

// №11 array method 'reduce'
const showEmailsUsingReduce = commentsLatinChat.reduce((acc, object) => {
  return acc.concat(object.email);
}, []);

const showEmailsUsingMap = commentsLatinChat.map((object) => object.email);

console.log(showEmailsUsingReduce);
console.log(showEmailsUsingMap);

// №12 array method toString and join
const methodToString = showEmailsUsingMap.toString();
const methodJoin = showEmailsUsingMap.join();

console.log(methodToString);
console.log(methodJoin);

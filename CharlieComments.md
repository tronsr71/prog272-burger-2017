## Runtime

This looks great.

Your CSS is very nice and your code is professional and of high quality.

Main Issues:

- Your work is in the **CongressAddress** folder.
- Your code runs without errors and with one warning about **addresses** in **AddressChanger** not being used.
- I can iterate through records, backward and forwards.
- You display lots of records generated from **GetAddress**.
- I can switch between components with the menu. It is properly styled.
- In **SmallNumbers**, you provide a view of 1 numbers. You might have added a few more, but I guess no one did.


You have properly refactored your code into the following files or something similar:

- Address.js
- AddressShow.js
- AddressChanger
- AddressEdit
- ElfHeader
- ElfMenu
- SmallNumbers

As suggested, your React components are in files that begin with a capital letter and use Pascal casing.

The following directories exist:

- \_\_tests\_\_
- components
- css
- images

Smaller Issues

- **address-list.js** exists. You call it AddressList, it should be camel cased: **addressList.js** or **address-list.js** since it does not contain an object that needs to have **new** called on it.
- **index.js** is properly implemented
- You do a good job of formatting your code.

## Testing

You have 60 working tests and they are refactored into 5 **modules**, at least approximately one per component. This is great. Good work.



You are using Enzyme debug statements. Not the one's in **ElfDebugEnzyme.js**, but nevertheless you show that you understand what the enzyme **debug** statement can do for you and how to use it. Good work.

## Get Address

Get Address produces good code but I think you manually converted it into **AddressList.js**. If I'm missing something let me know. It would have been nice if you could have automated the entire process, but what you did was good.

## Commit Graded

Here is what I was looking at:


```
commit bb7bac7d180ab3503378f5f6ae8eb9e926c73067
Author: jeff at school <tronsr71@yahoo.com>
Date:   Sat May 13 23:28:50 2017 -0700

    Tag: v6.0.3 MidTerm Complete. Finished creating tests. Tweaked some css.
```

If you feel this was the wrong commit, let me know.

## Scoring

My scoring is very subjective, but here are approximate criteria for some issues:

- No GetAddress -3
- Not enough tests -3
- Broken tests -3
- Errors or warnings at runtime -3

Extra Credit

- GetAddress works at RunTime +2
- Button goes first and last + 2

## Create Charlie Branch for Comments

Here is how I created the branch where I place your comments. First I find the commit you want me to grade. Then I:


```bash
git branch charlie-midterm
git checkout charlie-midterm
touch CharlieComments.md
```

## Push Comments

Here is how I push that branch.


```bash
git add CharlieComments.md
git commit -m "CharlieComments"
git push --set-upstream origin charlie-midterm
```

I provide a link to the comments, but if you can't find them, just go to your online repository, select the charlie-comment branch, and look for the file called **CharlieComments.md**.

============

My comments are here:

https://github.com/Ray-Jay/prog272-jones-2017/blob/charlie-midterm/CharlieComments.md

And also attached, but easier to read through the above link to your repository.

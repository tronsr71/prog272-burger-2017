# Final

Review of the Final Projects.

## General Comments

You have had a great quarter. You managed to assimilate all the core subjects covered in this course including:

- Linux basics
- Git and branches
- Parsing and working with JSON data stored in arrays and objects.
- React
- React Native
- Test Driven Development
- Rest calls to a server (**CongressAddress** and/or **CongressNative** talks to **CongressServer**)
- Database connectivity with Mongo DB

The highlight here is your Native app, which talks to your server and deletes, populates, fetches and iterates over our data from my phone. It is great!

You should have had a single variable for the IP address in the server so we don't have to make the same change in three or four places. A DRY violation.

## Testing

There were 22 unit tests passing and 10 failed with 30 skipped.

## Core Programs

- CongressAddress runs
- CongressServer runs
- CongressNative runs
  - And actually works! I get Lamar back from the database and much more
- Heroku runs and looks good with exceptions of the items you mentioned, notably the exception after updating from database. But the data is updated from the database, it is just that we see the exception.
  - And it looks good in mobile, though you did lose the hamburger menu.

## Data

- CongressAddress talks to CongressServer
- CongressServer talks to MongoDb
- LocalStorage works
- Edit Data
  - Works beautifully

I can clear localStorage, reload from the database, and update the database from file, but there is an exception. Overall, this was excellent.

## Other

My **OnNameChange**, for handling edits, ended up looking like this:

```javascript
onNameChange(event) {
    logger.log('on name change');
    const address = getByIndex(this.state.addressIndex);
    switch (event.target.id) {
        case 'elfFN':
            address.firstName = event.target.value;
            break;
        case 'elfLN':
            address.lastName = event.target.value;
            break;
        default:
            address.zip = 'OH NO BAD CASE';
    }
    saveByIndex(address, this.state.addressIndex);
    this.setState({
        address: address
    });
};
```

The code shown above is incomplete in that it only handles first and last names, but it does handle the first and last names correctly.

This code from **DataMaven** is the client side code that allowed me to save the changes to the server:

```javascript
dbAddressSave() {
    const address = getByIndex(this.state.addressIndex);
    const url = '/update' +
        '?id=' + address._id +
        '&address=' + JSON.stringify(address);
    fetch(url)
        .then((data) => data.json())
        .then(function(data) {
            logger.log(JSON.stringify(data, null, 4));
        }).catch(function(err) {
            const message = 'Either could not insert ' +
                'data or could not display ' +
                'results after inserting data\n';
            alert(message + err);
            logger.log(err);
        });
}
```

## Summary

Great job this quarter. You have earned an A. I enjoyed having you in class.

Assignments	98.88%
Midterm	98%
Final 96%
97.63%

// import core tools
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

// declare MongoDB collection here
//
// Read more: http://guide.meteor.com/collections.html
const Todo = new Meteor.Collection('todo');

// We can publish some data (here all)
// we will be able to subscribe to the data later in the client app
// remember that this is not secured, all can subscribe to all data from the client side, just demo purposes
//
// Read more: http://guide.meteor.com/data-loading.html
Meteor.publish('todo', function () {
    return Todo.find();
});

Meteor.publish('user', function () {
    return Meteor.users.find({_id: this.userId});
});

// We can also use server side methods and call them from our client app
// here we just fetch all documents from the collection
// again, remember that this is not secured, all can call it from the client side, just demo purposes
//
// Read more: http://guide.meteor.com/methods.html
Meteor.methods({
    getTodo(id) {
        return Todo.findOne(id);
    },
    getTodos() {
        return Todo.find().fetch();
    },
    addTodo(message) {
        return Todo.insert({message: message});
    },
    removeTodo(id) {
        return Todo.remove({_id: id});
    },
    editTodo(id, finished) {
        return Todo.update({_id: id}, {$set: {finished: finished}});
    }
});


// Deny all client-side updates on the Lists collection
// Read more about security stuff: http://guide.meteor.com/security.html
Todo.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});

// Example user - just a simple example without validation etc.
// Read more at: https://guide.meteor.com/accounts.html
Meteor.startup(() => {
    const theOnlyUser = Meteor.users.find().fetch();
    if (!theOnlyUser.length) {
        Accounts.createUser({
            username: 'admin',
            password: 'pass'
        });
    }
});

import { createClass } from 'asteroid';
import { addTodo, removeTodo, editTodo } from '../redux/actions';
import store from '../redux/store';

const Asteroid = createClass();
// Connect to a Meteor backend
export const asteroid = new Asteroid({
  endpoint: 'ws://localhost:9000/websocket',
});

// if you want realitme updates in all connected clients
// subscribe to the publication
asteroid.subscribe('todo');

asteroid.ddp.on('added', (doc) => {
  // we need proper document object format here
  const docObj = Object.assign({}, doc.fields, { _id: doc.id });
  store.dispatch(addTodo(docObj));
});

asteroid.ddp.on('removed', (removedDoc) => {
  store.dispatch(removeTodo(removedDoc.id));
});

asteroid.ddp.on('changed', (updatedDoc) => {
  store.dispatch(editTodo(updatedDoc.id, updatedDoc.fields.finished));
});

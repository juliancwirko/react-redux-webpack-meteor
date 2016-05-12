import {createClass} from 'asteroid';
import {callGetAllTodo} from '../redux/actions';
import store from '../redux/store';

const Asteroid = createClass();
// Connect to a Meteor backend
export const asteroid = new Asteroid({
    endpoint: 'ws://localhost:9000/websocket'
});

// if you want realitme updates in all connected clients
// subscribe to the publication
asteroid.subscribe('todo');

asteroid.ddp.on('added', () => {
    store.dispatch(callGetAllTodo());
});

asteroid.ddp.on('removed', () => {
    store.dispatch(callGetAllTodo());
});

asteroid.ddp.on('changed', () => {
    store.dispatch(callGetAllTodo());
});